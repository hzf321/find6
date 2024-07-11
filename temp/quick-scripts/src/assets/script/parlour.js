"use strict";
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
        findControl_1.findControl.findResUtil.showToast("To unlock, conquer the preceding level first!");
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