cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         this.node.on('click',()=>{
             cc.director.loadScene("endScene");

         });
         
     },
    

    start () {

    },

    // update (dt) {},
});
