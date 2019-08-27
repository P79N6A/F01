cc.Class({
  extends: cc.Component,

  properties: {
    // 障碍物和玩家之间的距离小于这个数值时，就会完成收集
    pickRadius: 60
  },
  // this.node.y = this.node.y

  start: function() {},

  setGameInst: function(game) {
    this.game = game;
  },

  getPlayerDistance: function() {
    // 根据 player 节点位置判断距离
    var playerPos = this.game.player.getPosition();
    // 根据两点位置计算两点之间距离
    var dist = this.node.position.sub(playerPos).mag();
    return dist;
  },

  onPicked: function() {
    // 当障碍物被收集时，调用 Game 脚本中的接口，生成一个新的障碍物
    this.game.spawnNewStar();
    // 调用 Game 脚本的得分方法
    this.game.gainScore();
    // 然后销毁当前障碍物
    this.node.destroy();
  },

  update: function(dt) {
    if (!this.game) {
      console.log(this.game);
      return;
    }
    this.node.x -= 2;
    if (this.node.x < -400) {
      this.node.x = 400;
    }
    // 每帧判断和主角之间的距离是否小于收集距离
    if (this.getPlayerDistance() < this.pickRadius) {
      // 调用收集行为
      this.onPicked();
      return;
    }

    // 根据 Game 脚本中的计时器更新星星的透明度
    var opacityRatio = 1 - this.game.timer / this.game.starDuration;
    var minOpacity = 50;
    this.node.opacity =
      minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
  }
});
