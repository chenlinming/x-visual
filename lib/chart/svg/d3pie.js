/** @module xv.chart.xpie */

import * as ECS from '../../../packages/ecs-js/index'
import XSys from '../../sys/xsys'
import {Obj3Type} from '../../component/obj3';
import {Pie} from '../../component/ext/chart'

// https://www.npmjs.com/package/d3
import * as d3 from "d3";

/**
 * Subsystem rendering 2d pie chart in an svg div.
 *
 * reference:
 * https://observablehq.com/@d3/pie-chart
 * @class XPie
 */
export default class D3Pie extends XSys {
    constructor(ecs, options, json) {
        super(ecs);
        this.logged = false;
        this.ecs = ecs;
        this.cmd = [];

        ecs.registerComponent('Pie', Pie);

        if (!json)
            throw new XError('XPie can only been created synchronously with json data for initializing');

        if (ecs) {
            debug1(ecs, json, options);
        }
    }

    update(tick, entities) {
        for (const e of entities) {
            if (e.CmdFlag) {
                 if (e.CmdFlag.flag > 0) {
                    this.cmd.push(...e.UserCmd.cmds);
                }
                continue;
            }

            for (var cmd of this.cmd) {
                if (cmd.code === 'mouse' && e.GpuPickable && e.GpuPickable.picked
                    && this.onMouse(cmd.cmd, e))
                    break;
            }
        }
        this.cmd.splice(0);
    }

    onMouse(cmd, e) {
        if (e.CmpTweens) {
            var twCmd;
            switch (cmd) {
                case 'mousemove':
                    twCmd = e.Pie.onOver;
                    return true;
                case 'click':
                case 'mouseup':
                    twCmd = e.Pie.onClick;
                    if (twCmd !== undefined)
                        pieClick(e, twCmd);
                    return true;
                default:
            }
        }
        else {
            if (!this.logged) {
                console.error('XPie.onMouse(): No such tween. eid: ', e.id);
                this.logged = true;
            }
        }
        return false;
    }
}

XPie.query = {
    any: ['CmdFlag', 'Pie']
};

function pieClick(e, twCmd) {
    if (e.CmpTweens !== undefined) {
        e.CmpTweens.startCmds.push(e.Pie.cmd.click);
    }
}

function debug1(ecs, json, options) {
    var scl = options.xscale || 20;
    var ixVal = json.coordinates.length;

    var p11 = ecs.createEntity({
        id: 'p11',
        Obj3: { geom: Obj3Type.Cylinder,
                box: [10, 10, 10] },
        Visual:{vtype: AssetType.Point,
               },
        Pie:{
            onOver: 0,    // tweens[0], blinking
            onClick:2   // uniform
        },
        GpuPickable: {pickid: 1},
        ModelSeqs: {script: [
             [{ mtype: xv.XComponent.AnimType.ALPHA,
                paras: {
                    start: Infinity,
                    duration: 0.3,
                    alpha: [0.3, 0.9]
             } }],
             [{ mtype: xv.XComponent.AnimType.UNIFORM,
                paras: {
                    start: Infinity,
                    duration: 1.1,
                    u_arg1: 0]
             } }],
          ]},
        CmpTweens: {}
    });

}