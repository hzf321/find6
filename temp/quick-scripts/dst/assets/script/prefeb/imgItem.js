
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/prefeb/imgItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcHJlZmViL2ltZ0l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsbURBQTZEO0FBQzdELHFEQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQXVEQztRQXBERyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLFNBQUcsR0FBYyxJQUFJLENBQUM7UUFHdEIsU0FBRyxHQUFhLElBQUksQ0FBQztRQUdiLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFFaEIsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUVoQyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLG1CQUFhLEdBQWEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELGtCQUFZLEdBQWEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDOztJQW9DckQsQ0FBQztJQWxDRyx1QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHNCQUFJLEdBQUosVUFBSyxHQUFXLEVBQUUsSUFBYTtRQUMzQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLFFBQVEsR0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBRTtRQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN4QyxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcscUJBQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7WUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDNUM7YUFBTTtZQUNILElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN2QjtRQUNELHlCQUFXLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUVELDhCQUFZLEdBQVo7UUFDSSx5QkFBVyxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYix5QkFBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNqQyxxQkFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQy9CLHFCQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsdUJBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QzthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMscUNBQXFDLENBQUMsQ0FBQztTQUM5RDtJQUVMLENBQUM7SUFsREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNFO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0NBQ0U7SUFUSixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBdUQzQjtJQUFELGNBQUM7Q0F2REQsQUF1REMsQ0F2RG9DLEVBQUUsQ0FBQyxTQUFTLEdBdURoRDtrQkF2RG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIgXG5pbXBvcnQgcGFybG91ciBmcm9tIFwiLi4vcGFybG91clwiO1xuaW1wb3J0IHsgZmluZENvbnRyb2wsIHNwZWN0YWNsZSB9IGZyb20gXCIuLi90b29sL2ZpbmRDb250cm9sXCI7XG5pbXBvcnQgeyBmZ0RhdGEgfSBmcm9tIFwiLi4vdG9vbC9maW5kR2FtZURhdGFcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGltZ0l0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGFsbF9tYXNrOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgaW1nOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHN0cjogY2MuTGFiZWwgPSBudWxsO1xuXG5cbiAgICBwcml2YXRlIGlkeDogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgaXNib29sOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBoYWxsOiBwYXJsb3VyID0gbnVsbDtcblxuICAgIGNvbXBsZXRlQ29sb3I6IGNjLkNvbG9yID0gY2MuY29sb3IoMTAzLCAxMjgsIDkwKTtcbiAgICBndWFucWlhQ29sb3I6IGNjLkNvbG9yID0gY2MuY29sb3IoMTg4LCAxNDAsIDEwMSk7XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIGluaXQoaWR4OiBudW1iZXIsIGhhbGw6IHBhcmxvdXIpIHtcbiAgICAgICAgdGhpcy5pZHggPSBpZHg7XG4gICAgICAgIHRoaXMuaGFsbCA9IGhhbGw7XG4gICAgICAgIHRoaXMuc3RyLnN0cmluZyA9IFwiTGV2ZWwgXCIrKGlkeCArIDEpIDtcbiAgICAgICAgdGhpcy5zdHIubm9kZS5jb2xvciA9IHRoaXMuZ3VhbnFpYUNvbG9yO1xuICAgICAgICBpZiAodGhpcy5pZHggPCBmZ0RhdGEudXNlckRhdGEubGV2ZWwpIHtcbiAgICAgICAgICAgIHRoaXMuaGFsbF9tYXNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pc2Jvb2wgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zdHIuc3RyaW5nID0gXCJVbmxvY2tcIjtcbiAgICAgICAgICAgIHRoaXMuc3RyLm5vZGUuY29sb3IgPSB0aGlzLmNvbXBsZXRlQ29sb3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhhbGxfbWFzay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pc2Jvb2wgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmaW5kQ29udHJvbC5maW5kUmVzVXRpbC5sb2FkU3ByaXRlKFwiZmluZUltZy9cIiArIFwiZmluZV9cIiArICh0aGlzLmlkeCArIDEpLCB0aGlzLmltZyk7XG4gICAgfVxuXG4gICAgb25jbGlja19pdGVtKCkge1xuICAgICAgICBmaW5kQ29udHJvbC5maW5kU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIGlmICh0aGlzLmlzYm9vbCkge1xuICAgICAgICAgICAgZmluZENvbnRyb2wuaW1nSWQgPSB0aGlzLmlkeCArIDE7XG4gICAgICAgICAgICBmZ0RhdGEudXNlckRhdGEuaXNIYWxsID0gZmFsc2U7XG4gICAgICAgICAgICBmZ0RhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzcGVjdGFjbGUuaG9zdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhhbGwuc2hvd1RvYXN0KFwiVGhlIGxldmVsIGhhcyBub3QgYmVlbiB1bmxvY2tlZCB5ZXRcIik7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIl19