const gameManager = require('gameManager');

cc.Class({
  extends: cc.Component,

  properties: {

  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    //console.log(123);
    // this.node.on("click", () => {
    //   console.log("clicked");

    //   gameManager.setCurrentTopic(1);
    //   console.log(gameManager.topicIndex);
    //});

    // update (dt) {},
  },
  onMenuTap(a, customdata) {
    //console.log('click1');
    //console.log(customdata);
    cc.director.loadScene("gameScene");
    gameManager.setCurrentTopic(customdata);
  }
})
