// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

// cc.Class({
//     extends: cc.Component,

//     properties: {
//         // 这个属性引用了障碍物预制资源
//         starPrefab: {
//             default: null,
//             type: cc.Prefab
//         },
//         // 障碍物产生后消失时间的随机范围
//         maxStarDuration: 3,
//         minStarDuration: 5,
//         // 地面节点，用于确定障碍物生成的高度
//         ground: {
//             default: null,
//             type: cc.Node
//         },
//         // player 节点，用于获取玩家的高度，和控制主角行动开关
//         player: {
//             default: null,
//             type: cc.Node
//         },
//     },

//     onLoad: function () {
//         // 获取地平面的 y 轴坐标
//         this.groundY = 0;
//         // 生成一个新的障碍物
//         this.spawnNewStar();
//     },

//     spawnNewStar: function() {
//         // 使用给定的模板在场景中生成一个新节点
//         var newStar = cc.instantiate(this.starPrefab);
//         // 将新增的节点添加到 Canvas 节点下面
//         this.node.addChild(newStar);
//         // 为障碍物设置一个随机位置
//         newStar.setPosition(this.getNewStarPosition());
//     },

//     getNewStarPosition: function () {
//         var randX = 0;
//         // 根据地平面位置和主角跳跃高度，随机得到一个星星的 y 坐标
//         var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50;
//         // 根据屏幕宽度，随机得到一个障碍物 x 坐标
//         var maxX = this.node.width/2;
//         randX = (Math.random() - 0.5) * 2 * maxX;
//         // 返回障碍物坐标
//         return cc.v2(randX, randY);
//     }
// });

cc.Class({
  extends: cc.Component,

  properties: {
    // 这个属性引用了星星预制资源
    starPrefab: {
      default: null,
      type: cc.Prefab
    },
    // 星星产生后消失时间的随机范围
    maxStarDuration: 3,
    minStarDuration: 5,
    // 地面节点，用于确定星星生成的高度
    ground: {
      default: null,
      type: cc.Node
    },
    // player 节点，用于获取主角弹跳的高度，和控制主角行动开关
    player: {
      default: null,
      type: cc.Node
    }
  },

  onLoad: function() {
    // 获取地平面的 y 轴坐标
    this.groundY = 0;
    // 生成一个新的星星
    this.spawnNewStar();
  },

  spawnNewStar: function() {
    // 使用给定的模板在场景中生成一个新节点
    var newStar = cc.instantiate(this.starPrefab);

    // 将新增的节点添加到 Canvas 节点下面
    this.node.addChild(newStar);
    newStar.getComponent("barrier").setGameInst(this);
    // 为星星设置一个随机位置
    newStar.setPosition(this.getNewStarPosition());
  },

  getNewStarPosition: function() {
    var randX = 0;
    // 根据地平面位置和主角跳跃高度，随机得到一个星星的 y 坐标
    // var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50;
    var randY = this.groundY + Math.random() * 200 + 50;
    // 根据屏幕宽度，随机得到一个星星 x 坐标
    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX;
    // 返回星星坐标
    return cc.v2(randX, randY);
  }
});
