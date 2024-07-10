
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/host.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73ed6/QdxxO+pIbRjS+FY/O', 'host');
// script/host.ts

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
var newhand_1 = require("./prefeb/newhand");
var findControl_1 = require("./tool/findControl");
var findGameData_1 = require("./tool/findGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameState;
(function (GameState) {
    GameState[GameState["discover"] = 0] = "discover";
    GameState[GameState["wrong"] = 1] = "wrong";
    GameState[GameState["repeat"] = 2] = "repeat";
})(GameState || (GameState = {}));
var host = /** @class */ (function (_super) {
    __extends(host, _super);
    function host() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.originalImg = null;
        _this.finishImg = null;
        _this.tishi_qipao = null;
        _this.gameFindPrefab2 = null;
        _this.gameFindPrefab = null;
        _this.gameErrPrefab = null;
        _this.gameTishiPrefab = null;
        _this.game_tuowei = null;
        _this.imgSignBox = null;
        _this.yeziBox = null;
        _this.level = null;
        _this.timeAll = null;
        _this.reduceTime = null;
        _this.mask = null;
        _this.heartBox = null;
        _this.emptyheartBox = null;
        _this.love_Data = [];
        _this.lovelyY = 290;
        _this.lovelyScale = 0.45;
        _this.yeziAllNum = 10;
        _this.lovelyFindNum = 0;
        _this.lovelyOutTime = 0;
        _this.lovelyIsPrompt = false;
        _this.timer = null;
        _this.isStop = false;
        _this.oneErr = false;
        _this.audioClips = [];
        _this.newhandNode = null;
        return _this;
    }
    host.prototype.start = function () {
        var _this = this;
        findGameData_1.fgData.setGamestop(function () {
            findControl_1.findControl.findSoundTool.pauseAll();
        });
        findGameData_1.fgData.setGamerecovery(function () {
            findControl_1.findControl.findSoundTool.resumeAll();
        });
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = false;
            this.getComponent(cc.Canvas).fitWidth = true;
        }
        this.resetAll();
        findControl_1.findControl.setsceneNode(this.node);
        findControl_1.findControl.adapterBg(this.bg);
        this.onEvent();
        this.init();
        this.startDownTime();
        this.loadRes();
        this.checkNewHand();
        cc.resources.loadDir("sound", cc.AudioClip, function (err, clips) {
            if (err || !cc.isValid(_this))
                return;
            _this.audioClips = clips;
            _this.addAutoReleaseAssets(clips);
        });
    };
    host.prototype.onEvent = function () {
        this.originalImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
        this.finishImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
    };
    host.prototype.resetAll = function (clearData) {
        if (!clearData) {
            this.love_Data = [];
        }
        this.imgSignBox.getChildByName("origBox").destroyAllChildren();
        this.imgSignBox.getChildByName("finishBox").destroyAllChildren();
        this.imgSignBox.getChildByName("errBox").destroyAllChildren();
        this.imgSignBox.getChildByName("tishiBox").destroyAllChildren();
        this.imgSignBox.getChildByName("lizi").destroyAllChildren();
        this.mask.active = false;
        this.oneErr = false;
        this.isStop = false;
        this.timer = null;
        this.lovelyIsPrompt = false;
        this.lovelyFindNum = 0;
        this.init();
    };
    host.prototype.checkNewHand = function () {
        var _this = this;
        if (findGameData_1.fgData.userData.isGudie || findControl_1.findControl.imgId != 1) {
            return;
        }
        cc.resources.load("prefeb/newhand", cc.Prefab, function (err, prefab) {
            if (err) {
                return;
            }
            var node = cc.instantiate(prefab);
            findControl_1.findControl.findResUtil.bindResAsset(node, prefab);
            _this.node.addChild(node);
            _this.newhandNode = node.getComponent(newhand_1.default);
            _this.newhandNode.showdong1();
        });
    };
    host.prototype.init = function () {
        this.level.string = "Lv" + findControl_1.findControl.imgId;
        for (var i = 0; i < this.yeziBox.children.length; i++) {
            var anim = this.yeziBox.children[i].getComponent(sp.Skeleton);
            findControl_1.findControl.playSp(anim, "1_an_stop");
        }
        this.changeQiPaoNum();
        this.mask.active = false;
        // this.lovelyOutTime = this.getDownTime();
        // let time = findControl.timeChange(this.lovelyOutTime);
        // this.timeAll.getComponent(cc.Label).string = time;
        this.reduceTime.active = false;
        this.timeAll.active = false;
        for (var i = 0; i < this.heartBox.children.length; i++) {
            this.heartBox.children[i].active = true;
            this.emptyheartBox.children[i].active = false;
        }
    };
    //开启倒计时
    host.prototype.startDownTime = function () {
        return;
        if (this.lovelyOutTime > 0) {
            var time = findControl_1.findControl.timeChange(this.lovelyOutTime);
            this.timeAll.getComponent(cc.Label).string = time;
            this.timer = this.schedule(this.downTimeEvent, 1);
        }
    };
    host.prototype.downTimeEvent = function () {
        return;
        if (this.isStop) {
            return;
        }
        this.lovelyOutTime--;
        var time = findControl_1.findControl.timeChange(this.lovelyOutTime);
        this.timeAll.getComponent(cc.Label).string = time;
        if (this.lovelyOutTime <= 0) {
            this.unschedule(this.downTimeEvent);
            this.timeOutEvent();
            this.playCommonSound(findGameData_1.sound.fail);
            cc.log("时间到了");
        }
    };
    //点错了
    host.prototype.errReduceTime = function () {
        var _this = this;
        var findheart = false;
        for (var i = this.heartBox.children.length - 1; i >= 0; i--) {
            var heartItem_1 = this.heartBox.children[i];
            var emptyheartItem = this.emptyheartBox.children[i];
            if (heartItem_1.active) {
                findheart = true;
                heartItem_1.active = false;
                emptyheartItem.active = true;
                var anim = emptyheartItem.getComponent(sp.Skeleton);
                findControl_1.findControl.playSp(anim, "posui");
                break;
            }
        }
        var heartItem = this.heartBox.children[0];
        if (!heartItem.active) {
            findControl_1.findControl.findResUtil.showDialog(findControl_1.wicket.MoonPop, {
                ADcallback: function () {
                    // this.lovelyOutTime = 60;  
                    // fgData.userData.tishiNum++;
                    findGameData_1.fgData.storageData();
                    _this.changeQiPaoNum();
                    _this.startDownTime();
                    for (var i = 0; i < _this.heartBox.children.length; i++) {
                        _this.heartBox.children[i].active = true;
                        _this.emptyheartBox.children[i].active = false;
                    }
                },
                restartCallBack: function () {
                    _this.resetAll(true);
                    _this.init();
                    _this.startDownTime();
                    cc.log(_this.love_Data, "this.love_Data");
                    for (var i = 0; i < _this.love_Data.length; i++) {
                        _this.love_Data[i].isFind = false;
                    }
                }
            });
        }
        return;
        //时间
        if (!this.oneErr)
            return;
        var posY = this.timeAll.y;
        var reduceTime = 30;
        this.reduceTime.y = posY;
        this.reduceTime.active = true;
        this.reduceTime.getComponent(cc.Label).string = "-" + reduceTime;
        cc.Tween.stopAllByTarget(this.reduceTime);
        cc.tween(this.reduceTime).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).to(1, { opacity: 255, y: posY - 25 }).call(function () {
            _this.reduceTime.active = false;
        }).start();
        this.lovelyOutTime -= reduceTime;
        if (this.lovelyOutTime <= 0) {
            this.timeAll.getComponent(cc.Label).string = "00:00";
            this.playCommonSound(findGameData_1.sound.fail);
            cc.log("时间到了");
            this.unschedule(this.downTimeEvent);
            this.timeOutEvent();
        }
        else {
            var time = findControl_1.findControl.timeChange(this.lovelyOutTime);
            this.timeAll.getComponent(cc.Label).string = time;
        }
    };
    host.prototype.changeQiPaoNum = function () {
        if (findGameData_1.fgData.userData.tishiNum > 0) {
            this.tishi_qipao.getChildByName("ad_label").active = false;
            this.tishi_qipao.getChildByName("num_label").active = true;
            this.tishi_qipao.getChildByName("num_label").getComponent(cc.Label).string = findGameData_1.fgData.userData.tishiNum.toString();
        }
        else {
            this.tishi_qipao.getChildByName("ad_label").active = true;
            this.tishi_qipao.getChildByName("num_label").active = false;
        }
    };
    host.prototype.loadRes = function () {
        var _this = this;
        findControl_1.findControl.findResUtil.loadSprite("fineImg/" + "fine_" + findControl_1.findControl.imgId, this.originalImg.getComponent(cc.Sprite));
        findControl_1.findControl.findResUtil.loadSprite("discoverImg/" + "discover_" + findControl_1.findControl.imgId, this.finishImg.getComponent(cc.Sprite));
        cc.resources.load("imgConfig/rank" + findControl_1.findControl.imgId, cc.JsonAsset, function (err, res) {
            if (err) {
                cc.log(err);
                return;
            }
            // 获取到 Json 数据
            findControl_1.findControl.findResUtil.bindResAsset(_this.node, res);
            var jsonData = res.json;
            if (jsonData && jsonData.path) {
                _this.love_Data = jsonData.path;
                for (var i = 0; i < _this.love_Data.length; i++) {
                    _this.love_Data[i].isFind = false;
                }
                // for (let i = 0; i < this.love_Data.length; i++) {
                //     let data = this.love_Data[i];
                //     this.findSignSucc(cc.v3(data.centerPos.x, data.centerPos.y))
                // }
                // for (let i = 0; i < this.love_Data.length; i++) {
                //     let data = this.love_Data[i];
                //     this.findSignSucc(cc.v3(data.centerPos.x, data.centerPos.y))
                // }
            }
        });
    };
    host.prototype.yeziLight = function (pos) {
        var _this = this;
        var anim = this.yeziBox.children[this.lovelyFindNum - 1].getComponent(sp.Skeleton);
        var tuowei = cc.instantiate(this.game_tuowei);
        this.imgSignBox.getChildByName("lizi").addChild(tuowei);
        tuowei.setPosition(pos);
        var changePos = findControl_1.findControl.changePos(anim.node, tuowei);
        var time = 0.5;
        if (pos.y < 0) {
            time = 1;
        }
        cc.Tween.stopAllByTarget(tuowei);
        cc.tween(tuowei).to(time, { position: changePos }).call(function () {
            _this.scheduleOnce(function () {
                tuowei.destroy();
            }, 0.3);
            findControl_1.findControl.playSp(anim, "2_bianliang");
            findControl_1.findControl.addSequenceSp(anim, "3_liang_stop");
        }).start();
    };
    host.prototype.findSignSucc = function (targetPos, fgData) {
        for (var i = 0; i < 2; i++) {
            var gameFind = cc.instantiate(this.gameFindPrefab2);
            var imgX = 0;
            if (i == 0) {
                imgX = targetPos.x * this.lovelyScale + this.lovelyY;
                this.imgSignBox.getChildByName("origBox").addChild(gameFind);
            }
            else {
                this.imgSignBox.getChildByName("finishBox").addChild(gameFind);
                imgX = targetPos.x * this.lovelyScale - this.lovelyY;
            }
            var centerPos = cc.v3(imgX, targetPos.y * this.lovelyScale);
            gameFind.setPosition(centerPos);
            //     正方形
            gameFind.width = fgData.blockSize.wid * this.lovelyScale;
            gameFind.height = fgData.blockSize.hei * this.lovelyScale;
            cc.Tween.stopAllByTarget(gameFind);
            gameFind.scale = 0;
            cc.tween(gameFind).to(0.3, { scale: 1.5 }).to(0.1, { scale: 1.3 }).start();
        }
    };
    host.prototype.findSignErr = function (targetPos) {
        var clickPos = targetPos;
        var gameErr = cc.instantiate(this.gameErrPrefab);
        this.imgSignBox.getChildByName("errBox").addChild(gameErr);
        gameErr.setPosition(clickPos);
        this.errSignAnim(gameErr);
        var otherErrSign = null;
        if (clickPos.x > 0) {
            otherErrSign = cc.instantiate(this.gameErrPrefab);
            this.imgSignBox.getChildByName("errBox").addChild(otherErrSign);
            otherErrSign.setPosition(cc.v3(clickPos.x - (this.lovelyY * 2), clickPos.y));
        }
        else {
            otherErrSign = cc.instantiate(this.gameErrPrefab);
            this.imgSignBox.getChildByName("errBox").addChild(otherErrSign);
            otherErrSign.setPosition(cc.v3(clickPos.x + (this.lovelyY * 2), clickPos.y));
        }
        if (otherErrSign) {
            this.errSignAnim(otherErrSign);
        }
    };
    host.prototype.imgEvent = function (event) {
        var pos = event.getLocation();
        var clickPos = this.imgSignBox.convertToNodeSpaceAR(cc.v3(pos.x, pos.y));
        // this.findSignErr(clickPos);
        var data = this.checkImgSign(clickPos);
        if (data.type == GameState.discover) {
            if (this.lovelyIsPrompt) {
                this.lovelyIsPrompt = false;
                this.imgSignBox.getChildByName("tishiBox").destroyAllChildren();
            }
            this.lovelyFindNum = this.lovelyFindNum + 1;
            this.findSignSucc(cc.v3(data.fgData.centerPos.x, data.fgData.centerPos.y), data.fgData);
            this.yeziLight(clickPos);
            if (this.newhandNode && this.lovelyFindNum == 1) {
                if (this.newhandNode) {
                    this.newhandNode.hidedong1();
                    this.newhandNode.showdong2();
                }
            }
            else if (this.newhandNode && this.lovelyFindNum == 2) {
                if (this.newhandNode) {
                    this.newhandNode.node.destroy();
                    this.newhandNode = null;
                }
                findGameData_1.fgData.userData.isGudie = true;
                findGameData_1.fgData.storageData();
            }
            this.playCommonSound(findGameData_1.sound.correct);
            if (this.lovelyFindNum >= this.yeziAllNum) { //胜利 游戏结束
                this.gameEnd();
            }
        }
        else if (data.type == GameState.wrong) {
            this.playCommonSound(findGameData_1.sound.err);
            this.errReduceTime();
            this.findSignErr(clickPos);
            this.oneErr = true;
        }
        else {
            this.playCommonSound(findGameData_1.sound.err);
            this.errReduceTime();
            this.findSignErr(clickPos);
            this.oneErr = true;
        }
    };
    host.prototype.checkImgSign = function (targetPos) {
        var type = null;
        var fgData = null;
        for (var i = 0; i < this.love_Data.length; i++) {
            var data = this.love_Data[i];
            var x = 0;
            var y = data.centerPos.y * this.lovelyScale;
            if (targetPos.x > 0) {
                x = data.centerPos.x * this.lovelyScale + this.lovelyY;
            }
            else {
                x = data.centerPos.x * this.lovelyScale - this.lovelyY;
            }
            var wid = data.blockSize.wid * this.lovelyScale;
            var hei = data.blockSize.hei * this.lovelyScale;
            // let testitem = cc.instantiate(this.testitemPrefab);
            // this.imgSignBox.addChild(testitem);
            // testitem.setPosition(cc.v3(x, y));
            // testitem.width = wid;
            // testitem.height = hei;
            if (!data.isFind && targetPos.x <= x + wid / 2 && targetPos.x >= x - wid / 2
                && targetPos.y <= y + hei / 2 && targetPos.y >= y - hei / 2) {
                if (!data.isFind) {
                    cc.log("找到了");
                    type = GameState.discover;
                    fgData = data;
                    data.isFind = true;
                }
                else {
                    type = GameState.repeat;
                    cc.log("找到重复的了");
                }
                return { type: type, fgData: fgData };
            }
            else {
                type = GameState.wrong;
                cc.log("没找到");
            }
        }
        return { type: type, fgData: fgData };
    };
    host.prototype.errSignAnim = function (node) {
        cc.Tween.stopAllByTarget(node);
        cc.tween(node)
            .to(0.05, { angle: 15 }).to(0.05, { angle: 0 }).to(0.05, { angle: -15 })
            .to(0.07, { angle: 10 }).to(0.07, { angle: 0 }).to(0.07, { angle: -10 })
            .to(0.1, { angle: 7 }).to(0.1, { angle: 0 }).to(0.1, { angle: -7 })
            .to(0.1, { angle: 3 }).to(0.1, { angle: 0 })
            .call(function () {
            node.destroy();
        }).start();
    };
    host.prototype.gameEnd = function () {
        var _this = this;
        cc.log("游戏结束");
        this.mask.active = true;
        this.scheduleOnce(function () {
            var _loop_1 = function (i) {
                var anim = _this.yeziBox.children[i].getComponent(sp.Skeleton);
                _this.scheduleOnce(function () {
                    findControl_1.findControl.playSp(anim, "4_man", false, function () {
                        _this.scheduleOnce(function () {
                            if (i == _this.yeziBox.children.length - 1) {
                                _this.playCommonSound(findGameData_1.sound.win);
                                if (findGameData_1.fgData.userData.level + 1 <= findGameData_1.fgData.levelAll) {
                                    findGameData_1.fgData.userData.level = findGameData_1.fgData.userData.level + 1;
                                    findGameData_1.fgData.storageData();
                                }
                                findControl_1.findControl.findResUtil.showDialog(findControl_1.wicket.windPop, {
                                    img: _this.originalImg.getComponent(cc.Sprite).spriteFrame,
                                    finishBox: cc.instantiate(_this.imgSignBox.getChildByName("finishBox")),
                                    love_Data: _this.love_Data,
                                    callback: function () {
                                        if (findControl_1.findControl.imgId + 1 <= findGameData_1.fgData.levelAll) {
                                            findControl_1.findControl.imgId = findControl_1.findControl.imgId + 1;
                                            _this.resetAll();
                                            _this.init();
                                            _this.startDownTime();
                                            _this.loadRes();
                                        }
                                        else {
                                            findGameData_1.fgData.userData.isHall = true;
                                            findGameData_1.fgData.storageData();
                                            cc.director.loadScene(findControl_1.spectacle.parlour);
                                        }
                                    }
                                });
                            }
                        });
                    });
                }, 0.1 * i);
            };
            for (var i = 0; i < _this.yeziBox.children.length; i++) {
                _loop_1(i);
            }
        }, 0.5);
    };
    //获取当前关卡的倒计时
    host.prototype.getDownTime = function () {
        var level = findControl_1.findControl.imgId;
        var time = 0;
        if (level >= 1 && level <= 5) {
            time = 5 * 60;
        }
        else if (level >= 6 && level <= 10) {
            time = 3 * 60;
        }
        else if (level >= 11 && level <= 15) {
            time = 2 * 60 + 30;
        }
        else if (level >= 16 && level <= 20) {
            time = 2 * 60;
        }
        else if (level >= 21 && level <= 25) {
            time = 1 * 60 + 30;
        }
        else {
            time = 1 * 60;
        }
        return time;
    };
    //时间到
    host.prototype.timeOutEvent = function () {
        var _this = this;
        findControl_1.findControl.findResUtil.showDialog(findControl_1.wicket.MoonPop, {
            ADcallback: function () {
                _this.lovelyOutTime = 60;
                findGameData_1.fgData.userData.tishiNum++;
                findGameData_1.fgData.storageData();
                _this.changeQiPaoNum();
                _this.startDownTime();
            },
            restartCallBack: function () {
                _this.resetAll(true);
                _this.init();
                _this.startDownTime();
                cc.log(_this.love_Data, "this.love_Data");
                for (var i = 0; i < _this.love_Data.length; i++) {
                    _this.love_Data[i].isFind = false;
                }
            }
        });
    };
    host.prototype.onClick_back = function () {
        var _this = this;
        findControl_1.findControl.findSoundTool.commonBtnClick();
        this.isStop = true;
        findControl_1.findControl.findResUtil.showDialog(findControl_1.wicket.StarPop, { callback: function () { _this.isStop = false; } });
    };
    host.prototype.onClick_pause = function () {
        var _this = this;
        findControl_1.findControl.findSoundTool.commonBtnClick();
        this.isStop = true;
        findControl_1.findControl.findResUtil.showDialog(findControl_1.wicket.TreePop, { isGame: true, callback: function () { _this.isStop = false; } });
    };
    host.prototype.onClick_tishi = function () {
        var _this = this;
        findControl_1.findControl.findSoundTool.commonBtnClick();
        if (this.lovelyIsPrompt) {
            findControl_1.findControl.findResUtil.showToast("Prompt already exists");
            return;
        }
        var lvdata = null;
        for (var i = 0; i < this.love_Data.length; i++) {
            if (!this.love_Data[i].isFind) {
                lvdata = this.love_Data[i];
                break;
            }
        }
        if (!findGameData_1.fgData) {
            return;
        }
        if (findGameData_1.fgData.userData.tishiNum <= 0) {
            cc.log("看广告");
            findGameData_1.fgData.showVideo(function () {
                _this.showTiShi(lvdata);
            });
            return;
        }
        findGameData_1.fgData.userData.tishiNum = findGameData_1.fgData.userData.tishiNum - 1;
        findGameData_1.fgData.storageData();
        this.changeQiPaoNum();
        this.showTiShi(lvdata);
    };
    host.prototype.showTiShi = function (fgData) {
        if (fgData) {
            this.lovelyIsPrompt = true;
            for (var i = 0; i < 2; i++) {
                var tishi = cc.instantiate(this.gameTishiPrefab);
                this.imgSignBox.getChildByName("tishiBox").addChild(tishi);
                var x = 0;
                var y = fgData.centerPos.y * this.lovelyScale;
                if (i == 0) {
                    x = fgData.centerPos.x * this.lovelyScale + this.lovelyY;
                }
                else {
                    x = fgData.centerPos.x * this.lovelyScale - this.lovelyY;
                }
                tishi.setPosition(x, y);
                cc.Tween.stopAllByTarget(tishi);
                cc.tween(tishi).to(0.5, { scale: 0.7 }).to(0.5, { scale: 1 }).union().repeatForever().start();
            }
        }
    };
    //播放音效
    host.prototype.playCommonSound = function (audioName, loop) {
        if (loop === void 0) { loop = false; }
        for (var i = 0; i < this.audioClips.length; i++) {
            if (this.audioClips[i].name == audioName) {
                var audioID = findControl_1.findControl.findSoundTool.playEffect(this.audioClips[i], loop);
                return audioID;
            }
        }
        return null;
    };
    __decorate([
        property(cc.Node)
    ], host.prototype, "bg", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "originalImg", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "finishImg", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "tishi_qipao", void 0);
    __decorate([
        property(cc.Prefab)
    ], host.prototype, "gameFindPrefab2", void 0);
    __decorate([
        property(cc.Prefab)
    ], host.prototype, "gameFindPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], host.prototype, "gameErrPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], host.prototype, "gameTishiPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], host.prototype, "game_tuowei", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "imgSignBox", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "yeziBox", void 0);
    __decorate([
        property(cc.Label)
    ], host.prototype, "level", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "timeAll", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "reduceTime", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "mask", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "heartBox", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "emptyheartBox", void 0);
    host = __decorate([
        ccclass
    ], host);
    return host;
}(cc.Component));
exports.default = host;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNjO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ2E7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDWTtJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNjO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ1U7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dUNBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0NBQ0c7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNZO0lBbkRiLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0Eyb0J4QjtJQUFELFdBQUM7Q0Ezb0JELEFBMm9CQyxDQTNvQmlDLEVBQUUsQ0FBQyxTQUFTLEdBMm9CN0M7a0JBM29Cb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuZXdoYW5kIGZyb20gXCIuL3ByZWZlYi9uZXdoYW5kXCI7XG5pbXBvcnQgeyBmaW5kQ29udHJvbCwgd2lja2V0LCBzcGVjdGFjbGUsIGxvdmVseURhdGEgfSBmcm9tIFwiLi90b29sL2ZpbmRDb250cm9sXCI7XG5pbXBvcnQgeyBmZ0RhdGEsIHNvdW5kIH0gZnJvbSBcIi4vdG9vbC9maW5kR2FtZURhdGFcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5lbnVtIEdhbWVTdGF0ZSB7XG4gICAgZGlzY292ZXIsICAgICAgIC8v5om+5YiwXG4gICAgd3JvbmcsICAgICAgICAvL+ayoeaJvuWIsCAgICBcbiAgICByZXBlYXQsICAgICAvL+aJvuWIsOmHjeWkjeeahCAgXG59XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBob3N0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJnOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG9yaWdpbmFsSW1nOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGZpbmlzaEltZzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0aXNoaV9xaXBhbzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGdhbWVGaW5kUHJlZmFiMjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ2FtZUZpbmRQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGdhbWVFcnJQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGdhbWVUaXNoaVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ2FtZV90dW93ZWk6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpbWdTaWduQm94OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHllemlCb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxldmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0aW1lQWxsOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHJlZHVjZVRpbWU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWFzazogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoZWFydEJveDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBlbXB0eWhlYXJ0Qm94OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGxvdmVfRGF0YTogbG92ZWx5RGF0YVtdID0gW107XG4gICAgbG92ZWx5WTogbnVtYmVyID0gMjkwO1xuICAgIGxvdmVseVNjYWxlOiBudW1iZXIgPSAwLjQ1O1xuXG4gICAgeWV6aUFsbE51bTogbnVtYmVyID0gMTA7XG4gICAgbG92ZWx5RmluZE51bTogbnVtYmVyID0gMDtcbiAgICBsb3ZlbHlPdXRUaW1lOiBudW1iZXIgPSAwO1xuXG4gICAgbG92ZWx5SXNQcm9tcHQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHRpbWVyID0gbnVsbDtcbiAgICBpc1N0b3A6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBvbmVFcnI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgYXVkaW9DbGlwczogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICAgIG5ld2hhbmROb2RlOiBuZXdoYW5kID0gbnVsbDtcblxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGZnRGF0YS5zZXRHYW1lc3RvcCgoKT0+e1xuICAgICAgICAgICAgZmluZENvbnRyb2wuZmluZFNvdW5kVG9vbC5wYXVzZUFsbCgpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZnRGF0YS5zZXRHYW1lcmVjb3ZlcnkoKCk9PntcbiAgICAgICAgICAgIGZpbmRDb250cm9sLmZpbmRTb3VuZFRvb2wucmVzdW1lQWxsKClcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5JUEFEKSB7XG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5DYW52YXMpLmZpdEhlaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuQ2FudmFzKS5maXRXaWR0aCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc2V0QWxsKCk7XG4gICAgICAgIGZpbmRDb250cm9sLnNldHNjZW5lTm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICBmaW5kQ29udHJvbC5hZGFwdGVyQmcodGhpcy5iZyk7XG5cbiAgICAgICAgdGhpcy5vbkV2ZW50KCk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLnN0YXJ0RG93blRpbWUoKTtcbiAgICAgICAgdGhpcy5sb2FkUmVzKCk7XG4gICAgICAgIHRoaXMuY2hlY2tOZXdIYW5kKCk7XG5cbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWREaXIoXCJzb3VuZFwiLCBjYy5BdWRpb0NsaXAsIChlcnI6IEVycm9yLCBjbGlwczogY2MuQXVkaW9DbGlwW10pID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIgfHwgIWNjLmlzVmFsaWQodGhpcykpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9DbGlwcyA9IGNsaXBzO1xuICAgICAgICAgICAgdGhpcy5hZGRBdXRvUmVsZWFzZUFzc2V0cyhjbGlwcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRXZlbnQoKSB7XG4gICAgICAgIHRoaXMub3JpZ2luYWxJbWcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmltZ0V2ZW50LCB0aGlzKTtcbiAgICAgICAgdGhpcy5maW5pc2hJbWcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmltZ0V2ZW50LCB0aGlzKTtcbiAgICB9XG5cbiAgICByZXNldEFsbChjbGVhckRhdGE/KSB7XG4gICAgICAgIGlmICghY2xlYXJEYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmxvdmVfRGF0YSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcIm9yaWdCb3hcIikuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImZpbmlzaEJveFwiKS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwiZXJyQm94XCIpLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJ0aXNoaUJveFwiKS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwibGl6aVwiKS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcblxuICAgICAgICB0aGlzLm1hc2suYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25lRXJyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNTdG9wID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmxvdmVseUlzUHJvbXB0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG92ZWx5RmluZE51bSA9IDA7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGNoZWNrTmV3SGFuZCgpIHtcbiAgICAgICAgaWYgKGZnRGF0YS51c2VyRGF0YS5pc0d1ZGllIHx8IGZpbmRDb250cm9sLmltZ0lkICE9IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZlYi9uZXdoYW5kXCIsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICBmaW5kQ29udHJvbC5maW5kUmVzVXRpbC5iaW5kUmVzQXNzZXQobm9kZSwgcHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUgPSBub2RlLmdldENvbXBvbmVudChuZXdoYW5kKTtcbiAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUuc2hvd2RvbmcxKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmxldmVsLnN0cmluZyA9IFwiTHZcIiArIGZpbmRDb250cm9sLmltZ0lkO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMueWV6aUJveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGFuaW0gPSB0aGlzLnllemlCb3guY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgICAgIGZpbmRDb250cm9sLnBsYXlTcChhbmltLCBcIjFfYW5fc3RvcFwiKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5jaGFuZ2VRaVBhb051bSgpO1xuXG4gICAgICAgIHRoaXMubWFzay5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAvLyB0aGlzLmxvdmVseU91dFRpbWUgPSB0aGlzLmdldERvd25UaW1lKCk7XG4gICAgICAgIC8vIGxldCB0aW1lID0gZmluZENvbnRyb2wudGltZUNoYW5nZSh0aGlzLmxvdmVseU91dFRpbWUpO1xuICAgICAgICAvLyB0aGlzLnRpbWVBbGwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aW1lO1xuICAgICAgICB0aGlzLnJlZHVjZVRpbWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGltZUFsbC5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaGVhcnRCb3guY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaGVhcnRCb3guY2hpbGRyZW5baV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZW1wdHloZWFydEJveC5jaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy/lvIDlkK/lgJLorqHml7ZcbiAgICBzdGFydERvd25UaW1lKCkge1xuICAgICAgICByZXR1cm5cbiAgICAgICAgaWYgKHRoaXMubG92ZWx5T3V0VGltZSA+IDApIHtcbiAgICAgICAgICAgIGxldCB0aW1lID0gZmluZENvbnRyb2wudGltZUNoYW5nZSh0aGlzLmxvdmVseU91dFRpbWUpO1xuICAgICAgICAgICAgdGhpcy50aW1lQWxsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGltZTtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSB0aGlzLnNjaGVkdWxlKHRoaXMuZG93blRpbWVFdmVudCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkb3duVGltZUV2ZW50KCkge1xuXG4gICAgICAgIHJldHVyblxuICAgICAgICBpZiAodGhpcy5pc1N0b3ApIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMubG92ZWx5T3V0VGltZS0tO1xuICAgICAgICBsZXQgdGltZSA9IGZpbmRDb250cm9sLnRpbWVDaGFuZ2UodGhpcy5sb3ZlbHlPdXRUaW1lKTtcbiAgICAgICAgdGhpcy50aW1lQWxsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGltZTtcbiAgICAgICAgaWYgKHRoaXMubG92ZWx5T3V0VGltZSA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5kb3duVGltZUV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMudGltZU91dEV2ZW50KCk7XG4gICAgICAgICAgICB0aGlzLnBsYXlDb21tb25Tb3VuZChzb3VuZC5mYWlsKTtcbiAgICAgICAgICAgIGNjLmxvZyhcIuaXtumXtOWIsOS6hlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy/ngrnplJnkuoZcbiAgICBlcnJSZWR1Y2VUaW1lKCkge1xuICAgICAgICBsZXQgZmluZGhlYXJ0ID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmhlYXJ0Qm94LmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgaGVhcnRJdGVtID0gdGhpcy5oZWFydEJveC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCBlbXB0eWhlYXJ0SXRlbSA9IHRoaXMuZW1wdHloZWFydEJveC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChoZWFydEl0ZW0uYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZmluZGhlYXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBoZWFydEl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZW1wdHloZWFydEl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsZXQgYW5pbSA9IGVtcHR5aGVhcnRJdGVtLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICAgICAgZmluZENvbnRyb2wucGxheVNwKGFuaW0sIFwicG9zdWlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGhlYXJ0SXRlbSA9IHRoaXMuaGVhcnRCb3guY2hpbGRyZW5bMF07XG4gICAgICAgIGlmICghaGVhcnRJdGVtLmFjdGl2ZSkge1xuICAgICAgICAgICAgZmluZENvbnRyb2wuZmluZFJlc1V0aWwuc2hvd0RpYWxvZyh3aWNrZXQuTW9vblBvcCwge1xuICAgICAgICAgICAgICAgIEFEY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5sb3ZlbHlPdXRUaW1lID0gNjA7ICBcbiAgICAgICAgICAgICAgICAgICAgLy8gZmdEYXRhLnVzZXJEYXRhLnRpc2hpTnVtKys7XG4gICAgICAgICAgICAgICAgICAgIGZnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVFpUGFvTnVtKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREb3duVGltZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5oZWFydEJveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFydEJveC5jaGlsZHJlbltpXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbXB0eWhlYXJ0Qm94LmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHJlc3RhcnRDYWxsQmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QWxsKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydERvd25UaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyh0aGlzLmxvdmVfRGF0YSwgXCJ0aGlzLmxvdmVfRGF0YVwiKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxvdmVfRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb3ZlX0RhdGFbaV0uaXNGaW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgICAgLy/ml7bpl7RcbiAgICAgICAgaWYgKCF0aGlzLm9uZUVycikgcmV0dXJuXG4gICAgICAgIGxldCBwb3NZID0gdGhpcy50aW1lQWxsLnk7XG4gICAgICAgIGxldCByZWR1Y2VUaW1lID0gMzA7XG4gICAgICAgIHRoaXMucmVkdWNlVGltZS55ID0gcG9zWTtcbiAgICAgICAgdGhpcy5yZWR1Y2VUaW1lLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucmVkdWNlVGltZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiLVwiICsgcmVkdWNlVGltZTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMucmVkdWNlVGltZSk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMucmVkdWNlVGltZSkudG8oMC4xNSwgeyBzY2FsZTogMS4yIH0pLnRvKDAuMTUsIHsgc2NhbGU6IDEgfSkudG8oMSwgeyBvcGFjaXR5OiAyNTUsIHk6IHBvc1kgLSAyNSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVkdWNlVGltZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSkuc3RhcnQoKTtcblxuICAgICAgICB0aGlzLmxvdmVseU91dFRpbWUgLT0gcmVkdWNlVGltZTtcbiAgICAgICAgaWYgKHRoaXMubG92ZWx5T3V0VGltZSA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVBbGwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIjAwOjAwXCI7XG4gICAgICAgICAgICB0aGlzLnBsYXlDb21tb25Tb3VuZChzb3VuZC5mYWlsKTtcbiAgICAgICAgICAgIGNjLmxvZyhcIuaXtumXtOWIsOS6hlwiKTtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmRvd25UaW1lRXZlbnQpO1xuICAgICAgICAgICAgdGhpcy50aW1lT3V0RXZlbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0aW1lID0gZmluZENvbnRyb2wudGltZUNoYW5nZSh0aGlzLmxvdmVseU91dFRpbWUpO1xuICAgICAgICAgICAgdGhpcy50aW1lQWxsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGltZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZVFpUGFvTnVtKCkge1xuICAgICAgICBpZiAoZmdEYXRhLnVzZXJEYXRhLnRpc2hpTnVtID4gMCkge1xuICAgICAgICAgICAgdGhpcy50aXNoaV9xaXBhby5nZXRDaGlsZEJ5TmFtZShcImFkX2xhYmVsXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50aXNoaV9xaXBhby5nZXRDaGlsZEJ5TmFtZShcIm51bV9sYWJlbFwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50aXNoaV9xaXBhby5nZXRDaGlsZEJ5TmFtZShcIm51bV9sYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGZnRGF0YS51c2VyRGF0YS50aXNoaU51bS50b1N0cmluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aXNoaV9xaXBhby5nZXRDaGlsZEJ5TmFtZShcImFkX2xhYmVsXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRpc2hpX3FpcGFvLmdldENoaWxkQnlOYW1lKFwibnVtX2xhYmVsXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZFJlcygpIHtcbiAgICAgICAgZmluZENvbnRyb2wuZmluZFJlc1V0aWwubG9hZFNwcml0ZShcImZpbmVJbWcvXCIgKyBcImZpbmVfXCIgKyBmaW5kQ29udHJvbC5pbWdJZCwgdGhpcy5vcmlnaW5hbEltZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG5cbiAgICAgICAgZmluZENvbnRyb2wuZmluZFJlc1V0aWwubG9hZFNwcml0ZShcImRpc2NvdmVySW1nL1wiICsgXCJkaXNjb3Zlcl9cIiArIGZpbmRDb250cm9sLmltZ0lkLCB0aGlzLmZpbmlzaEltZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG5cbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJpbWdDb25maWcvcmFua1wiICsgZmluZENvbnRyb2wuaW1nSWQsIGNjLkpzb25Bc3NldCwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKGVycilcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDojrflj5bliLAgSnNvbiDmlbDmja5cbiAgICAgICAgICAgIGZpbmRDb250cm9sLmZpbmRSZXNVdGlsLmJpbmRSZXNBc3NldCh0aGlzLm5vZGUsIHJlcyk7XG4gICAgICAgICAgICBjb25zdCBqc29uRGF0YSA9IHJlcy5qc29uO1xuICAgICAgICAgICAgaWYgKGpzb25EYXRhICYmIGpzb25EYXRhLnBhdGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvdmVfRGF0YSA9IGpzb25EYXRhLnBhdGg7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxvdmVfRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvdmVfRGF0YVtpXS5pc0ZpbmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxvdmVfRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgZGF0YSA9IHRoaXMubG92ZV9EYXRhW2ldO1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmZpbmRTaWduU3VjYyhjYy52MyhkYXRhLmNlbnRlclBvcy54LCBkYXRhLmNlbnRlclBvcy55KSlcbiAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubG92ZV9EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGxldCBkYXRhID0gdGhpcy5sb3ZlX0RhdGFbaV07XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuZmluZFNpZ25TdWNjKGNjLnYzKGRhdGEuY2VudGVyUG9zLngsIGRhdGEuY2VudGVyUG9zLnkpKVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIHllemlMaWdodChwb3M6IGNjLlZlYzMpIHtcbiAgICAgICAgbGV0IGFuaW0gPSB0aGlzLnllemlCb3guY2hpbGRyZW5bdGhpcy5sb3ZlbHlGaW5kTnVtIC0gMV0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcblxuICAgICAgICBsZXQgdHVvd2VpID0gY2MuaW5zdGFudGlhdGUodGhpcy5nYW1lX3R1b3dlaSk7XG4gICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImxpemlcIikuYWRkQ2hpbGQodHVvd2VpKTtcbiAgICAgICAgdHVvd2VpLnNldFBvc2l0aW9uKHBvcyk7XG5cbiAgICAgICAgbGV0IGNoYW5nZVBvcyA9IGZpbmRDb250cm9sLmNoYW5nZVBvcyhhbmltLm5vZGUsIHR1b3dlaSk7XG5cbiAgICAgICAgbGV0IHRpbWUgPSAwLjU7XG4gICAgICAgIGlmIChwb3MueSA8IDApIHtcbiAgICAgICAgICAgIHRpbWUgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0dW93ZWkpO1xuICAgICAgICBjYy50d2Vlbih0dW93ZWkpLnRvKHRpbWUsIHsgcG9zaXRpb246IGNoYW5nZVBvcyB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0dW93ZWkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSwgMC4zKTtcbiAgICAgICAgICAgIGZpbmRDb250cm9sLnBsYXlTcChhbmltLCBcIjJfYmlhbmxpYW5nXCIpO1xuICAgICAgICAgICAgZmluZENvbnRyb2wuYWRkU2VxdWVuY2VTcChhbmltLCBcIjNfbGlhbmdfc3RvcFwiKTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBmaW5kU2lnblN1Y2ModGFyZ2V0UG9zOiBjYy5WZWMzLCBmZ0RhdGE6IGxvdmVseURhdGEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBnYW1lRmluZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZUZpbmRQcmVmYWIyKTtcbiAgICAgICAgICAgIGxldCBpbWdYID0gMDtcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICBpbWdYID0gdGFyZ2V0UG9zLnggKiB0aGlzLmxvdmVseVNjYWxlICsgdGhpcy5sb3ZlbHlZO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcIm9yaWdCb3hcIikuYWRkQ2hpbGQoZ2FtZUZpbmQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImZpbmlzaEJveFwiKS5hZGRDaGlsZChnYW1lRmluZClcbiAgICAgICAgICAgICAgICBpbWdYID0gdGFyZ2V0UG9zLnggKiB0aGlzLmxvdmVseVNjYWxlIC0gdGhpcy5sb3ZlbHlZO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGNlbnRlclBvcyA9IGNjLnYzKGltZ1gsIHRhcmdldFBvcy55ICogdGhpcy5sb3ZlbHlTY2FsZSk7XG5cbiAgICAgICAgICAgIGdhbWVGaW5kLnNldFBvc2l0aW9uKGNlbnRlclBvcyk7XG5cbiAgICAgICAgICAgIC8vICAgICDmraPmlrnlvaJcbiAgICAgICAgICAgIGdhbWVGaW5kLndpZHRoID0gZmdEYXRhLmJsb2NrU2l6ZS53aWQgKiB0aGlzLmxvdmVseVNjYWxlO1xuICAgICAgICAgICAgZ2FtZUZpbmQuaGVpZ2h0ID0gZmdEYXRhLmJsb2NrU2l6ZS5oZWkgKiB0aGlzLmxvdmVseVNjYWxlO1xuXG5cbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChnYW1lRmluZCk7XG4gICAgICAgICAgICBnYW1lRmluZC5zY2FsZSA9IDA7XG5cblxuICAgICAgICAgICAgY2MudHdlZW4oZ2FtZUZpbmQpLnRvKDAuMywgeyBzY2FsZTogMS41IH0pLnRvKDAuMSwgeyBzY2FsZTogMS4zIH0pLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kU2lnbkVycih0YXJnZXRQb3M6IGNjLlZlYzMpIHtcbiAgICAgICAgbGV0IGNsaWNrUG9zID0gdGFyZ2V0UG9zO1xuICAgICAgICBsZXQgZ2FtZUVyciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZUVyclByZWZhYik7XG4gICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImVyckJveFwiKS5hZGRDaGlsZChnYW1lRXJyKTtcbiAgICAgICAgZ2FtZUVyci5zZXRQb3NpdGlvbihjbGlja1Bvcyk7XG4gICAgICAgIHRoaXMuZXJyU2lnbkFuaW0oZ2FtZUVycik7XG5cbiAgICAgICAgbGV0IG90aGVyRXJyU2lnbjogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgIGlmIChjbGlja1Bvcy54ID4gMCkge1xuICAgICAgICAgICAgb3RoZXJFcnJTaWduID0gY2MuaW5zdGFudGlhdGUodGhpcy5nYW1lRXJyUHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImVyckJveFwiKS5hZGRDaGlsZChvdGhlckVyclNpZ24pO1xuICAgICAgICAgICAgb3RoZXJFcnJTaWduLnNldFBvc2l0aW9uKGNjLnYzKGNsaWNrUG9zLnggLSAodGhpcy5sb3ZlbHlZICogMiksIGNsaWNrUG9zLnkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG90aGVyRXJyU2lnbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZUVyclByZWZhYik7XG4gICAgICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJlcnJCb3hcIikuYWRkQ2hpbGQob3RoZXJFcnJTaWduKTtcbiAgICAgICAgICAgIG90aGVyRXJyU2lnbi5zZXRQb3NpdGlvbihjYy52MyhjbGlja1Bvcy54ICsgKHRoaXMubG92ZWx5WSAqIDIpLCBjbGlja1Bvcy55KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG90aGVyRXJyU2lnbikge1xuICAgICAgICAgICAgdGhpcy5lcnJTaWduQW5pbShvdGhlckVyclNpZ24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW1nRXZlbnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XG4gICAgICAgIGxldCBjbGlja1BvcyA9IHRoaXMuaW1nU2lnbkJveC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52Myhwb3MueCwgcG9zLnkpKTtcbiAgICAgICAgLy8gdGhpcy5maW5kU2lnbkVycihjbGlja1Bvcyk7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jaGVja0ltZ1NpZ24oY2xpY2tQb3MpO1xuICAgICAgICBpZiAoZGF0YS50eXBlID09IEdhbWVTdGF0ZS5kaXNjb3Zlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMubG92ZWx5SXNQcm9tcHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvdmVseUlzUHJvbXB0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwidGlzaGlCb3hcIikuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxvdmVseUZpbmROdW0gPSB0aGlzLmxvdmVseUZpbmROdW0gKyAxO1xuICAgICAgICAgICAgdGhpcy5maW5kU2lnblN1Y2MoY2MudjMoZGF0YS5mZ0RhdGEuY2VudGVyUG9zLngsIGRhdGEuZmdEYXRhLmNlbnRlclBvcy55KSwgZGF0YS5mZ0RhdGEpO1xuICAgICAgICAgICAgdGhpcy55ZXppTGlnaHQoY2xpY2tQb3MpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5uZXdoYW5kTm9kZSAmJiB0aGlzLmxvdmVseUZpbmROdW0gPT0gMSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5ld2hhbmROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUuaGlkZWRvbmcxKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3aGFuZE5vZGUuc2hvd2RvbmcyKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubmV3aGFuZE5vZGUgJiYgdGhpcy5sb3ZlbHlGaW5kTnVtID09IDIpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5uZXdoYW5kTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld2hhbmROb2RlLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld2hhbmROb2RlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmdEYXRhLnVzZXJEYXRhLmlzR3VkaWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGZnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wbGF5Q29tbW9uU291bmQoc291bmQuY29ycmVjdCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmxvdmVseUZpbmROdW0gPj0gdGhpcy55ZXppQWxsTnVtKSB7ICAgICAgIC8v6IOc5YipIOa4uOaIj+e7k+adn1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUVuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEudHlwZSA9PSBHYW1lU3RhdGUud3JvbmcpIHtcbiAgICAgICAgICAgIHRoaXMucGxheUNvbW1vblNvdW5kKHNvdW5kLmVycik7XG4gICAgICAgICAgICB0aGlzLmVyclJlZHVjZVRpbWUoKTtcbiAgICAgICAgICAgIHRoaXMuZmluZFNpZ25FcnIoY2xpY2tQb3MpO1xuICAgICAgICAgICAgdGhpcy5vbmVFcnIgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wbGF5Q29tbW9uU291bmQoc291bmQuZXJyKTtcbiAgICAgICAgICAgIHRoaXMuZXJyUmVkdWNlVGltZSgpO1xuICAgICAgICAgICAgdGhpcy5maW5kU2lnbkVycihjbGlja1Bvcyk7XG4gICAgICAgICAgICB0aGlzLm9uZUVyciA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0ltZ1NpZ24odGFyZ2V0UG9zOiBjYy5WZWMzKSB7XG4gICAgICAgIGxldCB0eXBlOiBHYW1lU3RhdGUgPSBudWxsO1xuICAgICAgICBsZXQgZmdEYXRhID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxvdmVfRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmxvdmVfRGF0YVtpXTtcbiAgICAgICAgICAgIGxldCB4ID0gMDtcbiAgICAgICAgICAgIGxldCB5ID0gZGF0YS5jZW50ZXJQb3MueSAqIHRoaXMubG92ZWx5U2NhbGU7XG4gICAgICAgICAgICBpZiAodGFyZ2V0UG9zLnggPiAwKSB7XG4gICAgICAgICAgICAgICAgeCA9IGRhdGEuY2VudGVyUG9zLnggKiB0aGlzLmxvdmVseVNjYWxlICsgdGhpcy5sb3ZlbHlZO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB4ID0gZGF0YS5jZW50ZXJQb3MueCAqIHRoaXMubG92ZWx5U2NhbGUgLSB0aGlzLmxvdmVseVk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB3aWQgPSBkYXRhLmJsb2NrU2l6ZS53aWQgKiB0aGlzLmxvdmVseVNjYWxlO1xuICAgICAgICAgICAgbGV0IGhlaSA9IGRhdGEuYmxvY2tTaXplLmhlaSAqIHRoaXMubG92ZWx5U2NhbGU7XG5cbiAgICAgICAgICAgIC8vIGxldCB0ZXN0aXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGVzdGl0ZW1QcmVmYWIpO1xuICAgICAgICAgICAgLy8gdGhpcy5pbWdTaWduQm94LmFkZENoaWxkKHRlc3RpdGVtKTtcbiAgICAgICAgICAgIC8vIHRlc3RpdGVtLnNldFBvc2l0aW9uKGNjLnYzKHgsIHkpKTtcbiAgICAgICAgICAgIC8vIHRlc3RpdGVtLndpZHRoID0gd2lkO1xuICAgICAgICAgICAgLy8gdGVzdGl0ZW0uaGVpZ2h0ID0gaGVpO1xuXG4gICAgICAgICAgICBpZiAoIWRhdGEuaXNGaW5kICYmIHRhcmdldFBvcy54IDw9IHggKyB3aWQgLyAyICYmIHRhcmdldFBvcy54ID49IHggLSB3aWQgLyAyXG4gICAgICAgICAgICAgICAgJiYgdGFyZ2V0UG9zLnkgPD0geSArIGhlaSAvIDIgJiYgdGFyZ2V0UG9zLnkgPj0geSAtIGhlaSAvIDIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEuaXNGaW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIuaJvuWIsOS6hlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IEdhbWVTdGF0ZS5kaXNjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgZmdEYXRhID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pc0ZpbmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBHYW1lU3RhdGUucmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCLmib7liLDph43lpI3nmoTkuoZcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGUsIGZnRGF0YSB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHR5cGUgPSBHYW1lU3RhdGUud3Jvbmc7XG4gICAgICAgICAgICAgICAgY2MubG9nKFwi5rKh5om+5YiwXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgdHlwZSwgZmdEYXRhIH1cbiAgICB9XG5cblxuICAgIGVyclNpZ25BbmltKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KG5vZGUpO1xuICAgICAgICBjYy50d2Vlbihub2RlKVxuICAgICAgICAgICAgLnRvKDAuMDUsIHsgYW5nbGU6IDE1IH0pLnRvKDAuMDUsIHsgYW5nbGU6IDAgfSkudG8oMC4wNSwgeyBhbmdsZTogLTE1IH0pXG4gICAgICAgICAgICAudG8oMC4wNywgeyBhbmdsZTogMTAgfSkudG8oMC4wNywgeyBhbmdsZTogMCB9KS50bygwLjA3LCB7IGFuZ2xlOiAtMTAgfSlcbiAgICAgICAgICAgIC50bygwLjEsIHsgYW5nbGU6IDcgfSkudG8oMC4xLCB7IGFuZ2xlOiAwIH0pLnRvKDAuMSwgeyBhbmdsZTogLTcgfSlcbiAgICAgICAgICAgIC50bygwLjEsIHsgYW5nbGU6IDMgfSkudG8oMC4xLCB7IGFuZ2xlOiAwIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgIH1cblxuXG4gICAgZ2FtZUVuZCgpIHtcbiAgICAgICAgY2MubG9nKFwi5ri45oiP57uT5p2fXCIpO1xuICAgICAgICB0aGlzLm1hc2suYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMueWV6aUJveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBhbmltID0gdGhpcy55ZXppQm94LmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmaW5kQ29udHJvbC5wbGF5U3AoYW5pbSwgXCI0X21hblwiLCBmYWxzZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IHRoaXMueWV6aUJveC5jaGlsZHJlbi5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUNvbW1vblNvdW5kKHNvdW5kLndpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmZ0RhdGEudXNlckRhdGEubGV2ZWwgKyAxIDw9IGZnRGF0YS5sZXZlbEFsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmdEYXRhLnVzZXJEYXRhLmxldmVsID0gZmdEYXRhLnVzZXJEYXRhLmxldmVsICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmRDb250cm9sLmZpbmRSZXNVdGlsLnNob3dEaWFsb2cod2lja2V0LndpbmRQb3AsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZzogdGhpcy5vcmlnaW5hbEltZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmlzaEJveDogY2MuaW5zdGFudGlhdGUodGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwiZmluaXNoQm94XCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvdmVfRGF0YTogdGhpcy5sb3ZlX0RhdGEsLy8gY2MuaW5zdGFudGlhdGUodGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwiZmluaXNoQm94XCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmRDb250cm9sLmltZ0lkICsgMSA8PSBmZ0RhdGEubGV2ZWxBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluZENvbnRyb2wuaW1nSWQgPSBmaW5kQ29udHJvbC5pbWdJZCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRBbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREb3duVGltZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRSZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZ0RhdGEudXNlckRhdGEuaXNIYWxsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmdEYXRhLnN0b3JhZ2VEYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzcGVjdGFjbGUucGFybG91cik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCAwLjEgKiBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMC41KTtcbiAgICB9XG5cblxuICAgIC8v6I635Y+W5b2T5YmN5YWz5Y2h55qE5YCS6K6h5pe2XG4gICAgZ2V0RG93blRpbWUoKSB7XG4gICAgICAgIGxldCBsZXZlbCA9IGZpbmRDb250cm9sLmltZ0lkO1xuICAgICAgICBsZXQgdGltZSA9IDA7XG4gICAgICAgIGlmIChsZXZlbCA+PSAxICYmIGxldmVsIDw9IDUpIHtcbiAgICAgICAgICAgIHRpbWUgPSA1ICogNjA7XG4gICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPj0gNiAmJiBsZXZlbCA8PSAxMCkge1xuICAgICAgICAgICAgdGltZSA9IDMgKiA2MDtcbiAgICAgICAgfSBlbHNlIGlmIChsZXZlbCA+PSAxMSAmJiBsZXZlbCA8PSAxNSkge1xuICAgICAgICAgICAgdGltZSA9IDIgKiA2MCArIDMwO1xuICAgICAgICB9IGVsc2UgaWYgKGxldmVsID49IDE2ICYmIGxldmVsIDw9IDIwKSB7XG4gICAgICAgICAgICB0aW1lID0gMiAqIDYwO1xuICAgICAgICB9IGVsc2UgaWYgKGxldmVsID49IDIxICYmIGxldmVsIDw9IDI1KSB7XG4gICAgICAgICAgICB0aW1lID0gMSAqIDYwICsgMzA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aW1lID0gMSAqIDYwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aW1lO1xuICAgIH1cblxuXG4gICAgLy/ml7bpl7TliLBcbiAgICB0aW1lT3V0RXZlbnQoKSB7XG4gICAgICAgIGZpbmRDb250cm9sLmZpbmRSZXNVdGlsLnNob3dEaWFsb2cod2lja2V0Lk1vb25Qb3AsIHtcbiAgICAgICAgICAgIEFEY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvdmVseU91dFRpbWUgPSA2MDtcbiAgICAgICAgICAgICAgICBmZ0RhdGEudXNlckRhdGEudGlzaGlOdW0rKztcbiAgICAgICAgICAgICAgICBmZ0RhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVFpUGFvTnVtKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERvd25UaW1lKCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICByZXN0YXJ0Q2FsbEJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QWxsKHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREb3duVGltZSgpO1xuICAgICAgICAgICAgICAgIGNjLmxvZyh0aGlzLmxvdmVfRGF0YSwgXCJ0aGlzLmxvdmVfRGF0YVwiKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubG92ZV9EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG92ZV9EYXRhW2ldLmlzRmluZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DbGlja19iYWNrKCkge1xuICAgICAgICBmaW5kQ29udHJvbC5maW5kU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIHRoaXMuaXNTdG9wID0gdHJ1ZTtcbiAgICAgICAgZmluZENvbnRyb2wuZmluZFJlc1V0aWwuc2hvd0RpYWxvZyh3aWNrZXQuU3RhclBvcCwgeyBjYWxsYmFjazogKCkgPT4geyB0aGlzLmlzU3RvcCA9IGZhbHNlIH0gfSk7XG4gICAgfVxuXG5cbiAgICBvbkNsaWNrX3BhdXNlKCkge1xuICAgICAgICBmaW5kQ29udHJvbC5maW5kU291bmRUb29sLmNvbW1vbkJ0bkNsaWNrKCk7XG4gICAgICAgIHRoaXMuaXNTdG9wID0gdHJ1ZTtcbiAgICAgICAgZmluZENvbnRyb2wuZmluZFJlc1V0aWwuc2hvd0RpYWxvZyh3aWNrZXQuVHJlZVBvcCwgeyBpc0dhbWU6IHRydWUsIGNhbGxiYWNrOiAoKSA9PiB7IHRoaXMuaXNTdG9wID0gZmFsc2UgfSB9KTtcblxuICAgIH1cblxuICAgIG9uQ2xpY2tfdGlzaGkoKSB7XG5cbiAgICAgICAgZmluZENvbnRyb2wuZmluZFNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBpZiAodGhpcy5sb3ZlbHlJc1Byb21wdCkge1xuICAgICAgICAgICAgZmluZENvbnRyb2wuZmluZFJlc1V0aWwuc2hvd1RvYXN0KFwiUHJvbXB0IGFscmVhZHkgZXhpc3RzXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsdmRhdGE6IGxvdmVseURhdGEgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubG92ZV9EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubG92ZV9EYXRhW2ldLmlzRmluZCkge1xuICAgICAgICAgICAgICAgIGx2ZGF0YSA9IHRoaXMubG92ZV9EYXRhW2ldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFmZ0RhdGEpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChmZ0RhdGEudXNlckRhdGEudGlzaGlOdW0gPD0gMCkge1xuICAgICAgICAgICAgY2MubG9nKFwi55yL5bm/5ZGKXCIpXG5cbiAgICAgICAgICAgIGZnRGF0YS5zaG93VmlkZW8oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RpU2hpKGx2ZGF0YSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZnRGF0YS51c2VyRGF0YS50aXNoaU51bSA9IGZnRGF0YS51c2VyRGF0YS50aXNoaU51bSAtIDE7XG4gICAgICAgIGZnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICB0aGlzLmNoYW5nZVFpUGFvTnVtKCk7XG4gICAgICAgIHRoaXMuc2hvd1RpU2hpKGx2ZGF0YSk7XG4gICAgfVxuXG4gICAgc2hvd1RpU2hpKGZnRGF0YTogbG92ZWx5RGF0YSkge1xuICAgICAgICBpZiAoZmdEYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmxvdmVseUlzUHJvbXB0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpc2hpID0gY2MuaW5zdGFudGlhdGUodGhpcy5nYW1lVGlzaGlQcmVmYWIpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcInRpc2hpQm94XCIpLmFkZENoaWxkKHRpc2hpKTtcblxuICAgICAgICAgICAgICAgIGxldCB4ID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgeSA9IGZnRGF0YS5jZW50ZXJQb3MueSAqIHRoaXMubG92ZWx5U2NhbGU7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB4ID0gZmdEYXRhLmNlbnRlclBvcy54ICogdGhpcy5sb3ZlbHlTY2FsZSArIHRoaXMubG92ZWx5WTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB4ID0gZmdEYXRhLmNlbnRlclBvcy54ICogdGhpcy5sb3ZlbHlTY2FsZSAtIHRoaXMubG92ZWx5WTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGlzaGkuc2V0UG9zaXRpb24oeCwgeSk7XG4gICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRpc2hpKTtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aXNoaSkudG8oMC41LCB7IHNjYWxlOiAwLjcgfSkudG8oMC41LCB7IHNjYWxlOiAxIH0pLnVuaW9uKCkucmVwZWF0Rm9yZXZlcigpLnN0YXJ0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy/mkq3mlL7pn7PmlYhcbiAgICBwbGF5Q29tbW9uU291bmQoYXVkaW9OYW1lOiBzdHJpbmcsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSk6IG51bWJlciB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hdWRpb0NsaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hdWRpb0NsaXBzW2ldLm5hbWUgPT0gYXVkaW9OYW1lKSB7XG4gICAgICAgICAgICAgICAgbGV0IGF1ZGlvSUQgPSBmaW5kQ29udHJvbC5maW5kU291bmRUb29sLnBsYXlFZmZlY3QodGhpcy5hdWRpb0NsaXBzW2ldLCBsb29wKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXVkaW9JRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iXX0=