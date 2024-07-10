
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