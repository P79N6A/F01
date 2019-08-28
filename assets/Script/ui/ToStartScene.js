const gameManager = require('gameManager');

cc.Class({
  extends: cc.Component,

  properties: {
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    console.log(123);
    this.node.on("click", () => {
      console.log("clicked");
      cc.director.loadScene("startScene");
    });
  },


  start() {}

  // update (dt) {},
});
