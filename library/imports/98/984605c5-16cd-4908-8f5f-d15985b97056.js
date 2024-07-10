"use strict";
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