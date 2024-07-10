
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