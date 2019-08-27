// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    // properties: {
    //     // foo: {
    //     //     // ATTRIBUTES:
    //     //     default: null,        // The default value will be used only when the component attaching
    //     //                           // to a node for the first time
    //     //     type: cc.SpriteFrame, // optional, default is typeof default
    //     //     serializable: true,   // optional, default is true
    //     // },
    //     // bar: {
    //     //     get () {
    //     //         return this._bar;
    //     //     },
    //     //     set (value) {
    //     //         this._bar = value;
    //     //     }
    //     // },
    // },

    properties: {
        // 主角跳跃高度
        jumpHeight: 200,
        // 主角跳跃持续时间
        jumpDuration: 0.3,
        // 最大移动速度
        maxMoveSpeed: 400,
        // 加速度
        accel: 350,
    },

    setJumpAction: function () {
        // 跳跃上升
        var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        // 下落
        var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
        // 不断重复
        return cc.repeatForever(cc.sequence(jumpUp, jumpDown));
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        // 初始化跳跃动作
        this.jumpAction = this.setJumpAction();
        this.node.runAction(this.jumpAction);
    },

    start () {

    },

    // update (dt) {},
});
