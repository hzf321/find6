
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/windPop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL3dpbmRQb3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXNFO0FBQ3RFLHFEQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQXVGQztRQXBGRyxvQkFBYyxHQUFjLElBQUksQ0FBQztRQUdqQyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFFBQUUsR0FBWSxJQUFJLENBQUM7UUFHbkIsWUFBTSxHQUFjLElBQUksQ0FBQztRQUd6QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFFNUIsU0FBRyxHQUFtQixJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFhLElBQUksQ0FBQzs7SUFpRTlCLENBQUM7SUEvREcsMEJBQVEsR0FBUixVQUFTLElBQUk7UUFDVCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUE7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNuQyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQSxDQUFDLGdDQUFnQztRQUM5RCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdEQscURBQXFEO1FBQ3JELG1EQUFtRDtRQUNuRCwwREFBMEQ7UUFHMUQsMENBQTBDO1FBQzFDLGlEQUFpRDtRQUNqRCxrQ0FBa0M7UUFDbEMsc0RBQXNEO1FBQ3RELHNEQUFzRDtRQUN0RCw4REFBOEQ7UUFDOUQsSUFBSTtJQUNSLENBQUM7SUFHRCx3QkFBTSxHQUFOO1FBQ0ksZ0NBQWdDO1FBQ2hDLDRCQUE0QjtRQUM1QixJQUFJO1FBRUosaUVBQWlFO1FBQ2pFLDJDQUEyQztRQUUzQyxvREFBb0Q7UUFDcEQsNEJBQTRCO1FBQzVCLElBQUk7SUFDUixDQUFDO0lBR0QsdUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsR0FBRyx5QkFBVyxDQUFDLEtBQUssQ0FBQztRQUNqRCx5QkFBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0IsSUFBSSxFQUFFLEdBQUcscUJBQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQy9CLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDdEIsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7U0FDaEI7YUFBTSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUM3QixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztTQUNoQjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ25DLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNWLHFCQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxxQkFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1NBQzNEO0lBQ0wsQ0FBQztJQUVELHFDQUFtQixHQUFuQjtRQUNJLHlCQUFXLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELCtCQUFhLEdBQWI7UUFDSSx5QkFBVyxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFuRkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDYTtJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dUNBQ0M7SUFHbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyQ0FDSztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNNO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ1E7SUFsQlgsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQXVGM0I7SUFBRCxjQUFDO0NBdkZELEFBdUZDLENBdkZvQyxFQUFFLENBQUMsU0FBUyxHQXVGaEQ7a0JBdkZvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmluZENvbnRyb2wsIHdpY2tldCwgbG92ZWx5RGF0YSB9IGZyb20gXCIuLi90b29sL2ZpbmRDb250cm9sXCI7XG5pbXBvcnQgeyBmZ0RhdGEgfSBmcm9tIFwiLi4vdG9vbC9maW5kR2FtZURhdGFcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHdpbmRQb3AgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBnYW1lRmluZFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0aXRsZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBpbWdFbmQ6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbHZMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBsdlByb3Jlc3M6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBpbWc6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGw7XG5cbiAgICBpbml0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuaW1nID0gZGF0YS5pbWc7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBkYXRhLmNhbGxiYWNrO1xuICAgICAgICBsZXQgZmluZE5vZGUgPSBkYXRhLmZpbmlzaEJveFxuICAgICAgICB0aGlzLmltZ0VuZC5zcHJpdGVGcmFtZSA9IHRoaXMuaW1nO1xuICAgICAgICBmaW5kTm9kZS5zZXRQb3NpdGlvbigyOTAsIDQzKSAvLyDlrZDoioLngrnpg73mmK/lv5jlt6bovrnlgY/np7vnmoTvvIzopoHlj43mlrnlkJHosIPovazlm57mnaXvvIwgNDPmmK/lm77niYfnmoR5XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRcIikuYWRkQ2hpbGQoZmluZE5vZGUpXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS50dXBpYW5EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgICBsZXQgaW1nRGF0YTogbG92ZWx5RGF0YSA9IGRhdGEudHVwaWFuRGF0YVtpXVxuICAgICAgICAvLyAgICAgbGV0IGdhbWVGaW5kID0gY2MuaW5zdGFudGlhdGUodGhpcy5nYW1lRmluZFByZWZhYik7XG5cblxuICAgICAgICAvLyAgICAgbGV0IHggPSBpbWdEYXRhLmNlbnRlclBvcy54ICogMC40NTtcbiAgICAgICAgLy8gICAgIGxldCB5ID0gKGltZ0RhdGEuY2VudGVyUG9zLnkgKiAwLjQ1KSArIDQzO1xuICAgICAgICAvLyAgICAgZ2FtZUZpbmQuc2V0UG9zaXRpb24oeCwgeSk7XG4gICAgICAgIC8vICAgICBnYW1lRmluZC53aWR0aCA9ICBpbWdEYXRhLmJsb2NrU2l6ZS53aWQgKiAwLjQ1O1xuICAgICAgICAvLyAgICAgZ2FtZUZpbmQuaGVpZ2h0ID0gaW1nRGF0YS5ibG9ja1NpemUuaGVpICogMC40NTtcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRcIikuYWRkQ2hpbGQoZ2FtZUZpbmQpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG5cbiAgICBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIC8vIGlmIChmaW5kQ29udHJvbC5pbWdJZCA+PSA2KSB7XG4gICAgICAgIC8vICAgICBmZ0RhdGEuc2hvd0ludGVyc3QoKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGlmIChmaW5kQ29udHJvbC5pbWdJZCA9PSA1ICYmICFmZ0RhdGEudXNlckRhdGEuZmluaXNoTGV2ZWw1KSB7XG4gICAgICAgIC8vICAgICBmZ0RhdGEudXNlckRhdGEuZmluaXNoTGV2ZWw1ID0gdHJ1ZTtcblxuICAgICAgICAvLyAgICAgZmluZENvbnRyb2wuZmluZFJlc1V0aWwuc2hvd0RpYWxvZyhUYy5mdW5UYyk7XG4gICAgICAgIC8vICAgICBmZ0RhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuXG4gICAgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGl0bGUuc3RyaW5nID0gXCJMZXZlbCBcIiArIGZpbmRDb250cm9sLmltZ0lkO1xuICAgICAgICBmaW5kQ29udHJvbC5hZGFwdGVyQmcodGhpcy5iZyk7XG4gICAgICAgIGxldCBsdiA9IGZnRGF0YS51c2VyRGF0YS5sZXZlbDtcbiAgICAgICAgbHYgPSBsdiAtIDE7XG4gICAgICAgIGlmIChsdiA+PSAxMSAmJiBsdiA8PSAyMCkge1xuICAgICAgICAgICAgbHYgPSBsdiAtIDEwO1xuICAgICAgICB9IGVsc2UgaWYgKGx2ID49IDIxICYmIGx2IDw9IDMwKSB7XG4gICAgICAgICAgICBsdiA9IGx2IC0gMjA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sdkxhYmVsLnN0cmluZyA9IGx2O1xuICAgICAgICB0aGlzLmx2UHJvcmVzcy5maWxsUmFuZ2UgPSBsdiAvIDEwO1xuICAgICAgICBpZiAobHYgPT0gMTApIHtcbiAgICAgICAgICAgIGZnRGF0YS51c2VyRGF0YS50aXNoaU51bSA9IGZnRGF0YS51c2VyRGF0YS50aXNoaU51bSArIDI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrX2NvbnRpbnVlQnRuKCkge1xuICAgICAgICBmaW5kQ29udHJvbC5maW5kU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5jYWxsYmFjaygpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tfY2xvc2UoKSB7XG4gICAgICAgIGZpbmRDb250cm9sLmZpbmRTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iXX0=