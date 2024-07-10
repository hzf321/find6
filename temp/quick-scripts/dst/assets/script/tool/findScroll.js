
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/findScroll.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6742eFjCRhCdpnyZSMeH66r', 'findScroll');
// script/tool/findScroll.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**列表draw call优化组件 */
var scrollTool = /** @class */ (function (_super) {
    __extends(scrollTool, _super);
    function scrollTool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* --------------------------------segmentation-------------------------------- */
    scrollTool.prototype.onLoad = function () {
        if (!this.node.getComponent(cc.ScrollView)) {
            cc.error("不存在ScrollView组件！");
            return;
        }
        // ------------------事件监听
        this.node.on("scrolling", this._event_update_opacity, this);
        this.node.getComponent(cc.ScrollView).content.on(cc.Node.EventType.CHILD_REMOVED, this._event_update_opacity, this);
        this.node.getComponent(cc.ScrollView).content.on(cc.Node.EventType.CHILD_REORDER, this._event_update_opacity, this);
    };
    /* ***************功能函数*************** */
    /**获取在世界坐标系下的节点包围盒(不包含自身激活的子节点范围) */
    scrollTool.prototype._get_bounding_box_to_world = function (node_o_) {
        var w_n = node_o_._contentSize.width;
        var h_n = node_o_._contentSize.height;
        var rect_o = cc.rect(-node_o_._anchorPoint.x * w_n, -node_o_._anchorPoint.y * h_n, w_n, h_n);
        node_o_._calculWorldMatrix();
        rect_o.transformMat4(rect_o, node_o_._worldMatrix);
        return rect_o;
    };
    /**检测碰撞 */
    scrollTool.prototype._check_collision = function (node_o_) {
        var rect1_o = this._get_bounding_box_to_world(this.node.getComponent(cc.ScrollView).content.parent);
        var rect2_o = this._get_bounding_box_to_world(node_o_);
        // ------------------保险范围
        rect1_o.width += rect1_o.width * 0.5;
        rect1_o.height += rect1_o.height * 0.5;
        rect1_o.x -= rect1_o.width * 0.25;
        rect1_o.y -= rect1_o.height * 0.25;
        return rect1_o.intersects(rect2_o);
    };
    /* ***************自定义事件***************  */
    scrollTool.prototype._event_update_opacity = function () {
        var _this = this;
        this.node.getComponent(cc.ScrollView).content.children.forEach(function (v1_o) {
            var rect1_o = _this._get_bounding_box_to_world(_this.node.getComponent(cc.ScrollView).content.parent);
            rect1_o.width += rect1_o.width * 0.5;
            rect1_o.height += rect1_o.height * 0.5;
            rect1_o.x -= rect1_o.width * 0.25;
            rect1_o.y -= rect1_o.height * 0.25;
            v1_o.opacity = _this._check_collision(v1_o) ? 255 : 0;
        });
    };
    scrollTool = __decorate([
        ccclass
    ], scrollTool);
    return scrollTool;
}(cc.Component));
exports.default = scrollTool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9maW5kU2Nyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLHFCQUFxQjtBQUVyQjtJQUF3Qyw4QkFBWTtJQUFwRDs7SUFrREEsQ0FBQztJQWpERyxrRkFBa0Y7SUFDbEYsMkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDeEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzdCLE9BQU87U0FDVjtRQUNELHlCQUF5QjtRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEgsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4SCxDQUFDO0lBQ0Qsd0NBQXdDO0lBQ3hDLG9DQUFvQztJQUM1QiwrQ0FBMEIsR0FBbEMsVUFBbUMsT0FBWTtRQUMzQyxJQUFJLEdBQUcsR0FBVyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUM3QyxJQUFJLEdBQUcsR0FBVyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUM5QyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUNoQixDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFDN0IsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQzdCLEdBQUcsRUFDSCxHQUFHLENBQ04sQ0FBQztRQUNGLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBQ0QsVUFBVTtJQUNGLHFDQUFnQixHQUF4QixVQUF5QixPQUFnQjtRQUNyQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkQseUJBQXlCO1FBQ3pCLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDckMsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUN2QyxPQUFPLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkMsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCwwQ0FBMEM7SUFDbEMsMENBQXFCLEdBQTdCO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1lBQy9ELElBQUksT0FBTyxHQUFHLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BHLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDckMsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUN2QyxPQUFPLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFFbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWpEZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQWtEOUI7SUFBRCxpQkFBQztDQWxERCxBQWtEQyxDQWxEdUMsRUFBRSxDQUFDLFNBQVMsR0FrRG5EO2tCQWxEb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKirliJfooahkcmF3IGNhbGzkvJjljJbnu4Tku7YgKi9cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzY3JvbGxUb29sIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXNlZ21lbnRhdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBpZiAoIXRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwi5LiN5a2Y5ZyoU2Nyb2xsVmlld+e7hOS7tu+8gVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS3kuovku7bnm5HlkKxcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwic2Nyb2xsaW5nXCIsIHRoaXMuX2V2ZW50X3VwZGF0ZV9vcGFjaXR5LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KS5jb250ZW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLkNISUxEX1JFTU9WRUQsIHRoaXMuX2V2ZW50X3VwZGF0ZV9vcGFjaXR5LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KS5jb250ZW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLkNISUxEX1JFT1JERVIsIHRoaXMuX2V2ZW50X3VwZGF0ZV9vcGFjaXR5LCB0aGlzKTtcbiAgICB9XG4gICAgLyogKioqKioqKioqKioqKioq5Yqf6IO95Ye95pWwKioqKioqKioqKioqKioqICovXG4gICAgLyoq6I635Y+W5Zyo5LiW55WM5Z2Q5qCH57O75LiL55qE6IqC54K55YyF5Zu055uSKOS4jeWMheWQq+iHqui6q+a/gOa0u+eahOWtkOiKgueCueiMg+WbtCkgKi9cbiAgICBwcml2YXRlIF9nZXRfYm91bmRpbmdfYm94X3RvX3dvcmxkKG5vZGVfb186IGFueSk6IGNjLlJlY3Qge1xuICAgICAgICBsZXQgd19uOiBudW1iZXIgPSBub2RlX29fLl9jb250ZW50U2l6ZS53aWR0aDtcbiAgICAgICAgbGV0IGhfbjogbnVtYmVyID0gbm9kZV9vXy5fY29udGVudFNpemUuaGVpZ2h0O1xuICAgICAgICBsZXQgcmVjdF9vID0gY2MucmVjdChcbiAgICAgICAgICAgIC1ub2RlX29fLl9hbmNob3JQb2ludC54ICogd19uLCBcbiAgICAgICAgICAgIC1ub2RlX29fLl9hbmNob3JQb2ludC55ICogaF9uLCBcbiAgICAgICAgICAgIHdfbiwgXG4gICAgICAgICAgICBoX25cbiAgICAgICAgKTtcbiAgICAgICAgbm9kZV9vXy5fY2FsY3VsV29ybGRNYXRyaXgoKTtcbiAgICAgICAgcmVjdF9vLnRyYW5zZm9ybU1hdDQocmVjdF9vLCBub2RlX29fLl93b3JsZE1hdHJpeCk7XG4gICAgICAgIHJldHVybiByZWN0X287XG4gICAgfVxuICAgIC8qKuajgOa1i+eisOaSniAqL1xuICAgIHByaXZhdGUgX2NoZWNrX2NvbGxpc2lvbihub2RlX29fOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCByZWN0MV9vID0gdGhpcy5fZ2V0X2JvdW5kaW5nX2JveF90b193b3JsZCh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLmNvbnRlbnQucGFyZW50KTtcbiAgICAgICAgbGV0IHJlY3QyX28gPSB0aGlzLl9nZXRfYm91bmRpbmdfYm94X3RvX3dvcmxkKG5vZGVfb18pO1xuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS3kv53pmanojIPlm7RcbiAgICAgICAgcmVjdDFfby53aWR0aCArPSByZWN0MV9vLndpZHRoICogMC41O1xuICAgICAgICByZWN0MV9vLmhlaWdodCArPSByZWN0MV9vLmhlaWdodCAqIDAuNTtcbiAgICAgICAgcmVjdDFfby54IC09IHJlY3QxX28ud2lkdGggKiAwLjI1O1xuICAgICAgICByZWN0MV9vLnkgLT0gcmVjdDFfby5oZWlnaHQgKiAwLjI1O1xuICAgICAgICByZXR1cm4gcmVjdDFfby5pbnRlcnNlY3RzKHJlY3QyX28pO1xuICAgIH1cbiAgICAvKiAqKioqKioqKioqKioqKiroh6rlrprkuYnkuovku7YqKioqKioqKioqKioqKiogICovXG4gICAgcHJpdmF0ZSBfZXZlbnRfdXBkYXRlX29wYWNpdHkoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykuY29udGVudC5jaGlsZHJlbi5mb3JFYWNoKHYxX289PiB7XG4gICAgICAgICAgICBsZXQgcmVjdDFfbyA9IHRoaXMuX2dldF9ib3VuZGluZ19ib3hfdG9fd29ybGQodGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KS5jb250ZW50LnBhcmVudCk7XG4gICAgICAgICAgICByZWN0MV9vLndpZHRoICs9IHJlY3QxX28ud2lkdGggKiAwLjU7XG4gICAgICAgICAgICByZWN0MV9vLmhlaWdodCArPSByZWN0MV9vLmhlaWdodCAqIDAuNTtcbiAgICAgICAgICAgIHJlY3QxX28ueCAtPSByZWN0MV9vLndpZHRoICogMC4yNTtcbiAgICAgICAgICAgIHJlY3QxX28ueSAtPSByZWN0MV9vLmhlaWdodCAqIDAuMjU7XG5cbiAgICAgICAgICAgIHYxX28ub3BhY2l0eSA9IHRoaXMuX2NoZWNrX2NvbGxpc2lvbih2MV9vKSA/IDI1NSA6IDA7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=