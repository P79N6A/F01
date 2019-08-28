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

  // onLoad () {},

  start() {
    let systemInfo = tt.getSystemInfoSync(); // 获取设备的相关信息
    let face;
    var lastdoty;
    var flag = 1;

    const action_names = {
      blink: "眨眼",
      mouth_ah: "嘴巴大张",
      head_yaw: "摇头",
      head_pitch: "点头",
      brow_jump: "眉毛挑动",
      mouth_pout: "嘴巴嘟嘟"
    };

    tt.requestCamera("front", 0)
      .then(media => {
        const video = tt.createOffscreenVideo();
        const detector = tt.createFaceDetector();
        video.srcObject = media;
        let scalar = systemInfo.screenWidth / media.width; // 计算放大倍数

        tt.setKeepScreenOn(); // 设置屏幕常亮，防止熄屏
        video.play();
        drawVideo(video);

        //绘制video到canvas上面
        function drawVideo() {
          requestAnimationFrame(drawVideo);
          // ctx.drawImage(video, 0, 0, systemInfo.screenWidth, systemInfo.screenHeight);
          getDetectResult(); // 每次进行检测都是一次性能上的开销  开发者可以选择隔一段时间再去检测
          drawFace(face);
        }
        function drawFace(faces) {
          for (let { boundingBox, landmarks, id, actions } of faces) {
            if (actions) {
              const names = [];
              for (let key in actions) {
                if (actions[key]) {
                  names.push(action_names[key]);
                }
              }
            }

            var eye1_x = landmarks[3].locations[8].x * scalar;
            var eye1_y = landmarks[3].locations[8].y * scalar;
            var eye2_x = landmarks[4].locations[8].x * scalar;
            var eye2_y = landmarks[4].locations[8].y * scalar;
            
            var curdoty = (eye1_y + eye2_y) / 2;

            //var eye1_index = landmarks[3].locations.length - 1;
            //var eye2_index = landmarks[4].locations.length - 1;


            
            // var curdoty =
            //   (landmarks[3].locations[8].y * scalar +
            //     landmarks[4].locations[8].y * scalar) /
            //   2;

            //鼻子备用
            //var curdoty = landmarks[5].locations[3].y * scalar;

            if (flag === 0) {
              var dis = curdoty - lastdoty;
              cc.director.emit("FaceMove", dis);
            }

            cc.director.emit("EYE1_x",eye1_x);
            cc.director.emit("EYE1_y",eye1_y);
            cc.director.emit("EYE2_x",eye2_x);
            cc.director.emit("EYE2_y",eye2_y);
            

            lastdoty = curdoty;
            flag = 0;
          }
        }
        // 人脸检测结果
        function getDetectResult() {
          detector.detect(video).then(faces => {
            face = faces;
          });
        }
      })
      .catch(err => console.log(err));
  }

  // update (dt) {},
});
