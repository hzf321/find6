
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/findResUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd8022bhaGtI34HO+9B4gPxl', 'findResUtil');
// script/tool/findResUtil.ts

"use strict";
//资源加载工具类
Object.defineProperty(exports, "__esModule", { value: true });
exports.findResUtil = void 0;
var findResBind_1 = require("./findResBind");
var findControl_1 = require("./findControl");
var findResUtil = /** @class */ (function () {
    function findResUtil() {
    }
    // 绑定资源释放
    findResUtil.bindResAsset = function (parent, asset) {
        var tempAuto = parent.getComponent(findResBind_1.default);
        if (!cc.isValid(tempAuto)) {
            tempAuto = parent.addComponent(findResBind_1.default);
        }
        tempAuto.addAutoReleaseAsset(asset);
    };
    // 检测引用计数后释放资源
    findResUtil.releaseRes = function (asset) {
        if (cc.isValid(asset) && asset.refCount <= 0) {
            cc.assetManager.releaseAsset(asset);
        }
    };
    //加载(必须配合addAutoReleaseAsset 使用绑定资源)
    findResUtil.loadAsset = function (assetPath, assetType, assetCb) {
        cc.resources.load(assetPath, assetType, assetCb);
    };
    //预加载
    findResUtil.preloadAsset = function (assetPath, assetType) {
        cc.resources.preload(assetPath, assetType);
    };
    // 加载单张图片
    findResUtil.loadSprite = function (picPath, sprite, defPath) {
        var _this = this;
        var finishCallback = function (err, sp) {
            if (err) {
                if (defPath) {
                    _this.loadSprite(defPath, sprite);
                }
                else {
                }
                return;
            }
            if (cc.isValid(sprite) && sprite["newUrl"] == picPath) {
                sprite.addAutoReleaseAsset(sp);
                sprite.spriteFrame = sp;
            }
            else {
                _this.releaseRes(sp);
            }
        };
        sprite["newUrl"] = picPath; // 记录最新url 防止多次请求异步设置了旧的
        sprite.spriteFrame = null; //置空 防止玩家看到旧的道具误会
        cc.resources.load(picPath, cc.SpriteFrame, finishCallback);
    };
    //----------------资源加载------------------------  
    findResUtil.showDialog = function (url, data, callback) {
        cc.resources.load("prefeb/" + url, cc.Prefab, function (err, prefab) {
            if (err) {
                return;
            }
            var node = cc.instantiate(prefab);
            findControl_1.findControl.findResUtil.bindResAsset(node, prefab);
            var parentNode = findControl_1.findControl.getsceneNode();
            if (node && parentNode) {
                if (data) {
                    if (node.getComponent(url).initData) {
                        node.getComponent(url).initData(data);
                    }
                }
                parentNode.addChild(node);
                var content = node.getChildByName("content");
                content.scale = 0;
                cc.Tween.stopAllByTarget(content);
                cc.tween(content)
                    .to(0.32, { scale: 1 }, { easing: 'backOut' })
                    .start();
            }
            callback && callback();
        });
    };
    findResUtil.showToast = function (text) {
        cc.resources.load("prefeb/toast", cc.Prefab, function (err, prefab) {
            if (err) {
                return;
            }
            var toast = cc.instantiate(prefab);
            findControl_1.findControl.findResUtil.bindResAsset(toast, prefab);
            var parentNode = findControl_1.findControl.getsceneNode();
            if (toast && parentNode) {
                toast.active = true;
                parentNode.addChild(toast);
                var toastLabel = toast.getChildByName("label");
                toastLabel.getComponent(cc.Label).string = text;
                cc.Tween.stopAllByTarget(toast);
                toast.opacity = 255;
                cc.tween(toast).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).delay(0.5).to(0.5, { opacity: 0 }).call(function () {
                    toast.destroy();
                }).start();
            }
        });
    };
    return findResUtil;
}());
exports.findResUtil = findResUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9maW5kUmVzVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsU0FBUzs7O0FBRVQsNkNBQXdDO0FBQ3hDLDZDQUE0QztBQUk1QztJQUFBO0lBb0dBLENBQUM7SUFsR0csU0FBUztJQUNLLHdCQUFZLEdBQTFCLFVBQTJCLE1BQWUsRUFBRSxLQUFlO1FBQ3ZELElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMscUJBQVcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3ZCLFFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsQ0FBQztTQUMvQztRQUNELFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsY0FBYztJQUNBLHNCQUFVLEdBQXhCLFVBQXlCLEtBQWU7UUFDcEMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQzFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztJQUVELG9DQUFvQztJQUN0QixxQkFBUyxHQUF2QixVQUF3QixTQUFpQixFQUFFLFNBQTBCLEVBQUUsT0FBc0I7UUFDekYsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsS0FBSztJQUNTLHdCQUFZLEdBQTFCLFVBQTJCLFNBQWlCLEVBQUUsU0FBMEI7UUFDcEUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxTQUFTO0lBQ0ssc0JBQVUsR0FB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Q25DLHlCQUFXLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDcEQsSUFBSSxVQUFVLEdBQUcseUJBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM1QyxJQUFJLEtBQUssSUFBSSxVQUFVLEVBQUU7Z0JBQ3JCLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMvQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNoRCxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7Z0JBQ3BCLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDcEcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNwQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNkO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQXBHQSxBQW9HQyxJQUFBO0FBcEdZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8v6LWE5rqQ5Yqg6L295bel5YW357G7XHJcblxyXG5pbXBvcnQgZmluZFJlc0JpbmQgZnJvbSBcIi4vZmluZFJlc0JpbmRcIjtcclxuaW1wb3J0IHsgZmluZENvbnRyb2wgfSBmcm9tIFwiLi9maW5kQ29udHJvbFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgQXNzZXRDYWxsRnVuYyA9IChlcnI6IEVycm9yLCBhc3NldERhdGE6IGNjLkFzc2V0KSA9PiB2b2lkO1xyXG4gXHJcbmV4cG9ydCBjbGFzcyBmaW5kUmVzVXRpbCB7XHJcbiAgICAgXHJcbiAgICAvLyDnu5HlrprotYTmupDph4rmlL5cclxuICAgIHB1YmxpYyBzdGF0aWMgYmluZFJlc0Fzc2V0KHBhcmVudDogY2MuTm9kZSwgYXNzZXQ6IGNjLkFzc2V0KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHRlbXBBdXRvID0gcGFyZW50LmdldENvbXBvbmVudChmaW5kUmVzQmluZCk7XHJcbiAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKHRlbXBBdXRvKSkge1xyXG4gICAgICAgICAgICB0ZW1wQXV0byA9IHBhcmVudC5hZGRDb21wb25lbnQoZmluZFJlc0JpbmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZW1wQXV0by5hZGRBdXRvUmVsZWFzZUFzc2V0KGFzc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmo4DmtYvlvJXnlKjorqHmlbDlkI7ph4rmlL7otYTmupBcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVsZWFzZVJlcyhhc3NldDogY2MuQXNzZXQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2MuaXNWYWxpZChhc3NldCkgJiYgYXNzZXQucmVmQ291bnQgPD0gMCkge1xyXG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIucmVsZWFzZUFzc2V0KGFzc2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/liqDovb0o5b+F6aG76YWN5ZCIYWRkQXV0b1JlbGVhc2VBc3NldCDkvb/nlKjnu5HlrprotYTmupApXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRBc3NldChhc3NldFBhdGg6IHN0cmluZywgYXNzZXRUeXBlOiB0eXBlb2YgY2MuQXNzZXQsIGFzc2V0Q2I6IEFzc2V0Q2FsbEZ1bmMpOiB2b2lkIHtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChhc3NldFBhdGgsIGFzc2V0VHlwZSwgYXNzZXRDYik7XHJcbiAgICB9XHJcblxyXG4gICAgLy/pooTliqDovb1cclxuICAgIHB1YmxpYyBzdGF0aWMgcHJlbG9hZEFzc2V0KGFzc2V0UGF0aDogc3RyaW5nLCBhc3NldFR5cGU6IHR5cGVvZiBjYy5Bc3NldCk6IHZvaWQge1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5wcmVsb2FkKGFzc2V0UGF0aCwgYXNzZXRUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDliqDovb3ljZXlvKDlm77niYdcclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZFNwcml0ZShwaWNQYXRoOiBzdHJpbmcsIHNwcml0ZTogY2MuU3ByaXRlLCBkZWZQYXRoPzogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGZpbmlzaENhbGxiYWNrID0gKGVyciwgc3A6IGNjLlNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkZWZQYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkU3ByaXRlKGRlZlBhdGgsIHNwcml0ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHNwcml0ZSkgJiYgc3ByaXRlW1wibmV3VXJsXCJdID09IHBpY1BhdGgpIHtcclxuICAgICAgICAgICAgICAgIHNwcml0ZS5hZGRBdXRvUmVsZWFzZUFzc2V0KHNwKTtcclxuICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHNwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWxlYXNlUmVzKHNwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzcHJpdGVbXCJuZXdVcmxcIl0gPSBwaWNQYXRoOy8vIOiusOW9leacgOaWsHVybCDpmLLmraLlpJrmrKHor7fmsYLlvILmraXorr7nva7kuobml6fnmoRcclxuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBudWxsOy8v572u56m6IOmYsuatoueOqeWutueci+WIsOaXp+eahOmBk+WFt+ivr+S8mlxyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHBpY1BhdGgsIGNjLlNwcml0ZUZyYW1lLCBmaW5pc2hDYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0t6LWE5rqQ5Yqg6L29LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBcclxuICAgIHB1YmxpYyBzdGF0aWMgc2hvd0RpYWxvZyh1cmw6IHN0cmluZywgZGF0YT8sIGNhbGxiYWNrPykge1xyXG4gICAgIFxyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmViL1wiICsgdXJsLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgZmluZENvbnRyb2wuZmluZFJlc1V0aWwuYmluZFJlc0Fzc2V0KG5vZGUsIHByZWZhYik7XHJcbiAgICAgICAgICAgIGxldCBwYXJlbnROb2RlID0gZmluZENvbnRyb2wuZ2V0c2NlbmVOb2RlKCk7XHJcbiAgICAgICAgICAgIGlmIChub2RlICYmIHBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuZ2V0Q29tcG9uZW50KHVybCkuaW5pdERhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQodXJsKS5pbml0RGF0YShkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb250ZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgY29udGVudC5zY2FsZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihjb250ZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjMyLCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiAnYmFja091dCcgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzaG93VG9hc3QodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmZWIvdG9hc3RcIiwgY2MuUHJlZmFiLCAoZXJyLCBwcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB0b2FzdCA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgIGZpbmRDb250cm9sLmZpbmRSZXNVdGlsLmJpbmRSZXNBc3NldCh0b2FzdCwgcHJlZmFiKTtcclxuICAgICAgICAgICAgbGV0IHBhcmVudE5vZGUgPSBmaW5kQ29udHJvbC5nZXRzY2VuZU5vZGUoKTtcclxuICAgICAgICAgICAgaWYgKHRvYXN0ICYmIHBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmFkZENoaWxkKHRvYXN0KTtcclxuICAgICAgICAgICAgICAgIGxldCB0b2FzdExhYmVsID0gdG9hc3QuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0TGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0ZXh0O1xyXG4gICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRvYXN0KTtcclxuICAgICAgICAgICAgICAgIHRvYXN0Lm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0b2FzdCkudG8oMC4xNSwgeyBzY2FsZTogMS4yIH0pLnRvKDAuMTUsIHsgc2NhbGU6IDEgfSkuZGVsYXkoMC41KS50bygwLjUsIHsgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iXX0=