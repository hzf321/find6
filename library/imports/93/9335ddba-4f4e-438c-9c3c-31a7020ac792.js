"use strict";
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