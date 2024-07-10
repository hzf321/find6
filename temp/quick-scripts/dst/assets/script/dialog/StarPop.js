
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