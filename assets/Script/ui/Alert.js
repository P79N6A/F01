cc.Class({
    extends: cc.Component,

    properties: {
        window:cc.Node,
        
    
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {
    //     this.node.on('click',()=>{
    //         this.window.active = true;
    //     })
    // },
    onClick(){
        this.window.active = true;
    },

    start () {

    },

    // update (dt) {},
});
