/**Test ECS extension.
 *
 * @namespace xv.test.ecs */

import chai from 'chai'
import { expect, assert } from 'chai'
import chaiStats from 'chai-stats'

const {performance} = require('perf_hooks');

import * as ECS from '../packages/ecs-js/index';

var auid = 1;

class Armor {
    constructor() {
        this.id = ++ auid;
    }
}

describe('case: [ecs ext] component instance reference', () => {

  const ecs = new ECS.ECS();
  ecs.registerComponent('Share', {
    properties: {
      max: 25,
      hp: 25,
      armor: new Armor(),
    }
  });

  ecs.registerComponent('Exclusive', {
    properties: {
      max: 15,
      hp: 15,
      armor: undefined
    }
  });

  it('component property instance', () => {
    ecs.createEntity({
      Share: [ { hp: 1 } ]
    });

    ecs.createEntity({
      Share: [ { hp: 2 } ]
    });

    ecs.createEntity({
      Exclusive: [ { hp: 3 } ]
    });

    ecs.createEntity({
      Exclusive: [ { hp: 4, armor: new Armor() } ]
    });

    var results = ecs.queryEntities({ has: ['Share'] });
    expect(results.size).to.equal(2);
    var itor = results.values();
    var s1 = itor.next().value;
    var s2 = itor.next().value;
    assert.equal(s1.Share.hp, 1, 'A ---');
    assert.equal(s2.Share.hp, 2, 'B ---');
    assert.equal(s1.Share.armor.id, s2.Share.armor.id, 'C ---');

    results = ecs.queryEntities({ has: ['Exclusive'] });
    expect(results.size).to.equal(2);
    itor = results.values();
    var e1 = itor.next().value;
    var e2 = itor.next().value;
    assert.equal(e1.Exclusive.armor, undefined, 'D ---');
    assert.equal(e1.Exclusive.hp, 3, 'E ---');
    assert.equal(e2.Exclusive.armor.id, 3, 'F ---');
    assert.equal(e2.Exclusive.hp, 4, 'G ---');
  });

});


describe('case: [ecs ext] any v.s iffall', () => {

  const ecs = new ECS.ECS();

  ecs.registerComponent('xview', {
    properties: {
      cmd: 1,
      flag: 0,
    }
  });

  ecs.registerComponent('Pie', {
    properties: {
      w: 25,
      h: 25,
    }
  });

  ecs.registerComponent('Sankey', {
    properties: {
      max: 25,
      min: 5,
    }
  });

  it('component property instance', () => {
    ecs.createEntity({
      id: 'pie1'
      xview: {cmd: -1, flag: -1}
      Pie: {w: 1, h: 1}
    });

    ecs.createEntity({
      id: 'sk1'
      xview: {cmd: -1, flag: -1}
      Sankey: {max: 26, min: 6}
    });


    ecs.createEntity({
      xview: {cmd: 1, flag: 1}
    });

    var results = ecs.queryEntities({ any: ['Pie', 'Sankey'] });
    expect(results.size).to.equal(2);
    var itor = results.values();
    var s1 = itor.next().value;
    var s2 = itor.next().value;
    assert.equal(s1.id, 'pie1', 'pie1 ---');
    assert.equal(s2.id, 'sk1', 'sk1 ---');

  });

});
