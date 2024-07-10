"use strict";
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