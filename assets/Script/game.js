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
import { Segment, useDefault } from 'segmentit';
const gameManager = require("gameManager");
const local_data = require("dataLoader");

cc.Class({
  extends: cc.Component,

  properties: {
    // 这个属性引用了星星预制资源
    starPrefab: {
      default: null,
      type: cc.Prefab,
    },
    // 星星产生后消失时间的随机范围
    maxStarDuration: 3,
    minStarDuration: 5,
    // 地面节点，用于确定星星生成的高度
    ground: {
      default: null,
      type: cc.Node,
    },
    // player 节点，用于获取主角弹跳的高度，和控制主角行动开关
    player: {
      default: null,
      type: cc.Node,
    },
    key_words_cnt: 100,
  },

  onLoad: function () {
    // 获取地平面的 y 轴坐标
    this.groundY = 0;

    cc.director.on("StarPick", (keyWord) => {
      if (typeof this.keyWords === "undefined") {
        this.keyWords = [];
      }
      this.keyWords.push(keyWord);
      // 当障碍物被收集时，调用 Game 脚本中的接口，生成一个新的障碍物
      // console.log(123);
      this.spawnNewStar();
      // // 调用 Game 脚本的得分方法
      // this.gainScore();
    });
  },

  start: function () {
    const segmentit = useDefault(new Segment());
    const result = segmentit.doSegment('工信处女干事每月经过下属科室都要亲口交代24口交换机等技术性器件的安装工作。');
    console.log(result);
    // 生成一个新的星星
    this.spawnNewStar();
    var manager = cc.director.getCollisionManager();
    manager.enabled = true;
    manager.enabledDebugDraw = true;
  },

  spawnNewStar: function () {
    // 使用给定的模板在场景中生成一个新节点
    var newStar = cc.instantiate(this.starPrefab);
    newStar
      .getComponent("barrier")
      .setKeyWord(this.getLocalData(gameManager.getCurrentTopic()));
    // 将新增的节点添加到 Canvas 节点下面
    this.node.addChild(newStar);
    // 为星星设置一个随机位置
    newStar.setPosition(this.getNewStarPosition());
  },

  getNewStarPosition: function () {
    // 根据地平面位置和主角跳跃高度，随机得到一个星星的 y 坐标
    // var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50;
    var randY = this.groundY + Math.random() * 200 + 50;
    // 根据屏幕宽度，随机得到一个星星 x 坐标
    var maxX = this.node.width / 2;
    var randX = 400;
    // 返回星星坐标
    return cc.v2(randX, randY);
  },

  getLocalData: function (index) {
    var key_words = local_data.getKeywords(index);
    var key_words_idx = Math.floor(Math.random() * key_words.length);
    // key_words_len = Math.min(this.key_words_cnt, key_words.length);
    return key_words[key_words_idx];
  },
});
