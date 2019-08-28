import { localData } from "../localData";

cc.Class({
  extends: cc.Component,

  properties: {

    btn1: cc.Label,
    btn2: cc.Label,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
     this.btn1.string = localData[0].title;
    console.log(localData);
     this.btn2.string = localData[1].title;
  },

  start() {},

  onMenuTap(a, customdata) {}
  // update (dt) {},
});
