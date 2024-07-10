"use strict";
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