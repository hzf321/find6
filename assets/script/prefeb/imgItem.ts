 
import parlour from "../parlour";
import { findControl, spectacle } from "../tool/findControl";
import { fgData } from "../tool/findGameData";

const { ccclass, property } = cc._decorator;

@ccclass
export default class imgItem extends cc.Component {

    @property(cc.Node)
    hall_mask: cc.Node = null;

    @property(cc.Sprite)
    img: cc.Sprite = null;

    @property(cc.Label)
    str: cc.Label = null;


    private idx: number = 0;

    private isbool: boolean = false;

    hall: parlour = null;

    completeColor: cc.Color = cc.color(103, 128, 90);
    guanqiaColor: cc.Color = cc.color(188, 140, 101);

    start() {

    }

    init(idx: number, hall: parlour) {
        this.idx = idx;
        this.hall = hall;
        this.str.string = "Level "+(idx + 1) ;
        this.str.node.color = this.guanqiaColor;
        if (this.idx < fgData.userData.level) {
            this.hall_mask.active = false;
            this.isbool = true;
            this.str.string = "Unlock";
            this.str.node.color = this.completeColor;
        } else {
            this.hall_mask.active = true;
            this.isbool = false;
        }
        findControl.findResUtil.loadSprite("fineImg/" + "fine_" + (this.idx + 1), this.img);
    }

    onclick_item() {
        findControl.findSoundTool.commonBtnClick();
        if (this.isbool) {
            findControl.imgId = this.idx + 1;
            fgData.userData.isHall = false;
            fgData.storageData();
            cc.director.loadScene(spectacle.host);
        } else {
            this.hall.showToast("The level has not been unlocked yet");
        }

    }

}
