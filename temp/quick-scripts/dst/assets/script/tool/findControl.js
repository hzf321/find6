
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/findControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7fe7eKmHWtOBpfO6ERHigxH', 'findControl');
// script/tool/findControl.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wicket = exports.spectacle = exports.findControl = void 0;
var findSoundTool_1 = require("./findSoundTool");
var findResUtil_1 = require("./findResUtil");
var findControlClass = /** @class */ (function () {
    function findControlClass() {
        this.sceneNode = null;
        this.imgId = 0;
        this.findSoundTool = new findSoundTool_1.findSoundTool();
        this.eventTarget = new cc.EventTarget();
        this.findResUtil = findResUtil_1.findResUtil;
        this.designWidth = 1280; //设计分辨率宽
        this.designHeight = 720; //设计分辨率高
        this.isIpadFix = false;
        this.isIphoneXSMaxFix = false;
        this.iphoneXSMaxY = 0;
        this.isLiuhaiFix = false; //是否有刘海
        this.liuhaiY = 0; //刘海高度
    }
    findControlClass.getInstance = function () {
        if (this._instance == null) {
            this._instance = new findControlClass();
        }
        return this._instance;
    };
    findControlClass.prototype.setsceneNode = function (node) {
        this.sceneNode = node;
    };
    findControlClass.prototype.getsceneNode = function () {
        return this.sceneNode;
    };
    /**
     * 时间转换，秒->分秒, mm:ss
    */
    findControlClass.prototype.timeChange = function (value) {
        value = +value;
        var minute = Math.floor(value / 60);
        var second = Math.floor(value % 60);
        var minStr = "";
        if (minute < 10) { //分钟
            minStr = "0" + minute;
        }
        else {
            minStr = minute.toString();
        }
        var secStr = "";
        if (second < 10) { //秒数
            secStr = "0" + second;
        }
        else {
            secStr = second.toString();
        }
        return minStr + ":" + secStr;
    };
    //返回范围的随机数
    findControlClass.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 0.999999999)) + min;
    };
    // 全屏窗口背景图适配
    findControlClass.prototype.adapterBg = function (bgNode) {
        //背景大图适配 等比缩放 不留黑边
        var _bgWidthScale = cc.winSize.width / bgNode.width;
        var _bgHeightScale = cc.winSize.height / bgNode.height;
        bgNode.scale = Math.max(_bgWidthScale, _bgHeightScale);
    };
    //转成节点坐标
    findControlClass.prototype.changePos = function (toNode, fromNode) {
        if (!cc.isValid(toNode) || !cc.isValid(fromNode))
            return cc.v3(0, 0);
        var _pos = toNode.parent.convertToWorldSpaceAR(toNode.position);
        var _npos = fromNode.parent.convertToNodeSpaceAR(_pos);
        return _npos;
    };
    //------------------------------------------anim---------------------------------------------------------------
    findControlClass.prototype.delayCallBack = function (time, _callback, nodeDelay) {
        var CanvasNode = cc.director.getScene().getChildByName('Canvas');
        if (cc.isValid(nodeDelay)) {
            CanvasNode = nodeDelay;
        }
        // cc.Tween.stopAllByTarget(CanvasNode);//这里不能停止CanvasNode的所有动作
        cc.tween(CanvasNode)
            .delay(time)
            .call(function () { if (_callback)
            _callback(); })
            .start();
    };
    findControlClass.prototype.playSp = function (spSkel, name, isLoop, endCallback) {
        var _this = this;
        if (isLoop === void 0) { isLoop = false; }
        if (endCallback === void 0) { endCallback = null; }
        spSkel.setCompleteListener(function () {
            if (endCallback) {
                _this.delayCallBack(0.02, function () {
                    endCallback();
                }, spSkel.node);
            }
            spSkel.setCompleteListener(null);
            // spSkel.setDisposeListener(endCallback);
        });
        spSkel.setAnimation(0, name, isLoop);
    };
    findControlClass.prototype.stopSp = function (spSkel) {
        spSkel.setCompleteListener(null);
        // spSkel.clearTracks();
    };
    // 序列动画(添加一个动画到尾巴 还可以延迟几秒)
    findControlClass.prototype.addSequenceSp = function (spSkel, name, isLoop, delayTime) {
        if (isLoop === void 0) { isLoop = false; }
        if (delayTime) {
            spSkel.addAnimation(0, name, isLoop, delayTime);
        }
        else {
            spSkel.addAnimation(0, name, isLoop);
        }
    };
    findControlClass._instance = null;
    return findControlClass;
}());
exports.findControl = findControlClass.getInstance();
exports.spectacle = {
    host: "host",
    parlour: "parlour",
    register: "register",
};
exports.wicket = {
    windPop: "windPop",
    MoonPop: "MoonPop",
    StarPop: "StarPop",
    TreePop: "TreePop",
    BookPop: "BookPop",
};

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9maW5kQ29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBZ0Q7QUFDaEQsNkNBQTRDO0FBWTVDO0lBQUE7UUFXVyxjQUFTLEdBQVksSUFBSSxDQUFBO1FBQ3pCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFHbEIsa0JBQWEsR0FBa0IsSUFBSSw2QkFBYSxFQUFFLENBQUM7UUFDbkQsZ0JBQVcsR0FBbUIsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkQsZ0JBQVcsR0FBRyx5QkFBVyxDQUFDO1FBR2pDLGdCQUFXLEdBQVcsSUFBSSxDQUFDLENBQUEsUUFBUTtRQUNuQyxpQkFBWSxHQUFXLEdBQUcsQ0FBQyxDQUFBLFFBQVE7UUFFbkMsY0FBUyxHQUFXLEtBQUssQ0FBQztRQUMxQixxQkFBZ0IsR0FBVyxLQUFLLENBQUM7UUFDakMsaUJBQVksR0FBVSxDQUFDLENBQUM7UUFFeEIsZ0JBQVcsR0FBVyxLQUFLLENBQUMsQ0FBQSxPQUFPO1FBQ25DLFlBQU8sR0FBVSxDQUFDLENBQUMsQ0FBQSxNQUFNO0lBOEY3QixDQUFDO0lBdEhpQiw0QkFBVyxHQUF6QjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7U0FDM0M7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQXFCRCx1Q0FBWSxHQUFaLFVBQWEsSUFBYTtRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsdUNBQVksR0FBWjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBR0Q7O01BRUU7SUFDRixxQ0FBVSxHQUFWLFVBQVcsS0FBSztRQUNaLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNm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Q2xCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLE9BQU8sRUFBRSxTQUFTO0NBRXJCLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaW5kU291bmRUb29sIH0gZnJvbSBcIi4vZmluZFNvdW5kVG9vbFwiO1xyXG5pbXBvcnQgeyBmaW5kUmVzVXRpbCB9IGZyb20gXCIuL2ZpbmRSZXNVdGlsXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBsb3ZlbHlEYXRhIHtcclxuICAgIGNlbnRlclBvczogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9LCAgICAgICAgICAgIC8vIOS4reW/g+eCueWdkOaghyBcclxuICAgIHN0YXJ0UG9zOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0sICAgICAgICAgICAgIC8vIOi1t+Wni+eCueWdkOagh1xyXG4gICAgZW5kUG9zOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0sICAgICAgICAgICAgICAgLy8g57uT5p2f54K55Z2Q5qCHXHJcbiAgICBibG9ja1NpemU6IHsgd2lkOiBudW1iZXIsIGhlaTogbnVtYmVyIH0sICAgICAgICAvLyDmlrnlnZflpKflsI9cclxuICAgIGlzRmluZDogYm9vbGVhbiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaYr+WQpuaJvuWIsFxyXG59XHJcblxyXG5cclxuY2xhc3MgZmluZENvbnRyb2xDbGFzcyAge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogZmluZENvbnRyb2xDbGFzcyA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBmaW5kQ29udHJvbENsYXNzIHtcclxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBmaW5kQ29udHJvbENsYXNzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2NlbmVOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgcHVibGljIGltZ0lkOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgZmluZFNvdW5kVG9vbDogZmluZFNvdW5kVG9vbCA9IG5ldyBmaW5kU291bmRUb29sKCk7XHJcbiAgICBwdWJsaWMgZXZlbnRUYXJnZXQ6IGNjLkV2ZW50VGFyZ2V0ID0gbmV3IGNjLkV2ZW50VGFyZ2V0KCk7XHJcbiAgICBwdWJsaWMgZmluZFJlc1V0aWwgPSBmaW5kUmVzVXRpbDtcclxuXHJcblxyXG4gICAgZGVzaWduV2lkdGg6bnVtYmVyICA9IDEyODA7Ly/orr7orqHliIbovqjnjoflrr1cclxuICAgIGRlc2lnbkhlaWdodDpudW1iZXIgPSAgNzIwOy8v6K6+6K6h5YiG6L6o546H6auYXHJcblxyXG4gICAgaXNJcGFkRml4OmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzSXBob25lWFNNYXhGaXg6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXBob25lWFNNYXhZOm51bWJlciA9IDA7XHJcblxyXG4gICAgaXNMaXVoYWlGaXg6Ym9vbGVhbiA9IGZhbHNlOy8v5piv5ZCm5pyJ5YiY5rW3XHJcbiAgICBsaXVoYWlZOm51bWJlciA9IDA7Ly/liJjmtbfpq5jluqZcclxuXHJcbiAgICBzZXRzY2VuZU5vZGUobm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIHRoaXMuc2NlbmVOb2RlID0gbm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRzY2VuZU5vZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVOb2RlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaXtumXtOi9rOaNou+8jOenki0+5YiG56eSLCBtbTpzc1xyXG4gICAgKi9cclxuICAgIHRpbWVDaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICB2YWx1ZSA9ICt2YWx1ZTtcclxuICAgICAgICBsZXQgbWludXRlOiBudW1iZXIgPSBNYXRoLmZsb29yKHZhbHVlIC8gNjApO1xyXG4gICAgICAgIGxldCBzZWNvbmQ6IG51bWJlciA9IE1hdGguZmxvb3IodmFsdWUgJSA2MCk7XHJcbiAgICAgICAgbGV0IG1pblN0cjogc3RyaW5nID0gXCJcIlxyXG4gICAgICAgIGlmIChtaW51dGUgPCAxMCkgeyAgICAgICAgLy/liIbpkp9cclxuICAgICAgICAgICAgbWluU3RyID0gXCIwXCIgKyBtaW51dGVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtaW5TdHIgPSBtaW51dGUudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNlY1N0cjogc3RyaW5nID0gXCJcIlxyXG4gICAgICAgIGlmIChzZWNvbmQgPCAxMCkgeyAgICAgICAgLy/np5LmlbBcclxuICAgICAgICAgICAgc2VjU3RyID0gXCIwXCIgKyBzZWNvbmRcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWNTdHIgPSBzZWNvbmQudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGAke21pblN0cn06JHtzZWNTdHJ9YDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy/ov5Tlm57ojIPlm7TnmoTpmo/mnLrmlbBcclxuICAgIGdldFJhbmRvbUludChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMC45OTk5OTk5OTkpKSArIG1pbjtcclxuICAgIH1cclxuXHJcbiAgICAvLyDlhajlsY/nqpflj6Pog4zmma/lm77pgILphY1cclxuICAgIGFkYXB0ZXJCZyhiZ05vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICAvL+iDjOaZr+Wkp+WbvumAgumFjSDnrYnmr5TnvKnmlL4g5LiN55WZ6buR6L65XHJcbiAgICAgICAgbGV0IF9iZ1dpZHRoU2NhbGUgPSBjYy53aW5TaXplLndpZHRoIC8gYmdOb2RlLndpZHRoO1xyXG4gICAgICAgIGxldCBfYmdIZWlnaHRTY2FsZSA9IGNjLndpblNpemUuaGVpZ2h0IC8gYmdOb2RlLmhlaWdodDtcclxuICAgICAgICBiZ05vZGUuc2NhbGUgPSBNYXRoLm1heChfYmdXaWR0aFNjYWxlLCBfYmdIZWlnaHRTY2FsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ovazmiJDoioLngrnlnZDmoIdcclxuICAgIGNoYW5nZVBvcyh0b05vZGU6IGNjLk5vZGUsIGZyb21Ob2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKHRvTm9kZSkgfHwgIWNjLmlzVmFsaWQoZnJvbU5vZGUpKSByZXR1cm4gY2MudjMoMCwgMCk7XHJcbiAgICAgICAgbGV0IF9wb3MgPSB0b05vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0b05vZGUucG9zaXRpb24pO1xyXG4gICAgICAgIGxldCBfbnBvcyA9IGZyb21Ob2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihfcG9zKTtcclxuICAgICAgICByZXR1cm4gX25wb3M7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tYW5pbS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgZGVsYXlDYWxsQmFjayh0aW1lOiBudW1iZXIsIF9jYWxsYmFjazogYW55LCBub2RlRGVsYXk/OiBjYy5Ob2RlKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IENhbnZhc05vZGUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKCdDYW52YXMnKTtcclxuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlRGVsYXkpKSB7XHJcbiAgICAgICAgICAgIENhbnZhc05vZGUgPSBub2RlRGVsYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChDYW52YXNOb2RlKTsvL+i/memHjOS4jeiDveWBnOatokNhbnZhc05vZGXnmoTmiYDmnInliqjkvZxcclxuICAgICAgICBjYy50d2VlbihDYW52YXNOb2RlKVxyXG4gICAgICAgICAgICAuZGVsYXkodGltZSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4geyBpZiAoX2NhbGxiYWNrKSBfY2FsbGJhY2soKTsgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheVNwKHNwU2tlbDogc3AuU2tlbGV0b24sIG5hbWU6IHN0cmluZywgaXNMb29wOiBib29sZWFuID0gZmFsc2UsIGVuZENhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwpOiB2b2lkIHtcclxuICAgICAgICBzcFNrZWwuc2V0Q29tcGxldGVMaXN0ZW5lcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbmRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxheUNhbGxCYWNrKDAuMDIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmRDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfSwgc3BTa2VsLm5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwU2tlbC5zZXRDb21wbGV0ZUxpc3RlbmVyKG51bGwpO1xyXG4gICAgICAgICAgICAvLyBzcFNrZWwuc2V0RGlzcG9zZUxpc3RlbmVyKGVuZENhbGxiYWNrKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzcFNrZWwuc2V0QW5pbWF0aW9uKDAsIG5hbWUsIGlzTG9vcCk7XHJcbiAgICB9XHJcbiAgICBzdG9wU3Aoc3BTa2VsOiBzcC5Ta2VsZXRvbik6IHZvaWQge1xyXG4gICAgICAgIHNwU2tlbC5zZXRDb21wbGV0ZUxpc3RlbmVyKG51bGwpO1xyXG4gICAgICAgIC8vIHNwU2tlbC5jbGVhclRyYWNrcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOW6j+WIl+WKqOeUuyjmt7vliqDkuIDkuKrliqjnlLvliLDlsL7lt7Qg6L+Y5Y+v5Lul5bu26L+f5Yeg56eSKVxyXG4gICAgYWRkU2VxdWVuY2VTcChzcFNrZWw6IHNwLlNrZWxldG9uLCBuYW1lOiBzdHJpbmcsIGlzTG9vcDogYm9vbGVhbiA9IGZhbHNlLCBkZWxheVRpbWU/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoZGVsYXlUaW1lKSB7XHJcbiAgICAgICAgICAgIHNwU2tlbC5hZGRBbmltYXRpb24oMCwgbmFtZSwgaXNMb29wLCBkZWxheVRpbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNwU2tlbC5hZGRBbmltYXRpb24oMCwgbmFtZSwgaXNMb29wKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgZmluZENvbnRyb2wgPSBmaW5kQ29udHJvbENsYXNzLmdldEluc3RhbmNlKCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzcGVjdGFjbGUgPSB7XHJcbiAgICBob3N0OiBcImhvc3RcIiwgICAgICAgICAgICAgICAvL+a4uOaIj+WcuuaZr1xyXG4gICAgcGFybG91cjogXCJwYXJsb3VyXCIsICAgICAgICAgLy/lpKfljoVcclxuICAgIHJlZ2lzdGVyOiBcInJlZ2lzdGVyXCIsICAgICAgIC8v55m75b2V6aG1XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB3aWNrZXQgPSB7XHJcbiAgICB3aW5kUG9wOiBcIndpbmRQb3BcIiwgICAgICAgICAgICAgICAgIC8v5ri45oiP57uT5p2fXHJcbiAgICBNb29uUG9wOiBcIk1vb25Qb3BcIiwgICAgICAgICAgICAgICAgIC8v5pe26Ze05YiwXHJcbiAgICBTdGFyUG9wOiBcIlN0YXJQb3BcIiwgICAgICAgICAgICAgICAgIC8v6YCA5Ye6IOi/lOWbnuWkp+WOhVxyXG4gICAgVHJlZVBvcDogXCJUcmVlUG9wXCIsICAgICAgICAgICAgICAgICAvL+iuvue9rlxyXG4gICAgQm9va1BvcDogXCJCb29rUG9wXCIsICAgICAgICAgICAgICAgICAvL+eZu+W9lemhtemakOengeWNj+iurlxyXG4gICBcclxufSJdfQ==