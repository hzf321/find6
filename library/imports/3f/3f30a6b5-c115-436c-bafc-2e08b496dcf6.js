"use strict";
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
                    toastLabel.getComponent(cc.Label).string = "Sorry, no ads available at the moment. Please try again later!";
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