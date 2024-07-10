"use strict";
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