
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/findSoundTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '090fcgAZWxOM6pwykHoyPvy', 'findSoundTool');
// script/tool/findSoundTool.ts

"use strict";
//音频工具类
Object.defineProperty(exports, "__esModule", { value: true });
exports.findSoundTool = void 0;
var findStorage_1 = require("./findStorage");
var commonBtnPath = "sound/click";
var commonBgmPath = "sound/bgm";
var findSoundTool = /** @class */ (function () {
    function findSoundTool() {
        this.btnClickEffect = null;
        this.bgmMusic = null;
        this.currMusic = null;
        this.musicSwitch = findStorage_1.findStorage.getBoolByKey("kk_setup_music", true);
        this.effectSwitch = findStorage_1.findStorage.getBoolByKey("kk_setup_effect", true);
        this.shockSwitch = findStorage_1.findStorage.getBoolByKey("kk_setup_shock", true);
    }
    findSoundTool.prototype.initBtnClickEffect = function () {
        var _this = this;
        if (this.btnClickEffect)
            return;
        cc.resources.load(commonBtnPath, cc.AudioClip, function (err, clip) {
            if (err || !cc.isValid(_this)) {
                return;
            }
            _this.btnClickEffect = clip;
            clip.addRef();
        });
    };
    findSoundTool.prototype.initbgmMusic = function () {
        var _this = this;
        if (this.bgmMusic)
            return;
        cc.resources.load(commonBgmPath, cc.AudioClip, function (err, clip) {
            if (err || !cc.isValid(_this)) {
                return;
            }
            _this.bgmMusic = clip;
            _this.commonbgmMusic();
            clip.addRef();
        });
    };
    findSoundTool.prototype.switchMusic = function () {
        this.musicSwitch = !this.musicSwitch;
        findStorage_1.findStorage.setBoolByKey("kk_setup_music", this.musicSwitch);
        if (this.musicSwitch) {
            if (this.currMusic) {
                this.playMusic(this.currMusic);
            }
        }
        else {
            this.stopMusic();
        }
    };
    findSoundTool.prototype.switchEffect = function () {
        this.effectSwitch = !this.effectSwitch;
        findStorage_1.findStorage.setBoolByKey("kk_setup_effect", this.effectSwitch);
        if (this.effectSwitch) {
        }
        else {
            cc.audioEngine.stopAllEffects();
        }
    };
    findSoundTool.prototype.switchShock = function () {
        this.shockSwitch = !this.shockSwitch;
        findStorage_1.findStorage.setBoolByKey("kk_setup_shock", this.shockSwitch);
    };
    findSoundTool.prototype.playMusic = function (audio, isLoop) {
        if (isLoop === void 0) { isLoop = true; }
        if (!audio)
            return;
        this.currMusic = audio; //保存当前背景音乐
        if (this.musicSwitch) {
            // this.stopMusic();
            var audioID = cc.audioEngine.playMusic(audio, isLoop);
        }
    };
    findSoundTool.prototype.playEffect = function (audio, isLoop, callback) {
        if (isLoop === void 0) { isLoop = false; }
        if (callback === void 0) { callback = null; }
        if (!audio)
            return;
        if (this.effectSwitch) {
            var audioID = cc.audioEngine.play(audio, isLoop, 1);
            if (callback)
                cc.audioEngine.setFinishCallback(audioID, callback);
            return audioID;
        }
        return null;
    };
    findSoundTool.prototype.playEffectWithPath = function (path, isLoop) {
        if (isLoop === void 0) { isLoop = false; }
        if (!path || !this.effectSwitch)
            return;
        cc.resources.load(path, cc.AudioClip, function (err, clip) {
            if (err) {
                cc.log("加载音效资源失败" + path);
                return;
            }
            var audioID = cc.audioEngine.play(clip, isLoop, 1);
        });
    };
    findSoundTool.prototype.stopMusic = function () {
        cc.audioEngine.stopMusic();
    };
    findSoundTool.prototype.stopAll = function () {
        cc.audioEngine.stopAll();
    };
    findSoundTool.prototype.pauseAll = function () {
        if (this.musicSwitch) {
            cc.audioEngine.pauseAll();
        }
    };
    findSoundTool.prototype.resumeAll = function () {
        if (this.musicSwitch) {
            cc.audioEngine.resumeAll();
        }
    };
    findSoundTool.prototype.stopEffect = function (audioID) {
        cc.audioEngine.stopEffect(audioID);
    };
    findSoundTool.prototype.pause = function (audioID) {
        cc.audioEngine.pause(audioID);
    };
    findSoundTool.prototype.resume = function (audioID) {
        if (this.musicSwitch) {
            cc.audioEngine.resume(audioID);
        }
    };
    findSoundTool.prototype.commonBtnClick = function () {
        this.playEffect(this.btnClickEffect, false);
    };
    findSoundTool.prototype.commonbgmMusic = function () {
        this.playMusic(this.bgmMusic);
    };
    return findSoundTool;
}());
exports.findSoundTool = findSoundTool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9maW5kU291bmRUb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPOzs7QUFFUCw2Q0FBNEM7QUFHNUMsSUFBTSxhQUFhLEdBQUcsYUFBYSxDQUFDO0FBQ3BDLElBQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQztBQUVsQztJQW9DSTtRQTlCUSxtQkFBYyxHQUFpQixJQUFJLENBQUM7UUFDcEMsYUFBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsY0FBUyxHQUFpQixJQUFJLENBQUM7UUE0Qm5DLElBQUksQ0FBQyxXQUFXLEdBQUcseUJBQVcsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFlBQVksR0FBRyx5QkFBVyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsV0FBVyxHQUFHLHlCQUFXLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUE3Qk0sMENBQWtCLEdBQXpCO1FBQUEsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxjQUFjO1lBQUUsT0FBTztRQUVoQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQVUsRUFBRSxJQUFrQjtZQUMxRSxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLEVBQUU7Z0JBQzFCLE9BQU87YUFDVjtZQUNELEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxvQ0FBWSxHQUFuQjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFF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R0FBckI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVNLHNDQUFjLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUdMLG9CQUFDO0FBQUQsQ0FySkEsQUFxSkMsSUFBQTtBQXJKWSxzQ0FBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8v6Z+z6aKR5bel5YW357G7XHJcblxyXG5pbXBvcnQgeyBmaW5kU3RvcmFnZSB9IGZyb20gXCIuL2ZpbmRTdG9yYWdlXCI7XHJcblxyXG5cclxuY29uc3QgY29tbW9uQnRuUGF0aCA9IFwic291bmQvY2xpY2tcIjtcclxuY29uc3QgY29tbW9uQmdtUGF0aCA9IFwic291bmQvYmdtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgZmluZFNvdW5kVG9vbCB7XHJcbiAgICAgXHJcbiAgICBtdXNpY1N3aXRjaDogYm9vbGVhbjsgICAgLy/og4zmma/pn7PkuZDlvIDlhbNcclxuICAgIGVmZmVjdFN3aXRjaDogYm9vbGVhbjsgICAvL+mfs+aViOW8gOWFs1xyXG4gICAgc2hvY2tTd2l0Y2g6IGJvb2xlYW47ICAgIC8vIOmch+WKqOW8gOWFsyAgIFxyXG5cclxuICAgIHByaXZhdGUgYnRuQ2xpY2tFZmZlY3Q6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGJnbU11c2ljOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgY3Vyck11c2ljOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBpbml0QnRuQ2xpY2tFZmZlY3QoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuYnRuQ2xpY2tFZmZlY3QpIHJldHVybjtcclxuXHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoY29tbW9uQnRuUGF0aCwgY2MuQXVkaW9DbGlwLCAoZXJyOiBFcnJvciwgY2xpcDogY2MuQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIgfHwgIWNjLmlzVmFsaWQodGhpcykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmJ0bkNsaWNrRWZmZWN0ID0gY2xpcDtcclxuICAgICAgICAgICAgY2xpcC5hZGRSZWYoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdGJnbU11c2ljKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmJnbU11c2ljKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGNvbW1vbkJnbVBhdGgsIGNjLkF1ZGlvQ2xpcCwgKGVycjogRXJyb3IsIGNsaXA6IGNjLkF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyIHx8ICFjYy5pc1ZhbGlkKHRoaXMpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5iZ21NdXNpYyA9IGNsaXA7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbW9uYmdtTXVzaWMoKTtcclxuICAgICAgICAgICAgY2xpcC5hZGRSZWYoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm11c2ljU3dpdGNoID0gZmluZFN0b3JhZ2UuZ2V0Qm9vbEJ5S2V5KFwia2tfc2V0dXBfbXVzaWNcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RTd2l0Y2ggPSBmaW5kU3RvcmFnZS5nZXRCb29sQnlLZXkoXCJra19zZXR1cF9lZmZlY3RcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5zaG9ja1N3aXRjaCA9IGZpbmRTdG9yYWdlLmdldEJvb2xCeUtleShcImtrX3NldHVwX3Nob2NrXCIsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzd2l0Y2hNdXNpYygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm11c2ljU3dpdGNoID0gIXRoaXMubXVzaWNTd2l0Y2g7XHJcbiAgICAgICAgZmluZFN0b3JhZ2Uuc2V0Qm9vbEJ5S2V5KFwia2tfc2V0dXBfbXVzaWNcIiwgdGhpcy5tdXNpY1N3aXRjaCk7XHJcbiAgICAgICAgaWYgKHRoaXMubXVzaWNTd2l0Y2gpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3Vyck11c2ljKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlNdXNpYyh0aGlzLmN1cnJNdXNpYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BNdXNpYygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3dpdGNoRWZmZWN0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWZmZWN0U3dpdGNoID0gIXRoaXMuZWZmZWN0U3dpdGNoO1xyXG4gICAgICAgIGZpbmRTdG9yYWdlLnNldEJvb2xCeUtleShcImtrX3NldHVwX2VmZmVjdFwiLCB0aGlzLmVmZmVjdFN3aXRjaCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZWZmZWN0U3dpdGNoKSB7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzd2l0Y2hTaG9jaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNob2NrU3dpdGNoID0gIXRoaXMuc2hvY2tTd2l0Y2g7XHJcbiAgICAgICAgZmluZFN0b3JhZ2Uuc2V0Qm9vbEJ5S2V5KFwia2tfc2V0dXBfc2hvY2tcIiwgdGhpcy5zaG9ja1N3aXRjaCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBwbGF5TXVzaWMoYXVkaW86IGNjLkF1ZGlvQ2xpcCwgaXNMb29wOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghYXVkaW8pIHJldHVybjtcclxuICAgICAgICB0aGlzLmN1cnJNdXNpYyA9IGF1ZGlvOy8v5L+d5a2Y5b2T5YmN6IOM5pmv6Z+z5LmQXHJcbiAgICAgICAgaWYgKHRoaXMubXVzaWNTd2l0Y2gpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5zdG9wTXVzaWMoKTtcclxuICAgICAgICAgICAgdmFyIGF1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoYXVkaW8sIGlzTG9vcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGF5RWZmZWN0KGF1ZGlvOiBjYy5BdWRpb0NsaXAsIGlzTG9vcDogYm9vbGVhbiA9IGZhbHNlLCBjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoIWF1ZGlvKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuZWZmZWN0U3dpdGNoKSB7XHJcbiAgICAgICAgICAgIHZhciBhdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheShhdWRpbywgaXNMb29wLCAxKTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYy5hdWRpb0VuZ2luZS5zZXRGaW5pc2hDYWxsYmFjayhhdWRpb0lELCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIHJldHVybiBhdWRpb0lEO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheUVmZmVjdFdpdGhQYXRoKHBhdGg6IHN0cmluZywgaXNMb29wOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXBhdGggfHwgIXRoaXMuZWZmZWN0U3dpdGNoKSByZXR1cm47XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQocGF0aCwgY2MuQXVkaW9DbGlwLCAoZXJyOiBFcnJvciwgY2xpcDogY2MuQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIuWKoOi9vemfs+aViOi1hOa6kOWksei0pVwiICsgcGF0aCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGF1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGNsaXAsIGlzTG9vcCwgMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdG9wTXVzaWMoKTogdm9pZCB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdG9wQWxsKCk6IHZvaWQge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGF1c2VBbGwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubXVzaWNTd2l0Y2gpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyByZXN1bWVBbGwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubXVzaWNTd2l0Y2gpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RvcEVmZmVjdChhdWRpb0lEOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wRWZmZWN0KGF1ZGlvSUQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcGF1c2UoYXVkaW9JRDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2UoYXVkaW9JRCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyByZXN1bWUoYXVkaW9JRDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubXVzaWNTd2l0Y2gpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lKGF1ZGlvSUQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tbW9uQnRuQ2xpY2soKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wbGF5RWZmZWN0KHRoaXMuYnRuQ2xpY2tFZmZlY3QsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tbW9uYmdtTXVzaWMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wbGF5TXVzaWModGhpcy5iZ21NdXNpYyk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=