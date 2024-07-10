
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/dialog/BookPop');
require('./assets/script/dialog/MoonPop');
require('./assets/script/dialog/StarPop');
require('./assets/script/dialog/TreePop');
require('./assets/script/dialog/windPop');
require('./assets/script/host');
require('./assets/script/parlour');
require('./assets/script/prefeb/imgItem');
require('./assets/script/prefeb/newhand');
require('./assets/script/register');
require('./assets/script/tool/findControl');
require('./assets/script/tool/findGameData');
require('./assets/script/tool/findResBind');
require('./assets/script/tool/findResUtil');
require('./assets/script/tool/findScroll');
require('./assets/script/tool/findSoundTool');
require('./assets/script/tool/findStorage');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/BookPop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '288ffaP2ZJMYZaoB90GcwU0', 'BookPop');
// script/dialog/BookPop.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var findControl_1 = require("../tool/findControl");
var findGameData_1 = require("../tool/findGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BookPop = /** @class */ (function (_super) {
    __extends(BookPop, _super);
    function BookPop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.callback = null;
        return _this;
    }
    BookPop.prototype.start = function () {
        findGameData_1.fgData.showBanner();
    };
    BookPop.prototype.initData = function (data) {
        this.callback = data.callback;
    };
    BookPop.prototype.onClick_Agreen = function () {
        findControl_1.findControl.findSoundTool.commonBtnClick();
        this.callback && this.callback();
        this.node.destroy();
        findGameData_1.fgData.closeBanner();
    };
    BookPop.prototype.onClick_PrivacyPolicy_btn = function () {
        findControl_1.findControl.findSoundTool.commonBtnClick();
        cc.sys.openURL(findGameData_1.fgData.privacyPolicyUrl);
    };
    BookPop.prototype.onClick_Termsofservicebtn = function () {
        findControl_1.findControl.findSoundTool.commonBtnClick();
        cc.sys.openURL(findGameData_1.fgData.termsofServiceUrl);
    };
    BookPop = __decorate([
        ccclass
    ], BookPop);
    return BookPop;
}(cc.Component));
exports.default = BookPop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL0Jvb2tQb3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbURBQWtEO0FBQ2xELHFEQUE4QztBQUd4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQTZCQztRQTNCRyxjQUFRLEdBQWEsSUFBSSxDQUFDOztJQTJCOUIsQ0FBQztJQXpCRyx1QkFBSyxHQUFMO1FBQ0kscUJBQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsMEJBQVEsR0FBUixVQUFTLElBQUk7UUFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQUVELGdDQUFjLEdBQWQ7UUFDSSx5QkFBVyxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BCLHFCQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELDJDQUF5QixHQUF6QjtRQUNJLHlCQUFXLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLHFCQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsMkNBQXlCLEdBQXpCO1FBQ0kseUJBQVcsQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0MsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMscUJBQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUEzQmdCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0E2QjNCO0lBQUQsY0FBQztDQTdCRCxBQTZCQyxDQTdCb0MsRUFBRSxDQUFDLFNBQVMsR0E2QmhEO2tCQTdCb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIiBcbmltcG9ydCB7IGZpbmRDb250cm9sIH0gZnJvbSBcIi4uL3Rvb2wvZmluZENvbnRyb2xcIjtcbmltcG9ydCB7IGZnRGF0YSB9IGZyb20gXCIuLi90b29sL2ZpbmRHYW1lRGF0YVwiO1xuIFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9va1BvcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsO1xuXG4gICAgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIGZnRGF0YS5zaG93QmFubmVyKCk7XG4gICAgfVxuXG4gICAgaW5pdERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gZGF0YS5jYWxsYmFjaztcbiAgICB9XG5cbiAgICBvbkNsaWNrX0FncmVlbigpIHtcbiAgICAgICAgZmluZENvbnRyb2wuZmluZFNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrICYmIHRoaXMuY2FsbGJhY2soKVxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICBmZ0RhdGEuY2xvc2VCYW5uZXIoKTtcbiAgICB9XG4gXG4gICAgb25DbGlja19Qcml2YWN5UG9saWN5X2J0bigpIHtcbiAgICAgICAgZmluZENvbnRyb2wuZmluZFNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBjYy5zeXMub3BlblVSTChmZ0RhdGEucHJpdmFjeVBvbGljeVVybCk7XG4gICAgfVxuXG4gICAgb25DbGlja19UZXJtc29mc2VydmljZWJ0bigpIHtcbiAgICAgICAgZmluZENvbnRyb2wuZmluZFNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBjYy5zeXMub3BlblVSTChmZ0RhdGEudGVybXNvZlNlcnZpY2VVcmwpO1xuICAgIH1cblxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/register.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3f30aa1wRVDbLr8Lgi0ltz2', 'register');
// script/register.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var findStorage_1 = require("./tool/findStorage");
var findControl_1 = require("./tool/findControl");
var findGameData_1 = require("./tool/findGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var register = /** @class */ (function (_super) {
    __extends(register, _super);
    function register() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loading_bg = null;
        _this.loading_bg2 = null;
        _this.loaging_bar_yellow = null;
        _this.loadingBox = null;
        _this.gotoHallBox = null;
        _this.loading_play = null;
        _this.resNum = 6;
        _this.nowNum = 0;
        return _this;
    }
    register.prototype.start = function () {
        var _this = this;
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = false;
            this.getComponent(cc.Canvas).fitWidth = true;
        }
        findControl_1.findControl.adapterBg(this.loading_bg);
        findControl_1.findControl.adapterBg(this.loading_bg2);
        findControl_1.findControl.findSoundTool.initBtnClickEffect();
        findControl_1.findControl.findSoundTool.initbgmMusic();
        var playroomStorage = findStorage_1.findStorage.getStorageJSON(findGameData_1.storage.gamedata);
        if (playroomStorage) {
            findGameData_1.fgData.userData = playroomStorage;
        }
        findControl_1.findControl.setsceneNode(this.node);
        if (!findGameData_1.fgData.userData.isClause) {
            this.gotoHallBox.active = false;
            this.loadingBox.active = false;
            findControl_1.findControl.findResUtil.showDialog(findControl_1.wicket.BookPop, {
                callback: function () {
                    findGameData_1.fgData.userData.isClause = true;
                    _this.gotoHallBox.active = true;
                    _this.loadingBox.active = false;
                    findGameData_1.fgData.storageData();
                    cc.tween(_this.loading_play).to(0.5, { scale: 1.1 }).to(0.5, { scale: 1 }).union().repeatForever().start();
                }
            });
        }
        else {
            this.gotoHallBox.active = true;
            this.loadingBox.active = false;
            cc.tween(this.loading_play).to(0.5, { scale: 1.1 }).to(0.5, { scale: 1 }).union().repeatForever().start();
        }
        findGameData_1.fgData.setVideoFailCb(function () {
            cc.resources.load("prefeb/toast", cc.Prefab, function (err, prefab) {
                if (err) {
                    return;
                }
                var toast = cc.instantiate(prefab);
                findControl_1.findControl.findResUtil.bindResAsset(toast, prefab);
                var parentNode = findControl_1.findControl.getsceneNode();
                if (toast && parentNode) {
                    toast.active = true;
                    parentNode.addChild(toast);
                    var toastLabel = toast.getChildByName("label");
                    toastLabel.getComponent(cc.Label).string = "No ads at the moment";
                    cc.Tween.stopAllByTarget(toast);
                    toast.opacity = 255;
                    cc.tween(toast).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).delay(0.5).to(0.5, { opacity: 0 }).call(function () {
                        toast.destroy();
                    }).start();
                }
            });
        });
    };
    register.prototype.onClick_gotoPlay = function () {
        var _this = this;
        this.gotoHallBox.active = false;
        this.loadingBox.active = true;
        findControl_1.findControl.findSoundTool.commonBtnClick();
        this.loaging_bar_yellow.fillRange = 0;
        cc.Tween.stopAllByTarget(this.loaging_bar_yellow);
        cc.loader.loadResDir("prefeb", function (err, assets) {
            if (err) {
                cc.error(err);
                return;
            }
            console.log('prefeb assets in  have been loaded.');
            _this.progressBarEvent();
        });
        cc.loader.loadResDir("fineImg", function (err, assets) {
            if (err) {
                cc.error(err);
                return;
            }
            console.log('finishImg assets in  have been loaded.');
            _this.progressBarEvent();
        });
        cc.loader.loadResDir("discoverImg", function (err, assets) {
            if (err) {
                cc.error(err);
                return;
            }
            console.log('originalImg assets in  have been loaded.');
            _this.progressBarEvent();
        });
        cc.loader.loadResDir("imgConfig", function (err, assets) {
            if (err) {
                cc.error(err);
                return;
            }
            findGameData_1.fgData.levelAll = assets.length;
            console.log('imgConfig assets in  have been loaded.');
            _this.progressBarEvent();
        });
        cc.director.preloadScene(findControl_1.spectacle.host, function (err, assets) {
            cc.log("game scene preloaded");
            _this.progressBarEvent();
        });
        cc.director.preloadScene(findControl_1.spectacle.parlour, function (err, assets) {
            cc.log("hall scene preloaded");
            _this.progressBarEvent();
        });
    };
    register.prototype.progressBarEvent = function () {
        var _this = this;
        var fill = 1 / 6;
        this.nowNum++;
        cc.Tween.stopAllByTarget(this.loaging_bar_yellow);
        cc.tween(this.loaging_bar_yellow).to(0.5, { fillRange: fill * this.nowNum })
            .call(function () {
            if (_this.nowNum == _this.resNum) {
                _this.scheduleOnce(function () {
                    if (findGameData_1.fgData.userData.isHall) {
                        cc.director.loadScene(findControl_1.spectacle.parlour);
                    }
                    else {
                        findControl_1.findControl.imgId = findGameData_1.fgData.userData.level;
                        cc.director.loadScene(findControl_1.spectacle.host);
                    }
                }, 0.05);
            }
        }).start();
    };
    register.prototype.showShiPing = function () {
        console.log("android---------------showShiPing------------------");
        findGameData_1.fgData.showVideo(function () {
            console.log("zzzzzzzzzzzzzzzzzzzzwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
        });
    };
    register.prototype.showbanner = function () {
        console.log("android---------------showbanner------------------");
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showbanner", "()V");
    };
    register.prototype.hidebanner = function () {
        console.log("android---------------hidebanner------------------");
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hidebanner", "()V");
    };
    __decorate([
        property(cc.Node)
    ], register.prototype, "loading_bg", void 0);
    __decorate([
        property(cc.Node)
    ], register.prototype, "loading_bg2", void 0);
    __decorate([
        property(cc.Sprite)
    ], register.prototype, "loaging_bar_yellow", void 0);
    __decorate([
        property(cc.Node)
    ], register.prototype, "loadingBox", void 0);
    __decorate([
        property(cc.Node)
    ], register.prototype, "gotoHallBox", void 0);
    __decorate([
        property(cc.Node)
    ], register.prototype, "loading_play", void 0);
    register = __decorate([
        ccclass
    ], register);
    return register;
}(cc.Component));
exports.default = register;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcmVnaXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0RBQWlEO0FBQ2pELGtEQUFvRTtBQUNwRSxvREFBc0Q7QUFFaEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpTEM7UUE5S0csZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsd0JBQWtCLEdBQWMsSUFBSSxDQUFDO1FBR3JDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRXJCLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxZQUFNLEdBQUcsQ0FBQyxDQUFDOztJQTRKdkIsQ0FBQztJQTFKRyx3QkFBSyxHQUFMO1FBQUEsaUJBNkRDO1FBNURHLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7WUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ2hEO1FBQ0QseUJBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLHlCQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4Qyx5QkFBVyxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQy9DLHlCQUFXLENBQUMsYUFBYSxD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IGZyb20gXCIuL3Rvb2wvZmluZFN0b3JhZ2VcIjtcbmltcG9ydCB7IHNwZWN0YWNsZSwgd2lja2V0LCBmaW5kQ29udHJvbCB9IGZyb20gXCIuL3Rvb2wvZmluZENvbnRyb2xcIjtcbmltcG9ydCB7IGZnRGF0YSwgc3RvcmFnZSB9IGZyb20gXCIuL3Rvb2wvZmluZEdhbWVEYXRhXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG4gXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmVnaXN0ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbG9hZGluZ19iZzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsb2FkaW5nX2JnMjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGxvYWdpbmdfYmFyX3llbGxvdzogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxvYWRpbmdCb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZ290b0hhbGxCb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbG9hZGluZ19wbGF5OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgcmVzTnVtID0gNjtcbiAgICBwcml2YXRlIG5vd051bSA9IDA7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLklQQUQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcykuZml0SGVpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdFdpZHRoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBmaW5kQ29udHJvbC5hZGFwdGVyQmcodGhpcy5sb2FkaW5nX2JnKTtcbiAgICAgICAgZmluZENvbnRyb2wuYWRhcHRlckJnKHRoaXMubG9hZGluZ19iZzIpO1xuICAgICAgICBmaW5kQ29udHJvbC5maW5kU291bmRUb29sLmluaXRCdG5DbGlja0VmZmVjdCgpO1xuICAgICAgICBmaW5kQ29udHJvbC5maW5kU291bmRUb29sLmluaXRiZ21NdXNpYygpO1xuXG4gICAgICAgIGxldCBwbGF5cm9vbVN0b3JhZ2UgPSBmaW5kU3RvcmFnZS5nZXRTdG9yYWdlSlNPTihzdG9yYWdlLmdhbWVkYXRhKTtcbiAgICAgICAgaWYgKHBsYXlyb29tU3RvcmFnZSkge1xuICAgICAgICAgICAgZmdEYXRhLnVzZXJEYXRhID0gcGxheXJvb21TdG9yYWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgZmluZENvbnRyb2wuc2V0c2NlbmVOb2RlKHRoaXMubm9kZSk7XG5cbiAgICAgICAgaWYgKCFmZ0RhdGEudXNlckRhdGEuaXNDbGF1c2UpIHtcbiAgICAgICAgICAgIHRoaXMuZ290b0hhbGxCb3guYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdCb3guYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBmaW5kQ29udHJvbC5maW5kUmVzVXRpbC5zaG93RGlhbG9nKHdpY2tldC5Cb29rUG9wLCB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmdEYXRhLnVzZXJEYXRhLmlzQ2xhdXNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nb3RvSGFsbEJveC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdCb3guYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGZnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmxvYWRpbmdfcGxheSkudG8oMC41LCB7IHNjYWxlOiAxLjEgfSkudG8oMC41LCB7IHNjYWxlOiAxIH0pLnVuaW9uKCkucmVwZWF0Rm9yZXZlcigpLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdvdG9IYWxsQm94LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdCb3guYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubG9hZGluZ19wbGF5KS50bygwLjUsIHsgc2NhbGU6IDEuMSB9KS50bygwLjUsIHsgc2NhbGU6IDEgfSkudW5pb24oKS5yZXBlYXRGb3JldmVyKCkuc3RhcnQoKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgZmdEYXRhLnNldFZpZGVvRmFpbENiKCgpPT57XG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZlYi90b2FzdFwiLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgdG9hc3QgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgICAgIGZpbmRDb250cm9sLmZpbmRSZXNVdGlsLmJpbmRSZXNBc3NldCh0b2FzdCwgcHJlZmFiKTtcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50Tm9kZSA9IGZpbmRDb250cm9sLmdldHNjZW5lTm9kZSgpO1xuICAgICAgICAgICAgICAgIGlmICh0b2FzdCAmJiBwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuYWRkQ2hpbGQodG9hc3QpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG9hc3RMYWJlbCA9IHRvYXN0LmdldENoaWxkQnlOYW1lKFwibGFiZWxcIik7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0TGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIk5vIGFkcyBhdCB0aGUgbW9tZW50XCI7XG4gICAgICAgICAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0b2FzdCk7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0Lm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRvYXN0KS50bygwLjE1LCB7IHNjYWxlOiAxLjIgfSkudG8oMC4xNSwgeyBzY2FsZTogMSB9KS5kZWxheSgwLjUpLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3QuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuIFxuXG4gICAgfVxuXG5cbiAgICBvbkNsaWNrX2dvdG9QbGF5KCkge1xuICAgICAgICB0aGlzLmdvdG9IYWxsQm94LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvYWRpbmdCb3guYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgZmluZENvbnRyb2wuZmluZFNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuXG4gICAgICAgIHRoaXMubG9hZ2luZ19iYXJfeWVsbG93LmZpbGxSYW5nZSA9IDA7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLmxvYWdpbmdfYmFyX3llbGxvdylcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXNEaXIoXCJwcmVmZWJcIiwgKGVyciwgYXNzZXRzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncHJlZmViIGFzc2V0cyBpbiAgaGF2ZSBiZWVuIGxvYWRlZC4nKTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJFdmVudCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXNEaXIoXCJmaW5lSW1nXCIsIChlcnIsIGFzc2V0cykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZpbmlzaEltZyBhc3NldHMgaW4gIGhhdmUgYmVlbiBsb2FkZWQuJyk7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyRXZlbnQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzRGlyKFwiZGlzY292ZXJJbWdcIiwgKGVyciwgYXNzZXRzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb3JpZ2luYWxJbWcgYXNzZXRzIGluICBoYXZlIGJlZW4gbG9hZGVkLicpO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0JhckV2ZW50KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlc0RpcihcImltZ0NvbmZpZ1wiLCAoZXJyLCBhc3NldHMpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZnRGF0YS5sZXZlbEFsbCA9IGFzc2V0cy5sZW5ndGg7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW1nQ29uZmlnIGFzc2V0cyBpbiAgaGF2ZSBiZWVuIGxvYWRlZC4nKTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJFdmVudCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoc3BlY3RhY2xlLmhvc3QsIChlcnIsIGFzc2V0cykgPT4ge1xuICAgICAgICAgICAgY2MubG9nKFwiZ2FtZSBzY2VuZSBwcmVsb2FkZWRcIik7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyRXZlbnQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShzcGVjdGFjbGUucGFybG91ciwgKGVyciwgYXNzZXRzKSA9PiB7XG4gICAgICAgICAgICBjYy5sb2coXCJoYWxsIHNjZW5lIHByZWxvYWRlZFwiKTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJFdmVudCgpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHByb2dyZXNzQmFyRXZlbnQoKSB7XG4gICAgICAgIGxldCBmaWxsID0gMSAvIDY7XG4gICAgICAgIHRoaXMubm93TnVtKys7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLmxvYWdpbmdfYmFyX3llbGxvdylcbiAgICAgICAgY2MudHdlZW4odGhpcy5sb2FnaW5nX2Jhcl95ZWxsb3cpLnRvKDAuNSwgeyBmaWxsUmFuZ2U6IGZpbGwgKiB0aGlzLm5vd051bSB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vd051bSA9PSB0aGlzLnJlc051bSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmdEYXRhLnVzZXJEYXRhLmlzSGFsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzcGVjdGFjbGUucGFybG91cik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmRDb250cm9sLmltZ0lkID0gZmdEYXRhLnVzZXJEYXRhLmxldmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzcGVjdGFjbGUuaG9zdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIDAuMDUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG5cblxuICAgIHNob3dTaGlQaW5nKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImFuZHJvaWQtLS0tLS0tLS0tLS0tLS1zaG93U2hpUGluZy0tLS0tLS0tLS0tLS0tLS0tLVwiKVxuICAgICAgICBmZ0RhdGEuc2hvd1ZpZGVvKCgpPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInp6enp6enp6enp6enp6enp6enp6d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dcIik7XG4gICAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIHNob3diYW5uZXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYW5kcm9pZC0tLS0tLS0tLS0tLS0tLXNob3diYW5uZXItLS0tLS0tLS0tLS0tLS0tLS1cIilcbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwic2hvd2Jhbm5lclwiLCBcIigpVlwiKTtcbiAgICB9XG5cblxuICAgIGhpZGViYW5uZXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYW5kcm9pZC0tLS0tLS0tLS0tLS0tLWhpZGViYW5uZXItLS0tLS0tLS0tLS0tLS0tLS1cIilcbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiaGlkZWJhbm5lclwiLCBcIigpVlwiKTtcbiAgICB9XG59XG5cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
        this.privacyPolicyUrl = "https://sites.google.com/view/chic-contrast-privacy-policy/%E9%A6%96%E9%A1%B5";
        this.termsofServiceUrl = "https://sites.google.com/view/chiccontrasttermsofservice/%E9%A6%96%E9%A1%B5";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9maW5kR2FtZURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkNBQTRDO0FBRTVDLElBQUksZUFBZSxHQUFlLElBQUksQ0FBQztBQUN2QyxJQUFJLGFBQWEsR0FBZSxJQUFJLENBQUM7QUFDckM7SUFZSTtRQU1BLHFCQUFnQixHQUFXLCtFQUErRSxDQUFDO1FBQzNHLHNCQUFpQixHQUFXLDZFQUE2RSxDQUFDO1FBRTFHLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsYUFBUSxHQUFRO1lBQ1osUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsQ0FBQztZQUNYLEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLEVBQUUsS0FBSztZQUNkLFlBQVksRUFBRSxLQUFLO1NBQ3RCLENBQUM7UUFoQkUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFaYSx3QkFBVyxHQUF6QjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFzQkQsa0NBQVcsR0FBWDtRQUNJLHlCQUFXLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFHRCxxQ0FBYyxHQUFkLFVBQWUsRUFBYztRQUN6Qix3QkFBd0I7UUFDeEIsc0JBQXNCO1FBRXRCLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUM7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Q0FBQTtBQUNmLENBQUMsRUFQVyxLQUFLLEdBQUwsYUFBSyxLQUFMLGFBQUssUUFPaEI7QUFHRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRztBQUU1QixDQUFDLENBQUE7QUFFRCwwQkFBMEI7QUFDMUIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEdBQUc7SUFDN0IscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixJQUFJO0lBQ0osTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQTtBQUMvQixDQUFDLENBQUE7QUFHRCwwQkFBMEI7QUFDMUIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUc7SUFDM0IscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixJQUFJO0lBQ0osTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUE7QUFDN0IsQ0FBQyxDQUFBO0FBRUQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHO0FBRTFCLENBQUMsQ0FBQTtBQUVBLE1BQU07QUFDUCxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUc7QUFFckIsQ0FBQyxDQUFBO0FBR0QsTUFBTTtBQUNOLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRztBQUV6QixDQUFDLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIgXG5pbXBvcnQgeyBmaW5kU3RvcmFnZSB9IGZyb20gXCIuL2ZpbmRTdG9yYWdlXCI7XG5cbmxldCBvbkNsb3NlRmluaXNoQ2I6ICgpID0+IHZvaWQgPSBudWxsO1xubGV0IG9uQ2xvc2VmYWlsQ2I6ICgpID0+IHZvaWQgPSBudWxsO1xuY2xhc3MgZmluZEdhbWVEYXRhIHtcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogZmluZEdhbWVEYXRhID0gbnVsbDtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogZmluZEdhbWVEYXRhIHtcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IGZpbmRHYW1lRGF0YSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfSElERSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlRGF0YSgpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YWN5UG9saWN5VXJsOiBzdHJpbmcgPSBcImh0dHBzOi8vc2l0ZXMuZ29vZ2xlLmNvbS92aWV3L2NoaWMtY29udHJhc3QtcHJpdmFjeS1wb2xpY3kvJUU5JUE2JTk2JUU5JUExJUI1XCI7XG4gICAgdGVybXNvZlNlcnZpY2VVcmw6IHN0cmluZyA9IFwiaHR0cHM6Ly9zaXRlcy5nb29nbGUuY29tL3ZpZXcvY2hpY2NvbnRyYXN0dGVybXNvZnNlcnZpY2UvJUU5JUE2JTk2JUU5JUExJUI1XCI7XG5cbiAgICBsZXZlbEFsbDogbnVtYmVyID0gMzA7XG4gICAgdXNlckRhdGE6IGFueSA9IHtcbiAgICAgICAgaXNDbGF1c2U6IGZhbHNlLCAgICAvL+aYr+WQpuaJk+W8gOi/h+makOengeWNj+iuriAgICBcbiAgICAgICAgdGlzaGlOdW06IDEsICAgICAgICAvL+aPkOekuuasoeaVsFxuICAgICAgICBsZXZlbDogMSwgICAgICAgICAgIC8v5b2T5YmN5YWz5Y2hXG4gICAgICAgIGlzSGFsbDogZmFsc2UsICAgICAgLy/mmK/lkKbov5Tlm57ov4flpKfljoVcbiAgICAgICAgaXNHdWRpZTogZmFsc2UsICAgICAgLy/mmK/lkKbmiZPlvIDov4fmlrDmiYvlvJXlr7xcbiAgICAgICAgZmluaXNoTGV2ZWw1OiBmYWxzZSwgIC8v5piv5ZCm5a6M5oiQ6L+H56ysNeWFs1xuICAgIH07XG5cbiAgICBzdG9yYWdlRGF0YSgpIHtcbiAgICAgICAgZmluZFN0b3JhZ2Uuc2V0U3RvcmFnZUpTT04oc3RvcmFnZS5nYW1lZGF0YSwgdGhpcy51c2VyRGF0YSk7XG4gICAgfVxuXG5cbiAgICBzZXRWaWRlb0ZhaWxDYihjYjogKCkgPT4gdm9pZCkge1xuICAgICAgICAvLyBvbkNsb3NlZmFpbENiID0gbnVsbDtcbiAgICAgICAgLy8gb25DbG9zZWZhaWxDYiA9IGNiO1xuXG4gICAgICAgIHdpbmRvd1snb25DbG9zZWZhaWxDYiddID0gbnVsbDtcbiAgICAgICAgd2luZG93WydvbkNsb3NlZmFpbENiJ10gID0gY2I7XG4gICAgfVxuXG4gICAgLy/nnIvlub/lkYpcbiAgICBzaG93VmlkZW8oZmluaXNoQ2I6ICgpID0+IHZvaWQpIHtcbiAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCJhbmRyb2lkLS0tLS0tLS0tLS0t55yL5bm/5ZGKXCIpXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLk9TX0FORFJPSUQgPT0gY2Muc3lzLm9zKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzaG93U2hpUGluZ1wiLCBcIigpVlwiKTtcbiAgICAgICAgICAgIG9uQ2xvc2VGaW5pc2hDYiA9IG51bGw7XG4gICAgICAgICAgICBvbkNsb3NlRmluaXNoQ2IgPSBmaW5pc2hDYjtcbiAgICAgICAgfSBlbHNlIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLk9TX0lPUyA9PSBjYy5zeXMub3MpIHtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIkZpbmRBZE1nclwiLCBcImxvYWRSZXdhcmRcIik7XG4gICAgICAgICAgICB3aW5kb3dbJ29uQ2xvc2VGaW5pc2hDYiddID0gbnVsbDtcbiAgICAgICAgICAgIHdpbmRvd1snb25DbG9zZUZpbmlzaENiJ109IGZpbmlzaENiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmluaXNoQ2IoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v5omT5byAYmFubmVyXG4gICAgc2hvd0Jhbm5lcigpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMuT1NfQU5EUk9JRCA9PSBjYy5zeXMub3MpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcInNob3diYW5uZXJcIiwgXCIoKVZcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+WFs+mXrWJhbm5lclxuICAgIGNsb3NlQmFubmVyKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5PU19BTkRST0lEID09IGNjLnN5cy5vcykge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiaGlkZWJhbm5lclwiLCBcIigpVlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v5omT5byAdXJsXG4gICAgb3BlblVybCgpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMuT1NfQU5EUk9JRCA9PSBjYy5zeXMub3MpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcIm9wZW5VcmxcIiwgXCIoKVZcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0R2FtZXN0b3AoZnVuYzogRnVuY3Rpb24pIHtcbiAgICAgICAgd2luZG93WydnYW1lc3RvcCddID0gZnVuYztcbiAgICB9XG5cbiAgICBzZXRHYW1lcmVjb3ZlcnkoZnVuYzogRnVuY3Rpb24pIHtcbiAgICAgICAgd2luZG93WydnYW1lcmVjb3ZlcnknXSA9IGZ1bmM7XG4gICAgfVxufVxuXG5leHBvcnQgbGV0IGZnRGF0YSA9IGZpbmRHYW1lRGF0YS5nZXRJbnN0YW5jZSgpO1xuXG5leHBvcnQgZW51bSBzdG9yYWdlIHtcbiAgICBnYW1lZGF0YSA9IFwiZ2FtZWRhdGFcIixcbn1cblxuZXhwb3J0IGVudW0gc291bmQge1xuICAgIGJnbSA9IFwiYmdtXCIsXG4gICAgY2xpY2sgPSBcImNsaWNrXCIsXG4gICAgY29ycmVjdCA9IFwiY29ycmVjdFwiLFxuICAgIGVyciA9IFwiZXJyXCIsXG4gICAgZmFpbCA9IFwiZmFpbFwiLFxuICAgIHdpbiA9IFwid2luXCIsXG59XG5cblxud2luZG93WydvbkNsb3NlRmluaXNoQ2InXSA9ICgpID0+IHtcbiAgIFxufVxuXG4vKipzZGvosIPnlKhqc+mHjOmdondpbmRvd+WFrOS8l+eahOWHveaVsCAqL1xud2luZG93WydvbkNsb3NlVmRpZW9GaW5pc2hDYiddID0gKCkgPT4ge1xuICAgIC8vIGlmIChpc1BsYXlNdXNpYykge1xuICAgIC8vICAgICBBdWRpb0N0ci5iZygpO1xuICAgIC8vIH1cbiAgICB3aW5kb3dbJ29uQ2xvc2VGaW5pc2hDYiddKClcbn1cblxuXG4vKipzZGvosIPnlKhqc+mHjOmdondpbmRvd+WFrOS8l+eahOWHveaVsCAqL1xud2luZG93WydvbkNsb3NlVmRpZW9mYWlsQ2InXSA9ICgpID0+IHtcbiAgICAvLyBpZiAoaXNQbGF5TXVzaWMpIHtcbiAgICAvLyAgICAgQXVkaW9DdHIuYmcoKTtcbiAgICAvLyB9XG4gICAgd2luZG93WydvbkNsb3NlZmFpbENiJ10oKVxufVxuXG53aW5kb3dbJ29uQ2xvc2VmYWlsQ2InXSA9ICgpID0+IHtcbiAgIFxufVxuXG4gLy/muLjmiI/mmoLlgZxcbndpbmRvd1snZ2FtZXN0b3AnXSA9ICgpID0+IHtcblxufVxuXG5cbi8v5ri45oiP5oGi5aSNXG53aW5kb3dbJ2dhbWVyZWNvdmVyeSddID0gKCkgPT4ge1xuXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/prefeb/imgItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b349d0IddZO5bDF9FOpApzL', 'imgItem');
// script/prefeb/imgItem.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var findControl_1 = require("../tool/findControl");
var findGameData_1 = require("../tool/findGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var imgItem = /** @class */ (function (_super) {
    __extends(imgItem, _super);
    function imgItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hall_mask = null;
        _this.img = null;
        _this.str = null;
        _this.idx = 0;
        _this.isbool = false;
        _this.hall = null;
        _this.completeColor = cc.color(103, 128, 90);
        _this.guanqiaColor = cc.color(188, 140, 101);
        return _this;
    }
    imgItem.prototype.start = function () {
    };
    imgItem.prototype.init = function (idx, hall) {
        this.idx = idx;
        this.hall = hall;
        this.str.string = "Level " + (idx + 1);
        this.str.node.color = this.guanqiaColor;
        if (this.idx < findGameData_1.fgData.userData.level) {
            this.hall_mask.active = false;
            this.isbool = true;
            this.str.string = "Unlock";
            this.str.node.color = this.completeColor;
        }
        else {
            this.hall_mask.active = true;
            this.isbool = false;
        }
        findControl_1.findControl.findResUtil.loadSprite("fineImg/" + "fine_" + (this.idx + 1), this.img);
    };
    imgItem.prototype.onclick_item = function () {
        findControl_1.findControl.findSoundTool.commonBtnClick();
        if (this.isbool) {
            findControl_1.findControl.imgId = this.idx + 1;
            findGameData_1.fgData.userData.isHall = false;
            findGameData_1.fgData.storageData();
            cc.director.loadScene(findControl_1.spectacle.host);
        }
        else {
            this.hall.showToast("The level has not been unlocked yet");
        }
    };
    __decorate([
        property(cc.Node)
    ], imgItem.prototype, "hall_mask", void 0);
    __decorate([
        property(cc.Sprite)
    ], imgItem.prototype, "img", void 0);
    __decorate([
        property(cc.Label)
    ], imgItem.prototype, "str", void 0);
    imgItem = __decorate([
        ccclass
    ], imgItem);
    return imgItem;
}(cc.Component));
exports.default = imgItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcHJlZmViL2ltZ0l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsbURBQTZEO0FBQzdELHFEQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQXVEQztRQXBERyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLFNBQUcsR0FBYyxJQUFJLENBQUM7UUFHdEIsU0FBRyxHQUFhLElBQUksQ0FBQztRQUdiLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFFaEIsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUVoQyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLG1CQUFhLEdBQWEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELGtCQUFZLEdBQWEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDOztJQW9DckQsQ0FBQztJQWxDRyx1QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHNCQUFJLEdBQUosVUFBSyxHQUFXLEVBQUUsSUFBYTtRQUMzQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLFFBQVEsR0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBRTtRQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN4QyxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcscUJBQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7WUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDNUM7YUFBTTtZQUNILElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN2QjtRQUNELHlCQUFXLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUVELDhCQUFZLEdBQVo7UUFDSSx5QkFBVyxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYix5QkFBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNqQyxxQkFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQy9CLHFCQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsdUJBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QzthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMscUNBQXFDLENBQUMsQ0FBQztTQUM5RDtJQUVMLENBQUM7SUFsREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNFO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0NBQ0U7SUFUSixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBdUQzQjtJQUFELGNBQUM7Q0F2REQsQUF1REMsQ0F2RG9DLEVBQUUsQ0FBQyxTQUFTLEdBdURoRDtrQkF2RG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIgXG5pbXBvcnQgcGFybG91ciBmcm9tIFwiLi4vcGFybG91clwiO1xuaW1wb3J0IHsgZmluZENvbnRyb2wsIHNwZWN0YWNsZSB9IGZyb20gXCIuLi90b29sL2ZpbmRDb250cm9sXCI7XG5pbXBvcnQgeyBmZ0RhdGEgfSBmcm9tIFwiLi4vdG9vbC9maW5kR2FtZURhdGFcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGltZ0l0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGFsbF9tYXNrOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgaW1nOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHN0cjogY2MuTGFiZWwgPSBudWxsO1xuXG5cbiAgICBwcml2YXRlIGlkeDogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgaXNib29sOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBoYWxsOiBwYXJsb3VyID0gbnVsbDtcblxuICAgIGNvbXBsZXRlQ29sb3I6IGNjLkNvbG9yID0gY2MuY29sb3IoMTAzLCAxMjgsIDkwKTtcbiAgICBndWFucWlhQ29sb3I6IGNjLkNvbG9yID0gY2MuY29sb3IoMTg4LCAxNDAsIDEwMSk7XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIGluaXQoaWR4OiBudW1iZXIsIGhhbGw6IHBhcmxvdXIpIHtcbiAgICAgICAgdGhpcy5pZHggPSBpZHg7XG4gICAgICAgIHRoaXMuaGFsbCA9IGhhbGw7XG4gICAgICAgIHRoaXMuc3RyLnN0cmluZyA9IFwiTGV2ZWwgXCIrKGlkeCArIDEpIDtcbiAgICAgICAgdGhpcy5zdHIubm9kZS5jb2xvciA9IHRoaXMuZ3VhbnFpYUNvbG9yO1xuICAgICAgICBpZiAodGhpcy5pZHggPCBmZ0RhdGEudXNlckRhdGEubGV2ZWwpIHtcbiAgICAgICAgICAgIHRoaXMuaGFsbF9tYXNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pc2Jvb2wgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zdHIuc3RyaW5nID0gXCJVbmxvY2tcIjtcbiAgICAgICAgICAgIHRoaXMuc3RyLm5vZGUuY29sb3IgPSB0aGlzLmNvbXBsZXRlQ29sb3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhhbGxfbWFzay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pc2Jvb2wgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmaW5kQ29udHJvbC5maW5kUmVzVXRpbC5sb2FkU3ByaXRlKFwiZmluZUltZy9cIiArIFwiZmluZV9cIiArICh0aGlzLmlkeCArIDEpLCB0aGlzLmltZyk7XG4gICAgfVxuXG4gICAgb25jbGlja19pdGVtKCkge1xuICAgICAgICBmaW5kQ29udHJvbC5maW5kU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIGlmICh0aGlzLmlzYm9vbCkge1xuICAgICAgICAgICAgZmluZENvbnRyb2wuaW1nSWQgPSB0aGlzLmlkeCArIDE7XG4gICAgICAgICAgICBmZ0RhdGEudXNlckRhdGEuaXNIYWxsID0gZmFsc2U7XG4gICAgICAgICAgICBmZ0RhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzcGVjdGFjbGUuaG9zdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhhbGwuc2hvd1RvYXN0KFwiVGhlIGxldmVsIGhhcyBub3QgYmVlbiB1bmxvY2tlZCB5ZXRcIik7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/TreePop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '373fe8INcZH8KIbG9PDCZWr', 'TreePop');
// script/dialog/TreePop.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var findControl_1 = require("../tool/findControl");
var findGameData_1 = require("../tool/findGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TreePop = /** @class */ (function (_super) {
    __extends(TreePop, _super);
    function TreePop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = null;
        _this.pause_sprite = null;
        _this.setting_sprite = null;
        _this.soundBox = null;
        _this.musicBox = null;
        _this.zhengdongBox = null;
        _this.setting_pausebtn = null;
        _this.setting_ok = null;
        _this.callback = null;
        return _this;
    }
    TreePop.prototype.start = function () {
        this.init();
        findGameData_1.fgData.showBanner();
    };
    TreePop.prototype.initData = function (data) {
        this.callback = data.callback;
        if (data.isGame) {
            this.title.spriteFrame = this.pause_sprite;
            this.setting_ok.active = true;
            this.setting_pausebtn.active = false;
        }
        else {
            this.title.spriteFrame = this.setting_sprite;
            this.setting_ok.active = true;
            this.setting_pausebtn.active = false;
        }
    };
    TreePop.prototype.init = function () {
        if (!findControl_1.findControl.findSoundTool.musicSwitch) {
            this.musicBox.getChildByName("setting_on").active = false;
            this.musicBox.getChildByName("setting_off").active = true;
        }
        else {
            this.musicBox.getChildByName("setting_on").active = true;
            this.musicBox.getChildByName("setting_off").active = false;
        }
        if (!findControl_1.findControl.findSoundTool.effectSwitch) {
            this.soundBox.getChildByName("setting_on").active = false;
            this.soundBox.getChildByName("setting_off").active = true;
        }
        else {
            this.soundBox.getChildByName("setting_on").active = true;
            this.soundBox.getChildByName("setting_off").active = false;
        }
        if (!findControl_1.findControl.findSoundTool.shockSwitch) {
            this.zhengdongBox.getChildByName("setting_on").active = false;
            this.zhengdongBox.getChildByName("setting_off").active = true;
        }
        else {
            this.zhengdongBox.getChildByName("setting_on").active = true;
            this.zhengdongBox.getChildByName("setting_off").active = false;
        }
    };
    TreePop.prototype.onClick_musicbtn = function () {
        findControl_1.findControl.findSoundTool.commonBtnClick();
        findControl_1.findControl.findSoundTool.switchMusic();
        if (!findControl_1.findControl.findSoundTool.musicSwitch) {
            this.musicBox.getChildByName("setting_on").active = false;
            this.musicBox.getChildByName("setting_off").active = true;
        }
        else {
            this.musicBox.getChildByName("setting_on").active = true;
            this.musicBox.getChildByName("setting_off").active = false;
        }
    };
    TreePop.prototype.onClick_soundbtn = function () {
        findControl_1.findControl.findSoundTool.commonBtnClick();
        findControl_1.findControl.findSoundTool.switchEffect();
        if (!findControl_1.findControl.findSoundTool.effectSwitch) {
            this.soundBox.getChildByName("setting_on").active = false;
            this.soundBox.getChildByName("setting_off").active = true;
        }
        else {
            this.soundBox.getChildByName("setting_on").active = true;
            this.soundBox.getChildByName("setting_off").active = false;
        }
    };
    TreePop.prototype.onClick_zhengdongbtn = function () {
        findControl_1.findControl.findSoundTool.commonBtnClick();
        findControl_1.findControl.findSoundTool.switchShock();
        if (!findControl_1.findControl.findSoundTool.shockSwitch) {
            this.zhengdongBox.getChildByName("setting_on").active = false;
            this.zhengdongBox.getChildByName("setting_off").active = true;
        }
        else {
            this.zhengdongBox.getChildByName("setting_on").active = true;
            this.zhengdongBox.getChildByName("setting_off").active = false;
        }
    };
    TreePop.prototype.onClick_continue_btn = function () {
        findControl_1.findControl.findSoundTool.commonBtnClick();
        this.node.destroy();
        findGameData_1.fgData.closeBanner();
        this.callback && this.callback();
    };
    TreePop.prototype.onClick_ok_btn = function () {
        findControl_1.findControl.findSoundTool.commonBtnClick();
        this.callback && this.callback();
        this.node.destroy();
        findGameData_1.fgData.closeBanner();
    };
    TreePop.prototype.onClick_PrivacyPolicy_btn = function () {
        findControl_1.findControl.findSoundTool.commonBtnClick();
        cc.sys.openURL(findGameData_1.fgData.privacyPolicyUrl);
    };
    TreePop.prototype.onClick_Termsofservicebtn = function () {
        cc.sys.openURL(findGameData_1.fgData.termsofServiceUrl);
        findControl_1.findControl.findSoundTool.commonBtnClick();
    };
    __decorate([
        property(cc.Sprite)
    ], TreePop.prototype, "title", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], TreePop.prototype, "pause_sprite", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], TreePop.prototype, "setting_sprite", void 0);
    __decorate([
        property(cc.Node)
    ], TreePop.prototype, "soundBox", void 0);
    __decorate([
        property(cc.Node)
    ], TreePop.prototype, "musicBox", void 0);
    __decorate([
        property(cc.Node)
    ], TreePop.prototype, "zhengdongBox", void 0);
    __decorate([
        property(cc.Node)
    ], TreePop.prototype, "setting_pausebtn", void 0);
    __decorate([
        property(cc.Node)
    ], TreePop.prototype, "setting_ok", void 0);
    TreePop = __decorate([
        ccclass
    ], TreePop);
    return TreePop;
}(cc.Component));
exports.default = TreePop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL1RyZWVQb3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBQ2xELHFEQUE4QztBQUd4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQXVJQztRQW5JRyxXQUFLLEdBQWMsSUFBSSxDQUFDO1FBR3hCLGtCQUFZLEdBQW1CLElBQUksQ0FBQztRQUdwQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFHdEMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUdqQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQWEsSUFBSSxDQUFDOztJQTRHOUIsQ0FBQztJQTFHRyx1QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1oscUJBQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsMEJBQVEsR0FBUixVQUFTLElBQUk7UUFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDeEM7YUFBTTtZQUNILElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxj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RDNCLE9BQU87T0FDYSxPQUFPLENBdUkzQjtJQUFELGNBQUM7Q0F2SUQsQUF1SUMsQ0F2SW9DLEVBQUUsQ0FBQyxTQUFTLEdBdUloRDtrQkF2SW9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaW5kQ29udHJvbCB9IGZyb20gXCIuLi90b29sL2ZpbmRDb250cm9sXCI7XG5pbXBvcnQgeyBmZ0RhdGEgfSBmcm9tIFwiLi4vdG9vbC9maW5kR2FtZURhdGFcIjtcbiBcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWVQb3AgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHRpdGxlOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHBhdXNlX3Nwcml0ZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNldHRpbmdfc3ByaXRlOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzb3VuZEJveDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBtdXNpY0JveDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB6aGVuZ2RvbmdCb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc2V0dGluZ19wYXVzZWJ0bjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzZXR0aW5nX29rOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGw7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIGZnRGF0YS5zaG93QmFubmVyKCk7XG4gICAgfVxuXG4gICAgaW5pdERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gZGF0YS5jYWxsYmFjaztcbiAgICAgICAgaWYgKGRhdGEuaXNHYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlLnNwcml0ZUZyYW1lID0gdGhpcy5wYXVzZV9zcHJpdGU7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdfb2suYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ19wYXVzZWJ0bi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUuc3ByaXRlRnJhbWUgPSB0aGlzLnNldHRpbmdfc3ByaXRlO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5nX29rLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdfcGF1c2VidG4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGluaXQoKSB7XG5cbiAgICAgICAgaWYgKCFmaW5kQ29udHJvbC5maW5kU291bmRUb29sLm11c2ljU3dpdGNoKSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vblwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubXVzaWNCb3guZ2V0Q2hpbGRCeU5hbWUoXCJzZXR0aW5nX29mZlwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tdXNpY0JveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb25cIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubXVzaWNCb3guZ2V0Q2hpbGRCeU5hbWUoXCJzZXR0aW5nX29mZlwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZmluZENvbnRyb2wuZmluZFNvdW5kVG9vbC5lZmZlY3RTd2l0Y2gpIHtcbiAgICAgICAgICAgIHRoaXMuc291bmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJzZXR0aW5nX29uXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zb3VuZEJveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb2ZmXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vblwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zb3VuZEJveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb2ZmXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFmaW5kQ29udHJvbC5maW5kU291bmRUb29sLnNob2NrU3dpdGNoKSB7XG4gICAgICAgICAgICB0aGlzLnpoZW5nZG9uZ0JveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb25cIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnpoZW5nZG9uZ0JveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb2ZmXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnpoZW5nZG9uZ0JveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb25cIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuemhlbmdkb25nQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vZmZcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIG9uQ2xpY2tfbXVzaWNidG4oKSB7XG4gICAgICAgIGZpbmRDb250cm9sLmZpbmRTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgZmluZENvbnRyb2wuZmluZFNvdW5kVG9vbC5zd2l0Y2hNdXNpYygpO1xuICAgICAgICBpZiAoIWZpbmRDb250cm9sLmZpbmRTb3VuZFRvb2wubXVzaWNTd2l0Y2gpIHtcbiAgICAgICAgICAgIHRoaXMubXVzaWNCb3guZ2V0Q2hpbGRCeU5hbWUoXCJzZXR0aW5nX29uXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5tdXNpY0JveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb2ZmXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vblwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5tdXNpY0JveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb2ZmXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGlja19zb3VuZGJ0bigpIHtcbiAgICAgICAgZmluZENvbnRyb2wuZmluZFNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBmaW5kQ29udHJvbC5maW5kU291bmRUb29sLnN3aXRjaEVmZmVjdCgpO1xuICAgICAgICBpZiAoIWZpbmRDb250cm9sLmZpbmRTb3VuZFRvb2wuZWZmZWN0U3dpdGNoKSB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kQm94LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ19vblwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc291bmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJzZXR0aW5nX29mZlwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zb3VuZEJveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb25cIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc291bmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJzZXR0aW5nX29mZlwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkNsaWNrX3poZW5nZG9uZ2J0bigpIHtcbiAgICAgICAgZmluZENvbnRyb2wuZmluZFNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBmaW5kQ29udHJvbC5maW5kU291bmRUb29sLnN3aXRjaFNob2NrKCk7XG4gICAgICAgIGlmICghZmluZENvbnRyb2wuZmluZFNvdW5kVG9vbC5zaG9ja1N3aXRjaCkge1xuICAgICAgICAgICAgdGhpcy56aGVuZ2RvbmdCb3guZ2V0Q2hpbGRCeU5hbWUoXCJzZXR0aW5nX29uXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy56aGVuZ2RvbmdCb3guZ2V0Q2hpbGRCeU5hbWUoXCJzZXR0aW5nX29mZlwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy56aGVuZ2RvbmdCb3guZ2V0Q2hpbGRCeU5hbWUoXCJzZXR0aW5nX29uXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnpoZW5nZG9uZ0JveC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdfb2ZmXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGlja19jb250aW51ZV9idG4oKSB7XG4gICAgICAgIGZpbmRDb250cm9sLmZpbmRTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgZmdEYXRhLmNsb3NlQmFubmVyKCk7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5jYWxsYmFjaygpO1xuICAgIH1cblxuXG4gICAgb25DbGlja19va19idG4oKSB7XG4gICAgICAgIGZpbmRDb250cm9sLmZpbmRTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIGZnRGF0YS5jbG9zZUJhbm5lcigpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tfUHJpdmFjeVBvbGljeV9idG4oKSB7XG4gICAgICAgIGZpbmRDb250cm9sLmZpbmRTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgY2Muc3lzLm9wZW5VUkwoZmdEYXRhLnByaXZhY3lQb2xpY3lVcmwpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tfVGVybXNvZnNlcnZpY2VidG4oKSB7XG4gICAgICAgIGNjLnN5cy5vcGVuVVJMKGZnRGF0YS50ZXJtc29mU2VydmljZVVybCk7XG4gICAgICAgIGZpbmRDb250cm9sLmZpbmRTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/windPop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5a09auqmsBG27JJ2bvnIpkk', 'windPop');
// script/dialog/windPop.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var findControl_1 = require("../tool/findControl");
var findGameData_1 = require("../tool/findGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var windPop = /** @class */ (function (_super) {
    __extends(windPop, _super);
    function windPop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameFindPrefab = null;
        _this.title = null;
        _this.bg = null;
        _this.imgEnd = null;
        _this.lvLabel = null;
        _this.lvProress = null;
        _this.img = null;
        _this.callback = null;
        return _this;
    }
    windPop.prototype.initData = function (data) {
        this.img = data.img;
        this.callback = data.callback;
        var findNode = data.finishBox;
        this.imgEnd.spriteFrame = this.img;
        findNode.setPosition(290, 43); // 子节点都是忘左边偏移的，要反方向调转回来， 43是图片的y
        this.node.getChildByName("content").addChild(findNode);
        // for (let i = 0; i < data.tupianData.length; i++) {
        //     let imgData: lovelyData = data.tupianData[i]
        //     let gameFind = cc.instantiate(this.gameFindPrefab);
        //     let x = imgData.centerPos.x * 0.45;
        //     let y = (imgData.centerPos.y * 0.45) + 43;
        //     gameFind.setPosition(x, y);
        //     gameFind.width =  imgData.blockSize.wid * 0.45;
        //     gameFind.height = imgData.blockSize.hei * 0.45;
        //     this.node.getChildByName("content").addChild(gameFind);
        // }
    };
    windPop.prototype.onLoad = function () {
        // if (findControl.imgId >= 6) {
        //     fgData.showInterst();
        // }
        // if (findControl.imgId == 5 && !fgData.userData.finishLevel5) {
        //     fgData.userData.finishLevel5 = true;
        //     findControl.findResUtil.showDialog(Tc.funTc);
        //     fgData.storageData();
        // }
    };
    windPop.prototype.start = function () {
        this.title.string = "Level " + findControl_1.findControl.imgId;
        findControl_1.findControl.adapterBg(this.bg);
        var lv = findGameData_1.fgData.userData.level;
        lv = lv - 1;
        if (lv >= 11 && lv <= 20) {
            lv = lv - 10;
        }
        else if (lv >= 21 && lv <= 30) {
            lv = lv - 20;
        }
        this.lvLabel.string = lv;
        this.lvProress.fillRange = lv / 10;
        if (lv == 10) {
            findGameData_1.fgData.userData.tishiNum = findGameData_1.fgData.userData.tishiNum + 2;
        }
    };
    windPop.prototype.onClick_continueBtn = function () {
        findControl_1.findControl.findSoundTool.commonBtnClick();
        this.callback && this.callback();
        this.node.destroy();
    };
    windPop.prototype.onClick_close = function () {
        findControl_1.findControl.findSoundTool.commonBtnClick();
        this.node.destroy();
    };
    __decorate([
        property(cc.Prefab)
    ], windPop.prototype, "gameFindPrefab", void 0);
    __decorate([
        property(cc.Label)
    ], windPop.prototype, "title", void 0);
    __decorate([
        property(cc.Node)
    ], windPop.prototype, "bg", void 0);
    __decorate([
        property(cc.Sprite)
    ], windPop.prototype, "imgEnd", void 0);
    __decorate([
        property(cc.Label)
    ], windPop.prototype, "lvLabel", void 0);
    __decorate([
        property(cc.Sprite)
    ], windPop.prototype, "lvProress", void 0);
    windPop = __decorate([
        ccclass
    ], windPop);
    return windPop;
}(cc.Component));
exports.default = windPop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL3dpbmRQb3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXNFO0FBQ3RFLHFEQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQXVGQztRQXBGRyxvQkFBYyxHQUFjLElBQUksQ0FBQztRQUdqQyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFFBQUUsR0FBWSxJQUFJLENBQUM7UUFHbkIsWUFBTSxHQUFjLElBQUksQ0FBQztRQUd6QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFFNUIsU0FBRyxHQUFtQixJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFhLElBQUksQ0FBQzs7SUFpRTlCLENBQUM7SUEvREcsMEJBQVEsR0FBUixVQUFTLElBQUk7UUFDVCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUE7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNuQyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQSxDQUFDLGdDQUFnQztRQUM5RCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdEQscURBQXFEO1FBQ3JELG1EQUFtRDtRQUNuRCwwREFBMEQ7UUFHMUQsMENBQTBDO1FBQzFDLGlEQUFpRDtRQUNqRCxrQ0FBa0M7UUFDbEMsc0RBQXNEO1FBQ3RELHNEQUFzRDtRQUN0RCw4REFBOEQ7UUFDOUQsSUFBSTtJQUNSLENBQUM7SUFHRCx3QkFBTSxHQUFOO1FBQ0ksZ0NBQWdDO1FBQ2hDLDRCQUE0QjtRQUM1QixJQUFJO1FBRUosaUVBQWlFO1FBQ2pFLDJDQUEyQztRQUUzQyxvREFBb0Q7UUFDcEQsNEJBQTRCO1FBQzVCLElBQUk7SUFDUixDQUFDO0lBR0QsdUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsR0FBRyx5QkFBVyxDQUFDLEtBQUssQ0FBQztRQUNqRCx5QkFBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0IsSUFBSSxFQUFFLEdBQUcscUJBQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQy9CLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDdEIsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7U0FDaEI7YUFBTSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUM3QixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztTQUNoQjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ25DLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNWLHFCQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxxQkFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1NBQzNEO0lBQ0wsQ0FBQztJQUVELHFDQUFtQixHQUFuQjtRQUNJLHlCQUFXLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELCtCQUFhLEdBQWI7UUFDSSx5QkFBVyxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFuRkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDYTtJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dUNBQ0M7SUFHbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyQ0FDSztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNNO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ1E7SUFsQlgsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQXVGM0I7SUFBRCxjQUFDO0NBdkZELEFBdUZDLENBdkZvQyxFQUFFLENBQUMsU0FBUyxHQXVGaEQ7a0JBdkZvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmluZENvbnRyb2wsIHdpY2tldCwgbG92ZWx5RGF0YSB9IGZyb20gXCIuLi90b29sL2ZpbmRDb250cm9sXCI7XG5pbXBvcnQgeyBmZ0RhdGEgfSBmcm9tIFwiLi4vdG9vbC9maW5kR2FtZURhdGFcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHdpbmRQb3AgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBnYW1lRmluZFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0aXRsZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBpbWdFbmQ6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbHZMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBsdlByb3Jlc3M6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBpbWc6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGw7XG5cbiAgICBpbml0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuaW1nID0gZGF0YS5pbWc7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBkYXRhLmNhbGxiYWNrO1xuICAgICAgICBsZXQgZmluZE5vZGUgPSBkYXRhLmZpbmlzaEJveFxuICAgICAgICB0aGlzLmltZ0VuZC5zcHJpdGVGcmFtZSA9IHRoaXMuaW1nO1xuICAgICAgICBmaW5kTm9kZS5zZXRQb3NpdGlvbigyOTAsIDQzKSAvLyDlrZDoioLngrnpg73mmK/lv5jlt6bovrnlgY/np7vnmoTvvIzopoHlj43mlrnlkJHosIPovazlm57mnaXvvIwgNDPmmK/lm77niYfnmoR5XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRcIikuYWRkQ2hpbGQoZmluZE5vZGUpXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS50dXBpYW5EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgICBsZXQgaW1nRGF0YTogbG92ZWx5RGF0YSA9IGRhdGEudHVwaWFuRGF0YVtpXVxuICAgICAgICAvLyAgICAgbGV0IGdhbWVGaW5kID0gY2MuaW5zdGFudGlhdGUodGhpcy5nYW1lRmluZFByZWZhYik7XG5cblxuICAgICAgICAvLyAgICAgbGV0IHggPSBpbWdEYXRhLmNlbnRlclBvcy54ICogMC40NTtcbiAgICAgICAgLy8gICAgIGxldCB5ID0gKGltZ0RhdGEuY2VudGVyUG9zLnkgKiAwLjQ1KSArIDQzO1xuICAgICAgICAvLyAgICAgZ2FtZUZpbmQuc2V0UG9zaXRpb24oeCwgeSk7XG4gICAgICAgIC8vICAgICBnYW1lRmluZC53aWR0aCA9ICBpbWdEYXRhLmJsb2NrU2l6ZS53aWQgKiAwLjQ1O1xuICAgICAgICAvLyAgICAgZ2FtZUZpbmQuaGVpZ2h0ID0gaW1nRGF0YS5ibG9ja1NpemUuaGVpICogMC40NTtcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRcIikuYWRkQ2hpbGQoZ2FtZUZpbmQpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG5cbiAgICBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIC8vIGlmIChmaW5kQ29udHJvbC5pbWdJZCA+PSA2KSB7XG4gICAgICAgIC8vICAgICBmZ0RhdGEuc2hvd0ludGVyc3QoKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGlmIChmaW5kQ29udHJvbC5pbWdJZCA9PSA1ICYmICFmZ0RhdGEudXNlckRhdGEuZmluaXNoTGV2ZWw1KSB7XG4gICAgICAgIC8vICAgICBmZ0RhdGEudXNlckRhdGEuZmluaXNoTGV2ZWw1ID0gdHJ1ZTtcblxuICAgICAgICAvLyAgICAgZmluZENvbnRyb2wuZmluZFJlc1V0aWwuc2hvd0RpYWxvZyhUYy5mdW5UYyk7XG4gICAgICAgIC8vICAgICBmZ0RhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuXG4gICAgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGl0bGUuc3RyaW5nID0gXCJMZXZlbCBcIiArIGZpbmRDb250cm9sLmltZ0lkO1xuICAgICAgICBmaW5kQ29udHJvbC5hZGFwdGVyQmcodGhpcy5iZyk7XG4gICAgICAgIGxldCBsdiA9IGZnRGF0YS51c2VyRGF0YS5sZXZlbDtcbiAgICAgICAgbHYgPSBsdiAtIDE7XG4gICAgICAgIGlmIChsdiA+PSAxMSAmJiBsdiA8PSAyMCkge1xuICAgICAgICAgICAgbHYgPSBsdiAtIDEwO1xuICAgICAgICB9IGVsc2UgaWYgKGx2ID49IDIxICYmIGx2IDw9IDMwKSB7XG4gICAgICAgICAgICBsdiA9IGx2IC0gMjA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sdkxhYmVsLnN0cmluZyA9IGx2O1xuICAgICAgICB0aGlzLmx2UHJvcmVzcy5maWxsUmFuZ2UgPSBsdiAvIDEwO1xuICAgICAgICBpZiAobHYgPT0gMTApIHtcbiAgICAgICAgICAgIGZnRGF0YS51c2VyRGF0YS50aXNoaU51bSA9IGZnRGF0YS51c2VyRGF0YS50aXNoaU51bSArIDI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrX2NvbnRpbnVlQnRuKCkge1xuICAgICAgICBmaW5kQ29udHJvbC5maW5kU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5jYWxsYmFjaygpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tfY2xvc2UoKSB7XG4gICAgICAgIGZpbmRDb250cm9sLmZpbmRTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/findScroll.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6742eFjCRhCdpnyZSMeH66r', 'findScroll');
// script/tool/findScroll.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**列表draw call优化组件 */
var scrollTool = /** @class */ (function (_super) {
    __extends(scrollTool, _super);
    function scrollTool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* --------------------------------segmentation-------------------------------- */
    scrollTool.prototype.onLoad = function () {
        if (!this.node.getComponent(cc.ScrollView)) {
            cc.error("不存在ScrollView组件！");
            return;
        }
        // ------------------事件监听
        this.node.on("scrolling", this._event_update_opacity, this);
        this.node.getComponent(cc.ScrollView).content.on(cc.Node.EventType.CHILD_REMOVED, this._event_update_opacity, this);
        this.node.getComponent(cc.ScrollView).content.on(cc.Node.EventType.CHILD_REORDER, this._event_update_opacity, this);
    };
    /* ***************功能函数*************** */
    /**获取在世界坐标系下的节点包围盒(不包含自身激活的子节点范围) */
    scrollTool.prototype._get_bounding_box_to_world = function (node_o_) {
        var w_n = node_o_._contentSize.width;
        var h_n = node_o_._contentSize.height;
        var rect_o = cc.rect(-node_o_._anchorPoint.x * w_n, -node_o_._anchorPoint.y * h_n, w_n, h_n);
        node_o_._calculWorldMatrix();
        rect_o.transformMat4(rect_o, node_o_._worldMatrix);
        return rect_o;
    };
    /**检测碰撞 */
    scrollTool.prototype._check_collision = function (node_o_) {
        var rect1_o = this._get_bounding_box_to_world(this.node.getComponent(cc.ScrollView).content.parent);
        var rect2_o = this._get_bounding_box_to_world(node_o_);
        // ------------------保险范围
        rect1_o.width += rect1_o.width * 0.5;
        rect1_o.height += rect1_o.height * 0.5;
        rect1_o.x -= rect1_o.width * 0.25;
        rect1_o.y -= rect1_o.height * 0.25;
        return rect1_o.intersects(rect2_o);
    };
    /* ***************自定义事件***************  */
    scrollTool.prototype._event_update_opacity = function () {
        var _this = this;
        this.node.getComponent(cc.ScrollView).content.children.forEach(function (v1_o) {
            var rect1_o = _this._get_bounding_box_to_world(_this.node.getComponent(cc.ScrollView).content.parent);
            rect1_o.width += rect1_o.width * 0.5;
            rect1_o.height += rect1_o.height * 0.5;
            rect1_o.x -= rect1_o.width * 0.25;
            rect1_o.y -= rect1_o.height * 0.25;
            v1_o.opacity = _this._check_collision(v1_o) ? 255 : 0;
        });
    };
    scrollTool = __decorate([
        ccclass
    ], scrollTool);
    return scrollTool;
}(cc.Component));
exports.default = scrollTool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9maW5kU2Nyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLHFCQUFxQjtBQUVyQjtJQUF3Qyw4QkFBWTtJQUFwRDs7SUFrREEsQ0FBQztJQWpERyxrRkFBa0Y7SUFDbEYsMkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDeEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzdCLE9BQU87U0FDVjtRQUNELHlCQUF5QjtRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEgsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4SCxDQUFDO0lBQ0Qsd0NBQXdDO0lBQ3hDLG9DQUFvQztJQUM1QiwrQ0FBMEIsR0FBbEMsVUFBbUMsT0FBWTtRQUMzQyxJQUFJLEdBQUcsR0FBVyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUM3QyxJQUFJLEdBQUcsR0FBVyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUM5QyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUNoQixDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFDN0IsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQzdCLEdBQUcsRUFDSCxHQUFHLENBQ04sQ0FBQztRQUNGLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBQ0QsVUFBVTtJQUNGLHFDQUFnQixHQUF4QixVQUF5QixPQUFnQjtRQUNyQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkQseUJBQXlCO1FBQ3pCLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDckMsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUN2QyxPQUFPLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkMsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCwwQ0FBMEM7SUFDbEMsMENBQXFCLEdBQTdCO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1lBQy9ELElBQUksT0FBTyxHQUFHLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BHLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDckMsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUN2QyxPQUFPLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFFbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWpEZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQWtEOUI7SUFBRCxpQkFBQztDQWxERCxBQWtEQyxDQWxEdUMsRUFBRSxDQUFDLFNBQVMsR0FrRG5EO2tCQWxEb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKirliJfooahkcmF3IGNhbGzkvJjljJbnu4Tku7YgKi9cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzY3JvbGxUb29sIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXNlZ21lbnRhdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBpZiAoIXRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwi5LiN5a2Y5ZyoU2Nyb2xsVmlld+e7hOS7tu+8gVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS3kuovku7bnm5HlkKxcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwic2Nyb2xsaW5nXCIsIHRoaXMuX2V2ZW50X3VwZGF0ZV9vcGFjaXR5LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KS5jb250ZW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLkNISUxEX1JFTU9WRUQsIHRoaXMuX2V2ZW50X3VwZGF0ZV9vcGFjaXR5LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KS5jb250ZW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLkNISUxEX1JFT1JERVIsIHRoaXMuX2V2ZW50X3VwZGF0ZV9vcGFjaXR5LCB0aGlzKTtcbiAgICB9XG4gICAgLyogKioqKioqKioqKioqKioq5Yqf6IO95Ye95pWwKioqKioqKioqKioqKioqICovXG4gICAgLyoq6I635Y+W5Zyo5LiW55WM5Z2Q5qCH57O75LiL55qE6IqC54K55YyF5Zu055uSKOS4jeWMheWQq+iHqui6q+a/gOa0u+eahOWtkOiKgueCueiMg+WbtCkgKi9cbiAgICBwcml2YXRlIF9nZXRfYm91bmRpbmdfYm94X3RvX3dvcmxkKG5vZGVfb186IGFueSk6IGNjLlJlY3Qge1xuICAgICAgICBsZXQgd19uOiBudW1iZXIgPSBub2RlX29fLl9jb250ZW50U2l6ZS53aWR0aDtcbiAgICAgICAgbGV0IGhfbjogbnVtYmVyID0gbm9kZV9vXy5fY29udGVudFNpemUuaGVpZ2h0O1xuICAgICAgICBsZXQgcmVjdF9vID0gY2MucmVjdChcbiAgICAgICAgICAgIC1ub2RlX29fLl9hbmNob3JQb2ludC54ICogd19uLCBcbiAgICAgICAgICAgIC1ub2RlX29fLl9hbmNob3JQb2ludC55ICogaF9uLCBcbiAgICAgICAgICAgIHdfbiwgXG4gICAgICAgICAgICBoX25cbiAgICAgICAgKTtcbiAgICAgICAgbm9kZV9vXy5fY2FsY3VsV29ybGRNYXRyaXgoKTtcbiAgICAgICAgcmVjdF9vLnRyYW5zZm9ybU1hdDQocmVjdF9vLCBub2RlX29fLl93b3JsZE1hdHJpeCk7XG4gICAgICAgIHJldHVybiByZWN0X287XG4gICAgfVxuICAgIC8qKuajgOa1i+eisOaSniAqL1xuICAgIHByaXZhdGUgX2NoZWNrX2NvbGxpc2lvbihub2RlX29fOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCByZWN0MV9vID0gdGhpcy5fZ2V0X2JvdW5kaW5nX2JveF90b193b3JsZCh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLmNvbnRlbnQucGFyZW50KTtcbiAgICAgICAgbGV0IHJlY3QyX28gPSB0aGlzLl9nZXRfYm91bmRpbmdfYm94X3RvX3dvcmxkKG5vZGVfb18pO1xuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS3kv53pmanojIPlm7RcbiAgICAgICAgcmVjdDFfby53aWR0aCArPSByZWN0MV9vLndpZHRoICogMC41O1xuICAgICAgICByZWN0MV9vLmhlaWdodCArPSByZWN0MV9vLmhlaWdodCAqIDAuNTtcbiAgICAgICAgcmVjdDFfby54IC09IHJlY3QxX28ud2lkdGggKiAwLjI1O1xuICAgICAgICByZWN0MV9vLnkgLT0gcmVjdDFfby5oZWlnaHQgKiAwLjI1O1xuICAgICAgICByZXR1cm4gcmVjdDFfby5pbnRlcnNlY3RzKHJlY3QyX28pO1xuICAgIH1cbiAgICAvKiAqKioqKioqKioqKioqKiroh6rlrprkuYnkuovku7YqKioqKioqKioqKioqKiogICovXG4gICAgcHJpdmF0ZSBfZXZlbnRfdXBkYXRlX29wYWNpdHkoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykuY29udGVudC5jaGlsZHJlbi5mb3JFYWNoKHYxX289PiB7XG4gICAgICAgICAgICBsZXQgcmVjdDFfbyA9IHRoaXMuX2dldF9ib3VuZGluZ19ib3hfdG9fd29ybGQodGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KS5jb250ZW50LnBhcmVudCk7XG4gICAgICAgICAgICByZWN0MV9vLndpZHRoICs9IHJlY3QxX28ud2lkdGggKiAwLjU7XG4gICAgICAgICAgICByZWN0MV9vLmhlaWdodCArPSByZWN0MV9vLmhlaWdodCAqIDAuNTtcbiAgICAgICAgICAgIHJlY3QxX28ueCAtPSByZWN0MV9vLndpZHRoICogMC4yNTtcbiAgICAgICAgICAgIHJlY3QxX28ueSAtPSByZWN0MV9vLmhlaWdodCAqIDAuMjU7XG5cbiAgICAgICAgICAgIHYxX28ub3BhY2l0eSA9IHRoaXMuX2NoZWNrX2NvbGxpc2lvbih2MV9vKSA/IDI1NSA6IDA7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/host.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73ed6/QdxxO+pIbRjS+FY/O', 'host');
// script/host.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var newhand_1 = require("./prefeb/newhand");
var findControl_1 = require("./tool/findControl");
var findGameData_1 = require("./tool/findGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameState;
(function (GameState) {
    GameState[GameState["discover"] = 0] = "discover";
    GameState[GameState["wrong"] = 1] = "wrong";
    GameState[GameState["repeat"] = 2] = "repeat";
})(GameState || (GameState = {}));
var host = /** @class */ (function (_super) {
    __extends(host, _super);
    function host() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.originalImg = null;
        _this.finishImg = null;
        _this.tishi_qipao = null;
        _this.gameFindPrefab2 = null;
        _this.gameFindPrefab = null;
        _this.gameErrPrefab = null;
        _this.gameTishiPrefab = null;
        _this.game_tuowei = null;
        _this.imgSignBox = null;
        _this.yeziBox = null;
        _this.level = null;
        _this.timeAll = null;
        _this.reduceTime = null;
        _this.mask = null;
        _this.heartBox = null;
        _this.emptyheartBox = null;
        _this.love_Data = [];
        _this.lovelyY = 290;
        _this.lovelyScale = 0.45;
        _this.yeziAllNum = 10;
        _this.lovelyFindNum = 0;
        _this.lovelyOutTime = 0;
        _this.lovelyIsPrompt = false;
        _this.timer = null;
        _this.isStop = false;
        _this.oneErr = false;
        _this.audioClips = [];
        _this.newhandNode = null;
        return _this;
    }
    host.prototype.start = function () {
        var _this = this;
        findGameData_1.fgData.setGamestop(function () {
            findControl_1.findControl.findSoundTool.pauseAll();
        });
        findGameData_1.fgData.setGamerecovery(function () {
            findControl_1.findControl.findSoundTool.resumeAll();
        });
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = false;
            this.getComponent(cc.Canvas).fitWidth = true;
        }
        this.resetAll();
        findControl_1.findControl.setsceneNode(this.node);
        findControl_1.findControl.adapterBg(this.bg);
        this.onEvent();
        this.init();
        this.startDownTime();
        this.loadRes();
        this.checkNewHand();
        cc.resources.loadDir("sound", cc.AudioClip, function (err, clips) {
            if (err || !cc.isValid(_this))
                return;
            _this.audioClips = clips;
            _this.addAutoReleaseAssets(clips);
        });
    };
    host.prototype.onEvent = function () {
        this.originalImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
        this.finishImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
    };
    host.prototype.resetAll = function (clearData) {
        if (!clearData) {
            this.love_Data = [];
        }
        this.imgSignBox.getChildByName("origBox").destroyAllChildren();
        this.imgSignBox.getChildByName("finishBox").destroyAllChildren();
        this.imgSignBox.getChildByName("errBox").destroyAllChildren();
        this.imgSignBox.getChildByName("tishiBox").destroyAllChildren();
        this.imgSignBox.getChildByName("lizi").destroyAllChildren();
        this.mask.active = false;
        this.oneErr = false;
        this.isStop = false;
        this.timer = null;
        this.lovelyIsPrompt = false;
        this.lovelyFindNum = 0;
        this.init();
    };
    host.prototype.checkNewHand = function () {
        var _this = this;
        if (findGameData_1.fgData.userData.isGudie || findControl_1.findControl.imgId != 1) {
            return;
        }
        cc.resources.load("prefeb/newhand", cc.Prefab, function (err, prefab) {
            if (err) {
                return;
            }
            var node = cc.instantiate(prefab);
            findControl_1.findControl.findResUtil.bindResAsset(node, prefab);
            _this.node.addChild(node);
            _this.newhandNode = node.getComponent(newhand_1.default);
            _this.newhandNode.showdong1();
        });
    };
    host.prototype.init = function () {
        this.level.string = "Lv" + findControl_1.findControl.imgId;
        for (var i = 0; i < this.yeziBox.children.length; i++) {
            var anim = this.yeziBox.children[i].getComponent(sp.Skeleton);
            findControl_1.findControl.playSp(anim, "1_an_stop");
        }
        this.changeQiPaoNum();
        this.mask.active = false;
        // this.lovelyOutTime = this.getDownTime();
        // let time = findControl.timeChange(this.lovelyOutTime);
        // this.timeAll.getComponent(cc.Label).string = time;
        this.reduceTime.active = false;
        this.timeAll.active = false;
        for (var i = 0; i < this.heartBox.children.length; i++) {
            this.heartBox.children[i].active = true;
            this.emptyheartBox.children[i].active = false;
        }
    };
    //开启倒计时
    host.prototype.startDownTime = function () {
        return;
        if (this.lovelyOutTime > 0) {
            var time = findControl_1.findControl.timeChange(this.lovelyOutTime);
            this.timeAll.getComponent(cc.Label).string = time;
            this.timer = this.schedule(this.downTimeEvent, 1);
        }
    };
    host.prototype.downTimeEvent = function () {
        return;
        if (this.isStop) {
            return;
        }
        this.lovelyOutTime--;
        var time = findControl_1.findControl.timeChange(this.lovelyOutTime);
        this.timeAll.getComponent(cc.Label).string = time;
        if (this.lovelyOutTime <= 0) {
            this.unschedule(this.downTimeEvent);
            this.timeOutEvent();
            this.playCommonSound(findGameData_1.sound.fail);
            cc.log("时间到了");
        }
    };
    //点错了
    host.prototype.errReduceTime = function () {
        var _this = this;
        var findheart = false;
        for (var i = this.heartBox.children.length - 1; i >= 0; i--) {
            var heartItem_1 = this.heartBox.children[i];
            var emptyheartItem = this.emptyheartBox.children[i];
            if (heartItem_1.active) {
                findheart = true;
                heartItem_1.active = false;
                emptyheartItem.active = true;
                var anim = emptyheartItem.getComponent(sp.Skeleton);
                findControl_1.findControl.playSp(anim, "posui");
                break;
            }
        }
        var heartItem = this.heartBox.children[0];
        if (!heartItem.active) {
            findControl_1.findControl.findResUtil.showDialog(findControl_1.wicket.MoonPop, {
                ADcallback: function () {
                    // this.lovelyOutTime = 60;  
                    // fgData.userData.tishiNum++;
                    findGameData_1.fgData.storageData();
                    _this.changeQiPaoNum();
                    _this.startDownTime();
                    for (var i = 0; i < _this.heartBox.children.length; i++) {
                        _this.heartBox.children[i].active = true;
                        _this.emptyheartBox.children[i].active = false;
                    }
                },
                restartCallBack: function () {
                    _this.resetAll(true);
                    _this.init();
                    _this.startDownTime();
                    cc.log(_this.love_Data, "this.love_Data");
                    for (var i = 0; i < _this.love_Data.length; i++) {
                        _this.love_Data[i].isFind = false;
                    }
                }
            });
        }
        return;
        //时间
        if (!this.oneErr)
            return;
        var posY = this.timeAll.y;
        var reduceTime = 30;
        this.reduceTime.y = posY;
        this.reduceTime.active = true;
        this.reduceTime.getComponent(cc.Label).string = "-" + reduceTime;
        cc.Tween.stopAllByTarget(this.reduceTime);
        cc.tween(this.reduceTime).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).to(1, { opacity: 255, y: posY - 25 }).call(function () {
            _this.reduceTime.active = false;
        }).start();
        this.lovelyOutTime -= reduceTime;
        if (this.lovelyOutTime <= 0) {
            this.timeAll.getComponent(cc.Label).string = "00:00";
            this.playCommonSound(findGameData_1.sound.fail);
            cc.log("时间到了");
            this.unschedule(this.downTimeEvent);
            this.timeOutEvent();
        }
        else {
            var time = findControl_1.findControl.timeChange(this.lovelyOutTime);
            this.timeAll.getComponent(cc.Label).string = time;
        }
    };
    host.prototype.changeQiPaoNum = function () {
        if (findGameData_1.fgData.userData.tishiNum > 0) {
            this.tishi_qipao.getChildByName("ad_label").active = false;
            this.tishi_qipao.getChildByName("num_label").active = true;
            this.tishi_qipao.getChildByName("num_label").getComponent(cc.Label).string = findGameData_1.fgData.userData.tishiNum.toString();
        }
        else {
            this.tishi_qipao.getChildByName("ad_label").active = true;
            this.tishi_qipao.getChildByName("num_label").active = false;
        }
    };
    host.prototype.loadRes = function () {
        var _this = this;
        findControl_1.findControl.findResUtil.loadSprite("fineImg/" + "fine_" + findControl_1.findControl.imgId, this.originalImg.getComponent(cc.Sprite));
        findControl_1.findControl.findResUtil.loadSprite("discoverImg/" + "discover_" + findControl_1.findControl.imgId, this.finishImg.getComponent(cc.Sprite));
        cc.resources.load("imgConfig/rank" + findControl_1.findControl.imgId, cc.JsonAsset, function (err, res) {
            if (err) {
                cc.log(err);
                return;
            }
            // 获取到 Json 数据
            findControl_1.findControl.findResUtil.bindResAsset(_this.node, res);
            var jsonData = res.json;
            if (jsonData && jsonData.path) {
                _this.love_Data = jsonData.path;
                for (var i = 0; i < _this.love_Data.length; i++) {
                    _this.love_Data[i].isFind = false;
                }
                // for (let i = 0; i < this.love_Data.length; i++) {
                //     let data = this.love_Data[i];
                //     this.findSignSucc(cc.v3(data.centerPos.x, data.centerPos.y))
                // }
                // for (let i = 0; i < this.love_Data.length; i++) {
                //     let data = this.love_Data[i];
                //     this.findSignSucc(cc.v3(data.centerPos.x, data.centerPos.y))
                // }
            }
        });
    };
    host.prototype.yeziLight = function (pos) {
        var _this = this;
        var anim = this.yeziBox.children[this.lovelyFindNum - 1].getComponent(sp.Skeleton);
        var tuowei = cc.instantiate(this.game_tuowei);
        this.imgSignBox.getChildByName("lizi").addChild(tuowei);
        tuowei.setPosition(pos);
        var changePos = findControl_1.findControl.changePos(anim.node, tuowei);
        var time = 0.5;
        if (pos.y < 0) {
            time = 1;
        }
        cc.Tween.stopAllByTarget(tuowei);
        cc.tween(tuowei).to(time, { position: changePos }).call(function () {
            _this.scheduleOnce(function () {
                tuowei.destroy();
            }, 0.3);
            findControl_1.findControl.playSp(anim, "2_bianliang");
            findControl_1.findControl.addSequenceSp(anim, "3_liang_stop");
        }).start();
    };
    host.prototype.findSignSucc = function (targetPos, fgData) {
        for (var i = 0; i < 2; i++) {
            var gameFind = cc.instantiate(this.gameFindPrefab2);
            var imgX = 0;
            if (i == 0) {
                imgX = targetPos.x * this.lovelyScale + this.lovelyY;
                this.imgSignBox.getChildByName("origBox").addChild(gameFind);
            }
            else {
                this.imgSignBox.getChildByName("finishBox").addChild(gameFind);
                imgX = targetPos.x * this.lovelyScale - this.lovelyY;
            }
            var centerPos = cc.v3(imgX, targetPos.y * this.lovelyScale);
            gameFind.setPosition(centerPos);
            //     正方形
            gameFind.width = fgData.blockSize.wid * this.lovelyScale;
            gameFind.height = fgData.blockSize.hei * this.lovelyScale;
            cc.Tween.stopAllByTarget(gameFind);
            gameFind.scale = 0;
            cc.tween(gameFind).to(0.3, { scale: 1.5 }).to(0.1, { scale: 1.3 }).start();
        }
    };
    host.prototype.findSignErr = function (targetPos) {
        var clickPos = targetPos;
        var gameErr = cc.instantiate(this.gameErrPrefab);
        this.imgSignBox.getChildByName("errBox").addChild(gameErr);
        gameErr.setPosition(clickPos);
        this.errSignAnim(gameErr);
        var otherErrSign = null;
        if (clickPos.x > 0) {
            otherErrSign = cc.instantiate(this.gameErrPrefab);
            this.imgSignBox.getChildByName("errBox").addChild(otherErrSign);
            otherErrSign.setPosition(cc.v3(clickPos.x - (this.lovelyY * 2), clickPos.y));
        }
        else {
            otherErrSign = cc.instantiate(this.gameErrPrefab);
            this.imgSignBox.getChildByName("errBox").addChild(otherErrSign);
            otherErrSign.setPosition(cc.v3(clickPos.x + (this.lovelyY * 2), clickPos.y));
        }
        if (otherErrSign) {
            this.errSignAnim(otherErrSign);
        }
    };
    host.prototype.imgEvent = function (event) {
        var pos = event.getLocation();
        var clickPos = this.imgSignBox.convertToNodeSpaceAR(cc.v3(pos.x, pos.y));
        // this.findSignErr(clickPos);
        var data = this.checkImgSign(clickPos);
        if (data.type == GameState.discover) {
            if (this.lovelyIsPrompt) {
                this.lovelyIsPrompt = false;
                this.imgSignBox.getChildByName("tishiBox").destroyAllChildren();
            }
            this.lovelyFindNum = this.lovelyFindNum + 1;
            this.findSignSucc(cc.v3(data.fgData.centerPos.x, data.fgData.centerPos.y), data.fgData);
            this.yeziLight(clickPos);
            if (this.newhandNode && this.lovelyFindNum == 1) {
                if (this.newhandNode) {
                    this.newhandNode.hidedong1();
                    this.newhandNode.showdong2();
                }
            }
            else if (this.newhandNode && this.lovelyFindNum == 2) {
                if (this.newhandNode) {
                    this.newhandNode.node.destroy();
                    this.newhandNode = null;
                }
                findGameData_1.fgData.userData.isGudie = true;
                findGameData_1.fgData.storageData();
            }
            this.playCommonSound(findGameData_1.sound.correct);
            if (this.lovelyFindNum >= this.yeziAllNum) { //胜利 游戏结束
                this.gameEnd();
            }
        }
        else if (data.type == GameState.wrong) {
            this.playCommonSound(findGameData_1.sound.err);
            this.errReduceTime();
            this.findSignErr(clickPos);
            this.oneErr = true;
        }
        else {
            this.playCommonSound(findGameData_1.sound.err);
            this.errReduceTime();
            this.findSignErr(clickPos);
            this.oneErr = true;
        }
    };
    host.prototype.checkImgSign = function (targetPos) {
        var type = null;
        var fgData = null;
        for (var i = 0; i < this.love_Data.length; i++) {
            var data = this.love_Data[i];
            var x = 0;
            var y = data.centerPos.y * this.lovelyScale;
            if (targetPos.x > 0) {
                x = data.centerPos.x * this.lovelyScale + this.lovelyY;
            }
            else {
                x = data.centerPos.x * this.lovelyScale - this.lovelyY;
            }
            var wid = data.blockSize.wid * this.lovelyScale;
            var hei = data.blockSize.hei * this.lovelyScale;
            // let testitem = cc.instantiate(this.testitemPrefab);
            // this.imgSignBox.addChild(testitem);
            // testitem.setPosition(cc.v3(x, y));
            // testitem.width = wid;
            // testitem.height = hei;
            if (!data.isFind && targetPos.x <= x + wid / 2 && targetPos.x >= x - wid / 2
                && targetPos.y <= y + hei / 2 && targetPos.y >= y - hei / 2) {
                if (!data.isFind) {
                    cc.log("找到了");
                    type = GameState.discover;
                    fgData = data;
                    data.isFind = true;
                }
                else {
                    type = GameState.repeat;
                    cc.log("找到重复的了");
                }
                return { type: type, fgData: fgData };
            }
            else {
                type = GameState.wrong;
                cc.log("没找到");
            }
        }
        return { type: type, fgData: fgData };
    };
    host.prototype.errSignAnim = function (node) {
        cc.Tween.stopAllByTarget(node);
        cc.tween(node)
            .to(0.05, { angle: 15 }).to(0.05, { angle: 0 }).to(0.05, { angle: -15 })
            .to(0.07, { angle: 10 }).to(0.07, { angle: 0 }).to(0.07, { angle: -10 })
            .to(0.1, { angle: 7 }).to(0.1, { angle: 0 }).to(0.1, { angle: -7 })
            .to(0.1, { angle: 3 }).to(0.1, { angle: 0 })
            .call(function () {
            node.destroy();
        }).start();
    };
    host.prototype.gameEnd = function () {
        var _this = this;
        cc.log("游戏结束");
        this.mask.active = true;
        this.scheduleOnce(function () {
            var _loop_1 = function (i) {
                var anim = _this.yeziBox.children[i].getComponent(sp.Skeleton);
                _this.scheduleOnce(function () {
                    findControl_1.findControl.playSp(anim, "4_man", false, function () {
                        _this.scheduleOnce(function () {
                            if (i == _this.yeziBox.children.length - 1) {
                                _this.playCommonSound(findGameData_1.sound.win);
                                if (findGameData_1.fgData.userData.level + 1 <= findGameData_1.fgData.levelAll) {
                                    findGameData_1.fgData.userData.level = findGameData_1.fgData.userData.level + 1;
                                    findGameData_1.fgData.storageData();
                                }
                                findControl_1.findControl.findResUtil.showDialog(findControl_1.wicket.windPop, {
                                    img: _this.originalImg.getComponent(cc.Sprite).spriteFrame,
                                    finishBox: cc.instantiate(_this.imgSignBox.getChildByName("finishBox")),
                                    love_Data: _this.love_Data,
                                    callback: function () {
                                        if (findControl_1.findControl.imgId + 1 <= findGameData_1.fgData.levelAll) {
                                            findControl_1.findControl.imgId = findControl_1.findControl.imgId + 1;
                                            _this.resetAll();
                                            _this.init();
                                            _this.startDownTime();
                                            _this.loadRes();
                                        }
                                        else {
                                            findGameData_1.fgData.userData.isHall = true;
                                            findGameData_1.fgData.storageData();
                                            cc.director.loadScene(findControl_1.spectacle.parlour);
                                        }
                                    }
                                });
                            }
                        });
                    });
                }, 0.1 * i);
            };
            for (var i = 0; i < _this.yeziBox.children.length; i++) {
                _loop_1(i);
            }
        }, 0.5);
    };
    //获取当前关卡的倒计时
    host.prototype.getDownTime = function () {
        var level = findControl_1.findControl.imgId;
        var time = 0;
        if (level >= 1 && level <= 5) {
            time = 5 * 60;
        }
        else if (level >= 6 && level <= 10) {
            time = 3 * 60;
        }
        else if (level >= 11 && level <= 15) {
            time = 2 * 60 + 30;
        }
        else if (level >= 16 && level <= 20) {
            time = 2 * 60;
        }
        else if (level >= 21 && level <= 25) {
            time = 1 * 60 + 30;
        }
        else {
            time = 1 * 60;
        }
        return time;
    };
    //时间到
    host.prototype.timeOutEvent = function () {
        var _this = this;
        findControl_1.findControl.findResUtil.showDialog(findControl_1.wicket.MoonPop, {
            ADcallback: function () {
                _this.lovelyOutTime = 60;
                findGameData_1.fgData.userData.tishiNum++;
                findGameData_1.fgData.storageData();
                _this.changeQiPaoNum();
                _this.startDownTime();
            },
            restartCallBack: function () {
                _this.resetAll(true);
                _this.init();
                _this.startDownTime();
                cc.log(_this.love_Data, "this.love_Data");
                for (var i = 0; i < _this.love_Data.length; i++) {
                    _this.love_Data[i].isFind = false;
                }
            }
        });
    };
    host.prototype.onClick_back = function () {
        var _this = this;
        findControl_1.findControl.findSoundTool.commonBtnClick();
        this.isStop = true;
        findControl_1.findControl.findResUtil.showDialog(findControl_1.wicket.StarPop, { callback: function () { _this.isStop = false; } });
    };
    host.prototype.onClick_pause = function () {
        var _this = this;
        findControl_1.findControl.findSoundTool.commonBtnClick();
        this.isStop = true;
        findControl_1.findControl.findResUtil.showDialog(findControl_1.wicket.TreePop, { isGame: true, callback: function () { _this.isStop = false; } });
    };
    host.prototype.onClick_tishi = function () {
        var _this = this;
        findControl_1.findControl.findSoundTool.commonBtnClick();
        if (this.lovelyIsPrompt) {
            findControl_1.findControl.findResUtil.showToast("Prompt already exists");
            return;
        }
        var lvdata = null;
        for (var i = 0; i < this.love_Data.length; i++) {
            if (!this.love_Data[i].isFind) {
                lvdata = this.love_Data[i];
                break;
            }
        }
        if (!findGameData_1.fgData) {
            return;
        }
        if (findGameData_1.fgData.userData.tishiNum <= 0) {
            cc.log("看广告");
            findGameData_1.fgData.showVideo(function () {
                _this.showTiShi(lvdata);
            });
            return;
        }
        findGameData_1.fgData.userData.tishiNum = findGameData_1.fgData.userData.tishiNum - 1;
        findGameData_1.fgData.storageData();
        this.changeQiPaoNum();
        this.showTiShi(lvdata);
    };
    host.prototype.showTiShi = function (fgData) {
        if (fgData) {
            this.lovelyIsPrompt = true;
            for (var i = 0; i < 2; i++) {
                var tishi = cc.instantiate(this.gameTishiPrefab);
                this.imgSignBox.getChildByName("tishiBox").addChild(tishi);
                var x = 0;
                var y = fgData.centerPos.y * this.lovelyScale;
                if (i == 0) {
                    x = fgData.centerPos.x * this.lovelyScale + this.lovelyY;
                }
                else {
                    x = fgData.centerPos.x * this.lovelyScale - this.lovelyY;
                }
                tishi.setPosition(x, y);
                cc.Tween.stopAllByTarget(tishi);
                cc.tween(tishi).to(0.5, { scale: 0.7 }).to(0.5, { scale: 1 }).union().repeatForever().start();
            }
        }
    };
    //播放音效
    host.prototype.playCommonSound = function (audioName, loop) {
        if (loop === void 0) { loop = false; }
        for (var i = 0; i < this.audioClips.length; i++) {
            if (this.audioClips[i].name == audioName) {
                var audioID = findControl_1.findControl.findSoundTool.playEffect(this.audioClips[i], loop);
                return audioID;
            }
        }
        return null;
    };
    __decorate([
        property(cc.Node)
    ], host.prototype, "bg", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "originalImg", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "finishImg", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "tishi_qipao", void 0);
    __decorate([
        property(cc.Prefab)
    ], host.prototype, "gameFindPrefab2", void 0);
    __decorate([
        property(cc.Prefab)
    ], host.prototype, "gameFindPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], host.prototype, "gameErrPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], host.prototype, "gameTishiPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], host.prototype, "game_tuowei", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "imgSignBox", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "yeziBox", void 0);
    __decorate([
        property(cc.Label)
    ], host.prototype, "level", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "timeAll", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "reduceTime", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "mask", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "heartBox", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "emptyheartBox", void 0);
    host = __decorate([
        ccclass
    ], host);
    return host;
}(cc.Component));
exports.default = host;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNjO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ2E7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDWTtJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNjO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ1U7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dUNBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0NBQ0c7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNZO0lBbkRiLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0Eyb0J4QjtJQUFELFdBQUM7Q0Ezb0JELEFBMm9CQyxDQTNvQmlDLEVBQUUsQ0FBQyxTQUFTLEdBMm9CN0M7a0JBM29Cb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuZXdoYW5kIGZyb20gXCIuL3ByZWZlYi9uZXdoYW5kXCI7XG5pbXBvcnQgeyBmaW5kQ29udHJvbCwgd2lja2V0LCBzcGVjdGFjbGUsIGxvdmVseURhdGEgfSBmcm9tIFwiLi90b29sL2ZpbmRDb250cm9sXCI7XG5pbXBvcnQgeyBmZ0RhdGEsIHNvdW5kIH0gZnJvbSBcIi4vdG9vbC9maW5kR2FtZURhdGFcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5lbnVtIEdhbWVTdGF0ZSB7XG4gICAgZGlzY292ZXIsICAgICAgIC8v5om+5YiwXG4gICAgd3JvbmcsICAgICAgICAvL+ayoeaJvuWIsCAgICBcbiAgICByZXBlYXQsICAgICAvL+aJvuWIsOmHjeWkjeeahCAgXG59XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBob3N0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJnOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG9yaWdpbmFsSW1nOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGZpbmlzaEltZzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0aXNoaV9xaXBhbzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGdhbWVGaW5kUHJlZmFiMjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ2FtZUZpbmRQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGdhbWVFcnJQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGdhbWVUaXNoaVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ2FtZV90dW93ZWk6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpbWdTaWduQm94OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHllemlCb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxldmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0aW1lQWxsOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHJlZHVjZVRpbWU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWFzazogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoZWFydEJveDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBlbXB0eWhlYXJ0Qm94OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGxvdmVfRGF0YTogbG92ZWx5RGF0YVtdID0gW107XG4gICAgbG92ZWx5WTogbnVtYmVyID0gMjkwO1xuICAgIGxvdmVseVNjYWxlOiBudW1iZXIgPSAwLjQ1O1xuXG4gICAgeWV6aUFsbE51bTogbnVtYmVyID0gMTA7XG4gICAgbG92ZWx5RmluZE51bTogbnVtYmVyID0gMDtcbiAgICBsb3ZlbHlPdXRUaW1lOiBudW1iZXIgPSAwO1xuXG4gICAgbG92ZWx5SXNQcm9tcHQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHRpbWVyID0gbnVsbDtcbiAgICBpc1N0b3A6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBvbmVFcnI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgYXVkaW9DbGlwczogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICAgIG5ld2hhbmROb2RlOiBuZXdoYW5kID0gbnVsbDtcblxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGZnRGF0YS5zZXRHYW1lc3RvcCgoKT0+e1xuICAgICAgICAgICAgZmluZENvbnRyb2wuZmluZFNvdW5kVG9vbC5wYXVzZUFsbCgpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZnRGF0YS5zZXRHYW1lcmVjb3ZlcnkoKCk9PntcbiAgICAgICAgICAgIGZpbmRDb250cm9sLmZpbmRTb3VuZFRvb2wucmVzdW1lQWxsKClcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5JUEFEKSB7XG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdEhlaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuQ2FudmFzKS5maXRXaWR0aCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc2V0QWxsKCk7XG4gICAgICAgIGZpbmRDb250cm9sLnNldHNjZW5lTm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICBmaW5kQ29udHJvbC5hZGFwdGVyQmcodGhpcy5iZyk7XG5cbiAgICAgICAgdGhpcy5vbkV2ZW50KCk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLnN0YXJ0RG93blRpbWUoKTtcbiAgICAgICAgdGhpcy5sb2FkUmVzKCk7XG4gICAgICAgIHRoaXMuY2hlY2tOZXdIYW5kKCk7XG5cbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWREaXIoXCJzb3VuZFwiLCBjYy5BdWRpb0NsaXAsIChlcnI6IEVycm9yLCBjbGlwczogY2MuQXVkaW9DbGlwW10pID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIgfHwgIWNjLmlzVmFsaWQodGhpcykpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9DbGlwcyA9IGNsaXBzO1xuICAgICAgICAgICAgdGhpcy5hZGRBdXRvUmVsZWFzZUFzc2V0cyhjbGlwcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRXZlbnQoKSB7XG4gICAgICAgIHRoaXMub3JpZ2luYWxJbWcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmltZ0V2ZW50LCB0aGlzKTtcbiAgICAgICAgdGhpcy5maW5pc2hJbWcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmltZ0V2ZW50LCB0aGlzKTtcbiAgICB9XG5cbiAgICByZXNldEFsbChjbGVhckRhdGE/KSB7XG4gICAgICAgIGlmICghY2xlYXJEYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmxvdmVfRGF0YSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcIm9yaWdCb3hcIikuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImZpbmlzaEJveFwiKS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwiZXJyQm94XCIpLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJ0aXNoaUJveFwiKS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwibGl6aVwiKS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcblxuICAgICAgICB0aGlzLm1hc2suYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25lRXJyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNTdG9wID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmxvdmVseUlzUHJvbXB0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG92ZWx5RmluZE51bSA9IDA7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGNoZWNrTmV3SGFuZCgpIHtcbiAgICAgICAgaWYgKGZnRGF0YS51c2VyRGF0YS5pc0d1ZGllIHx8IGZpbmRDb250cm9sLmltZ0lkICE9IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZlYi9uZXdoYW5kXCIsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICBmaW5kQ29udHJvbC5maW5kUmVzVXRpbC5iaW5kUmVzQXNzZXQobm9kZSwgcHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUgPSBub2RlLmdldENvbXBvbmVudChuZXdoYW5kKTtcbiAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUuc2hvd2RvbmcxKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmxldmVsLnN0cmluZyA9IFwiTHZcIiArIGZpbmRDb250cm9sLmltZ0lkO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMueWV6aUJveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGFuaW0gPSB0aGlzLnllemlCb3guY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgICAgIGZpbmRDb250cm9sLnBsYXlTcChhbmltLCBcIjFfYW5fc3RvcFwiKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5jaGFuZ2VRaVBhb051bSgpO1xuXG4gICAgICAgIHRoaXMubWFzay5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAvLyB0aGlzLmxvdmVseU91dFRpbWUgPSB0aGlzLmdldERvd25UaW1lKCk7XG4gICAgICAgIC8vIGxldCB0aW1lID0gZmluZENvbnRyb2wudGltZUNoYW5nZSh0aGlzLmxvdmVseU91dFRpbWUpO1xuICAgICAgICAvLyB0aGlzLnRpbWVBbGwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aW1lO1xuICAgICAgICB0aGlzLnJlZHVjZVRpbWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGltZUFsbC5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaGVhcnRCb3guY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaGVhcnRCb3guY2hpbGRyZW5baV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZW1wdHloZWFydEJveC5jaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy/lvIDlkK/lgJLorqHml7ZcbiAgICBzdGFydERvd25UaW1lKCkge1xuICAgICAgICByZXR1cm5cbiAgICAgICAgaWYgKHRoaXMubG92ZWx5T3V0VGltZSA+IDApIHtcbiAgICAgICAgICAgIGxldCB0aW1lID0gZmluZENvbnRyb2wudGltZUNoYW5nZSh0aGlzLmxvdmVseU91dFRpbWUpO1xuICAgICAgICAgICAgdGhpcy50aW1lQWxsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGltZTtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSB0aGlzLnNjaGVkdWxlKHRoaXMuZG93blRpbWVFdmVudCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkb3duVGltZUV2ZW50KCkge1xuXG4gICAgICAgIHJldHVyblxuICAgICAgICBpZiAodGhpcy5pc1N0b3ApIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMubG92ZWx5T3V0VGltZS0tO1xuICAgICAgICBsZXQgdGltZSA9IGZpbmRDb250cm9sLnRpbWVDaGFuZ2UodGhpcy5sb3ZlbHlPdXRUaW1lKTtcbiAgICAgICAgdGhpcy50aW1lQWxsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGltZTtcbiAgICAgICAgaWYgKHRoaXMubG92ZWx5T3V0VGltZSA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5kb3duVGltZUV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMudGltZU91dEV2ZW50KCk7XG4gICAgICAgICAgICB0aGlzLnBsYXlDb21tb25Tb3VuZChzb3VuZC5mYWlsKTtcbiAgICAgICAgICAgIGNjLmxvZyhcIuaXtumXtOWIsOS6hlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy/ngrnplJnkuoZcbiAgICBlcnJSZWR1Y2VUaW1lKCkge1xuICAgICAgICBsZXQgZmluZGhlYXJ0ID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmhlYXJ0Qm94LmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgaGVhcnRJdGVtID0gdGhpcy5oZWFydEJveC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCBlbXB0eWhlYXJ0SXRlbSA9IHRoaXMuZW1wdHloZWFydEJveC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChoZWFydEl0ZW0uYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZmluZGhlYXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBoZWFydEl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZW1wdHloZWFydEl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsZXQgYW5pbSA9IGVtcHR5aGVhcnRJdGVtLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICAgICAgZmluZENvbnRyb2wucGxheVNwKGFuaW0sIFwicG9zdWlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGhlYXJ0SXRlbSA9IHRoaXMuaGVhcnRCb3guY2hpbGRyZW5bMF07XG4gICAgICAgIGlmICghaGVhcnRJdGVtLmFjdGl2ZSkge1xuICAgICAgICAgICAgZmluZENvbnRyb2wuZmluZFJlc1V0aWwuc2hvd0RpYWxvZyh3aWNrZXQuTW9vblBvcCwge1xuICAgICAgICAgICAgICAgIEFEY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5sb3ZlbHlPdXRUaW1lID0gNjA7ICBcbiAgICAgICAgICAgICAgICAgICAgLy8gZmdEYXRhLnVzZXJEYXRhLnRpc2hpTnVtKys7XG4gICAgICAgICAgICAgICAgICAgIGZnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVFpUGFvTnVtKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREb3duVGltZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5oZWFydEJveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFydEJveC5jaGlsZHJlbltpXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbXB0eWhlYXJ0Qm94LmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHJlc3RhcnRDYWxsQmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QWxsKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydERvd25UaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyh0aGlzLmxvdmVfRGF0YSwgXCJ0aGlzLmxvdmVfRGF0YVwiKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxvdmVfRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb3ZlX0RhdGFbaV0uaXNGaW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgICAgLy/ml7bpl7RcbiAgICAgICAgaWYgKCF0aGlzLm9uZUVycikgcmV0dXJuXG4gICAgICAgIGxldCBwb3NZID0gdGhpcy50aW1lQWxsLnk7XG4gICAgICAgIGxldCByZWR1Y2VUaW1lID0gMzA7XG4gICAgICAgIHRoaXMucmVkdWNlVGltZS55ID0gcG9zWTtcbiAgICAgICAgdGhpcy5yZWR1Y2VUaW1lLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucmVkdWNlVGltZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiLVwiICsgcmVkdWNlVGltZTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMucmVkdWNlVGltZSk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMucmVkdWNlVGltZSkudG8oMC4xNSwgeyBzY2FsZTogMS4yIH0pLnRvKDAuMTUsIHsgc2NhbGU6IDEgfSkudG8oMSwgeyBvcGFjaXR5OiAyNTUsIHk6IHBvc1kgLSAyNSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVkdWNlVGltZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSkuc3RhcnQoKTtcblxuICAgICAgICB0aGlzLmxvdmVseU91dFRpbWUgLT0gcmVkdWNlVGltZTtcbiAgICAgICAgaWYgKHRoaXMubG92ZWx5T3V0VGltZSA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVBbGwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIjAwOjAwXCI7XG4gICAgICAgICAgICB0aGlzLnBsYXlDb21tb25Tb3VuZChzb3VuZC5mYWlsKTtcbiAgICAgICAgICAgIGNjLmxvZyhcIuaXtumXtOWIsOS6hlwiKTtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmRvd25UaW1lRXZlbnQpO1xuICAgICAgICAgICAgdGhpcy50aW1lT3V0RXZlbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0aW1lID0gZmluZENvbnRyb2wudGltZUNoYW5nZSh0aGlzLmxvdmVseU91dFRpbWUpO1xuICAgICAgICAgICAgdGhpcy50aW1lQWxsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGltZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZVFpUGFvTnVtKCkge1xuICAgICAgICBpZiAoZmdEYXRhLnVzZXJEYXRhLnRpc2hpTnVtID4gMCkge1xuICAgICAgICAgICAgdGhpcy50aXNoaV9xaXBhby5nZXRDaGlsZEJ5TmFtZShcImFkX2xhYmVsXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50aXNoaV9xaXBhby5nZXRDaGlsZEJ5TmFtZShcIm51bV9sYWJlbFwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50aXNoaV9xaXBhby5nZXRDaGlsZEJ5TmFtZShcIm51bV9sYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGZnRGF0YS51c2VyRGF0YS50aXNoaU51bS50b1N0cmluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aXNoaV9xaXBhby5nZXRDaGlsZEJ5TmFtZShcImFkX2xhYmVsXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRpc2hpX3FpcGFvLmdldENoaWxkQnlOYW1lKFwibnVtX2xhYmVsXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZFJlcygpIHtcbiAgICAgICAgZmluZENvbnRyb2wuZmluZFJlc1V0aWwubG9hZFNwcml0ZShcImZpbmVJbWcvXCIgKyBcImZpbmVfXCIgKyBmaW5kQ29udHJvbC5pbWdJZCwgdGhpcy5vcmlnaW5hbEltZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG5cbiAgICAgICAgZmluZENvbnRyb2wuZmluZFJlc1V0aWwubG9hZFNwcml0ZShcImRpc2NvdmVySW1nL1wiICsgXCJkaXNjb3Zlcl9cIiArIGZpbmRDb250cm9sLmltZ0lkLCB0aGlzLmZpbmlzaEltZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG5cbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJpbWdDb25maWcvcmFua1wiICsgZmluZENvbnRyb2wuaW1nSWQsIGNjLkpzb25Bc3NldCwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKGVycilcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDojrflj5bliLAgSnNvbiDmlbDmja5cbiAgICAgICAgICAgIGZpbmRDb250cm9sLmZpbmRSZXNVdGlsLmJpbmRSZXNBc3NldCh0aGlzLm5vZGUsIHJlcyk7XG4gICAgICAgICAgICBjb25zdCBqc29uRGF0YSA9IHJlcy5qc29uO1xuICAgICAgICAgICAgaWYgKGpzb25EYXRhICYmIGpzb25EYXRhLnBhdGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvdmVfRGF0YSA9IGpzb25EYXRhLnBhdGg7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxvdmVfRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvdmVfRGF0YVtpXS5pc0ZpbmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxvdmVfRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgZGF0YSA9IHRoaXMubG92ZV9EYXRhW2ldO1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmZpbmRTaWduU3VjYyhjYy52MyhkYXRhLmNlbnRlclBvcy54LCBkYXRhLmNlbnRlclBvcy55KSlcbiAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubG92ZV9EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGxldCBkYXRhID0gdGhpcy5sb3ZlX0RhdGFbaV07XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuZmluZFNpZ25TdWNjKGNjLnYzKGRhdGEuY2VudGVyUG9zLngsIGRhdGEuY2VudGVyUG9zLnkpKVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIHllemlMaWdodChwb3M6IGNjLlZlYzMpIHtcbiAgICAgICAgbGV0IGFuaW0gPSB0aGlzLnllemlCb3guY2hpbGRyZW5bdGhpcy5sb3ZlbHlGaW5kTnVtIC0gMV0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcblxuICAgICAgICBsZXQgdHVvd2VpID0gY2MuaW5zdGFudGlhdGUodGhpcy5nYW1lX3R1b3dlaSk7XG4gICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImxpemlcIikuYWRkQ2hpbGQodHVvd2VpKTtcbiAgICAgICAgdHVvd2VpLnNldFBvc2l0aW9uKHBvcyk7XG5cbiAgICAgICAgbGV0IGNoYW5nZVBvcyA9IGZpbmRDb250cm9sLmNoYW5nZVBvcyhhbmltLm5vZGUsIHR1b3dlaSk7XG5cbiAgICAgICAgbGV0IHRpbWUgPSAwLjU7XG4gICAgICAgIGlmIChwb3MueSA8IDApIHtcbiAgICAgICAgICAgIHRpbWUgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0dW93ZWkpO1xuICAgICAgICBjYy50d2Vlbih0dW93ZWkpLnRvKHRpbWUsIHsgcG9zaXRpb246IGNoYW5nZVBvcyB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0dW93ZWkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSwgMC4zKTtcbiAgICAgICAgICAgIGZpbmRDb250cm9sLnBsYXlTcChhbmltLCBcIjJfYmlhbmxpYW5nXCIpO1xuICAgICAgICAgICAgZmluZENvbnRyb2wuYWRkU2VxdWVuY2VTcChhbmltLCBcIjNfbGlhbmdfc3RvcFwiKTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBmaW5kU2lnblN1Y2ModGFyZ2V0UG9zOiBjYy5WZWMzLCBmZ0RhdGE6IGxvdmVseURhdGEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBnYW1lRmluZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZUZpbmRQcmVmYWIyKTtcbiAgICAgICAgICAgIGxldCBpbWdYID0gMDtcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICBpbWdYID0gdGFyZ2V0UG9zLnggKiB0aGlzLmxvdmVseVNjYWxlICsgdGhpcy5sb3ZlbHlZO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcIm9yaWdCb3hcIikuYWRkQ2hpbGQoZ2FtZUZpbmQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImZpbmlzaEJveFwiKS5hZGRDaGlsZChnYW1lRmluZClcbiAgICAgICAgICAgICAgICBpbWdYID0gdGFyZ2V0UG9zLnggKiB0aGlzLmxvdmVseVNjYWxlIC0gdGhpcy5sb3ZlbHlZO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGNlbnRlclBvcyA9IGNjLnYzKGltZ1gsIHRhcmdldFBvcy55ICogdGhpcy5sb3ZlbHlTY2FsZSk7XG5cbiAgICAgICAgICAgIGdhbWVGaW5kLnNldFBvc2l0aW9uKGNlbnRlclBvcyk7XG5cbiAgICAgICAgICAgIC8vICAgICDmraPmlrnlvaJcbiAgICAgICAgICAgIGdhbWVGaW5kLndpZHRoID0gZmdEYXRhLmJsb2NrU2l6ZS53aWQgKiB0aGlzLmxvdmVseVNjYWxlO1xuICAgICAgICAgICAgZ2FtZUZpbmQuaGVpZ2h0ID0gZmdEYXRhLmJsb2NrU2l6ZS5oZWkgKiB0aGlzLmxvdmVseVNjYWxlO1xuXG5cbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChnYW1lRmluZCk7XG4gICAgICAgICAgICBnYW1lRmluZC5zY2FsZSA9IDA7XG5cblxuICAgICAgICAgICAgY2MudHdlZW4oZ2FtZUZpbmQpLnRvKDAuMywgeyBzY2FsZTogMS41IH0pLnRvKDAuMSwgeyBzY2FsZTogMS4zIH0pLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kU2lnbkVycih0YXJnZXRQb3M6IGNjLlZlYzMpIHtcbiAgICAgICAgbGV0IGNsaWNrUG9zID0gdGFyZ2V0UG9zO1xuICAgICAgICBsZXQgZ2FtZUVyciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZUVyclByZWZhYik7XG4gICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImVyckJveFwiKS5hZGRDaGlsZChnYW1lRXJyKTtcbiAgICAgICAgZ2FtZUVyci5zZXRQb3NpdGlvbihjbGlja1Bvcyk7XG4gICAgICAgIHRoaXMuZXJyU2lnbkFuaW0oZ2FtZUVycik7XG5cbiAgICAgICAgbGV0IG90aGVyRXJyU2lnbjogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgIGlmIChjbGlja1Bvcy54ID4gMCkge1xuICAgICAgICAgICAgb3RoZXJFcnJTaWduID0gY2MuaW5zdGFudGlhdGUodGhpcy5nYW1lRXJyUHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImVyckJveFwiKS5hZGRDaGlsZChvdGhlckVyclNpZ24pO1xuICAgICAgICAgICAgb3RoZXJFcnJTaWduLnNldFBvc2l0aW9uKGNjLnYzKGNsaWNrUG9zLnggLSAodGhpcy5sb3ZlbHlZICogMiksIGNsaWNrUG9zLnkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG90aGVyRXJyU2lnbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZUVyclByZWZhYik7XG4gICAgICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJlcnJCb3hcIikuYWRkQ2hpbGQob3RoZXJFcnJTaWduKTtcbiAgICAgICAgICAgIG90aGVyRXJyU2lnbi5zZXRQb3NpdGlvbihjYy52MyhjbGlja1Bvcy54ICsgKHRoaXMubG92ZWx5WSAqIDIpLCBjbGlja1Bvcy55KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG90aGVyRXJyU2lnbikge1xuICAgICAgICAgICAgdGhpcy5lcnJTaWduQW5pbShvdGhlckVyclNpZ24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW1nRXZlbnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XG4gICAgICAgIGxldCBjbGlja1BvcyA9IHRoaXMuaW1nU2lnbkJveC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52Myhwb3MueCwgcG9zLnkpKTtcbiAgICAgICAgLy8gdGhpcy5maW5kU2lnbkVycihjbGlja1Bvcyk7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jaGVja0ltZ1NpZ24oY2xpY2tQb3MpO1xuICAgICAgICBpZiAoZGF0YS50eXBlID09IEdhbWVTdGF0ZS5kaXNjb3Zlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMubG92ZWx5SXNQcm9tcHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvdmVseUlzUHJvbXB0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwidGlzaGlCb3hcIikuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxvdmVseUZpbmROdW0gPSB0aGlzLmxvdmVseUZpbmROdW0gKyAxO1xuICAgICAgICAgICAgdGhpcy5maW5kU2lnblN1Y2MoY2MudjMoZGF0YS5mZ0RhdGEuY2VudGVyUG9zLngsIGRhdGEuZmdEYXRhLmNlbnRlclBvcy55KSwgZGF0YS5mZ0RhdGEpO1xuICAgICAgICAgICAgdGhpcy55ZXppTGlnaHQoY2xpY2tQb3MpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5uZXdoYW5kTm9kZSAmJiB0aGlzLmxvdmVseUZpbmROdW0gPT0gMSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5ld2hhbmROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUuaGlkZWRvbmcxKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUuc2hvd2RvbmcyKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubmV3aGFuZE5vZGUgJiYgdGhpcy5sb3ZlbHlGaW5kTnVtID09IDIpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5uZXdoYW5kTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld2hhbmROb2RlLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld2hhbmROb2RlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmdEYXRhLnVzZXJEYXRhLmlzR3VkaWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGZnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wbGF5Q29tbW9uU291bmQoc291bmQuY29ycmVjdCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmxvdmVseUZpbmROdW0gPj0gdGhpcy55ZXppQWxsTnVtKSB7ICAgICAgIC8v6IOc5YipIOa4uOaIj+e7k+adn1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUVuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEudHlwZSA9PSBHYW1lU3RhdGUud3JvbmcpIHtcbiAgICAgICAgICAgIHRoaXMucGxheUNvbW1vblNvdW5kKHNvdW5kLmVycik7XG4gICAgICAgICAgICB0aGlzLmVyclJlZHVjZVRpbWUoKTtcbiAgICAgICAgICAgIHRoaXMuZmluZFNpZ25FcnIoY2xpY2tQb3MpO1xuICAgICAgICAgICAgdGhpcy5vbmVFcnIgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wbGF5Q29tbW9uU291bmQoc291bmQuZXJyKTtcbiAgICAgICAgICAgIHRoaXMuZXJyUmVkdWNlVGltZSgpO1xuICAgICAgICAgICAgdGhpcy5maW5kU2lnbkVycihjbGlja1Bvcyk7XG4gICAgICAgICAgICB0aGlzLm9uZUVyciA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0ltZ1NpZ24odGFyZ2V0UG9zOiBjYy5WZWMzKSB7XG4gICAgICAgIGxldCB0eXBlOiBHYW1lU3RhdGUgPSBudWxsO1xuICAgICAgICBsZXQgZmdEYXRhID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxvdmVfRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmxvdmVfRGF0YVtpXTtcbiAgICAgICAgICAgIGxldCB4ID0gMDtcbiAgICAgICAgICAgIGxldCB5ID0gZGF0YS5jZW50ZXJQb3MueSAqIHRoaXMubG92ZWx5U2NhbGU7XG4gICAgICAgICAgICBpZiAodGFyZ2V0UG9zLnggPiAwKSB7XG4gICAgICAgICAgICAgICAgeCA9IGRhdGEuY2VudGVyUG9zLnggKiB0aGlzLmxvdmVseVNjYWxlICsgdGhpcy5sb3ZlbHlZO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB4ID0gZGF0YS5jZW50ZXJQb3MueCAqIHRoaXMubG92ZWx5U2NhbGUgLSB0aGlzLmxvdmVseVk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB3aWQgPSBkYXRhLmJsb2NrU2l6ZS53aWQgKiB0aGlzLmxvdmVseVNjYWxlO1xuICAgICAgICAgICAgbGV0IGhlaSA9IGRhdGEuYmxvY2tTaXplLmhlaSAqIHRoaXMubG92ZWx5U2NhbGU7XG5cbiAgICAgICAgICAgIC8vIGxldCB0ZXN0aXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGVzdGl0ZW1QcmVmYWIpO1xuICAgICAgICAgICAgLy8gdGhpcy5pbWdTaWduQm94LmFkZENoaWxkKHRlc3RpdGVtKTtcbiAgICAgICAgICAgIC8vIHRlc3RpdGVtLnNldFBvc2l0aW9uKGNjLnYzKHgsIHkpKTtcbiAgICAgICAgICAgIC8vIHRlc3RpdGVtLndpZHRoID0gd2lkO1xuICAgICAgICAgICAgLy8gdGVzdGl0ZW0uaGVpZ2h0ID0gaGVpO1xuXG4gICAgICAgICAgICBpZiAoIWRhdGEuaXNGaW5kICYmIHRhcmdldFBvcy54IDw9IHggKyB3aWQgLyAyICYmIHRhcmdldFBvcy54ID49IHggLSB3aWQgLyAyXG4gICAgICAgICAgICAgICAgJiYgdGFyZ2V0UG9zLnkgPD0geSArIGhlaSAvIDIgJiYgdGFyZ2V0UG9zLnkgPj0geSAtIGhlaSAvIDIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEuaXNGaW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIuaJvuWIsOS6hlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IEdhbWVTdGF0ZS5kaXNjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgZmdEYXRhID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pc0ZpbmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBHYW1lU3RhdGUucmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCLmib7liLDph43lpI3nmoTkuoZcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGUsIGZnRGF0YSB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHR5cGUgPSBHYW1lU3RhdGUud3Jvbmc7XG4gICAgICAgICAgICAgICAgY2MubG9nKFwi5rKh5om+5YiwXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgdHlwZSwgZmdEYXRhIH1cbiAgICB9XG5cblxuICAgIGVyclNpZ25BbmltKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KG5vZGUpO1xuICAgICAgICBjYy50d2Vlbihub2RlKVxuICAgICAgICAgICAgLnRvKDAuMDUsIHsgYW5nbGU6IDE1IH0pLnRvKDAuMDUsIHsgYW5nbGU6IDAgfSkudG8oMC4wNSwgeyBhbmdsZTogLTE1IH0pXG4gICAgICAgICAgICAudG8oMC4wNywgeyBhbmdsZTogMTAgfSkudG8oMC4wNywgeyBhbmdsZTogMCB9KS50bygwLjA3LCB7IGFuZ2xlOiAtMTAgfSlcbiAgICAgICAgICAgIC50bygwLjEsIHsgYW5nbGU6IDcgfSkudG8oMC4xLCB7IGFuZ2xlOiAwIH0pLnRvKDAuMSwgeyBhbmdsZTogLTcgfSlcbiAgICAgICAgICAgIC50bygwLjEsIHsgYW5nbGU6IDMgfSkudG8oMC4xLCB7IGFuZ2xlOiAwIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgIH1cblxuXG4gICAgZ2FtZUVuZCgpIHtcbiAgICAgICAgY2MubG9nKFwi5ri45oiP57uT5p2fXCIpO1xuICAgICAgICB0aGlzLm1hc2suYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMueWV6aUJveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBhbmltID0gdGhpcy55ZXppQm94LmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmaW5kQ29udHJvbC5wbGF5U3AoYW5pbSwgXCI0X21hblwiLCBmYWxzZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IHRoaXMueWV6aUJveC5jaGlsZHJlbi5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUNvbW1vblNvdW5kKHNvdW5kLndpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmZ0RhdGEudXNlckRhdGEubGV2ZWwgKyAxIDw9IGZnRGF0YS5sZXZlbEFsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmdEYXRhLnVzZXJEYXRhLmxldmVsID0gZmdEYXRhLnVzZXJEYXRhLmxldmVsICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmRDb250cm9sLmZpbmRSZXNVdGlsLnNob3dEaWFsb2cod2lja2V0LndpbmRQb3AsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZzogdGhpcy5vcmlnaW5hbEltZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmlzaEJveDogY2MuaW5zdGFudGlhdGUodGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwiZmluaXNoQm94XCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvdmVfRGF0YTogdGhpcy5sb3ZlX0RhdGEsLy8gY2MuaW5zdGFudGlhdGUodGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwiZmluaXNoQm94XCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmRDb250cm9sLmltZ0lkICsgMSA8PSBmZ0RhdGEubGV2ZWxBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluZENvbnRyb2wuaW1nSWQgPSBmaW5kQ29udHJvbC5pbWdJZCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRBbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREb3duVGltZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRSZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZ0RhdGEudXNlckRhdGEuaXNIYWxsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmdEYXRhLnN0b3JhZ2VEYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzcGVjdGFjbGUucGFybG91cik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCAwLjEgKiBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMC41KTtcbiAgICB9XG5cblxuICAgIC8v6I635Y+W5b2T5YmN5YWz5Y2h55qE5YCS6K6h5pe2XG4gICAgZ2V0RG93blRpbWUoKSB7XG4gICAgICAgIGxldCBsZXZlbCA9IGZpbmRDb250cm9sLmltZ0lkO1xuICAgICAgICBsZXQgdGltZSA9IDA7XG4gICAgICAgIGlmIChsZXZlbCA+PSAxICYmIGxldmVsIDw9IDUpIHtcbiAgICAgICAgICAgIHRpbWUgPSA1ICogNjA7XG4gICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPj0gNiAmJiBsZXZlbCA8PSAxMCkge1xuICAgICAgICAgICAgdGltZSA9IDMgKiA2MDtcbiAgICAgICAgfSBlbHNlIGlmIChsZXZlbCA+PSAxMSAmJiBsZXZlbCA8PSAxNSkge1xuICAgICAgICAgICAgdGltZSA9IDIgKiA2MCArIDMwO1xuICAgICAgICB9IGVsc2UgaWYgKGxldmVsID49IDE2ICYmIGxldmVsIDw9IDIwKSB7XG4gICAgICAgICAgICB0aW1lID0gMiAqIDYwO1xuICAgICAgICB9IGVsc2UgaWYgKGxldmVsID49IDIxICYmIGxldmVsIDw9IDI1KSB7XG4gICAgICAgICAgICB0aW1lID0gMSAqIDYwICsgMzA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aW1lID0gMSAqIDYwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aW1lO1xuICAgIH1cblxuXG4gICAgLy/ml7bpl7TliLBcbiAgICB0aW1lT3V0RXZlbnQoKSB7XG4gICAgICAgIGZpbmRDb250cm9sLmZpbmRSZXNVdGlsLnNob3dEaWFsb2cod2lja2V0Lk1vb25Qb3AsIHtcbiAgICAgICAgICAgIEFEY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvdmVseU91dFRpbWUgPSA2MDtcbiAgICAgICAgICAgICAgICBmZ0RhdGEudXNlckRhdGEudGlzaGlOdW0rKztcbiAgICAgICAgICAgICAgICBmZ0RhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVFpUGFvTnVtKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERvd25UaW1lKCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICByZXN0YXJ0Q2FsbEJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QWxsKHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREb3duVGltZSgpO1xuICAgICAgICAgICAgICAgIGNjLmxvZyh0aGlzLmxvdmVfRGF0YSwgXCJ0aGlzLmxvdmVfRGF0YVwiKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubG92ZV9EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG92ZV9EYXRhW2ldLmlzRmluZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DbGlja19iYWNrKCkge1xuICAgICAgICBmaW5kQ29udHJvbC5maW5kU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIHRoaXMuaXNTdG9wID0gdHJ1ZTtcbiAgICAgICAgZmluZENvbnRyb2wuZmluZFJlc1V0aWwuc2hvd0RpYWxvZyh3aWNrZXQuU3RhclBvcCwgeyBjYWxsYmFjazogKCkgPT4geyB0aGlzLmlzU3RvcCA9IGZhbHNlIH0gfSk7XG4gICAgfVxuXG5cbiAgICBvbkNsaWNrX3BhdXNlKCkge1xuICAgICAgICBmaW5kQ29udHJvbC5maW5kU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIHRoaXMuaXNTdG9wID0gdHJ1ZTtcbiAgICAgICAgZmluZENvbnRyb2wuZmluZFJlc1V0aWwuc2hvd0RpYWxvZyh3aWNrZXQuVHJlZVBvcCwgeyBpc0dhbWU6IHRydWUsIGNhbGxiYWNrOiAoKSA9PiB7IHRoaXMuaXNTdG9wID0gZmFsc2UgfSB9KTtcblxuICAgIH1cblxuICAgIG9uQ2xpY2tfdGlzaGkoKSB7XG5cbiAgICAgICAgZmluZENvbnRyb2wuZmluZFNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBpZiAodGhpcy5sb3ZlbHlJc1Byb21wdCkge1xuICAgICAgICAgICAgZmluZENvbnRyb2wuZmluZFJlc1V0aWwuc2hvd1RvYXN0KFwiUHJvbXB0IGFscmVhZHkgZXhpc3RzXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsdmRhdGE6IGxvdmVseURhdGEgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubG92ZV9EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubG92ZV9EYXRhW2ldLmlzRmluZCkge1xuICAgICAgICAgICAgICAgIGx2ZGF0YSA9IHRoaXMubG92ZV9EYXRhW2ldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFmZ0RhdGEpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChmZ0RhdGEudXNlckRhdGEudGlzaGlOdW0gPD0gMCkge1xuICAgICAgICAgICAgY2MubG9nKFwi55yL5bm/5ZGKXCIpXG5cbiAgICAgICAgICAgIGZnRGF0YS5zaG93VmlkZW8oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RpU2hpKGx2ZGF0YSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZnRGF0YS51c2VyRGF0YS50aXNoaU51bSA9IGZnRGF0YS51c2VyRGF0YS50aXNoaU51bSAtIDE7XG4gICAgICAgIGZnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICB0aGlzLmNoYW5nZVFpUGFvTnVtKCk7XG4gICAgICAgIHRoaXMuc2hvd1RpU2hpKGx2ZGF0YSk7XG4gICAgfVxuXG4gICAgc2hvd1RpU2hpKGZnRGF0YTogbG92ZWx5RGF0YSkge1xuICAgICAgICBpZiAoZmdEYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmxvdmVseUlzUHJvbXB0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpc2hpID0gY2MuaW5zdGFudGlhdGUodGhpcy5nYW1lVGlzaGlQcmVmYWIpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcInRpc2hpQm94XCIpLmFkZENoaWxkKHRpc2hpKTtcblxuICAgICAgICAgICAgICAgIGxldCB4ID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgeSA9IGZnRGF0YS5jZW50ZXJQb3MueSAqIHRoaXMubG92ZWx5U2NhbGU7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB4ID0gZmdEYXRhLmNlbnRlclBvcy54ICogdGhpcy5sb3ZlbHlTY2FsZSArIHRoaXMubG92ZWx5WTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB4ID0gZmdEYXRhLmNlbnRlclBvcy54ICogdGhpcy5sb3ZlbHlTY2FsZSAtIHRoaXMubG92ZWx5WTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGlzaGkuc2V0UG9zaXRpb24oeCwgeSk7XG4gICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRpc2hpKTtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aXNoaSkudG8oMC41LCB7IHNjYWxlOiAwLjcgfSkudG8oMC41LCB7IHNjYWxlOiAxIH0pLnVuaW9uKCkucmVwZWF0Rm9yZXZlcigpLnN0YXJ0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy/mkq3mlL7pn7PmlYhcbiAgICBwbGF5Q29tbW9uU291bmQoYXVkaW9OYW1lOiBzdHJpbmcsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSk6IG51bWJlciB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hdWRpb0NsaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hdWRpb0NsaXBzW2ldLm5hbWUgPT0gYXVkaW9OYW1lKSB7XG4gICAgICAgICAgICAgICAgbGV0IGF1ZGlvSUQgPSBmaW5kQ29udHJvbC5maW5kU291bmRUb29sLnBsYXlFZmZlY3QodGhpcy5hdWRpb0NsaXBzW2ldLCBsb29wKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXVkaW9JRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/findResUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd8022bhaGtI34HO+9B4gPxl', 'findResUtil');
// script/tool/findResUtil.ts

"use strict";
//资源加载工具类
Object.defineProperty(exports, "__esModule", { value: true });
exports.findResUtil = void 0;
var findResBind_1 = require("./findResBind");
var findControl_1 = require("./findControl");
var findResUtil = /** @class */ (function () {
    function findResUtil() {
    }
    // 绑定资源释放
    findResUtil.bindResAsset = function (parent, asset) {
        var tempAuto = parent.getComponent(findResBind_1.default);
        if (!cc.isValid(tempAuto)) {
            tempAuto = parent.addComponent(findResBind_1.default);
        }
        tempAuto.addAutoReleaseAsset(asset);
    };
    // 检测引用计数后释放资源
    findResUtil.releaseRes = function (asset) {
        if (cc.isValid(asset) && asset.refCount <= 0) {
            cc.assetManager.releaseAsset(asset);
        }
    };
    //加载(必须配合addAutoReleaseAsset 使用绑定资源)
    findResUtil.loadAsset = function (assetPath, assetType, assetCb) {
        cc.resources.load(assetPath, assetType, assetCb);
    };
    //预加载
    findResUtil.preloadAsset = function (assetPath, assetType) {
        cc.resources.preload(assetPath, assetType);
    };
    // 加载单张图片
    findResUtil.loadSprite = function (picPath, sprite, defPath) {
        var _this = this;
        var finishCallback = function (err, sp) {
            if (err) {
                if (defPath) {
                    _this.loadSprite(defPath, sprite);
                }
                else {
                }
                return;
            }
            if (cc.isValid(sprite) && sprite["newUrl"] == picPath) {
                sprite.addAutoReleaseAsset(sp);
                sprite.spriteFrame = sp;
            }
            else {
                _this.releaseRes(sp);
            }
        };
        sprite["newUrl"] = picPath; // 记录最新url 防止多次请求异步设置了旧的
        sprite.spriteFrame = null; //置空 防止玩家看到旧的道具误会
        cc.resources.load(picPath, cc.SpriteFrame, finishCallback);
    };
    //----------------资源加载------------------------  
    findResUtil.showDialog = function (url, data, callback) {
        cc.resources.load("prefeb/" + url, cc.Prefab, function (err, prefab) {
            if (err) {
                return;
            }
            var node = cc.instantiate(prefab);
            findControl_1.findControl.findResUtil.bindResAsset(node, prefab);
            var parentNode = findControl_1.findControl.getsceneNode();
            if (node && parentNode) {
                if (data) {
                    if (node.getComponent(url).initData) {
                        node.getComponent(url).initData(data);
                    }
                }
                parentNode.addChild(node);
                var content = node.getChildByName("content");
                content.scale = 0;
                cc.Tween.stopAllByTarget(content);
                cc.tween(content)
                    .to(0.32, { scale: 1 }, { easing: 'backOut' })
                    .start();
            }
            callback && callback();
        });
    };
    findResUtil.showToast = function (text) {
        cc.resources.load("prefeb/toast", cc.Prefab, function (err, prefab) {
            if (err) {
                return;
            }
            var toast = cc.instantiate(prefab);
            findControl_1.findControl.findResUtil.bindResAsset(toast, prefab);
            var parentNode = findControl_1.findControl.getsceneNode();
            if (toast && parentNode) {
                toast.active = true;
                parentNode.addChild(toast);
                var toastLabel = toast.getChildByName("label");
                toastLabel.getComponent(cc.Label).string = text;
                cc.Tween.stopAllByTarget(toast);
                toast.opacity = 255;
                cc.tween(toast).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).delay(0.5).to(0.5, { opacity: 0 }).call(function () {
                    toast.destroy();
                }).start();
            }
        });
    };
    return findResUtil;
}());
exports.findResUtil = findResUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9maW5kUmVzVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsU0FBUzs7O0FBRVQsNkNBQXdDO0FBQ3hDLDZDQUE0QztBQUk1QztJQUFBO0lBb0dBLENBQUM7SUFsR0csU0FBUztJQUNLLHdCQUFZLEdBQTFCLFVBQTJCLE1BQWUsRUFBRSxLQUFlO1FBQ3ZELElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMscUJBQVcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3ZCLFFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsQ0FBQztTQUMvQztRQUNELFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsY0FBYztJQUNBLHNCQUFVLEdBQXhCLFVBQXlCLEtBQWU7UUFDcEMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQzFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztJQUVELG9DQUFvQztJQUN0QixxQkFBUyxHQUF2QixVQUF3QixTQUFpQixFQUFFLFNBQTBCLEVBQUUsT0FBc0I7UUFDekYsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsS0FBSztJQUNTLHdCQUFZLEdBQTFCLFVBQTJCLFNBQWlCLEVBQUUsU0FBMEI7UUFDcEUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxTQUFTO0lBQ0ssc0JBQVUsR0FB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Q25DLHlCQUFXLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDcEQsSUFBSSxVQUFVLEdBQUcseUJBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM1QyxJQUFJLEtBQUssSUFBSSxVQUFVLEVBQUU7Z0JBQ3JCLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMvQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNoRCxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7Z0JBQ3BCLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDcEcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNwQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNkO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQXBHQSxBQW9HQyxJQUFBO0FBcEdZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8v6LWE5rqQ5Yqg6L295bel5YW357G7XHJcblxyXG5pbXBvcnQgZmluZFJlc0JpbmQgZnJvbSBcIi4vZmluZFJlc0JpbmRcIjtcclxuaW1wb3J0IHsgZmluZENvbnRyb2wgfSBmcm9tIFwiLi9maW5kQ29udHJvbFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgQXNzZXRDYWxsRnVuYyA9IChlcnI6IEVycm9yLCBhc3NldERhdGE6IGNjLkFzc2V0KSA9PiB2b2lkO1xyXG4gXHJcbmV4cG9ydCBjbGFzcyBmaW5kUmVzVXRpbCB7XHJcbiAgICAgXHJcbiAgICAvLyDnu5HlrprotYTmupDph4rmlL5cclxuICAgIHB1YmxpYyBzdGF0aWMgYmluZFJlc0Fzc2V0KHBhcmVudDogY2MuTm9kZSwgYXNzZXQ6IGNjLkFzc2V0KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHRlbXBBdXRvID0gcGFyZW50LmdldENvbXBvbmVudChmaW5kUmVzQmluZCk7XHJcbiAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKHRlbXBBdXRvKSkge1xyXG4gICAgICAgICAgICB0ZW1wQXV0byA9IHBhcmVudC5hZGRDb21wb25lbnQoZmluZFJlc0JpbmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZW1wQXV0by5hZGRBdXRvUmVsZWFzZUFzc2V0KGFzc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmo4DmtYvlvJXnlKjorqHmlbDlkI7ph4rmlL7otYTmupBcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVsZWFzZVJlcyhhc3NldDogY2MuQXNzZXQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2MuaXNWYWxpZChhc3NldCkgJiYgYXNzZXQucmVmQ291bnQgPD0gMCkge1xyXG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIucmVsZWFzZUFzc2V0KGFzc2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/liqDovb0o5b+F6aG76YWN5ZCIYWRkQXV0b1JlbGVhc2VBc3NldCDkvb/nlKjnu5HlrprotYTmupApXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRBc3NldChhc3NldFBhdGg6IHN0cmluZywgYXNzZXRUeXBlOiB0eXBlb2YgY2MuQXNzZXQsIGFzc2V0Q2I6IEFzc2V0Q2FsbEZ1bmMpOiB2b2lkIHtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChhc3NldFBhdGgsIGFzc2V0VHlwZSwgYXNzZXRDYik7XHJcbiAgICB9XHJcblxyXG4gICAgLy/pooTliqDovb1cclxuICAgIHB1YmxpYyBzdGF0aWMgcHJlbG9hZEFzc2V0KGFzc2V0UGF0aDogc3RyaW5nLCBhc3NldFR5cGU6IHR5cGVvZiBjYy5Bc3NldCk6IHZvaWQge1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5wcmVsb2FkKGFzc2V0UGF0aCwgYXNzZXRUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDliqDovb3ljZXlvKDlm77niYdcclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZFNwcml0ZShwaWNQYXRoOiBzdHJpbmcsIHNwcml0ZTogY2MuU3ByaXRlLCBkZWZQYXRoPzogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGZpbmlzaENhbGxiYWNrID0gKGVyciwgc3A6IGNjLlNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkZWZQYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkU3ByaXRlKGRlZlBhdGgsIHNwcml0ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHNwcml0ZSkgJiYgc3ByaXRlW1wibmV3VXJsXCJdID09IHBpY1BhdGgpIHtcclxuICAgICAgICAgICAgICAgIHNwcml0ZS5hZGRBdXRvUmVsZWFzZUFzc2V0KHNwKTtcclxuICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHNwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWxlYXNlUmVzKHNwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzcHJpdGVbXCJuZXdVcmxcIl0gPSBwaWNQYXRoOy8vIOiusOW9leacgOaWsHVybCDpmLLmraLlpJrmrKHor7fmsYLlvILmraXorr7nva7kuobml6fnmoRcclxuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBudWxsOy8v572u56m6IOmYsuatoueOqeWutueci+WIsOaXp+eahOmBk+WFt+ivr+S8mlxyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHBpY1BhdGgsIGNjLlNwcml0ZUZyYW1lLCBmaW5pc2hDYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0t6LWE5rqQ5Yqg6L29LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBcclxuICAgIHB1YmxpYyBzdGF0aWMgc2hvd0RpYWxvZyh1cmw6IHN0cmluZywgZGF0YT8sIGNhbGxiYWNrPykge1xyXG4gICAgIFxyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmViL1wiICsgdXJsLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgZmluZENvbnRyb2wuZmluZFJlc1V0aWwuYmluZFJlc0Fzc2V0KG5vZGUsIHByZWZhYik7XHJcbiAgICAgICAgICAgIGxldCBwYXJlbnROb2RlID0gZmluZENvbnRyb2wuZ2V0c2NlbmVOb2RlKCk7XHJcbiAgICAgICAgICAgIGlmIChub2RlICYmIHBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuZ2V0Q29tcG9uZW50KHVybCkuaW5pdERhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQodXJsKS5pbml0RGF0YShkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb250ZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgY29udGVudC5zY2FsZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihjb250ZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjMyLCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiAnYmFja091dCcgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzaG93VG9hc3QodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmZWIvdG9hc3RcIiwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB0b2FzdCA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgIGZpbmRDb250cm9sLmZpbmRSZXNVdGlsLmJpbmRSZXNBc3NldCh0b2FzdCwgcHJlZmFiKTtcclxuICAgICAgICAgICAgbGV0IHBhcmVudE5vZGUgPSBmaW5kQ29udHJvbC5nZXRzY2VuZU5vZGUoKTtcclxuICAgICAgICAgICAgaWYgKHRvYXN0ICYmIHBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmFkZENoaWxkKHRvYXN0KTtcclxuICAgICAgICAgICAgICAgIGxldCB0b2FzdExhYmVsID0gdG9hc3QuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0TGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0ZXh0O1xyXG4gICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRvYXN0KTtcclxuICAgICAgICAgICAgICAgIHRvYXN0Lm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0b2FzdCkudG8oMC4xNSwgeyBzY2FsZTogMS4yIH0pLnRvKDAuMTUsIHsgc2NhbGU6IDEgfSkuZGVsYXkoMC41KS50bygwLjUsIHsgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9maW5kU291bmRUb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPOzs7QUFFUCw2Q0FBNEM7QUFHNUMsSUFBTSxhQUFhLEdBQUcsYUFBYSxDQUFDO0FBQ3BDLElBQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQztBQUVsQztJQW9DSTtRQTlCUSxtQkFBYyxHQUFpQixJQUFJLENBQUM7UUFDcEMsYUFBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsY0FBUyxHQUFpQixJQUFJLENBQUM7UUE0Qm5DLElBQUksQ0FBQyxXQUFXLEdBQUcseUJBQVcsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFlBQVksR0FBRyx5QkFBVyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsV0FBVyxHQUFHLHlCQUFXLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUE3Qk0sMENBQWtCLEdBQXpCO1FBQUEsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxjQUFjO1lBQUUsT0FBTztRQUVoQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQVUsRUFBRSxJQUFrQjtZQUMxRSxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLEVBQUU7Z0JBQzFCLE9BQU87YUFDVjtZQUNELEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxvQ0FBWSxHQUFuQjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFFMUIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFVLEVBQUUsSUFBa0I7WUFDMUUsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxFQUFFO2dCQUMxQixPQUFPO2FBQ1Y7WUFDRCxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVFNLG1DQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDckMseUJBQVcsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ2xDO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNwQjtJQUNMLENBQUM7SUFFTSxvQ0FBWSxHQUFuQjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLHlCQUFXLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7U0FFdEI7YUFBTTtZQUNILEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBRU0sbUNBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNyQyx5QkFBVyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUdNLGlDQUFTLEdBQWhCLFVBQWlCLEtBQW1CLEVBQUUsTUFBc0I7UUFBdEIsdUJBQUEsRUFBQSxhQUFzQjtRQUN4RCxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQSxVQUFVO1FBQ2pDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixvQkFBb0I7WUFDcEIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3pEO0lBQ0wsQ0FBQztJQUVNLGtDQUFVLEdBQWpCLFVBQWtCLEtBQW1CLEVBQUUsTUFBdUIsRUFBRSxRQUF5QjtRQUFsRCx1QkFBQSxFQUFBLGNBQXVCO1FBQUUseUJBQUEsRUFBQSxlQUF5QjtRQUNyRixJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87UUFDbkIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEQsSUFBSSxRQUFRO2dCQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2xFLE9BQU8sT0FBTyxDQUFDO1NBQ2xCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLDBDQUFrQixHQUF6QixVQUEwQixJQUFZLEVBQUUsTUFBdUI7UUFBdkIsdUJBQUEsRUFBQSxjQUF1QjtRQUMzRCxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFBRSxPQUFPO1FBQ3hDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBVSxFQUFFLElBQWtCO1lBQ2pFLElBQUksR0FBRyxFQUFFO2dCQUNMLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUMxQixPQUFPO2FBQ1Y7WUFDRCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdNLGlDQUFTLEdBQWhCO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBR00sK0JBQU8sR0FBZDtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLGdDQUFRLEdBQWY7UUFDSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFHTSxpQ0FBUyxHQUFoQjtRQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQzlCO0lBQ0wsQ0FBQztJQUdNLGtDQUFVLEdBQWpCLFVBQWtCLE9BQWU7UUFDN0IsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUdNLDZCQUFLLEdBQVosVUFBYSxPQUFlO1FBQ3hCLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFHTSw4QkFBTSxHQUFiLFVBQWMsT0FBZTtRQUN6QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEM7SUFDTCxDQUFDO0lBRU0sc0NBQWMsR0FBckI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVNLHNDQUFjLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUdMLG9CQUFDO0FBQUQsQ0FySkEsQUFxSkMsSUFBQTtBQXJKWSxzQ0FBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8v6Z+z6aKR5bel5YW357G7XHJcblxyXG5pbXBvcnQgeyBmaW5kU3RvcmFnZSB9IGZyb20gXCIuL2ZpbmRTdG9yYWdlXCI7XHJcblxyXG5cclxuY29uc3QgY29tbW9uQnRuUGF0aCA9IFwic291bmQvY2xpY2tcIjtcclxuY29uc3QgY29tbW9uQmdtUGF0aCA9IFwic291bmQvYmdtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgZmluZFNvdW5kVG9vbCB7XHJcbiAgICAgXHJcbiAgICBtdXNpY1N3aXRjaDogYm9vbGVhbjsgICAgLy/og4zmma/pn7PkuZDlvIDlhbNcclxuICAgIGVmZmVjdFN3aXRjaDogYm9vbGVhbjsgICAvL+mfs+aViOW8gOWFs1xyXG4gICAgc2hvY2tTd2l0Y2g6IGJvb2xlYW47ICAgIC8vIOmch+WKqOW8gOWFsyAgIFxyXG5cclxuICAgIHByaXZhdGUgYnRuQ2xpY2tFZmZlY3Q6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGJnbU11c2ljOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgY3Vyck11c2ljOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBpbml0QnRuQ2xpY2tFZmZlY3QoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuYnRuQ2xpY2tFZmZlY3QpIHJldHVybjtcclxuXHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoY29tbW9uQnRuUGF0aCwgY2MuQXVkaW9DbGlwLCAoZXJyOiBFcnJvciwgY2xpcDogY2MuQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIgfHwgIWNjLmlzVmFsaWQodGhpcykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmJ0bkNsaWNrRWZmZWN0ID0gY2xpcDtcclxuICAgICAgICAgICAgY2xpcC5hZGRSZWYoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdGJnbU11c2ljKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmJnbU11c2ljKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGNvbW1vbkJnbVBhdGgsIGNjLkF1ZGlvQ2xpcCwgKGVycjogRXJyb3IsIGNsaXA6IGNjLkF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyIHx8ICFjYy5pc1ZhbGlkKHRoaXMpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5iZ21NdXNpYyA9IGNsaXA7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbW9uYmdtTXVzaWMoKTtcclxuICAgICAgICAgICAgY2xpcC5hZGRSZWYoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm11c2ljU3dpdGNoID0gZmluZFN0b3JhZ2UuZ2V0Qm9vbEJ5S2V5KFwia2tfc2V0dXBfbXVzaWNcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RTd2l0Y2ggPSBmaW5kU3RvcmFnZS5nZXRCb29sQnlLZXkoXCJra19zZXR1cF9lZmZlY3RcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5zaG9ja1N3aXRjaCA9IGZpbmRTdG9yYWdlLmdldEJvb2xCeUtleShcImtrX3NldHVwX3Nob2NrXCIsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzd2l0Y2hNdXNpYygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm11c2ljU3dpdGNoID0gIXRoaXMubXVzaWNTd2l0Y2g7XHJcbiAgICAgICAgZmluZFN0b3JhZ2Uuc2V0Qm9vbEJ5S2V5KFwia2tfc2V0dXBfbXVzaWNcIiwgdGhpcy5tdXNpY1N3aXRjaCk7XHJcbiAgICAgICAgaWYgKHRoaXMubXVzaWNTd2l0Y2gpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3Vyck11c2ljKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlNdXNpYyh0aGlzLmN1cnJNdXNpYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BNdXNpYygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3dpdGNoRWZmZWN0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWZmZWN0U3dpdGNoID0gIXRoaXMuZWZmZWN0U3dpdGNoO1xyXG4gICAgICAgIGZpbmRTdG9yYWdlLnNldEJvb2xCeUtleShcImtrX3NldHVwX2VmZmVjdFwiLCB0aGlzLmVmZmVjdFN3aXRjaCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZWZmZWN0U3dpdGNoKSB7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzd2l0Y2hTaG9jaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNob2NrU3dpdGNoID0gIXRoaXMuc2hvY2tTd2l0Y2g7XHJcbiAgICAgICAgZmluZFN0b3JhZ2Uuc2V0Qm9vbEJ5S2V5KFwia2tfc2V0dXBfc2hvY2tcIiwgdGhpcy5zaG9ja1N3aXRjaCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBwbGF5TXVzaWMoYXVkaW86IGNjLkF1ZGlvQ2xpcCwgaXNMb29wOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghYXVkaW8pIHJldHVybjtcclxuICAgICAgICB0aGlzLmN1cnJNdXNpYyA9IGF1ZGlvOy8v5L+d5a2Y5b2T5YmN6IOM5pmv6Z+z5LmQXHJcbiAgICAgICAgaWYgKHRoaXMubXVzaWNTd2l0Y2gpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5zdG9wTXVzaWMoKTtcclxuICAgICAgICAgICAgdmFyIGF1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoYXVkaW8sIGlzTG9vcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGF5RWZmZWN0KGF1ZGlvOiBjYy5BdWRpb0NsaXAsIGlzTG9vcDogYm9vbGVhbiA9IGZhbHNlLCBjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoIWF1ZGlvKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuZWZmZWN0U3dpdGNoKSB7XHJcbiAgICAgICAgICAgIHZhciBhdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheShhdWRpbywgaXNMb29wLCAxKTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYy5hdWRpb0VuZ2luZS5zZXRGaW5pc2hDYWxsYmFjayhhdWRpb0lELCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIHJldHVybiBhdWRpb0lEO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheUVmZmVjdFdpdGhQYXRoKHBhdGg6IHN0cmluZywgaXNMb29wOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXBhdGggfHwgIXRoaXMuZWZmZWN0U3dpdGNoKSByZXR1cm47XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQocGF0aCwgY2MuQXVkaW9DbGlwLCAoZXJyOiBFcnJvciwgY2xpcDogY2MuQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIuWKoOi9vemfs+aViOi1hOa6kOWksei0pVwiICsgcGF0aCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGF1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGNsaXAsIGlzTG9vcCwgMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdG9wTXVzaWMoKTogdm9pZCB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdG9wQWxsKCk6IHZvaWQge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGF1c2VBbGwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubXVzaWNTd2l0Y2gpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyByZXN1bWVBbGwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubXVzaWNTd2l0Y2gpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RvcEVmZmVjdChhdWRpb0lEOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wRWZmZWN0KGF1ZGlvSUQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcGF1c2UoYXVkaW9JRDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2UoYXVkaW9JRCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyByZXN1bWUoYXVkaW9JRDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubXVzaWNTd2l0Y2gpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lKGF1ZGlvSUQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tbW9uQnRuQ2xpY2soKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wbGF5RWZmZWN0KHRoaXMuYnRuQ2xpY2tFZmZlY3QsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tbW9uYmdtTXVzaWMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wbGF5TXVzaWModGhpcy5iZ21NdXNpYyk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/parlour.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '014741UGutBway3J/ZL6r3K', 'parlour');
// script/parlour.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var imgItem_1 = require("./prefeb/imgItem");
var findControl_1 = require("./tool/findControl");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var parlour = /** @class */ (function (_super) {
    __extends(parlour, _super);
    function parlour() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.imgItem = null;
        _this.scroll_contect = null;
        _this.scrollView = null;
        _this.gamehallBg = null;
        _this.bookSelect = null;
        _this.gamehall = null;
        return _this;
    }
    parlour.prototype.start = function () {
        var _this = this;
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = false;
            this.getComponent(cc.Canvas).fitWidth = true;
        }
        findControl_1.findControl.setsceneNode(this.node);
        findControl_1.findControl.adapterBg(this.bg);
        findControl_1.findControl.adapterBg(this.gamehallBg);
        this.scheduleOnce(function () {
            _this.init();
        });
        // this.scheduleOnce(() => {
        //     if (fgData.userData.level > 4 && fgData.userData.level < fgData.levelAll) {
        //         let hei = 260;
        //         let y = 0;
        //         if (fgData.userData.level % 2 == 0) {
        //             let index = fgData.userData.level / 2 ;
        //             y = ((fgData.userData.level -1) - index) * hei;
        //         } else {
        //             let index = (fgData.userData.level + 1) / 2
        //             y = (fgData.userData.level - index) * hei;
        //         }
        //         this.scrollView.scrollToOffset(cc.v2(0, y), 1);
        //     }
        // }, 0.1)
        this.gamehall.active = true;
        this.bookSelect.active = false;
    };
    parlour.prototype.init = function () {
        this.scroll_contect.destroyAllChildren();
        for (var i = 0; i < 30; i++) {
            var item = cc.instantiate(this.imgItem);
            this.scroll_contect.addChild(item);
            item.getComponent(imgItem_1.default).init(i, this);
        }
    };
    parlour.prototype.onClick_setting = function () {
        findControl_1.findControl.findSoundTool.commonBtnClick();
        findControl_1.findControl.findResUtil.showDialog(findControl_1.wicket.TreePop, { isGame: false });
        // findControl.findResUtil.showDialog(dialog.comment_dialog);
    };
    parlour.prototype.showToast = function (text) {
        findControl_1.findControl.findResUtil.showToast(text);
    };
    parlour.prototype.onClick_lvBook = function () {
        findControl_1.findControl.findSoundTool.commonBtnClick();
        this.gamehall.active = false;
        this.bookSelect.active = true;
    };
    parlour.prototype.onClick_blueBook = function () {
        findControl_1.findControl.findSoundTool.commonBtnClick();
        findControl_1.findControl.findResUtil.showToast("The feature is not available yet");
    };
    __decorate([
        property(cc.Node)
    ], parlour.prototype, "bg", void 0);
    __decorate([
        property(cc.Prefab)
    ], parlour.prototype, "imgItem", void 0);
    __decorate([
        property(cc.Node)
    ], parlour.prototype, "scroll_contect", void 0);
    __decorate([
        property(cc.ScrollView)
    ], parlour.prototype, "scrollView", void 0);
    __decorate([
        property(cc.Node)
    ], parlour.prototype, "gamehallBg", void 0);
    __decorate([
        property(cc.Node)
    ], parlour.prototype, "bookSelect", void 0);
    __decorate([
        property(cc.Node)
    ], parlour.prototype, "gamehall", void 0);
    parlour = __decorate([
        ccclass
    ], parlour);
    return parlour;
}(cc.Component));
exports.default = parlour;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcGFybG91ci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBdUM7QUFDdkMsa0RBQXlEO0FBR25ELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBd0ZDO1FBckZHLFFBQUUsR0FBWSxJQUFJLENBQUM7UUFHbkIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUcxQixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUcvQixnQkFBVSxHQUFrQixJQUFJLENBQUM7UUFHakMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsY0FBUSxHQUFZLElBQUksQ0FBQzs7SUFtRTdCLENBQUM7SUFoRUcsdUJBQUssR0FBTDtRQUFBLGlCQStCQztRQTlCRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUNoRDtRQUNELHlCQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyx5QkFBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0IseUJBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUE7UUFFRiw0QkFBNEI7UUFDNUIsa0ZBQWtGO1FBQ2xGLHlCQUF5QjtRQUN6QixxQkFBcUI7UUFDckIsZ0RBQWdEO1FBQ2hELHNEQUFzRDtRQUV0RCw4REFBOEQ7UUFDOUQsbUJBQW1CO1FBQ25CLDBEQUEwRDtRQUMxRCx5REFBeUQ7UUFDekQsWUFBWTtRQUVaLDBEQUEwRDtRQUMxRCxRQUFRO1FBQ1IsVUFBVTtRQUVWLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUVELHNCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixFQUFFLENBQUE7UUFDeEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QixJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzVDO0lBQ0wsQ0FBQztJQUVELGlDQUFlLEdBQWY7UUFDSSx5QkFBVyxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQyx5QkFBVyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsb0JBQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN0RSw2REFBNkQ7SUFDakUsQ0FBQztJQUlELDJCQUFTLEdBQVQsVUFBVSxJQUFZO1FBQ2xCLHlCQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsZ0NBQWMsR0FBZDtRQUNJLHlCQUFXLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUVELGtDQUFnQixHQUFoQjtRQUNJLHlCQUFXLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNDLHlCQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFwRkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1Q0FDQztJQUduQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNNO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ2E7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQzsrQ0FDUztJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTztJQXJCUixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBd0YzQjtJQUFELGNBQUM7Q0F4RkQsQUF3RkMsQ0F4Rm9DLEVBQUUsQ0FBQyxTQUFTLEdBd0ZoRDtrQkF4Rm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW1nSXRlbSBmcm9tIFwiLi9wcmVmZWIvaW1nSXRlbVwiO1xuaW1wb3J0IHsgZmluZENvbnRyb2wsIHdpY2tldCB9IGZyb20gXCIuL3Rvb2wvZmluZENvbnRyb2xcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGFybG91ciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBiZzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGltZ0l0ZW06IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzY3JvbGxfY29udGVjdDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcbiAgICBzY3JvbGxWaWV3OiBjYy5TY3JvbGxWaWV3ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGdhbWVoYWxsQmc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYm9va1NlbGVjdDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBnYW1laGFsbDogY2MuTm9kZSA9IG51bGw7XG5cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuSVBBRCkge1xuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuQ2FudmFzKS5maXRIZWlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcykuZml0V2lkdGggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGZpbmRDb250cm9sLnNldHNjZW5lTm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICBmaW5kQ29udHJvbC5hZGFwdGVyQmcodGhpcy5iZyk7XG4gICAgICAgIGZpbmRDb250cm9sLmFkYXB0ZXJCZyh0aGlzLmdhbWVoYWxsQmcpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIC8vICAgICBpZiAoZmdEYXRhLnVzZXJEYXRhLmxldmVsID4gNCAmJiBmZ0RhdGEudXNlckRhdGEubGV2ZWwgPCBmZ0RhdGEubGV2ZWxBbGwpIHtcbiAgICAgICAgLy8gICAgICAgICBsZXQgaGVpID0gMjYwO1xuICAgICAgICAvLyAgICAgICAgIGxldCB5ID0gMDtcbiAgICAgICAgLy8gICAgICAgICBpZiAoZmdEYXRhLnVzZXJEYXRhLmxldmVsICUgMiA9PSAwKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBpbmRleCA9IGZnRGF0YS51c2VyRGF0YS5sZXZlbCAvIDIgO1xuXG4gICAgICAgIC8vICAgICAgICAgICAgIHkgPSAoKGZnRGF0YS51c2VyRGF0YS5sZXZlbCAtMSkgLSBpbmRleCkgKiBoZWk7XG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGluZGV4ID0gKGZnRGF0YS51c2VyRGF0YS5sZXZlbCArIDEpIC8gMlxuICAgICAgICAvLyAgICAgICAgICAgICB5ID0gKGZnRGF0YS51c2VyRGF0YS5sZXZlbCAtIGluZGV4KSAqIGhlaTtcbiAgICAgICAgLy8gICAgICAgICB9XG5cbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9PZmZzZXQoY2MudjIoMCwgeSksIDEpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LCAwLjEpXG5cbiAgICAgICAgdGhpcy5nYW1laGFsbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmJvb2tTZWxlY3QuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxfY29udGVjdC5kZXN0cm95QWxsQ2hpbGRyZW4oKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMwOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pbWdJdGVtKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsX2NvbnRlY3QuYWRkQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChpbWdJdGVtKS5pbml0KGksIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGlja19zZXR0aW5nKCkge1xuICAgICAgICBmaW5kQ29udHJvbC5maW5kU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIGZpbmRDb250cm9sLmZpbmRSZXNVdGlsLnNob3dEaWFsb2cod2lja2V0LlRyZWVQb3AsIHsgaXNHYW1lOiBmYWxzZSB9KTtcbiAgICAgICAgLy8gZmluZENvbnRyb2wuZmluZFJlc1V0aWwuc2hvd0RpYWxvZyhkaWFsb2cuY29tbWVudF9kaWFsb2cpO1xuICAgIH1cblxuXG5cbiAgICBzaG93VG9hc3QodGV4dDogc3RyaW5nKSB7XG4gICAgICAgIGZpbmRDb250cm9sLmZpbmRSZXNVdGlsLnNob3dUb2FzdCh0ZXh0KTtcbiAgICB9XG5cbiAgICBvbkNsaWNrX2x2Qm9vaygpIHtcbiAgICAgICAgZmluZENvbnRyb2wuZmluZFNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICB0aGlzLmdhbWVoYWxsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJvb2tTZWxlY3QuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbkNsaWNrX2JsdWVCb29rKCkge1xuICAgICAgICBmaW5kQ29udHJvbC5maW5kU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIGZpbmRDb250cm9sLmZpbmRSZXNVdGlsLnNob3dUb2FzdChcIlRoZSBmZWF0dXJlIGlzIG5vdCBhdmFpbGFibGUgeWV0XCIpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/findStorage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f021e0ydDZC+qJMjJKjbysY', 'findStorage');
// script/tool/findStorage.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findStorage = void 0;
var findStorage = /** @class */ (function () {
    function findStorage() {
    }
    findStorage.setStringByKey = function (key, str) {
        cc.sys.localStorage.setItem(key, str);
    };
    findStorage.getStringByKey = function (key, defaultValue) {
        defaultValue = defaultValue ? defaultValue : "";
        var tempValue = cc.sys.localStorage.getItem(key);
        return tempValue ? tempValue : defaultValue;
    };
    findStorage.setBoolByKey = function (key, boolValue) {
        this.setStringByKey(key, (boolValue ? "1" : "0"));
    };
    findStorage.getBoolByKey = function (key, defaultValue) {
        defaultValue = defaultValue ? defaultValue : false;
        var tempValue = cc.sys.localStorage.getItem(key);
        return tempValue ? (tempValue == "1" ? true : false) : defaultValue;
    };
    findStorage.setIntegerByKey = function (key, defaultValue) {
        this.setStringByKey(key, defaultValue.toString());
    };
    findStorage.getIntegerByKey = function (key, defaultValue) {
        var tempValue = cc.sys.localStorage.getItem(key);
        return tempValue ? parseInt(tempValue) : defaultValue;
    };
    findStorage.getStorageJSON = function (key) {
        var data = cc.sys.localStorage.getItem(key);
        if (data instanceof Array && data.length < 1) {
            return null;
        }
        if (data) {
            return JSON.parse(data);
        }
        return null;
    };
    findStorage.setStorageJSON = function (key, data) {
        cc.sys.localStorage.setItem(key, JSON.stringify(data));
    };
    findStorage.removeByKey = function (key) {
        cc.sys.localStorage.removeItem(key);
    };
    return findStorage;
}());
exports.findStorage = findStorage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9maW5kU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUFBO0lBNENBLENBQUM7SUEzQ2lCLDBCQUFjLEdBQTVCLFVBQTZCLEdBQVcsRUFBRSxHQUFXO1FBQ2pELEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVhLDBCQUFjLEdBQTVCLFVBQTZCLEdBQVcsRUFBRSxZQUFxQjtRQUMzRCxZQUFZLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNoRCxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakQsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO0lBQ2hELENBQUM7SUFFYSx3QkFBWSxHQUExQixVQUEyQixHQUFXLEVBQUUsU0FBa0I7UUFDdEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRWEsd0JBQVksR0FBMUIsVUFBMkIsR0FBVyxFQUFFLFlBQXNCO1FBQzFELFlBQVksR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ25ELElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqRCxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7SUFDeEUsQ0FBQztJQUVhLDJCQUFlLEdBQTdCLFVBQThCLEdBQVcsRUFBRSxZQUFvQjtRQUMzRCxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRWEsMkJBQWUsR0FBN0IsVUFBOEIsR0FBVyxFQUFFLFlBQW9CO1FBQzNELElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqRCxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7SUFDMUQsQ0FBQztJQUVhLDBCQUFjLEdBQTVCLFVBQTZCLEdBQVc7UUFDcEMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLElBQUksSUFBSSxZQUFZLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUFFLE9BQU8sSUFBSSxDQUFDO1NBQUU7UUFDOUQsSUFBSSxJQUFJLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7U0FBRTtRQUNyQyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ2EsMEJBQWMsR0FBNUIsVUFBNkIsR0FBRyxFQUFFLElBQUk7UUFDbEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVhLHVCQUFXLEdBQXpCLFVBQTBCLEdBQVc7UUFDakMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTCxrQkFBQztBQUFELENBNUNBLEFBNENDLElBQUE7QUE1Q1ksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGNsYXNzIGZpbmRTdG9yYWdlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0U3RyaW5nQnlLZXkoa2V5OiBzdHJpbmcsIHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgc3RyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFN0cmluZ0J5S2V5KGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZSA/IGRlZmF1bHRWYWx1ZSA6IFwiXCI7XHJcbiAgICAgICAgbGV0IHRlbXBWYWx1ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIHJldHVybiB0ZW1wVmFsdWUgPyB0ZW1wVmFsdWUgOiBkZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRCb29sQnlLZXkoa2V5OiBzdHJpbmcsIGJvb2xWYWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuc2V0U3RyaW5nQnlLZXkoa2V5LCAoYm9vbFZhbHVlID8gXCIxXCIgOiBcIjBcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Qm9vbEJ5S2V5KGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBib29sZWFuKTogYm9vbGVhbiB7XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlID0gZGVmYXVsdFZhbHVlID8gZGVmYXVsdFZhbHVlIDogZmFsc2U7XHJcbiAgICAgICAgbGV0IHRlbXBWYWx1ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIHJldHVybiB0ZW1wVmFsdWUgPyAodGVtcFZhbHVlID09IFwiMVwiID8gdHJ1ZSA6IGZhbHNlKSA6IGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldEludGVnZXJCeUtleShrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldFN0cmluZ0J5S2V5KGtleSwgZGVmYXVsdFZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW50ZWdlckJ5S2V5KGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IHRlbXBWYWx1ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIHJldHVybiB0ZW1wVmFsdWUgPyBwYXJzZUludCh0ZW1wVmFsdWUpIDogZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0U3RvcmFnZUpTT04oa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXkgJiYgZGF0YS5sZW5ndGggPCAxKSB7IHJldHVybiBudWxsOyB9XHJcbiAgICAgICAgaWYgKGRhdGEpIHsgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSkgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRTdG9yYWdlSlNPTihrZXksIGRhdGEpIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZW1vdmVCeUtleShrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/prefeb/newhand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9a1e0lTY71PmJruz9bjJlQK', 'newhand');
// script/prefeb/newhand.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var newhand = /** @class */ (function (_super) {
    __extends(newhand, _super);
    function newhand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dong1_top = null;
        _this.dongdong1_bottom = null;
        _this.hand1 = null;
        _this.dong2_top = null;
        _this.dongdong2_bottom = null;
        _this.hand2 = null;
        return _this;
    }
    newhand.prototype.start = function () {
    };
    newhand.prototype.showdong1 = function () {
        var _this = this;
        this.dong1_top.active = true;
        this.dongdong1_bottom.active = true;
        this.hand1.active = false;
        this.dong1_top.width = 500;
        this.dong1_top.height = 500;
        this.dongdong1_bottom.width = 500;
        this.dongdong1_bottom.height = 500;
        cc.Tween.stopAllByTarget(this.dong1_top);
        cc.Tween.stopAllByTarget(this.dongdong1_bottom);
        cc.tween(this.dong1_top).to(0.5, { width: 80, height: 80 }).start();
        cc.tween(this.dongdong1_bottom).to(0.5, { width: 80, height: 80 }).delay(0.1).call(function () {
            _this.hand1.active = true;
        }).start();
    };
    newhand.prototype.hidedong1 = function () {
        this.dong1_top.active = false;
        this.dongdong1_bottom.active = false;
        this.hand1.active = false;
    };
    newhand.prototype.showdong2 = function () {
        var _this = this;
        this.dong2_top.active = true;
        this.dongdong2_bottom.active = true;
        this.hand2.active = false;
        this.dong2_top.width = 500;
        this.dong2_top.height = 500;
        this.dongdong2_bottom.width = 500;
        this.dongdong2_bottom.height = 500;
        cc.Tween.stopAllByTarget(this.dong2_top);
        cc.Tween.stopAllByTarget(this.dongdong2_bottom);
        cc.tween(this.dong2_top).to(0.5, { width: 80, height: 80 }).start();
        cc.tween(this.dongdong2_bottom).to(0.5, { width: 80, height: 80 }).delay(0.1).call(function () {
            _this.hand2.active = true;
        }).start();
    };
    __decorate([
        property(cc.Node)
    ], newhand.prototype, "dong1_top", void 0);
    __decorate([
        property(cc.Node)
    ], newhand.prototype, "dongdong1_bottom", void 0);
    __decorate([
        property(cc.Node)
    ], newhand.prototype, "hand1", void 0);
    __decorate([
        property(cc.Node)
    ], newhand.prototype, "dong2_top", void 0);
    __decorate([
        property(cc.Node)
    ], newhand.prototype, "dongdong2_bottom", void 0);
    __decorate([
        property(cc.Node)
    ], newhand.prototype, "hand2", void 0);
    newhand = __decorate([
        ccclass
    ], newhand);
    return newhand;
}(cc.Component));
exports.default = newhand;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcHJlZmViL25ld2hhbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUE0RUM7UUF6RUcsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFHakMsV0FBSyxHQUFZLElBQUksQ0FBQztRQUl0QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUdqQyxXQUFLLEdBQVksSUFBSSxDQUFDOztJQXlEMUIsQ0FBQztJQXZERyx1QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDJCQUFTLEdBQVQ7UUFBQSxpQkFtQkM7UUFsQkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRXBDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUUxQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBRTVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ25DLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QyxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FB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U0FBUyxHQTRFaEQ7a0JBNUVvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG5ld2hhbmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZG9uZzFfdG9wOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGRvbmdkb25nMV9ib3R0b206IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGFuZDE6IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBkb25nMl90b3A6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZG9uZ2RvbmcyX2JvdHRvbTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoYW5kMjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIHNob3dkb25nMSgpIHtcbiAgICAgICAgdGhpcy5kb25nMV90b3AuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kb25nZG9uZzFfYm90dG9tLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5oYW5kMS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmRvbmcxX3RvcC53aWR0aCA9IDUwMDtcbiAgICAgICAgdGhpcy5kb25nMV90b3AuaGVpZ2h0ID0gNTAwO1xuXG4gICAgICAgIHRoaXMuZG9uZ2RvbmcxX2JvdHRvbS53aWR0aCA9IDUwMDtcbiAgICAgICAgdGhpcy5kb25nZG9uZzFfYm90dG9tLmhlaWdodCA9IDUwMDtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuZG9uZzFfdG9wKTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuZG9uZ2RvbmcxX2JvdHRvbSk7XG5cblxuICAgICAgICBjYy50d2Vlbih0aGlzLmRvbmcxX3RvcCkudG8oMC41LCB7IHdpZHRoOiA4MCwgaGVpZ2h0OiA4MH0pLnN0YXJ0KCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZG9uZ2RvbmcxX2JvdHRvbSkudG8oMC41LCB7IHdpZHRoOiA4MCwgaGVpZ2h0OiA4MH0pLmRlbGF5KDAuMSkuY2FsbCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5oYW5kMS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9KS5zdGFydCgpO1xuICAgIH1cblxuXG4gICAgaGlkZWRvbmcxKCkge1xuICAgICAgICB0aGlzLmRvbmcxX3RvcC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kb25nZG9uZzFfYm90dG9tLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhbmQxLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuXG4gICAgc2hvd2RvbmcyKCkge1xuICAgICAgICB0aGlzLmRvbmcyX3RvcC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmRvbmdkb25nMl9ib3R0b20uYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmhhbmQyLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZG9uZzJfdG9wLndpZHRoID0gNTAwO1xuICAgICAgICB0aGlzLmRvbmcyX3RvcC5oZWlnaHQgPSA1MDA7XG5cbiAgICAgICAgdGhpcy5kb25nZG9uZzJfYm90dG9tLndpZHRoID0gNTAwO1xuICAgICAgICB0aGlzLmRvbmdkb25nMl9ib3R0b20uaGVpZ2h0ID0gNTAwO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5kb25nMl90b3ApO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5kb25nZG9uZzJfYm90dG9tKTtcblxuXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZG9uZzJfdG9wKS50bygwLjUsIHsgd2lkdGg6IDgwLCBoZWlnaHQ6IDgwfSkuc3RhcnQoKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5kb25nZG9uZzJfYm90dG9tKS50bygwLjUsIHsgd2lkdGg6IDgwLCBoZWlnaHQ6IDgwfSkuZGVsYXkoMC4xKS5jYWxsKCgpPT57XG4gICAgICAgICAgICB0aGlzLmhhbmQyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/findResBind.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b835cS/qxNLbakyyg5HTNea', 'findResBind');
// script/tool/findResBind.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
cc.Component.prototype.addAutoReleaseAsset = function (_asset) {
    var tempAuto = this.node.getComponent(AutoReleaseAssets);
    if (!cc.isValid(tempAuto)) {
        tempAuto = this.node.addComponent(AutoReleaseAssets);
    }
    tempAuto.addAutoReleaseAsset(_asset);
};
cc.Component.prototype.addAutoReleaseAssets = function (_assets) {
    var tempAuto = this.node.getComponent(AutoReleaseAssets);
    if (!cc.isValid(tempAuto)) {
        tempAuto = this.node.addComponent(AutoReleaseAssets);
    }
    for (var _i = 0, _assets_1 = _assets; _i < _assets_1.length; _i++) {
        var _assetOne = _assets_1[_i];
        tempAuto.addAutoReleaseAsset(_assetOne);
    }
};
//-----------------------------------------------------------------------------------------------------AutoReleaseAssets
var ccclass = cc._decorator.ccclass;
var AutoReleaseAssets = /** @class */ (function (_super) {
    __extends(AutoReleaseAssets, _super);
    function AutoReleaseAssets() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dynamicsAssets = [];
        return _this;
    }
    AutoReleaseAssets.prototype.addAutoReleaseAsset = function (_asset) {
        if (cc.isValid(_asset)) {
            _asset.addRef();
            this.dynamicsAssets.push(_asset);
            // console.log("1111111111");
        }
    };
    AutoReleaseAssets.prototype.onDestroy = function () {
        // console.log("222222222");
        for (var index = 0; index < this.dynamicsAssets.length; index++) {
            if (cc.isValid(this.dynamicsAssets[index])) {
                this.dynamicsAssets[index].decRef();
            }
        }
        this.dynamicsAssets = [];
    };
    AutoReleaseAssets = __decorate([
        ccclass
    ], AutoReleaseAssets);
    return AutoReleaseAssets;
}(cc.Component));
exports.default = AutoReleaseAssets;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9maW5kUmVzQmluZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyxVQUFTLE1BQWU7SUFDakUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN6RCxJQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBQztRQUNyQixRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQUN4RDtJQUNELFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUE7QUFFRCxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsR0FBRyxVQUFTLE9BQWtCO0lBQ3JFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDekQsSUFBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUM7UUFDckIsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDeEQ7SUFDRCxLQUF5QixVQUFPLEVBQVAsbUJBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU8sRUFBRTtRQUE3QixJQUFNLFNBQVMsZ0JBQUE7UUFDaEIsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQzNDO0FBQ0wsQ0FBQyxDQUFBO0FBRUQsd0hBQXdIO0FBRWpILElBQUEsT0FBTyxHQUFJLEVBQUUsQ0FBQyxVQUFVLFFBQWpCLENBQWtCO0FBR2hDO0lBQStDLHFDQUFZO0lBQTNEO1FBQUEscUVBc0JDO1FBcEJXLG9CQUFjLEdBQWUsRUFBRSxDQUFDOztJQW9CNUMsQ0FBQztJQWxCVSwrQ0FBbUIsR0FBMUIsVUFBMkIsTUFBZTtRQUN0QyxJQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUM7WUFDbEIsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLDZCQUE2QjtTQUNoQztJQUNMLENBQUM7SUFFRCxxQ0FBUyxHQUFUO1FBQ0ksNEJBQTRCO1FBQzVCLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUM3RCxJQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDO2dCQUN0QyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3ZDO1NBQ0o7UUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBcEJnQixpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQXNCckM7SUFBRCx3QkFBQztDQXRCRCxBQXNCQyxDQXRCOEMsRUFBRSxDQUFDLFNBQVMsR0FzQjFEO2tCQXRCb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ29tcG9uZW50LnByb3RvdHlwZS5hZGRBdXRvUmVsZWFzZUFzc2V0ID0gZnVuY3Rpb24oX2Fzc2V0OmNjLkFzc2V0KSB7XHJcbiAgICBsZXQgdGVtcEF1dG8gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEF1dG9SZWxlYXNlQXNzZXRzKTtcclxuICAgIGlmKCFjYy5pc1ZhbGlkKHRlbXBBdXRvKSl7XHJcbiAgICAgICAgdGVtcEF1dG8gPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KEF1dG9SZWxlYXNlQXNzZXRzKTtcclxuICAgIH1cclxuICAgIHRlbXBBdXRvLmFkZEF1dG9SZWxlYXNlQXNzZXQoX2Fzc2V0KTtcclxufVxyXG5cclxuY2MuQ29tcG9uZW50LnByb3RvdHlwZS5hZGRBdXRvUmVsZWFzZUFzc2V0cyA9IGZ1bmN0aW9uKF9hc3NldHM6Y2MuQXNzZXRbXSkge1xyXG4gICAgbGV0IHRlbXBBdXRvID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChBdXRvUmVsZWFzZUFzc2V0cyk7XHJcbiAgICBpZighY2MuaXNWYWxpZCh0ZW1wQXV0bykpe1xyXG4gICAgICAgIHRlbXBBdXRvID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChBdXRvUmVsZWFzZUFzc2V0cyk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IF9hc3NldE9uZSAgb2YgX2Fzc2V0cykge1xyXG4gICAgICAgIHRlbXBBdXRvLmFkZEF1dG9SZWxlYXNlQXNzZXQoX2Fzc2V0T25lKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUF1dG9SZWxlYXNlQXNzZXRzXHJcblxyXG5jb25zdCB7Y2NjbGFzc30gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b1JlbGVhc2VBc3NldHMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgZHluYW1pY3NBc3NldHM6IGNjLkFzc2V0W10gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgYWRkQXV0b1JlbGVhc2VBc3NldChfYXNzZXQ6Y2MuQXNzZXQpe1xyXG4gICAgICAgIGlmKGNjLmlzVmFsaWQoX2Fzc2V0KSl7XHJcbiAgICAgICAgICAgIF9hc3NldC5hZGRSZWYoKTtcclxuICAgICAgICAgICAgdGhpcy5keW5hbWljc0Fzc2V0cy5wdXNoKF9hc3NldCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiMTExMTExMTExMVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiMjIyMjIyMjIyXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmR5bmFtaWNzQXNzZXRzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBpZihjYy5pc1ZhbGlkKHRoaXMuZHluYW1pY3NBc3NldHNbaW5kZXhdKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmR5bmFtaWNzQXNzZXRzW2luZGV4XS5kZWNSZWYoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmR5bmFtaWNzQXNzZXRzID0gW107XHJcbiAgICB9XHJcbiAgICAgXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/MoonPop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '98460XFFs1JCI9f0VmFuXBW', 'MoonPop');
// script/dialog/MoonPop.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var findControl_1 = require("../tool/findControl");
var findGameData_1 = require("../tool/findGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MoonPop = /** @class */ (function (_super) {
    __extends(MoonPop, _super);
    function MoonPop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ADcallback = null;
        _this.restartCallBack = null;
        return _this;
    }
    MoonPop.prototype.start = function () {
        findGameData_1.fgData.showBanner();
    };
    MoonPop.prototype.initData = function (data) {
        this.ADcallback = data.ADcallback;
        this.restartCallBack = data.restartCallBack;
    };
    MoonPop.prototype.onClick_AD_btn = function () {
        var _this = this;
        findControl_1.findControl.findSoundTool.commonBtnClick();
        findGameData_1.fgData.showVideo(function () {
            _this.scheduleOnce(function () {
                _this.ADcallback && _this.ADcallback();
                _this.node.destroy();
                findGameData_1.fgData.closeBanner();
            });
        });
    };
    MoonPop.prototype.onClick_restart = function () {
        findControl_1.findControl.findSoundTool.commonBtnClick();
        this.restartCallBack && this.restartCallBack();
        this.node.destroy();
        findGameData_1.fgData.closeBanner();
    };
    MoonPop = __decorate([
        ccclass
    ], MoonPop);
    return MoonPop;
}(cc.Component));
exports.default = MoonPop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL01vb25Qb3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBQ2xELHFEQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQWlDQztRQS9CRyxnQkFBVSxHQUFhLElBQUksQ0FBQztRQUM1QixxQkFBZSxHQUFhLElBQUksQ0FBQzs7SUE4QnJDLENBQUM7SUE1QkcsdUJBQUssR0FBTDtRQUNJLHFCQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELDBCQUFRLEdBQVIsVUFBUyxJQUFJO1FBRVQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUNoRCxDQUFDO0lBR0QsZ0NBQWMsR0FBZDtRQUFBLGlCQVNDO1FBUkcseUJBQVcsQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0MscUJBQU0sQ0FBQyxTQUFTLENBQUM7WUFDYixLQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEtBQUksQ0FBQyxVQUFVLElBQUksS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO2dCQUNwQyxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNwQixxQkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsaUNBQWUsR0FBZjtRQUNJLHlCQUFXLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEIscUJBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBaENnQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBaUMzQjtJQUFELGNBQUM7Q0FqQ0QsQUFpQ0MsQ0FqQ29DLEVBQUUsQ0FBQyxTQUFTLEdBaUNoRDtrQkFqQ29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaW5kQ29udHJvbCB9IGZyb20gXCIuLi90b29sL2ZpbmRDb250cm9sXCI7XG5pbXBvcnQgeyBmZ0RhdGEgfSBmcm9tIFwiLi4vdG9vbC9maW5kR2FtZURhdGFcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vb25Qb3AgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQURjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsO1xuICAgIHJlc3RhcnRDYWxsQmFjazogRnVuY3Rpb24gPSBudWxsO1xuXG4gICAgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIGZnRGF0YS5zaG93QmFubmVyKCk7XG4gICAgfVxuXG4gICAgaW5pdERhdGEoZGF0YSkge1xuXG4gICAgICAgIHRoaXMuQURjYWxsYmFjayA9IGRhdGEuQURjYWxsYmFjaztcbiAgICAgICAgdGhpcy5yZXN0YXJ0Q2FsbEJhY2sgPSBkYXRhLnJlc3RhcnRDYWxsQmFjaztcbiAgICB9XG5cblxuICAgIG9uQ2xpY2tfQURfYnRuKCkge1xuICAgICAgICBmaW5kQ29udHJvbC5maW5kU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIGZnRGF0YS5zaG93VmlkZW8oKCk9PntcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5BRGNhbGxiYWNrICYmIHRoaXMuQURjYWxsYmFjaygpXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBmZ0RhdGEuY2xvc2VCYW5uZXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNsaWNrX3Jlc3RhcnQoKSB7XG4gICAgICAgIGZpbmRDb250cm9sLmZpbmRTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0Q2FsbEJhY2sgJiYgdGhpcy5yZXN0YXJ0Q2FsbEJhY2soKVxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICBmZ0RhdGEuY2xvc2VCYW5uZXIoKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/StarPop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9335d26T05DjJw8MacCCseS', 'StarPop');
// script/dialog/StarPop.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var findControl_1 = require("../tool/findControl");
var findGameData_1 = require("../tool/findGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StarPop = /** @class */ (function (_super) {
    __extends(StarPop, _super);
    function StarPop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.callback = null;
        return _this;
    }
    StarPop.prototype.start = function () {
        findGameData_1.fgData.showBanner();
    };
    StarPop.prototype.initData = function (data) {
        this.callback = data.callback;
    };
    StarPop.prototype.onClick_continue_btn = function () {
        findControl_1.findControl.findSoundTool.commonBtnClick();
        this.callback && this.callback();
        this.node.destroy();
        findGameData_1.fgData.closeBanner();
    };
    StarPop.prototype.onClick_backHall = function () {
        findControl_1.findControl.findSoundTool.commonBtnClick();
        this.node.destroy();
        findGameData_1.fgData.closeBanner();
        findGameData_1.fgData.userData.isHall = true;
        findGameData_1.fgData.storageData();
        cc.director.loadScene(findControl_1.spectacle.parlour);
    };
    StarPop = __decorate([
        ccclass
    ], StarPop);
    return StarPop;
}(cc.Component));
exports.default = StarPop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL1N0YXJQb3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQTZEO0FBQzdELHFEQUE4QztBQUd4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQThCQztRQTVCRyxjQUFRLEdBQWEsSUFBSSxDQUFDOztJQTRCOUIsQ0FBQztJQXpCYSx1QkFBSyxHQUFmO1FBQ0kscUJBQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsMEJBQVEsR0FBUixVQUFTLElBQUk7UUFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQUdELHNDQUFvQixHQUFwQjtRQUNJLHlCQUFXLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEIscUJBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsa0NBQWdCLEdBQWhCO1FBQ0kseUJBQVcsQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixxQkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLHFCQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDOUIscUJBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx1QkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTdDLENBQUM7SUE3QmdCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0E4QjNCO0lBQUQsY0FBQztDQTlCRCxBQThCQyxDQTlCb0MsRUFBRSxDQUFDLFNBQVMsR0E4QmhEO2tCQTlCb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZpbmRDb250cm9sLCBzcGVjdGFjbGUgfSBmcm9tIFwiLi4vdG9vbC9maW5kQ29udHJvbFwiO1xuaW1wb3J0IHsgZmdEYXRhIH0gZnJvbSBcIi4uL3Rvb2wvZmluZEdhbWVEYXRhXCI7XG4gXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFyUG9wIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGw7XG5cblxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgZmdEYXRhLnNob3dCYW5uZXIoKTtcbiAgICB9XG5cbiAgICBpbml0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBkYXRhLmNhbGxiYWNrO1xuICAgIH1cblxuXG4gICAgb25DbGlja19jb250aW51ZV9idG4oKSB7XG4gICAgICAgIGZpbmRDb250cm9sLmZpbmRTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrKClcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgZmdEYXRhLmNsb3NlQmFubmVyKCk7XG4gICAgfVxuXG4gICAgb25DbGlja19iYWNrSGFsbCgpIHtcbiAgICAgICAgZmluZENvbnRyb2wuZmluZFNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICBmZ0RhdGEuY2xvc2VCYW5uZXIoKTtcbiAgICAgICAgZmdEYXRhLnVzZXJEYXRhLmlzSGFsbCA9IHRydWU7XG4gICAgICAgIGZnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc3BlY3RhY2xlLnBhcmxvdXIpO1xuXG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------
