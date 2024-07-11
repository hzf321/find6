
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/parlour.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcGFybG91ci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBdUM7QUFDdkMsa0RBQXlEO0FBR25ELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBd0ZDO1FBckZHLFFBQUUsR0FBWSxJQUFJLENBQUM7UUFHbkIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUcxQixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUcvQixnQkFBVSxHQUFrQixJQUFJLENBQUM7UUFHakMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsY0FBUSxHQUFZLElBQUksQ0FBQzs7SUFtRTdCLENBQUM7SUFoRUcsdUJBQUssR0FBTDtRQUFBLGlCQStCQztRQTlCRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUNoRDtRQUNELHlCQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyx5QkFBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0IseUJBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUE7UUFFRiw0QkFBNEI7UUFDNUIsa0ZBQWtGO1FBQ2xGLHlCQUF5QjtRQUN6QixxQkFBcUI7UUFDckIsZ0RBQWdEO1FBQ2hELHNEQUFzRDtRQUV0RCw4REFBOEQ7UUFDOUQsbUJBQW1CO1FBQ25CLDBEQUEwRDtRQUMxRCx5REFBeUQ7UUFDekQsWUFBWTtRQUVaLDBEQUEwRDtRQUMxRCxRQUFRO1FBQ1IsVUFBVTtRQUVWLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUVELHNCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixFQUFFLENBQUE7UUFDeEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QixJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzVDO0lBQ0wsQ0FBQztJQUVELGlDQUFlLEdBQWY7UUFDSSx5QkFBVyxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQyx5QkFBVyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsb0JBQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN0RSw2REFBNkQ7SUFDakUsQ0FBQztJQUlELDJCQUFTLEdBQVQsVUFBVSxJQUFZO1FBQ2xCLHlCQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsZ0NBQWMsR0FBZDtRQUNJLHlCQUFXLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUVELGtDQUFnQixHQUFoQjtRQUNJLHlCQUFXLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNDLHlCQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFwRkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1Q0FDQztJQUduQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNNO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ2E7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQzsrQ0FDUztJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTztJQXJCUixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBd0YzQjtJQUFELGNBQUM7Q0F4RkQsQUF3RkMsQ0F4Rm9DLEVBQUUsQ0FBQyxTQUFTLEdBd0ZoRDtrQkF4Rm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW1nSXRlbSBmcm9tIFwiLi9wcmVmZWIvaW1nSXRlbVwiO1xuaW1wb3J0IHsgZmluZENvbnRyb2wsIHdpY2tldCB9IGZyb20gXCIuL3Rvb2wvZmluZENvbnRyb2xcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGFybG91ciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBiZzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGltZ0l0ZW06IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzY3JvbGxfY29udGVjdDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcbiAgICBzY3JvbGxWaWV3OiBjYy5TY3JvbGxWaWV3ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGdhbWVoYWxsQmc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYm9va1NlbGVjdDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBnYW1laGFsbDogY2MuTm9kZSA9IG51bGw7XG5cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuSVBBRCkge1xuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuQ2FudmFzKS5maXRIZWlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcykuZml0V2lkdGggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGZpbmRDb250cm9sLnNldHNjZW5lTm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICBmaW5kQ29udHJvbC5hZGFwdGVyQmcodGhpcy5iZyk7XG4gICAgICAgIGZpbmRDb250cm9sLmFkYXB0ZXJCZyh0aGlzLmdhbWVoYWxsQmcpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIC8vICAgICBpZiAoZmdEYXRhLnVzZXJEYXRhLmxldmVsID4gNCAmJiBmZ0RhdGEudXNlckRhdGEubGV2ZWwgPCBmZ0RhdGEubGV2ZWxBbGwpIHtcbiAgICAgICAgLy8gICAgICAgICBsZXQgaGVpID0gMjYwO1xuICAgICAgICAvLyAgICAgICAgIGxldCB5ID0gMDtcbiAgICAgICAgLy8gICAgICAgICBpZiAoZmdEYXRhLnVzZXJEYXRhLmxldmVsICUgMiA9PSAwKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBpbmRleCA9IGZnRGF0YS51c2VyRGF0YS5sZXZlbCAvIDIgO1xuXG4gICAgICAgIC8vICAgICAgICAgICAgIHkgPSAoKGZnRGF0YS51c2VyRGF0YS5sZXZlbCAtMSkgLSBpbmRleCkgKiBoZWk7XG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGluZGV4ID0gKGZnRGF0YS51c2VyRGF0YS5sZXZlbCArIDEpIC8gMlxuICAgICAgICAvLyAgICAgICAgICAgICB5ID0gKGZnRGF0YS51c2VyRGF0YS5sZXZlbCAtIGluZGV4KSAqIGhlaTtcbiAgICAgICAgLy8gICAgICAgICB9XG5cbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9PZmZzZXQoY2MudjIoMCwgeSksIDEpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LCAwLjEpXG5cbiAgICAgICAgdGhpcy5nYW1laGFsbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmJvb2tTZWxlY3QuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxfY29udGVjdC5kZXN0cm95QWxsQ2hpbGRyZW4oKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMwOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pbWdJdGVtKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsX2NvbnRlY3QuYWRkQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChpbWdJdGVtKS5pbml0KGksIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGlja19zZXR0aW5nKCkge1xuICAgICAgICBmaW5kQ29udHJvbC5maW5kU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIGZpbmRDb250cm9sLmZpbmRSZXNVdGlsLnNob3dEaWFsb2cod2lja2V0LlRyZWVQb3AsIHsgaXNHYW1lOiBmYWxzZSB9KTtcbiAgICAgICAgLy8gZmluZENvbnRyb2wuZmluZFJlc1V0aWwuc2hvd0RpYWxvZyhkaWFsb2cuY29tbWVudF9kaWFsb2cpO1xuICAgIH1cblxuXG5cbiAgICBzaG93VG9hc3QodGV4dDogc3RyaW5nKSB7XG4gICAgICAgIGZpbmRDb250cm9sLmZpbmRSZXNVdGlsLnNob3dUb2FzdCh0ZXh0KTtcbiAgICB9XG5cbiAgICBvbkNsaWNrX2x2Qm9vaygpIHtcbiAgICAgICAgZmluZENvbnRyb2wuZmluZFNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICB0aGlzLmdhbWVoYWxsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJvb2tTZWxlY3QuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbkNsaWNrX2JsdWVCb29rKCkge1xuICAgICAgICBmaW5kQ29udHJvbC5maW5kU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIGZpbmRDb250cm9sLmZpbmRSZXNVdGlsLnNob3dUb2FzdChcIlRvIHVubG9jaywgY29ucXVlciB0aGUgcHJlY2VkaW5nIGxldmVsIGZpcnN0IVwiKTtcbiAgICB9XG59XG4iXX0=