"use strict";
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