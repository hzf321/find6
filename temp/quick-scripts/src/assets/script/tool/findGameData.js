"use strict";
cc._RF.push(module, '57cabiblbxOB7KtkV6MiZG/', 'findGameData');
// script/tool/findGameData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sound = exports.storage = exports.fgData = void 0;
var findStorage_1 = require("./findStorage");
var onCloseFinishCb = null;
var onClosefailCb = null;
var findGameData = /** @class */ (function () {
    function findGameData() {
        this.privacyPolicyUrl = "https://sites.google.com/view/retro-difference-privacy-polic/halaman-muka";
        this.termsofServiceUrl = "https://sites.google.com/view/retrodifferencetermsofservice/halaman-muka";
        this.levelAll = 30;
        this.userData = {
            isClause: false,
            tishiNum: 1,
            level: 1,
            isHall: false,
            isGudie: false,
            finishLevel5: false,
        };
        cc.game.on(cc.game.EVENT_HIDE, function () {
            this.storageData();
        }, this);
    }
    findGameData.getInstance = function () {
        if (this._instance == null) {
            this._instance = new findGameData();
        }
        return this._instance;
    };
    findGameData.prototype.storageData = function () {
        findStorage_1.findStorage.setStorageJSON(storage.gamedata, this.userData);
    };
    findGameData.prototype.setVideoFailCb = function (cb) {
        // onClosefailCb = null;
        // onClosefailCb = cb;
        window['onClosefailCb'] = null;
        window['onClosefailCb'] = cb;
    };
    //看广告
    findGameData.prototype.showVideo = function (finishCb) {
        console.log("android------------看广告");
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showShiPing", "()V");
            onCloseFinishCb = null;
            onCloseFinishCb = finishCb;
        }
        else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {
            //@ts-ignore
            jsb.reflection.callStaticMethod("FindAdMgr", "loadReward");
            window['onCloseFinishCb'] = null;
            window['onCloseFinishCb'] = finishCb;
        }
        else {
            finishCb();
        }
    };
    //打开banner
    findGameData.prototype.showBanner = function () {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showbanner", "()V");
        }
    };
    //关闭banner
    findGameData.prototype.closeBanner = function () {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hidebanner", "()V");
        }
    };
    //打开url
    findGameData.prototype.openUrl = function () {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "openUrl", "()V");
        }
    };
    findGameData.prototype.setGamestop = function (func) {
        window['gamestop'] = func;
    };
    findGameData.prototype.setGamerecovery = function (func) {
        window['gamerecovery'] = func;
    };
    findGameData._instance = null;
    return findGameData;
}());
exports.fgData = findGameData.getInstance();
var storage;
(function (storage) {
    storage["gamedata"] = "gamedata";
})(storage = exports.storage || (exports.storage = {}));
var sound;
(function (sound) {
    sound["bgm"] = "bgm";
    sound["click"] = "click";
    sound["correct"] = "correct";
    sound["err"] = "err";
    sound["fail"] = "fail";
    sound["win"] = "win";
})(sound = exports.sound || (exports.sound = {}));
window['onCloseFinishCb'] = function () {
};
/**sdk调用js里面window公众的函数 */
window['onCloseVdieoFinishCb'] = function () {
    // if (isPlayMusic) {
    //     AudioCtr.bg();
    // }
    window['onCloseFinishCb']();
};
/**sdk调用js里面window公众的函数 */
window['onCloseVdieofailCb'] = function () {
    // if (isPlayMusic) {
    //     AudioCtr.bg();
    // }
    window['onClosefailCb']();
};
window['onClosefailCb'] = function () {
};
//游戏暂停
window['gamestop'] = function () {
};
//游戏恢复
window['gamerecovery'] = function () {
};

cc._RF.pop();