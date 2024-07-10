"use strict";
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