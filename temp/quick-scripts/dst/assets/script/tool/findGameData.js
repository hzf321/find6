
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/findGameData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9maW5kR2FtZURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkNBQTRDO0FBRTVDLElBQUksZUFBZSxHQUFlLElBQUksQ0FBQztBQUN2QyxJQUFJLGFBQWEsR0FBZSxJQUFJLENBQUM7QUFDckM7SUFZSTtRQU1BLHFCQUFnQixHQUFXLDJFQUEyRSxDQUFDO1FBQ3ZHLHNCQUFpQixHQUFXLDBFQUEwRSxDQUFDO1FBRXZHLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsYUFBUSxHQUFRO1lBQ1osUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsQ0FBQztZQUNYLEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLEVBQUUsS0FBSztZQUNkLFlBQVksRUFBRSxLQUFLO1NBQ3RCLENBQUM7UUFoQkUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFaYSx3QkFBVyxHQUF6QjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFzQkQsa0NBQVcsR0FBWDtRQUNJLHlCQUFXLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFHRCxxQ0FBYyxHQUFkLFVBQWUsRUFBYztRQUN6Qix3QkFBd0I7UUFDeEIsc0JBQXNCO1FBRXRCLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDL0IsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFJLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsS0FBSztJQUNMLGdDQUFTLEdBQVQsVUFBVSxRQUFvQjtRQUUxQixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUE7UUFDckMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRTtZQUNuRCxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLHFDQUFxQyxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM3RixlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLGVBQWUsR0FBRyxRQUFRLENBQUM7U0FDOUI7YUFBTSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFO1lBQ3RELFlBQVk7WUFDWixHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUMzRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDakMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUUsUUFBUSxDQUFDO1NBQ3ZDO2FBQU07WUFDSCxRQUFRLEVBQUUsQ0FBQztTQUNkO0lBQ0wsQ0FBQztJQUVELFVBQVU7SUFDVixpQ0FBVSxHQUFWO1FBQ0ksSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRTtZQUNuRCxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLHFDQUFxQyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMvRjtJQUNMLENBQUM7SUFFRCxVQUFVO0lBQ1Ysa0NBQVcsR0FBWDtRQUNJLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUU7WUFDbkQsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxxQ0FBcUMsRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDL0Y7SUFDTCxDQUFDO0lBRUQsT0FBTztJQUNQLDhCQUFPLEdBQVA7UUFDSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFO1lBQ25ELEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMscUNBQXFDLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzVGO0lBQ0wsQ0FBQztJQUNELGtDQUFXLEdBQVgsVUFBWSxJQUFjO1FBQ3RCLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVELHNDQUFlLEdBQWYsVUFBZ0IsSUFBYztRQUMxQixNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUF0RmMsc0JBQVMsR0FBaUIsSUFBSSxDQUFDO0lBdUZsRCxtQkFBQztDQXpGRCxBQXlGQyxJQUFBO0FBRVUsUUFBQSxNQUFNLEdBQUcsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBRS9DLElBQVksT0FFWDtBQUZELFdBQVksT0FBTztJQUNmLGdDQUFxQixDQUFBO0FBQ3pCLENBQUMsRUFGVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFFbEI7QUFFRCxJQUFZLEtBT1g7QUFQRCxXQUFZLEtBQUs7SUFDYixvQkFBVyxDQUFBO0lBQ1gsd0JBQWUsQ0FBQTtJQUNmLDRCQUFtQixDQUFBO0lBQ25CLG9CQUFXLENBQUE7SUFDWCxzQkFBYSxDQUFBO0lBQ2Isb0JBQVcsQ0FBQTtBQUNmLENBQUMsRUFQVyxLQUFLLEdBQUwsYUFBSyxLQUFMLGFBQUssUUFPaEI7QUFHRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRztBQUU1QixDQUFDLENBQUE7QUFFRCwwQkFBMEI7QUFDMUIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEdBQUc7SUFDN0IscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixJQUFJO0lBQ0osTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQTtBQUMvQixDQUFDLENBQUE7QUFHRCwwQkFBMEI7QUFDMUIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUc7SUFDM0IscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixJQUFJO0lBQ0osTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUE7QUFDN0IsQ0FBQyxDQUFBO0FBRUQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHO0FBRTFCLENBQUMsQ0FBQTtBQUVBLE1BQU07QUFDUCxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUc7QUFFckIsQ0FBQyxDQUFBO0FBR0QsTUFBTTtBQUNOLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRztBQUV6QixDQUFDLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIgXG5pbXBvcnQgeyBmaW5kU3RvcmFnZSB9IGZyb20gXCIuL2ZpbmRTdG9yYWdlXCI7XG5cbmxldCBvbkNsb3NlRmluaXNoQ2I6ICgpID0+IHZvaWQgPSBudWxsO1xubGV0IG9uQ2xvc2VmYWlsQ2I6ICgpID0+IHZvaWQgPSBudWxsO1xuY2xhc3MgZmluZEdhbWVEYXRhIHtcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogZmluZEdhbWVEYXRhID0gbnVsbDtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogZmluZEdhbWVEYXRhIHtcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IGZpbmRHYW1lRGF0YSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfSElERSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlRGF0YSgpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YWN5UG9saWN5VXJsOiBzdHJpbmcgPSBcImh0dHBzOi8vc2l0ZXMuZ29vZ2xlLmNvbS92aWV3L3JldHJvLWRpZmZlcmVuY2UtcHJpdmFjeS1wb2xpYy9oYWxhbWFuLW11a2FcIjtcbiAgICB0ZXJtc29mU2VydmljZVVybDogc3RyaW5nID0gXCJodHRwczovL3NpdGVzLmdvb2dsZS5jb20vdmlldy9yZXRyb2RpZmZlcmVuY2V0ZXJtc29mc2VydmljZS9oYWxhbWFuLW11a2FcIjtcblxuICAgIGxldmVsQWxsOiBudW1iZXIgPSAzMDtcbiAgICB1c2VyRGF0YTogYW55ID0ge1xuICAgICAgICBpc0NsYXVzZTogZmFsc2UsICAgIC8v5piv5ZCm5omT5byA6L+H6ZqQ56eB5Y2P6K6uICAgIFxuICAgICAgICB0aXNoaU51bTogMSwgICAgICAgIC8v5o+Q56S65qyh5pWwXG4gICAgICAgIGxldmVsOiAxLCAgICAgICAgICAgLy/lvZPliY3lhbPljaFcbiAgICAgICAgaXNIYWxsOiBmYWxzZSwgICAgICAvL+aYr+WQpui/lOWbnui/h+Wkp+WOhVxuICAgICAgICBpc0d1ZGllOiBmYWxzZSwgICAgICAvL+aYr+WQpuaJk+W8gOi/h+aWsOaJi+W8leWvvFxuICAgICAgICBmaW5pc2hMZXZlbDU6IGZhbHNlLCAgLy/mmK/lkKblrozmiJDov4fnrKw15YWzXG4gICAgfTtcblxuICAgIHN0b3JhZ2VEYXRhKCkge1xuICAgICAgICBmaW5kU3RvcmFnZS5zZXRTdG9yYWdlSlNPTihzdG9yYWdlLmdhbWVkYXRhLCB0aGlzLnVzZXJEYXRhKTtcbiAgICB9XG5cblxuICAgIHNldFZpZGVvRmFpbENiKGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIC8vIG9uQ2xvc2VmYWlsQ2IgPSBudWxsO1xuICAgICAgICAvLyBvbkNsb3NlZmFpbENiID0gY2I7XG5cbiAgICAgICAgd2luZG93WydvbkNsb3NlZmFpbENiJ10gPSBudWxsO1xuICAgICAgICB3aW5kb3dbJ29uQ2xvc2VmYWlsQ2InXSAgPSBjYjtcbiAgICB9XG5cbiAgICAvL+eci+W5v+WRilxuICAgIHNob3dWaWRlbyhmaW5pc2hDYjogKCkgPT4gdm9pZCkge1xuICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhcImFuZHJvaWQtLS0tLS0tLS0tLS3nnIvlub/lkYpcIilcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMuT1NfQU5EUk9JRCA9PSBjYy5zeXMub3MpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcInNob3dTaGlQaW5nXCIsIFwiKClWXCIpO1xuICAgICAgICAgICAgb25DbG9zZUZpbmlzaENiID0gbnVsbDtcbiAgICAgICAgICAgIG9uQ2xvc2VGaW5pc2hDYiA9IGZpbmlzaENiO1xuICAgICAgICB9IGVsc2UgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMuT1NfSU9TID09IGNjLnN5cy5vcykge1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiRmluZEFkTWdyXCIsIFwibG9hZFJld2FyZFwiKTtcbiAgICAgICAgICAgIHdpbmRvd1snb25DbG9zZUZpbmlzaENiJ10gPSBudWxsO1xuICAgICAgICAgICAgd2luZG93WydvbkNsb3NlRmluaXNoQ2InXT0gZmluaXNoQ2I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaW5pc2hDYigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/miZPlvIBiYW5uZXJcbiAgICBzaG93QmFubmVyKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5PU19BTkRST0lEID09IGNjLnN5cy5vcykge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwic2hvd2Jhbm5lclwiLCBcIigpVlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v5YWz6ZetYmFubmVyXG4gICAgY2xvc2VCYW5uZXIoKSB7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLk9TX0FORFJPSUQgPT0gY2Muc3lzLm9zKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJoaWRlYmFubmVyXCIsIFwiKClWXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/miZPlvIB1cmxcbiAgICBvcGVuVXJsKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5PU19BTkRST0lEID09IGNjLnN5cy5vcykge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwib3BlblVybFwiLCBcIigpVlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRHYW1lc3RvcChmdW5jOiBGdW5jdGlvbikge1xuICAgICAgICB3aW5kb3dbJ2dhbWVzdG9wJ10gPSBmdW5jO1xuICAgIH1cblxuICAgIHNldEdhbWVyZWNvdmVyeShmdW5jOiBGdW5jdGlvbikge1xuICAgICAgICB3aW5kb3dbJ2dhbWVyZWNvdmVyeSddID0gZnVuYztcbiAgICB9XG59XG5cbmV4cG9ydCBsZXQgZmdEYXRhID0gZmluZEdhbWVEYXRhLmdldEluc3RhbmNlKCk7XG5cbmV4cG9ydCBlbnVtIHN0b3JhZ2Uge1xuICAgIGdhbWVkYXRhID0gXCJnYW1lZGF0YVwiLFxufVxuXG5leHBvcnQgZW51bSBzb3VuZCB7XG4gICAgYmdtID0gXCJiZ21cIixcbiAgICBjbGljayA9IFwiY2xpY2tcIixcbiAgICBjb3JyZWN0ID0gXCJjb3JyZWN0XCIsXG4gICAgZXJyID0gXCJlcnJcIixcbiAgICBmYWlsID0gXCJmYWlsXCIsXG4gICAgd2luID0gXCJ3aW5cIixcbn1cblxuXG53aW5kb3dbJ29uQ2xvc2VGaW5pc2hDYiddID0gKCkgPT4ge1xuICAgXG59XG5cbi8qKnNka+iwg+eUqGpz6YeM6Z2id2luZG935YWs5LyX55qE5Ye95pWwICovXG53aW5kb3dbJ29uQ2xvc2VWZGllb0ZpbmlzaENiJ10gPSAoKSA9PiB7XG4gICAgLy8gaWYgKGlzUGxheU11c2ljKSB7XG4gICAgLy8gICAgIEF1ZGlvQ3RyLmJnKCk7XG4gICAgLy8gfVxuICAgIHdpbmRvd1snb25DbG9zZUZpbmlzaENiJ10oKVxufVxuXG5cbi8qKnNka+iwg+eUqGpz6YeM6Z2id2luZG935YWs5LyX55qE5Ye95pWwICovXG53aW5kb3dbJ29uQ2xvc2VWZGllb2ZhaWxDYiddID0gKCkgPT4ge1xuICAgIC8vIGlmIChpc1BsYXlNdXNpYykge1xuICAgIC8vICAgICBBdWRpb0N0ci5iZygpO1xuICAgIC8vIH1cbiAgICB3aW5kb3dbJ29uQ2xvc2VmYWlsQ2InXSgpXG59XG5cbndpbmRvd1snb25DbG9zZWZhaWxDYiddID0gKCkgPT4ge1xuICAgXG59XG5cbiAvL+a4uOaIj+aaguWBnFxud2luZG93WydnYW1lc3RvcCddID0gKCkgPT4ge1xuXG59XG5cblxuLy/muLjmiI/mgaLlpI1cbndpbmRvd1snZ2FtZXJlY292ZXJ5J10gPSAoKSA9PiB7XG5cbn0iXX0=