
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
            // this.tishi_qipao.getChildByName("ad_label").active = false;
            this.tishi_qipao.getChildByName("num_label").active = true;
            this.tishi_qipao.getChildByName("num_label").getComponent(cc.Label).string = findGameData_1.fgData.userData.tishiNum.toString();
        }
        else {
            // this.tishi_qipao.getChildByName("ad_label").active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpREFDYztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNVO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3VDQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NDQUNHO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDWTtJQW5EYixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBMm9CeEI7SUFBRCxXQUFDO0NBM29CRCxBQTJvQkMsQ0Ezb0JpQyxFQUFFLENBQUMsU0FBUyxHQTJvQjdDO2tCQTNvQm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmV3aGFuZCBmcm9tIFwiLi9wcmVmZWIvbmV3aGFuZFwiO1xuaW1wb3J0IHsgZmluZENvbnRyb2wsIHdpY2tldCwgc3BlY3RhY2xlLCBsb3ZlbHlEYXRhIH0gZnJvbSBcIi4vdG9vbC9maW5kQ29udHJvbFwiO1xuaW1wb3J0IHsgZmdEYXRhLCBzb3VuZCB9IGZyb20gXCIuL3Rvb2wvZmluZEdhbWVEYXRhXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuZW51bSBHYW1lU3RhdGUge1xuICAgIGRpc2NvdmVyLCAgICAgICAvL+aJvuWIsFxuICAgIHdyb25nLCAgICAgICAgLy/msqHmib7liLAgICAgXG4gICAgcmVwZWF0LCAgICAgLy/mib7liLDph43lpI3nmoQgIFxufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaG9zdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBiZzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBvcmlnaW5hbEltZzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBmaW5pc2hJbWc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGlzaGlfcWlwYW86IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBnYW1lRmluZFByZWZhYjI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGdhbWVGaW5kUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBnYW1lRXJyUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBnYW1lVGlzaGlQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGdhbWVfdHVvd2VpOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaW1nU2lnbkJveDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB5ZXppQm94OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsZXZlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGltZUFsbDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICByZWR1Y2VUaW1lOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG1hc2s6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGVhcnRCb3g6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZW1wdHloZWFydEJveDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBsb3ZlX0RhdGE6IGxvdmVseURhdGFbXSA9IFtdO1xuICAgIGxvdmVseVk6IG51bWJlciA9IDI5MDtcbiAgICBsb3ZlbHlTY2FsZTogbnVtYmVyID0gMC40NTtcblxuICAgIHllemlBbGxOdW06IG51bWJlciA9IDEwO1xuICAgIGxvdmVseUZpbmROdW06IG51bWJlciA9IDA7XG4gICAgbG92ZWx5T3V0VGltZTogbnVtYmVyID0gMDtcblxuICAgIGxvdmVseUlzUHJvbXB0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICB0aW1lciA9IG51bGw7XG4gICAgaXNTdG9wOiBib29sZWFuID0gZmFsc2U7XG4gICAgb25lRXJyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIGF1ZGlvQ2xpcHM6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBuZXdoYW5kTm9kZTogbmV3aGFuZCA9IG51bGw7XG5cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBmZ0RhdGEuc2V0R2FtZXN0b3AoKCk9PntcbiAgICAgICAgICAgIGZpbmRDb250cm9sLmZpbmRTb3VuZFRvb2wucGF1c2VBbGwoKVxuICAgICAgICB9KTtcblxuICAgICAgICBmZ0RhdGEuc2V0R2FtZXJlY292ZXJ5KCgpPT57XG4gICAgICAgICAgICBmaW5kQ29udHJvbC5maW5kU291bmRUb29sLnJlc3VtZUFsbCgpXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuSVBBRCkge1xuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuQ2FudmFzKS5maXRIZWlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcykuZml0V2lkdGggPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXNldEFsbCgpO1xuICAgICAgICBmaW5kQ29udHJvbC5zZXRzY2VuZU5vZGUodGhpcy5ub2RlKTtcbiAgICAgICAgZmluZENvbnRyb2wuYWRhcHRlckJnKHRoaXMuYmcpO1xuXG4gICAgICAgIHRoaXMub25FdmVudCgpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5zdGFydERvd25UaW1lKCk7XG4gICAgICAgIHRoaXMubG9hZFJlcygpO1xuICAgICAgICB0aGlzLmNoZWNrTmV3SGFuZCgpO1xuXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkRGlyKFwic291bmRcIiwgY2MuQXVkaW9DbGlwLCAoZXJyOiBFcnJvciwgY2xpcHM6IGNjLkF1ZGlvQ2xpcFtdKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyIHx8ICFjYy5pc1ZhbGlkKHRoaXMpKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLmF1ZGlvQ2xpcHMgPSBjbGlwcztcbiAgICAgICAgICAgIHRoaXMuYWRkQXV0b1JlbGVhc2VBc3NldHMoY2xpcHMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkV2ZW50KCkge1xuICAgICAgICB0aGlzLm9yaWdpbmFsSW1nLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5pbWdFdmVudCwgdGhpcyk7XG4gICAgICAgIHRoaXMuZmluaXNoSW1nLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5pbWdFdmVudCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcmVzZXRBbGwoY2xlYXJEYXRhPykge1xuICAgICAgICBpZiAoIWNsZWFyRGF0YSkge1xuICAgICAgICAgICAgdGhpcy5sb3ZlX0RhdGEgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJvcmlnQm94XCIpLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJmaW5pc2hCb3hcIikuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImVyckJveFwiKS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwidGlzaGlCb3hcIikuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImxpemlcIikuZGVzdHJveUFsbENoaWxkcmVuKCk7XG5cbiAgICAgICAgdGhpcy5tYXNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uZUVyciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU3RvcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5sb3ZlbHlJc1Byb21wdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvdmVseUZpbmROdW0gPSAwO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBjaGVja05ld0hhbmQoKSB7XG4gICAgICAgIGlmIChmZ0RhdGEudXNlckRhdGEuaXNHdWRpZSB8fCBmaW5kQ29udHJvbC5pbWdJZCAhPSAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmZWIvbmV3aGFuZFwiLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgZmluZENvbnRyb2wuZmluZFJlc1V0aWwuYmluZFJlc0Fzc2V0KG5vZGUsIHByZWZhYik7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB0aGlzLm5ld2hhbmROb2RlID0gbm9kZS5nZXRDb21wb25lbnQobmV3aGFuZCk7XG4gICAgICAgICAgICB0aGlzLm5ld2hhbmROb2RlLnNob3dkb25nMSgpO1xuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5sZXZlbC5zdHJpbmcgPSBcIkx2XCIgKyBmaW5kQ29udHJvbC5pbWdJZDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnllemlCb3guY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhbmltID0gdGhpcy55ZXppQm94LmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICBmaW5kQ29udHJvbC5wbGF5U3AoYW5pbSwgXCIxX2FuX3N0b3BcIik7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuY2hhbmdlUWlQYW9OdW0oKTtcblxuICAgICAgICB0aGlzLm1hc2suYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gdGhpcy5sb3ZlbHlPdXRUaW1lID0gdGhpcy5nZXREb3duVGltZSgpO1xuICAgICAgICAvLyBsZXQgdGltZSA9IGZpbmRDb250cm9sLnRpbWVDaGFuZ2UodGhpcy5sb3ZlbHlPdXRUaW1lKTtcbiAgICAgICAgLy8gdGhpcy50aW1lQWxsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGltZTtcbiAgICAgICAgdGhpcy5yZWR1Y2VUaW1lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWVBbGwuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmhlYXJ0Qm94LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmhlYXJ0Qm94LmNoaWxkcmVuW2ldLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmVtcHR5aGVhcnRCb3guY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8v5byA5ZCv5YCS6K6h5pe2XG4gICAgc3RhcnREb3duVGltZSgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICAgIGlmICh0aGlzLmxvdmVseU91dFRpbWUgPiAwKSB7XG4gICAgICAgICAgICBsZXQgdGltZSA9IGZpbmRDb250cm9sLnRpbWVDaGFuZ2UodGhpcy5sb3ZlbHlPdXRUaW1lKTtcbiAgICAgICAgICAgIHRoaXMudGltZUFsbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRpbWU7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gdGhpcy5zY2hlZHVsZSh0aGlzLmRvd25UaW1lRXZlbnQsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG93blRpbWVFdmVudCgpIHtcblxuICAgICAgICByZXR1cm5cbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvdmVseU91dFRpbWUtLTtcbiAgICAgICAgbGV0IHRpbWUgPSBmaW5kQ29udHJvbC50aW1lQ2hhbmdlKHRoaXMubG92ZWx5T3V0VGltZSk7XG4gICAgICAgIHRoaXMudGltZUFsbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRpbWU7XG4gICAgICAgIGlmICh0aGlzLmxvdmVseU91dFRpbWUgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZG93blRpbWVFdmVudCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVPdXRFdmVudCgpO1xuICAgICAgICAgICAgdGhpcy5wbGF5Q29tbW9uU291bmQoc291bmQuZmFpbCk7XG4gICAgICAgICAgICBjYy5sb2coXCLml7bpl7TliLDkuoZcIik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8v54K56ZSZ5LqGXG4gICAgZXJyUmVkdWNlVGltZSgpIHtcbiAgICAgICAgbGV0IGZpbmRoZWFydCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5oZWFydEJveC5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgbGV0IGhlYXJ0SXRlbSA9IHRoaXMuaGVhcnRCb3guY2hpbGRyZW5baV07XG4gICAgICAgICAgICBsZXQgZW1wdHloZWFydEl0ZW0gPSB0aGlzLmVtcHR5aGVhcnRCb3guY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoaGVhcnRJdGVtLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGZpbmRoZWFydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaGVhcnRJdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGVtcHR5aGVhcnRJdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGV0IGFuaW0gPSBlbXB0eWhlYXJ0SXRlbS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgICAgIGZpbmRDb250cm9sLnBsYXlTcChhbmltLCBcInBvc3VpXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBoZWFydEl0ZW0gPSB0aGlzLmhlYXJ0Qm94LmNoaWxkcmVuWzBdO1xuICAgICAgICBpZiAoIWhlYXJ0SXRlbS5hY3RpdmUpIHtcbiAgICAgICAgICAgIGZpbmRDb250cm9sLmZpbmRSZXNVdGlsLnNob3dEaWFsb2cod2lja2V0Lk1vb25Qb3AsIHtcbiAgICAgICAgICAgICAgICBBRGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubG92ZWx5T3V0VGltZSA9IDYwOyAgXG4gICAgICAgICAgICAgICAgICAgIC8vIGZnRGF0YS51c2VyRGF0YS50aXNoaU51bSsrO1xuICAgICAgICAgICAgICAgICAgICBmZ0RhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VRaVBhb051bSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RG93blRpbWUoKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaGVhcnRCb3guY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRCb3guY2hpbGRyZW5baV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1wdHloZWFydEJveC5jaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICByZXN0YXJ0Q2FsbEJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEFsbCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREb3duVGltZSgpO1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2codGhpcy5sb3ZlX0RhdGEsIFwidGhpcy5sb3ZlX0RhdGFcIik7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sb3ZlX0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG92ZV9EYXRhW2ldLmlzRmluZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICAgIC8v5pe26Ze0XG4gICAgICAgIGlmICghdGhpcy5vbmVFcnIpIHJldHVyblxuICAgICAgICBsZXQgcG9zWSA9IHRoaXMudGltZUFsbC55O1xuICAgICAgICBsZXQgcmVkdWNlVGltZSA9IDMwO1xuICAgICAgICB0aGlzLnJlZHVjZVRpbWUueSA9IHBvc1k7XG4gICAgICAgIHRoaXMucmVkdWNlVGltZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlZHVjZVRpbWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIi1cIiArIHJlZHVjZVRpbWU7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnJlZHVjZVRpbWUpO1xuICAgICAgICBjYy50d2Vlbih0aGlzLnJlZHVjZVRpbWUpLnRvKDAuMTUsIHsgc2NhbGU6IDEuMiB9KS50bygwLjE1LCB7IHNjYWxlOiAxIH0pLnRvKDEsIHsgb3BhY2l0eTogMjU1LCB5OiBwb3NZIC0gMjUgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZHVjZVRpbWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG5cbiAgICAgICAgdGhpcy5sb3ZlbHlPdXRUaW1lIC09IHJlZHVjZVRpbWU7XG4gICAgICAgIGlmICh0aGlzLmxvdmVseU91dFRpbWUgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy50aW1lQWxsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIwMDowMFwiO1xuICAgICAgICAgICAgdGhpcy5wbGF5Q29tbW9uU291bmQoc291bmQuZmFpbCk7XG4gICAgICAgICAgICBjYy5sb2coXCLml7bpl7TliLDkuoZcIik7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5kb3duVGltZUV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMudGltZU91dEV2ZW50KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgdGltZSA9IGZpbmRDb250cm9sLnRpbWVDaGFuZ2UodGhpcy5sb3ZlbHlPdXRUaW1lKTtcbiAgICAgICAgICAgIHRoaXMudGltZUFsbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRpbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VRaVBhb051bSgpIHtcbiAgICAgICAgaWYgKGZnRGF0YS51c2VyRGF0YS50aXNoaU51bSA+IDApIHtcbiAgICAgICAgICAgIC8vIHRoaXMudGlzaGlfcWlwYW8uZ2V0Q2hpbGRCeU5hbWUoXCJhZF9sYWJlbFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudGlzaGlfcWlwYW8uZ2V0Q2hpbGRCeU5hbWUoXCJudW1fbGFiZWxcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudGlzaGlfcWlwYW8uZ2V0Q2hpbGRCeU5hbWUoXCJudW1fbGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBmZ0RhdGEudXNlckRhdGEudGlzaGlOdW0udG9TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRoaXMudGlzaGlfcWlwYW8uZ2V0Q2hpbGRCeU5hbWUoXCJhZF9sYWJlbFwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50aXNoaV9xaXBhby5nZXRDaGlsZEJ5TmFtZShcIm51bV9sYWJlbFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRSZXMoKSB7XG4gICAgICAgIGZpbmRDb250cm9sLmZpbmRSZXNVdGlsLmxvYWRTcHJpdGUoXCJmaW5lSW1nL1wiICsgXCJmaW5lX1wiICsgZmluZENvbnRyb2wuaW1nSWQsIHRoaXMub3JpZ2luYWxJbWcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpO1xuXG4gICAgICAgIGZpbmRDb250cm9sLmZpbmRSZXNVdGlsLmxvYWRTcHJpdGUoXCJkaXNjb3ZlckltZy9cIiArIFwiZGlzY292ZXJfXCIgKyBmaW5kQ29udHJvbC5pbWdJZCwgdGhpcy5maW5pc2hJbWcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpO1xuXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwiaW1nQ29uZmlnL3JhbmtcIiArIGZpbmRDb250cm9sLmltZ0lkLCBjYy5Kc29uQXNzZXQsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g6I635Y+W5YiwIEpzb24g5pWw5o2uXG4gICAgICAgICAgICBmaW5kQ29udHJvbC5maW5kUmVzVXRpbC5iaW5kUmVzQXNzZXQodGhpcy5ub2RlLCByZXMpO1xuICAgICAgICAgICAgY29uc3QganNvbkRhdGEgPSByZXMuanNvbjtcbiAgICAgICAgICAgIGlmIChqc29uRGF0YSAmJiBqc29uRGF0YS5wYXRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb3ZlX0RhdGEgPSBqc29uRGF0YS5wYXRoO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sb3ZlX0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb3ZlX0RhdGFbaV0uaXNGaW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sb3ZlX0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgbGV0IGRhdGEgPSB0aGlzLmxvdmVfRGF0YVtpXTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5maW5kU2lnblN1Y2MoY2MudjMoZGF0YS5jZW50ZXJQb3MueCwgZGF0YS5jZW50ZXJQb3MueSkpXG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxvdmVfRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgZGF0YSA9IHRoaXMubG92ZV9EYXRhW2ldO1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmZpbmRTaWduU3VjYyhjYy52MyhkYXRhLmNlbnRlclBvcy54LCBkYXRhLmNlbnRlclBvcy55KSlcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICB5ZXppTGlnaHQocG9zOiBjYy5WZWMzKSB7XG4gICAgICAgIGxldCBhbmltID0gdGhpcy55ZXppQm94LmNoaWxkcmVuW3RoaXMubG92ZWx5RmluZE51bSAtIDFdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG5cbiAgICAgICAgbGV0IHR1b3dlaSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZV90dW93ZWkpO1xuICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJsaXppXCIpLmFkZENoaWxkKHR1b3dlaSk7XG4gICAgICAgIHR1b3dlaS5zZXRQb3NpdGlvbihwb3MpO1xuXG4gICAgICAgIGxldCBjaGFuZ2VQb3MgPSBmaW5kQ29udHJvbC5jaGFuZ2VQb3MoYW5pbS5ub2RlLCB0dW93ZWkpO1xuXG4gICAgICAgIGxldCB0aW1lID0gMC41O1xuICAgICAgICBpZiAocG9zLnkgPCAwKSB7XG4gICAgICAgICAgICB0aW1lID0gMTtcbiAgICAgICAgfVxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodHVvd2VpKTtcbiAgICAgICAgY2MudHdlZW4odHVvd2VpKS50byh0aW1lLCB7IHBvc2l0aW9uOiBjaGFuZ2VQb3MgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHVvd2VpLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0sIDAuMyk7XG4gICAgICAgICAgICBmaW5kQ29udHJvbC5wbGF5U3AoYW5pbSwgXCIyX2JpYW5saWFuZ1wiKTtcbiAgICAgICAgICAgIGZpbmRDb250cm9sLmFkZFNlcXVlbmNlU3AoYW5pbSwgXCIzX2xpYW5nX3N0b3BcIik7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgZmluZFNpZ25TdWNjKHRhcmdldFBvczogY2MuVmVjMywgZmdEYXRhOiBsb3ZlbHlEYXRhKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZ2FtZUZpbmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdhbWVGaW5kUHJlZmFiMik7XG4gICAgICAgICAgICBsZXQgaW1nWCA9IDA7XG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgaW1nWCA9IHRhcmdldFBvcy54ICogdGhpcy5sb3ZlbHlTY2FsZSArIHRoaXMubG92ZWx5WTtcbiAgICAgICAgICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJvcmlnQm94XCIpLmFkZENoaWxkKGdhbWVGaW5kKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJmaW5pc2hCb3hcIikuYWRkQ2hpbGQoZ2FtZUZpbmQpXG4gICAgICAgICAgICAgICAgaW1nWCA9IHRhcmdldFBvcy54ICogdGhpcy5sb3ZlbHlTY2FsZSAtIHRoaXMubG92ZWx5WTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjZW50ZXJQb3MgPSBjYy52MyhpbWdYLCB0YXJnZXRQb3MueSAqIHRoaXMubG92ZWx5U2NhbGUpO1xuXG4gICAgICAgICAgICBnYW1lRmluZC5zZXRQb3NpdGlvbihjZW50ZXJQb3MpO1xuXG4gICAgICAgICAgICAvLyAgICAg5q2j5pa55b2iXG4gICAgICAgICAgICBnYW1lRmluZC53aWR0aCA9IGZnRGF0YS5ibG9ja1NpemUud2lkICogdGhpcy5sb3ZlbHlTY2FsZTtcbiAgICAgICAgICAgIGdhbWVGaW5kLmhlaWdodCA9IGZnRGF0YS5ibG9ja1NpemUuaGVpICogdGhpcy5sb3ZlbHlTY2FsZTtcblxuXG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoZ2FtZUZpbmQpO1xuICAgICAgICAgICAgZ2FtZUZpbmQuc2NhbGUgPSAwO1xuXG5cbiAgICAgICAgICAgIGNjLnR3ZWVuKGdhbWVGaW5kKS50bygwLjMsIHsgc2NhbGU6IDEuNSB9KS50bygwLjEsIHsgc2NhbGU6IDEuMyB9KS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluZFNpZ25FcnIodGFyZ2V0UG9zOiBjYy5WZWMzKSB7XG4gICAgICAgIGxldCBjbGlja1BvcyA9IHRhcmdldFBvcztcbiAgICAgICAgbGV0IGdhbWVFcnIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdhbWVFcnJQcmVmYWIpO1xuICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJlcnJCb3hcIikuYWRkQ2hpbGQoZ2FtZUVycik7XG4gICAgICAgIGdhbWVFcnIuc2V0UG9zaXRpb24oY2xpY2tQb3MpO1xuICAgICAgICB0aGlzLmVyclNpZ25BbmltKGdhbWVFcnIpO1xuXG4gICAgICAgIGxldCBvdGhlckVyclNpZ246IGNjLk5vZGUgPSBudWxsO1xuICAgICAgICBpZiAoY2xpY2tQb3MueCA+IDApIHtcbiAgICAgICAgICAgIG90aGVyRXJyU2lnbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZUVyclByZWZhYik7XG4gICAgICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJlcnJCb3hcIikuYWRkQ2hpbGQob3RoZXJFcnJTaWduKTtcbiAgICAgICAgICAgIG90aGVyRXJyU2lnbi5zZXRQb3NpdGlvbihjYy52MyhjbGlja1Bvcy54IC0gKHRoaXMubG92ZWx5WSAqIDIpLCBjbGlja1Bvcy55KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdGhlckVyclNpZ24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdhbWVFcnJQcmVmYWIpO1xuICAgICAgICAgICAgdGhpcy5pbWdTaWduQm94LmdldENoaWxkQnlOYW1lKFwiZXJyQm94XCIpLmFkZENoaWxkKG90aGVyRXJyU2lnbik7XG4gICAgICAgICAgICBvdGhlckVyclNpZ24uc2V0UG9zaXRpb24oY2MudjMoY2xpY2tQb3MueCArICh0aGlzLmxvdmVseVkgKiAyKSwgY2xpY2tQb3MueSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvdGhlckVyclNpZ24pIHtcbiAgICAgICAgICAgIHRoaXMuZXJyU2lnbkFuaW0ob3RoZXJFcnJTaWduKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGltZ0V2ZW50KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xuICAgICAgICBsZXQgY2xpY2tQb3MgPSB0aGlzLmltZ1NpZ25Cb3guY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjMocG9zLngsIHBvcy55KSk7XG4gICAgICAgIC8vIHRoaXMuZmluZFNpZ25FcnIoY2xpY2tQb3MpO1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY2hlY2tJbWdTaWduKGNsaWNrUG9zKTtcbiAgICAgICAgaWYgKGRhdGEudHlwZSA9PSBHYW1lU3RhdGUuZGlzY292ZXIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxvdmVseUlzUHJvbXB0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb3ZlbHlJc1Byb21wdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcInRpc2hpQm94XCIpLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sb3ZlbHlGaW5kTnVtID0gdGhpcy5sb3ZlbHlGaW5kTnVtICsgMTtcbiAgICAgICAgICAgIHRoaXMuZmluZFNpZ25TdWNjKGNjLnYzKGRhdGEuZmdEYXRhLmNlbnRlclBvcy54LCBkYXRhLmZnRGF0YS5jZW50ZXJQb3MueSksIGRhdGEuZmdEYXRhKTtcbiAgICAgICAgICAgIHRoaXMueWV6aUxpZ2h0KGNsaWNrUG9zKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMubmV3aGFuZE5vZGUgJiYgdGhpcy5sb3ZlbHlGaW5kTnVtID09IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5uZXdoYW5kTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld2hhbmROb2RlLmhpZGVkb25nMSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld2hhbmROb2RlLnNob3dkb25nMigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm5ld2hhbmROb2RlICYmIHRoaXMubG92ZWx5RmluZE51bSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubmV3aGFuZE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdoYW5kTm9kZS5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdoYW5kTm9kZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZnRGF0YS51c2VyRGF0YS5pc0d1ZGllID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmZ0RhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGxheUNvbW1vblNvdW5kKHNvdW5kLmNvcnJlY3QpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5sb3ZlbHlGaW5kTnVtID49IHRoaXMueWV6aUFsbE51bSkgeyAgICAgICAvL+iDnOWIqSDmuLjmiI/nu5PmnZ9cbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVFbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnR5cGUgPT0gR2FtZVN0YXRlLndyb25nKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlDb21tb25Tb3VuZChzb3VuZC5lcnIpO1xuICAgICAgICAgICAgdGhpcy5lcnJSZWR1Y2VUaW1lKCk7XG4gICAgICAgICAgICB0aGlzLmZpbmRTaWduRXJyKGNsaWNrUG9zKTtcbiAgICAgICAgICAgIHRoaXMub25lRXJyID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGxheUNvbW1vblNvdW5kKHNvdW5kLmVycik7XG4gICAgICAgICAgICB0aGlzLmVyclJlZHVjZVRpbWUoKTtcbiAgICAgICAgICAgIHRoaXMuZmluZFNpZ25FcnIoY2xpY2tQb3MpO1xuICAgICAgICAgICAgdGhpcy5vbmVFcnIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tJbWdTaWduKHRhcmdldFBvczogY2MuVmVjMykge1xuICAgICAgICBsZXQgdHlwZTogR2FtZVN0YXRlID0gbnVsbDtcbiAgICAgICAgbGV0IGZnRGF0YSA9IG51bGw7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sb3ZlX0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5sb3ZlX0RhdGFbaV07XG4gICAgICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgICAgICBsZXQgeSA9IGRhdGEuY2VudGVyUG9zLnkgKiB0aGlzLmxvdmVseVNjYWxlO1xuICAgICAgICAgICAgaWYgKHRhcmdldFBvcy54ID4gMCkge1xuICAgICAgICAgICAgICAgIHggPSBkYXRhLmNlbnRlclBvcy54ICogdGhpcy5sb3ZlbHlTY2FsZSArIHRoaXMubG92ZWx5WTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeCA9IGRhdGEuY2VudGVyUG9zLnggKiB0aGlzLmxvdmVseVNjYWxlIC0gdGhpcy5sb3ZlbHlZO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgd2lkID0gZGF0YS5ibG9ja1NpemUud2lkICogdGhpcy5sb3ZlbHlTY2FsZTtcbiAgICAgICAgICAgIGxldCBoZWkgPSBkYXRhLmJsb2NrU2l6ZS5oZWkgKiB0aGlzLmxvdmVseVNjYWxlO1xuXG4gICAgICAgICAgICAvLyBsZXQgdGVzdGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRlc3RpdGVtUHJlZmFiKTtcbiAgICAgICAgICAgIC8vIHRoaXMuaW1nU2lnbkJveC5hZGRDaGlsZCh0ZXN0aXRlbSk7XG4gICAgICAgICAgICAvLyB0ZXN0aXRlbS5zZXRQb3NpdGlvbihjYy52Myh4LCB5KSk7XG4gICAgICAgICAgICAvLyB0ZXN0aXRlbS53aWR0aCA9IHdpZDtcbiAgICAgICAgICAgIC8vIHRlc3RpdGVtLmhlaWdodCA9IGhlaTtcblxuICAgICAgICAgICAgaWYgKCFkYXRhLmlzRmluZCAmJiB0YXJnZXRQb3MueCA8PSB4ICsgd2lkIC8gMiAmJiB0YXJnZXRQb3MueCA+PSB4IC0gd2lkIC8gMlxuICAgICAgICAgICAgICAgICYmIHRhcmdldFBvcy55IDw9IHkgKyBoZWkgLyAyICYmIHRhcmdldFBvcy55ID49IHkgLSBoZWkgLyAyKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhLmlzRmluZCkge1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCLmib7liLDkuoZcIik7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBHYW1lU3RhdGUuZGlzY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZnRGF0YSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuaXNGaW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0eXBlID0gR2FtZVN0YXRlLnJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwi5om+5Yiw6YeN5aSN55qE5LqGXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geyB0eXBlLCBmZ0RhdGEgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0eXBlID0gR2FtZVN0YXRlLndyb25nO1xuICAgICAgICAgICAgICAgIGNjLmxvZyhcIuayoeaJvuWIsFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHR5cGUsIGZnRGF0YSB9XG4gICAgfVxuXG5cbiAgICBlcnJTaWduQW5pbShub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChub2RlKTtcbiAgICAgICAgY2MudHdlZW4obm9kZSlcbiAgICAgICAgICAgIC50bygwLjA1LCB7IGFuZ2xlOiAxNSB9KS50bygwLjA1LCB7IGFuZ2xlOiAwIH0pLnRvKDAuMDUsIHsgYW5nbGU6IC0xNSB9KVxuICAgICAgICAgICAgLnRvKDAuMDcsIHsgYW5nbGU6IDEwIH0pLnRvKDAuMDcsIHsgYW5nbGU6IDAgfSkudG8oMC4wNywgeyBhbmdsZTogLTEwIH0pXG4gICAgICAgICAgICAudG8oMC4xLCB7IGFuZ2xlOiA3IH0pLnRvKDAuMSwgeyBhbmdsZTogMCB9KS50bygwLjEsIHsgYW5nbGU6IC03IH0pXG4gICAgICAgICAgICAudG8oMC4xLCB7IGFuZ2xlOiAzIH0pLnRvKDAuMSwgeyBhbmdsZTogMCB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG5cblxuICAgIGdhbWVFbmQoKSB7XG4gICAgICAgIGNjLmxvZyhcIua4uOaIj+e7k+adn1wiKTtcbiAgICAgICAgdGhpcy5tYXNrLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnllemlCb3guY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgYW5pbSA9IHRoaXMueWV6aUJveC5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmluZENvbnRyb2wucGxheVNwKGFuaW0sIFwiNF9tYW5cIiwgZmFsc2UsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSB0aGlzLnllemlCb3guY2hpbGRyZW4ubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlDb21tb25Tb3VuZChzb3VuZC53aW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmdEYXRhLnVzZXJEYXRhLmxldmVsICsgMSA8PSBmZ0RhdGEubGV2ZWxBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZnRGF0YS51c2VyRGF0YS5sZXZlbCA9IGZnRGF0YS51c2VyRGF0YS5sZXZlbCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZ0RhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5kQ29udHJvbC5maW5kUmVzVXRpbC5zaG93RGlhbG9nKHdpY2tldC53aW5kUG9wLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWc6IHRoaXMub3JpZ2luYWxJbWcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5pc2hCb3g6IGNjLmluc3RhbnRpYXRlKHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImZpbmlzaEJveFwiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb3ZlX0RhdGE6IHRoaXMubG92ZV9EYXRhLC8vIGNjLmluc3RhbnRpYXRlKHRoaXMuaW1nU2lnbkJveC5nZXRDaGlsZEJ5TmFtZShcImZpbmlzaEJveFwiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaW5kQ29udHJvbC5pbWdJZCArIDEgPD0gZmdEYXRhLmxldmVsQWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmRDb250cm9sLmltZ0lkID0gZmluZENvbnRyb2wuaW1nSWQgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QWxsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RG93blRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkUmVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmdEYXRhLnVzZXJEYXRhLmlzSGFsbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZnRGF0YS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc3BlY3RhY2xlLnBhcmxvdXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgMC4xICogaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDAuNSk7XG4gICAgfVxuXG5cbiAgICAvL+iOt+WPluW9k+WJjeWFs+WNoeeahOWAkuiuoeaXtlxuICAgIGdldERvd25UaW1lKCkge1xuICAgICAgICBsZXQgbGV2ZWwgPSBmaW5kQ29udHJvbC5pbWdJZDtcbiAgICAgICAgbGV0IHRpbWUgPSAwO1xuICAgICAgICBpZiAobGV2ZWwgPj0gMSAmJiBsZXZlbCA8PSA1KSB7XG4gICAgICAgICAgICB0aW1lID0gNSAqIDYwO1xuICAgICAgICB9IGVsc2UgaWYgKGxldmVsID49IDYgJiYgbGV2ZWwgPD0gMTApIHtcbiAgICAgICAgICAgIHRpbWUgPSAzICogNjA7XG4gICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPj0gMTEgJiYgbGV2ZWwgPD0gMTUpIHtcbiAgICAgICAgICAgIHRpbWUgPSAyICogNjAgKyAzMDtcbiAgICAgICAgfSBlbHNlIGlmIChsZXZlbCA+PSAxNiAmJiBsZXZlbCA8PSAyMCkge1xuICAgICAgICAgICAgdGltZSA9IDIgKiA2MDtcbiAgICAgICAgfSBlbHNlIGlmIChsZXZlbCA+PSAyMSAmJiBsZXZlbCA8PSAyNSkge1xuICAgICAgICAgICAgdGltZSA9IDEgKiA2MCArIDMwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGltZSA9IDEgKiA2MDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGltZTtcbiAgICB9XG5cblxuICAgIC8v5pe26Ze05YiwXG4gICAgdGltZU91dEV2ZW50KCkge1xuICAgICAgICBmaW5kQ29udHJvbC5maW5kUmVzVXRpbC5zaG93RGlhbG9nKHdpY2tldC5Nb29uUG9wLCB7XG4gICAgICAgICAgICBBRGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb3ZlbHlPdXRUaW1lID0gNjA7XG4gICAgICAgICAgICAgICAgZmdEYXRhLnVzZXJEYXRhLnRpc2hpTnVtKys7XG4gICAgICAgICAgICAgICAgZmdEYXRhLnN0b3JhZ2VEYXRhKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VRaVBhb051bSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREb3duVGltZSgpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcmVzdGFydENhbGxCYWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEFsbCh0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RG93blRpbWUoKTtcbiAgICAgICAgICAgICAgICBjYy5sb2codGhpcy5sb3ZlX0RhdGEsIFwidGhpcy5sb3ZlX0RhdGFcIik7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxvdmVfRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvdmVfRGF0YVtpXS5pc0ZpbmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2xpY2tfYmFjaygpIHtcbiAgICAgICAgZmluZENvbnRyb2wuZmluZFNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICB0aGlzLmlzU3RvcCA9IHRydWU7XG4gICAgICAgIGZpbmRDb250cm9sLmZpbmRSZXNVdGlsLnNob3dEaWFsb2cod2lja2V0LlN0YXJQb3AsIHsgY2FsbGJhY2s6ICgpID0+IHsgdGhpcy5pc1N0b3AgPSBmYWxzZSB9IH0pO1xuICAgIH1cblxuXG4gICAgb25DbGlja19wYXVzZSgpIHtcbiAgICAgICAgZmluZENvbnRyb2wuZmluZFNvdW5kVG9vbC5jb21tb25CdG5DbGljaygpO1xuICAgICAgICB0aGlzLmlzU3RvcCA9IHRydWU7XG4gICAgICAgIGZpbmRDb250cm9sLmZpbmRSZXNVdGlsLnNob3dEaWFsb2cod2lja2V0LlRyZWVQb3AsIHsgaXNHYW1lOiB0cnVlLCBjYWxsYmFjazogKCkgPT4geyB0aGlzLmlzU3RvcCA9IGZhbHNlIH0gfSk7XG5cbiAgICB9XG5cbiAgICBvbkNsaWNrX3Rpc2hpKCkge1xuXG4gICAgICAgIGZpbmRDb250cm9sLmZpbmRTb3VuZFRvb2wuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgaWYgKHRoaXMubG92ZWx5SXNQcm9tcHQpIHtcbiAgICAgICAgICAgIGZpbmRDb250cm9sLmZpbmRSZXNVdGlsLnNob3dUb2FzdChcIlByb21wdCBhbHJlYWR5IGV4aXN0c1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbHZkYXRhOiBsb3ZlbHlEYXRhID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxvdmVfRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmxvdmVfRGF0YVtpXS5pc0ZpbmQpIHtcbiAgICAgICAgICAgICAgICBsdmRhdGEgPSB0aGlzLmxvdmVfRGF0YVtpXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZmdEYXRhKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmdEYXRhLnVzZXJEYXRhLnRpc2hpTnVtIDw9IDApIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIueci+W5v+WRilwiKVxuXG4gICAgICAgICAgICBmZ0RhdGEuc2hvd1ZpZGVvKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUaVNoaShsdmRhdGEpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmZ0RhdGEudXNlckRhdGEudGlzaGlOdW0gPSBmZ0RhdGEudXNlckRhdGEudGlzaGlOdW0gLSAxO1xuICAgICAgICBmZ0RhdGEuc3RvcmFnZURhdGEoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VRaVBhb051bSgpO1xuICAgICAgICB0aGlzLnNob3dUaVNoaShsdmRhdGEpO1xuICAgIH1cblxuICAgIHNob3dUaVNoaShmZ0RhdGE6IGxvdmVseURhdGEpIHtcbiAgICAgICAgaWYgKGZnRGF0YSkge1xuICAgICAgICAgICAgdGhpcy5sb3ZlbHlJc1Byb21wdCA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCB0aXNoaSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZVRpc2hpUHJlZmFiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmltZ1NpZ25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJ0aXNoaUJveFwiKS5hZGRDaGlsZCh0aXNoaSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSBmZ0RhdGEuY2VudGVyUG9zLnkgKiB0aGlzLmxvdmVseVNjYWxlO1xuICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IGZnRGF0YS5jZW50ZXJQb3MueCAqIHRoaXMubG92ZWx5U2NhbGUgKyB0aGlzLmxvdmVseVk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IGZnRGF0YS5jZW50ZXJQb3MueCAqIHRoaXMubG92ZWx5U2NhbGUgLSB0aGlzLmxvdmVseVk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRpc2hpLnNldFBvc2l0aW9uKHgsIHkpO1xuICAgICAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aXNoaSk7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGlzaGkpLnRvKDAuNSwgeyBzY2FsZTogMC43IH0pLnRvKDAuNSwgeyBzY2FsZTogMSB9KS51bmlvbigpLnJlcGVhdEZvcmV2ZXIoKS5zdGFydCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8v5pKt5pS+6Z+z5pWIXG4gICAgcGxheUNvbW1vblNvdW5kKGF1ZGlvTmFtZTogc3RyaW5nLCBsb29wOiBib29sZWFuID0gZmFsc2UpOiBudW1iZXIge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXVkaW9DbGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXVkaW9DbGlwc1tpXS5uYW1lID09IGF1ZGlvTmFtZSkge1xuICAgICAgICAgICAgICAgIGxldCBhdWRpb0lEID0gZmluZENvbnRyb2wuZmluZFNvdW5kVG9vbC5wbGF5RWZmZWN0KHRoaXMuYXVkaW9DbGlwc1tpXSwgbG9vcCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1ZGlvSUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIl19