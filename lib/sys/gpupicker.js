/** @module xv.ecs.sys */

import * as THREE from 'three';
import * as ECS from '../../packages/ecs-js/index';
import {x} from '../xapp/xworld';
import {ramTexture} from '../xutils/xcommon';

const qCmd = ['CmdFlag', 'UserCmd'];

const pickuuid = {
	uuid: 1,
	get: function () {
		return pickuuid.uuid++;
	},
}

/**Helper for picking scene object.
 * For example, see <a href='https://threejsfundamentals.org/threejs/lessons/threejs-picking.html'>
 * Three.js Tutorial</a>
 * Can only work with Obj3.mesh.
 */
export default class GpuPicker extends ECS.System {
	/** If any entity has a GpuPickable component, add it to my picking scene.
	 */
	constructor(ecs, x) {
		super(ecs);
		this.ecs = ecs;
		// create a 1x1 pixel render target
		this.pickingTexture = new THREE.WebGLRenderTarget(1, 1);
		this.pixelBuffer = new Uint8Array(4);
		this.pickedObject = null;
		this.pickedObjectSavedColor = 0;

		this.scene = new THREE.Scene();
		// this.scene = x.scene;
		this.scene.background = new THREE.Color(0);

		this.camera = x.xcam.XCamera.cam;
		this.renderer = x.renderer;
		if (this.renderer === undefined) {
			if (x.log >= 5)
				console.warn("[log 5] GpuPicker: Can't find a THREE.renderer. Testing?");
		}

		this.initMyPickings(x.ecs, this.scene);
	}

	initMyPickings(ecs, scene) {
		// var scn = scene; // picking scene
		this.idToObject = {0: undefined};

		// create meshes
		var pickables = ecs.queryEntities({iffall: ['Obj3', 'GpuPickable']});
		if (pickables) {
			var ids = this.idToObject;
			pickables.forEach( function(p, ix) {
				const pickable = p.GpuPickable;
				if (!pickable.pickid)
				 	pickable.pickid = pickuuid.get();

				var tex;
				if (p.Visual && p.Visual.asset || pickable.tex)
					tex = new THREE.TextureLoader().load(`assets/${p.Visual && p.Visual.asset ? p.Visual.asset : pickable.tex}`);
				else tex = new ramTexture(1, 1, 1);

				// TODO: simplify
				pickable.material = new THREE.MeshPhongMaterial({
					emissive: new THREE.Color(pickable.pickid),
					color: new THREE.Color(0, 0, 0),
					specular: new THREE.Color(0, 0, 0),
					// map: p.Obj3.mesh.map,
					// map: new THREE.TextureLoader().load('assets/tex/gpupick-debug.png'),
					// map: new THREE.TextureLoader().load('assets/tex/ruler256.png'),
					map: tex,
					transparent: true,
					side: THREE.DoubleSide,
					alphaTest: 0.5,
					// blending: THREE.NoBlending,
				});

				pickable.mesh = new THREE.Mesh(p.Obj3.mesh.geometry.clone(),
								pickable.material);
				scene.add(pickable.mesh);
				ids[pickable.pickid] = p;
			});
		}
	}

	update(tick, entities) {
		var flag = false;
		var clientxy;
		for (var e of entities) {
			if (e.CmdFlag.flag === 0)
				return;

			// find mouse position (in UserCmd)
			if (e.UserCmd && e.UserCmd.cmds) {
				for (var cx = e.UserCmd.cmds.length - 1; cx >= 0; cx--) {
					var c = e.UserCmd.cmds[cx];
					if (c && c.code === 'mouse' && c.e.type === 'mousemove') {
				// 		console.log(c.e.name, c.e);
						clientxy = c.client;
						break;
					}
				}
			}

			// move pickable modules
			if (e.GpuPickable) {
				var m3 = e.Obj3.mesh;
				var picking = e.GpuPickabl.mesh;
				// set tick = 0, this pickable won't been tested anymore
				// Note: this means there can has only 1 picking system
				picking.picktick = 0;
				picking.matrix.copy(m3.matrix);
				picking.matrixWorld.copy(m3.matrixWorld);
				picking.matrixAutoUpdate = false;
			}
		}

		if (clientxy) {
			var e = this.pickTest(clientxy, this.camera);
			if (e && e.GpuPickable)
				e.GpuPickable.picktick = tick;
		}
	}

	pickTest(canvPos, camera) {
		const {scene, pickingTexture, pixelBuffer} = this;

		// reset picked
		if (this.pickedObject) {
			this.pickedObject = undefined;
			this.pickedId = undefined;
		}

		// set the view offset to represent just a single pixel under the mouse
		var renderer = this.renderer;
        var ctx = renderer.getContext();
		const pixelRatio = renderer.getPixelRatio();
		const aspRatio = camera.aspect;
		camera.setViewOffset(
			ctx.drawingBufferWidth,         // full width
			ctx.drawingBufferHeight,        // full top
			canvPos[0] * pixelRatio | 0,    // rect x
			canvPos[1] * pixelRatio | 0,    // rect y
			1, 1                            // w, h
		);
		// render the scene
		renderer.setRenderTarget(pickingTexture);
		renderer.render(scene, camera);
		renderer.setRenderTarget(null);

		// clear the view offset so rendering returns to normal
		camera.clearViewOffset();
		camera.aspect = aspRatio;

		//read the pixel
		renderer.readRenderTargetPixels(
					pickingTexture,
					0, 0, 1, 1,   // x y width height
					pixelBuffer);
		const id =  (pixelBuffer[0] << 16) |
					(pixelBuffer[1] <<  8) |
					(pixelBuffer[2]      );

		if (x.log >= 6) console.log(`[6] pickid ${id}`);
		this.pickedId = id;

		const intersectedObject = this.idToObject[id];
		if (intersectedObject) {
			// pick the first object. It's the closest one
			this.pickedObject = this.intersectedObject;
		}

		return this.idToObject[id];
	}
}

GpuPicker.query = {iffall: qCmd};