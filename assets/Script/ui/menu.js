// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
const localDataLoader = require("dataLoader");

cc.Class({
  extends: cc.Component,

  properties: {

    btn1: cc.Label,
    btn2: cc.Label,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.btn1.string = localDataLoader.getTitle(0);
    this.btn2.string = localDataLoader.getTitle(1);
  },

  start() { },

  onMenuTap(a, customdata) { }
  // update (dt) {},
});
