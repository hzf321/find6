import newhand from "./prefeb/newhand";
import { findControl, wicket, spectacle, lovelyData } from "./tool/findControl";
import { fgData, sound } from "./tool/findGameData";


const { ccclass, property } = cc._decorator;

enum GameState {
    discover,       //找到
    wrong,        //没找到    
    repeat,     //找到重复的  
}

@ccclass
export default class host extends cc.Component {

    @property(cc.Node)
    bg: cc.Node = null;

    @property(cc.Node)
    originalImg: cc.Node = null;

    @property(cc.Node)
    finishImg: cc.Node = null;

    @property(cc.Node)
    tishi_qipao: cc.Node = null;

    @property(cc.Prefab)
    gameFindPrefab2: cc.Prefab = null;

    @property(cc.Prefab)
    gameFindPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    gameErrPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    gameTishiPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    game_tuowei: cc.Prefab = null;

    @property(cc.Node)
    imgSignBox: cc.Node = null;

    @property(cc.Node)
    yeziBox: cc.Node = null;

    @property(cc.Label)
    level: cc.Label = null;

    @property(cc.Node)
    timeAll: cc.Node = null;

    @property(cc.Node)
    reduceTime: cc.Node = null;

    @property(cc.Node)
    mask: cc.Node = null;

    @property(cc.Node)
    heartBox: cc.Node = null;

    @property(cc.Node)
    emptyheartBox: cc.Node = null;

    love_Data: lovelyData[] = [];
    lovelyY: number = 290;
    lovelyScale: number = 0.45;

    yeziAllNum: number = 10;
    lovelyFindNum: number = 0;
    lovelyOutTime: number = 0;

    lovelyIsPrompt: boolean = false;

    timer = null;
    isStop: boolean = false;
    oneErr: boolean = false;

    private audioClips: cc.AudioClip[] = [];

    newhandNode: newhand = null;


    start() {
        fgData.setGamestop(()=>{
            findControl.findSoundTool.pauseAll()
        });

        fgData.setGamerecovery(()=>{
            findControl.findSoundTool.resumeAll()
        });
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = false;
            this.getComponent(cc.Canvas).fitWidth = true;
        }

        this.resetAll();
        findControl.setsceneNode(this.node);
        findControl.adapterBg(this.bg);

        this.onEvent();
        this.init();
        this.startDownTime();
        this.loadRes();
        this.checkNewHand();

        cc.resources.loadDir("sound", cc.AudioClip, (err: Error, clips: cc.AudioClip[]) => {
            if (err || !cc.isValid(this)) return;
            this.audioClips = clips;
            this.addAutoReleaseAssets(clips);
        });
    }

    onEvent() {
        this.originalImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
        this.finishImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
    }

    resetAll(clearData?) {
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
    }

    checkNewHand() {
        if (fgData.userData.isGudie || findControl.imgId != 1) {
            return;
        }
        cc.resources.load("prefeb/newhand", cc.Prefab, (err, prefab) => {
            if (err) {
                return;
            }

            let node = cc.instantiate(prefab);
            findControl.findResUtil.bindResAsset(node, prefab);
            this.node.addChild(node);
            this.newhandNode = node.getComponent(newhand);
            this.newhandNode.showdong1();
        })
    }


    init() {
        this.level.string = "Lv" + findControl.imgId;
        for (let i = 0; i < this.yeziBox.children.length; i++) {
            let anim = this.yeziBox.children[i].getComponent(sp.Skeleton);
            findControl.playSp(anim, "1_an_stop");
        }


        this.changeQiPaoNum();

        this.mask.active = false;

        // this.lovelyOutTime = this.getDownTime();
        // let time = findControl.timeChange(this.lovelyOutTime);
        // this.timeAll.getComponent(cc.Label).string = time;
        this.reduceTime.active = false;
        this.timeAll.active = false;

        for (let i = 0; i < this.heartBox.children.length; i++) {
            this.heartBox.children[i].active = true;
            this.emptyheartBox.children[i].active = false;
        }
    }


    //开启倒计时
    startDownTime() {
        return
        if (this.lovelyOutTime > 0) {
            let time = findControl.timeChange(this.lovelyOutTime);
            this.timeAll.getComponent(cc.Label).string = time;
            this.timer = this.schedule(this.downTimeEvent, 1);
        }
    }

    downTimeEvent() {

        return
        if (this.isStop) {
            return
        }
        this.lovelyOutTime--;
        let time = findControl.timeChange(this.lovelyOutTime);
        this.timeAll.getComponent(cc.Label).string = time;
        if (this.lovelyOutTime <= 0) {
            this.unschedule(this.downTimeEvent);
            this.timeOutEvent();
            this.playCommonSound(sound.fail);
            cc.log("时间到了");
        }
    }


    //点错了
    errReduceTime() {
        let findheart = false;
        for (let i = this.heartBox.children.length - 1; i >= 0; i--) {
            let heartItem = this.heartBox.children[i];
            let emptyheartItem = this.emptyheartBox.children[i];
            if (heartItem.active) {
                findheart = true;
                heartItem.active = false;
                emptyheartItem.active = true;
                let anim = emptyheartItem.getComponent(sp.Skeleton);
                findControl.playSp(anim, "posui");
                break;
            }
        }
        let heartItem = this.heartBox.children[0];
        if (!heartItem.active) {
            findControl.findResUtil.showDialog(wicket.MoonPop, {
                ADcallback: () => {
                    // this.lovelyOutTime = 60;  
                    // fgData.userData.tishiNum++;
                    fgData.storageData();
                    this.changeQiPaoNum();
                    this.startDownTime();

                    for (let i = 0; i < this.heartBox.children.length; i++) {
                        this.heartBox.children[i].active = true;
                        this.emptyheartBox.children[i].active = false;
                    }
                },

                restartCallBack: () => {
                    this.resetAll(true);
                    this.init();
                    this.startDownTime();
                    cc.log(this.love_Data, "this.love_Data");
                    for (let i = 0; i < this.love_Data.length; i++) {
                        this.love_Data[i].isFind = false;
                    }
                }
            });
        }
        return
        //时间
        if (!this.oneErr) return
        let posY = this.timeAll.y;
        let reduceTime = 30;
        this.reduceTime.y = posY;
        this.reduceTime.active = true;
        this.reduceTime.getComponent(cc.Label).string = "-" + reduceTime;
        cc.Tween.stopAllByTarget(this.reduceTime);
        cc.tween(this.reduceTime).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).to(1, { opacity: 255, y: posY - 25 }).call(() => {
            this.reduceTime.active = false;
        }).start();

        this.lovelyOutTime -= reduceTime;
        if (this.lovelyOutTime <= 0) {
            this.timeAll.getComponent(cc.Label).string = "00:00";
            this.playCommonSound(sound.fail);
            cc.log("时间到了");
            this.unschedule(this.downTimeEvent);
            this.timeOutEvent();
        } else {
            let time = findControl.timeChange(this.lovelyOutTime);
            this.timeAll.getComponent(cc.Label).string = time;
        }
    }

    changeQiPaoNum() {
        if (fgData.userData.tishiNum > 0) {
            // this.tishi_qipao.getChildByName("ad_label").active = false;
            this.tishi_qipao.getChildByName("num_label").active = true;
            this.tishi_qipao.getChildByName("num_label").getComponent(cc.Label).string = fgData.userData.tishiNum.toString();
        } else {
            // this.tishi_qipao.getChildByName("ad_label").active = true;
            this.tishi_qipao.getChildByName("num_label").active = false;
        }
    }

    loadRes() {
        findControl.findResUtil.loadSprite("fineImg/" + "fine_" + findControl.imgId, this.originalImg.getComponent(cc.Sprite));

        findControl.findResUtil.loadSprite("discoverImg/" + "discover_" + findControl.imgId, this.finishImg.getComponent(cc.Sprite));

        cc.resources.load("imgConfig/rank" + findControl.imgId, cc.JsonAsset, (err, res) => {
            if (err) {
                cc.log(err)
                return;
            }
            // 获取到 Json 数据
            findControl.findResUtil.bindResAsset(this.node, res);
            const jsonData = res.json;
            if (jsonData && jsonData.path) {
                this.love_Data = jsonData.path;
                for (let i = 0; i < this.love_Data.length; i++) {
                    this.love_Data[i].isFind = false;
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
        })
    }


    yeziLight(pos: cc.Vec3) {
        let anim = this.yeziBox.children[this.lovelyFindNum - 1].getComponent(sp.Skeleton);

        let tuowei = cc.instantiate(this.game_tuowei);
        this.imgSignBox.getChildByName("lizi").addChild(tuowei);
        tuowei.setPosition(pos);

        let changePos = findControl.changePos(anim.node, tuowei);

        let time = 0.5;
        if (pos.y < 0) {
            time = 1;
        }
        cc.Tween.stopAllByTarget(tuowei);
        cc.tween(tuowei).to(time, { position: changePos }).call(() => {
            this.scheduleOnce(() => {
                tuowei.destroy();
            }, 0.3);
            findControl.playSp(anim, "2_bianliang");
            findControl.addSequenceSp(anim, "3_liang_stop");
        }).start();
    }

    findSignSucc(targetPos: cc.Vec3, fgData: lovelyData) {
        for (let i = 0; i < 2; i++) {
            let gameFind = cc.instantiate(this.gameFindPrefab2);
            let imgX = 0;
            if (i == 0) {
                imgX = targetPos.x * this.lovelyScale + this.lovelyY;
                this.imgSignBox.getChildByName("origBox").addChild(gameFind)
            } else {
                this.imgSignBox.getChildByName("finishBox").addChild(gameFind)
                imgX = targetPos.x * this.lovelyScale - this.lovelyY;
            }
            let centerPos = cc.v3(imgX, targetPos.y * this.lovelyScale);

            gameFind.setPosition(centerPos);

            //     正方形
            gameFind.width = fgData.blockSize.wid * this.lovelyScale;
            gameFind.height = fgData.blockSize.hei * this.lovelyScale;


            cc.Tween.stopAllByTarget(gameFind);
            gameFind.scale = 0;


            cc.tween(gameFind).to(0.3, { scale: 1.5 }).to(0.1, { scale: 1.3 }).start();
        }
    }

    findSignErr(targetPos: cc.Vec3) {
        let clickPos = targetPos;
        let gameErr = cc.instantiate(this.gameErrPrefab);
        this.imgSignBox.getChildByName("errBox").addChild(gameErr);
        gameErr.setPosition(clickPos);
        this.errSignAnim(gameErr);

        let otherErrSign: cc.Node = null;
        if (clickPos.x > 0) {
            otherErrSign = cc.instantiate(this.gameErrPrefab);
            this.imgSignBox.getChildByName("errBox").addChild(otherErrSign);
            otherErrSign.setPosition(cc.v3(clickPos.x - (this.lovelyY * 2), clickPos.y));
        } else {
            otherErrSign = cc.instantiate(this.gameErrPrefab);
            this.imgSignBox.getChildByName("errBox").addChild(otherErrSign);
            otherErrSign.setPosition(cc.v3(clickPos.x + (this.lovelyY * 2), clickPos.y));
        }
        if (otherErrSign) {
            this.errSignAnim(otherErrSign);
        }
    }

    imgEvent(event: cc.Event.EventTouch) {
        let pos = event.getLocation();
        let clickPos = this.imgSignBox.convertToNodeSpaceAR(cc.v3(pos.x, pos.y));
        // this.findSignErr(clickPos);
        let data = this.checkImgSign(clickPos);
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

            } else if (this.newhandNode && this.lovelyFindNum == 2) {
                if (this.newhandNode) {
                    this.newhandNode.node.destroy();
                    this.newhandNode = null;
                }
                fgData.userData.isGudie = true;
                fgData.storageData();
            }
            this.playCommonSound(sound.correct);

            if (this.lovelyFindNum >= this.yeziAllNum) {       //胜利 游戏结束
                this.gameEnd();
            }
        } else if (data.type == GameState.wrong) {
            this.playCommonSound(sound.err);
            this.errReduceTime();
            this.findSignErr(clickPos);
            this.oneErr = true;
        } else {
            this.playCommonSound(sound.err);
            this.errReduceTime();
            this.findSignErr(clickPos);
            this.oneErr = true;
        }
    }

    checkImgSign(targetPos: cc.Vec3) {
        let type: GameState = null;
        let fgData = null;
        for (let i = 0; i < this.love_Data.length; i++) {
            let data = this.love_Data[i];
            let x = 0;
            let y = data.centerPos.y * this.lovelyScale;
            if (targetPos.x > 0) {
                x = data.centerPos.x * this.lovelyScale + this.lovelyY;
            } else {
                x = data.centerPos.x * this.lovelyScale - this.lovelyY;
            }

            let wid = data.blockSize.wid * this.lovelyScale;
            let hei = data.blockSize.hei * this.lovelyScale;

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
                } else {
                    type = GameState.repeat;
                    cc.log("找到重复的了");
                }
                return { type, fgData }
            } else {
                type = GameState.wrong;
                cc.log("没找到");
            }
        }

        return { type, fgData }
    }


    errSignAnim(node: cc.Node) {
        cc.Tween.stopAllByTarget(node);
        cc.tween(node)
            .to(0.05, { angle: 15 }).to(0.05, { angle: 0 }).to(0.05, { angle: -15 })
            .to(0.07, { angle: 10 }).to(0.07, { angle: 0 }).to(0.07, { angle: -10 })
            .to(0.1, { angle: 7 }).to(0.1, { angle: 0 }).to(0.1, { angle: -7 })
            .to(0.1, { angle: 3 }).to(0.1, { angle: 0 })
            .call(() => {
                node.destroy();
            }).start();
    }


    gameEnd() {
        cc.log("游戏结束");
        this.mask.active = true;

        this.scheduleOnce(() => {
            for (let i = 0; i < this.yeziBox.children.length; i++) {
                let anim = this.yeziBox.children[i].getComponent(sp.Skeleton);
                this.scheduleOnce(() => {
                    findControl.playSp(anim, "4_man", false, () => {
                        this.scheduleOnce(() => {
                            if (i == this.yeziBox.children.length - 1) {
                                this.playCommonSound(sound.win);
                                if (fgData.userData.level + 1 <= fgData.levelAll) {
                                    fgData.userData.level = fgData.userData.level + 1;
                                    fgData.storageData();
                                }
                                findControl.findResUtil.showDialog(wicket.windPop, {
                                    img: this.originalImg.getComponent(cc.Sprite).spriteFrame,
                                    finishBox: cc.instantiate(this.imgSignBox.getChildByName("finishBox")),
                                    love_Data: this.love_Data,// cc.instantiate(this.imgSignBox.getChildByName("finishBox")),
                                    callback: () => {
                                        if (findControl.imgId + 1 <= fgData.levelAll) {
                                            findControl.imgId = findControl.imgId + 1;
                                            this.resetAll();
                                            this.init();
                                            this.startDownTime();
                                            this.loadRes();
                                        } else {
                                            fgData.userData.isHall = true;
                                            fgData.storageData();
                                            cc.director.loadScene(spectacle.parlour);
                                        }
                                    }
                                });
                            }
                        })
                    });
                }, 0.1 * i);
            }
        }, 0.5);
    }


    //获取当前关卡的倒计时
    getDownTime() {
        let level = findControl.imgId;
        let time = 0;
        if (level >= 1 && level <= 5) {
            time = 5 * 60;
        } else if (level >= 6 && level <= 10) {
            time = 3 * 60;
        } else if (level >= 11 && level <= 15) {
            time = 2 * 60 + 30;
        } else if (level >= 16 && level <= 20) {
            time = 2 * 60;
        } else if (level >= 21 && level <= 25) {
            time = 1 * 60 + 30;
        } else {
            time = 1 * 60;
        }
        return time;
    }


    //时间到
    timeOutEvent() {
        findControl.findResUtil.showDialog(wicket.MoonPop, {
            ADcallback: () => {
                this.lovelyOutTime = 60;
                fgData.userData.tishiNum++;
                fgData.storageData();
                this.changeQiPaoNum();
                this.startDownTime();
            },

            restartCallBack: () => {
                this.resetAll(true);
                this.init();
                this.startDownTime();
                cc.log(this.love_Data, "this.love_Data");
                for (let i = 0; i < this.love_Data.length; i++) {
                    this.love_Data[i].isFind = false;
                }
            }
        });
    }

    onClick_back() {
        findControl.findSoundTool.commonBtnClick();
        this.isStop = true;
        findControl.findResUtil.showDialog(wicket.StarPop, { callback: () => { this.isStop = false } });
    }


    onClick_pause() {
        findControl.findSoundTool.commonBtnClick();
        this.isStop = true;
        findControl.findResUtil.showDialog(wicket.TreePop, { isGame: true, callback: () => { this.isStop = false } });

    }

    onClick_tishi() {

        findControl.findSoundTool.commonBtnClick();
        if (this.lovelyIsPrompt) {
            findControl.findResUtil.showToast("Prompt already exists");
            return;
        }
        let lvdata: lovelyData = null;
        for (let i = 0; i < this.love_Data.length; i++) {
            if (!this.love_Data[i].isFind) {
                lvdata = this.love_Data[i];
                break;
            }
        }

        if (!fgData) {
            return
        }
        if (fgData.userData.tishiNum <= 0) {
            cc.log("看广告")

            fgData.showVideo(() => {
                this.showTiShi(lvdata);
            });

            return;
        }
        fgData.userData.tishiNum = fgData.userData.tishiNum - 1;
        fgData.storageData();
        this.changeQiPaoNum();
        this.showTiShi(lvdata);
    }

    showTiShi(fgData: lovelyData) {
        if (fgData) {
            this.lovelyIsPrompt = true;
            for (let i = 0; i < 2; i++) {
                let tishi = cc.instantiate(this.gameTishiPrefab);
                this.imgSignBox.getChildByName("tishiBox").addChild(tishi);

                let x = 0;
                let y = fgData.centerPos.y * this.lovelyScale;
                if (i == 0) {
                    x = fgData.centerPos.x * this.lovelyScale + this.lovelyY;
                } else {
                    x = fgData.centerPos.x * this.lovelyScale - this.lovelyY;
                }
                tishi.setPosition(x, y);
                cc.Tween.stopAllByTarget(tishi);
                cc.tween(tishi).to(0.5, { scale: 0.7 }).to(0.5, { scale: 1 }).union().repeatForever().start();
            }

        }
    }


    //播放音效
    playCommonSound(audioName: string, loop: boolean = false): number {
        for (let i = 0; i < this.audioClips.length; i++) {
            if (this.audioClips[i].name == audioName) {
                let audioID = findControl.findSoundTool.playEffect(this.audioClips[i], loop);
                return audioID;
            }
        }
        return null;
    }
}
