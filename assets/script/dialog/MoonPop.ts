import { findControl } from "../tool/findControl";
import { fgData } from "../tool/findGameData";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MoonPop extends cc.Component {

    ADcallback: Function = null;
    restartCallBack: Function = null;

    start(): void {
        fgData.showBanner();
    }

    initData(data) {

        this.ADcallback = data.ADcallback;
        this.restartCallBack = data.restartCallBack;
    }


    onClick_AD_btn() {
        findControl.findSoundTool.commonBtnClick();
        fgData.showVideo(()=>{
            this.scheduleOnce(()=>{
                this.ADcallback && this.ADcallback()
                this.node.destroy();
                fgData.closeBanner();
            });
        });
    }

    onClick_restart() {
        findControl.findSoundTool.commonBtnClick();
        this.restartCallBack && this.restartCallBack()
        this.node.destroy();
        fgData.closeBanner();
    }
}
