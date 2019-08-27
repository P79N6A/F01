cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    properties: {
        // 移动宽度
        jumpWidth: 200,
        // 移动持续时间
        jumpDuration: 0.3,
        // 最大移动速度
        maxMoveSpeed: 400,
        // 加速度
        accel: 350,
    },

    setJumpAction: function () {
        // 右移
        var moveRight = cc.moveBy(this.jumpDuration, cc.v2(this.jumpWidth,0)).easing(cc.easeCubicActionOut());
        
        // 不断重复
        return cc.repeatForever(moveRight);
    },

    setJumpAct1:function(){
        // 左移 
        //var moveLeft = cc.moveBy(this.jumpDuration, cc.v2(-this.jumpWidth,0)).easing(cc.easeCubicActionIn());
        var rotate = cc.rotateBy(2, 360);

        // 不断重复
        return cc.repeatForever(rotate);
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        // 初始化状态
        // this.jumpAction = this.setJumpAction();
        // this.node.runAction(this.jumpAction);
        this.moveAction = this.setJumpAct1();
        this.node.runAction(this.moveAction)
    },

    start () {

    },

    // update (dt) {},
});