cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
  
        window:{
            default: null,
            type: cc.Node,
        },
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = "xx游戏";
        //console.log(this.window);
        this.window.active = false;
    },

    // called every frame
    update: function (dt) {

    },
});
