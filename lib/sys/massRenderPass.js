import * as Pass from "../../packages/three/shaders/CopyShader"
export default class MSAARenderPass {
	 constructor(THREE) {
	 	
	 	this.samplingLevel = 1;
        this.m_renderTarget = null;
        this.m_localCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        this.m_quadScene = new THREE.Scene();
        this.m_quadUniforms = Pass.CopyShader.uniforms;
        this.m_quadMaterial = new	THREE.ShaderMaterial({vertexShader:Pass.CopyShader.vertexShader,fragmentShader:Pass.CopyShader.fragmentShader,uniforms:this.m_quadUniforms,isMrt:true});
        this.m_quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), this.m_quadMaterial);
        this.m_quad.frustumCulled = false;
        this.m_quadScene.add(this.m_quad);
	 }
	 
	  render(renderer, scene, camera, writeBuffer, readBuffer) {
     	//camera.enable = true;
        //this.m_quadUniforms.tDiffuse.value = this.m_renderTarget.texture;
        // console.log(readBuffer.texture);
        this.m_quadUniforms.tDiffuse.value = readBuffer.texture;
       
        renderer.render(this.m_quadScene, this.m_localCamera);
      
    }
	
}
 