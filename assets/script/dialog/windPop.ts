import { findControl, wicket, lovelyData } from "../tool/findControl";
import { fgData } from "../tool/findGameData";

const { ccclass, property } = cc._decorator;

@ccclass
export default class windPop extends cc.Component {

    @property(cc.Prefab)
    gameFindPrefab: cc.Prefab = null;

    @property(cc.Label)
    title: cc.Label = null;

    @property(cc.Node)
    bg: cc.Node = null;

    @property(cc.Sprite)
    imgEnd: cc.Sprite = null;

    @property(cc.Label)
    lvLabel: cc.Label = null;

    @property(cc.Sprite)
    lvProress: cc.Sprite = null;

    img: cc.SpriteFrame = null;

    callback: Function = null;

    initData(data) {
        this.img = data.img;
        this.callback = data.callback;
        let findNode = data.finishBox
        this.imgEnd.spriteFrame = this.img;
        findNode.setPosition(290, 43) // 子节点都是忘左边偏移的，要反方向调转回来， 43是图片的y
        this.node.getChildByName("content").addChild(findNode)
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
    }


    onLoad(): void {
        // if (findControl.imgId >= 6) {
        //     fgData.showInterst();
        // }

        // if (findControl.imgId == 5 && !fgData.userData.finishLevel5) {
        //     fgData.userData.finishLevel5 = true;

        //     findControl.findResUtil.showDialog(Tc.funTc);
        //     fgData.storageData();
        // }
    }


    start(): void {
        this.title.string = "Level " + findControl.imgId;
        findControl.adapterBg(this.bg);
        let lv = fgData.userData.level;
        lv = lv - 1;
        if (lv >= 11 && lv <= 20) {
            lv = lv - 10;
        } else if (lv >= 21 && lv <= 30) {
            lv = lv - 20;
        }
        this.lvLabel.string = lv;
        this.lvProress.fillRange = lv / 10;
        if (lv == 10) {
            fgData.userData.tishiNum = fgData.userData.tishiNum + 2;
        }
    }

    onClick_continueBtn() {
        findControl.findSoundTool.commonBtnClick();
        this.callback && this.callback();
        this.node.destroy();
    }

    onClick_close() {
        findControl.findSoundTool.commonBtnClick();
        this.node.destroy();
    }
}
