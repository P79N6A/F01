cc.Class({
  extends: cc.Component,

  properties: {
    // 障碍物和玩家之间的距离小于这个数值时，就会完成收集
    pickRadius: 60,
    keyWordLabel: cc.Label,
  },
  // this.node.y = this.node.y

  start: function() {},

  // getPlayerDistance: function () {
  //   console.log(this.player);
  //   // 根据 player 节点位置判断距离
  //   var playerPos = this.player.getPosition();
  //   // 根据两点位置计算两点之间距离
  //   var dist = this.node.position.sub(playerPos).mag();
  //   return dist;
  // },

  setKeyWord: function(keyword) {
    this.keyWordLabel.string = keyword;
  },

  onPicked: function() {
    // 然后销毁当前障碍物
    this.node.destroy();

    var manager = cc.director.getCollisionManager();
    manager.enabled = true;

    cc.director.emit("StarPick");
  },

  onCollisionEnter: function() {
    this.onPicked();
  },

  update: function(dt) {
    this.node.x -= 5;
    if (this.node.x < -400) {
      this.node.x = 400;
    }
    // 每帧判断和主角之间的距离是否小于收集距离
    // if (this.getPlayerDistance() < this.pickRadius) {
    //   // 调用收集行为
    //   this.onPicked();
    //   return;
    // }

    // 根据 Game 脚本中的计时器更新星星的透明度
    // var opacityRatio = 1 - this.game.timer / this.game.starDuration;
    // var minOpacity = 50;
    // this.node.opacity =
    //   minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
  },
});
