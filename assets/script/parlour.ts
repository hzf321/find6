import imgItem from "./prefeb/imgItem";
import { findControl, wicket } from "./tool/findControl";


const { ccclass, property } = cc._decorator;

@ccclass
export default class parlour extends cc.Component {

    @property(cc.Node)
    bg: cc.Node = null;

    @property(cc.Prefab)
    imgItem: cc.Prefab = null;

    @property(cc.Node)
    scroll_contect: cc.Node = null;

    @property(cc.ScrollView)
    scrollView: cc.ScrollView = null;

    @property(cc.Node)
    gamehallBg: cc.Node = null;

    @property(cc.Node)
    bookSelect: cc.Node = null;

    @property(cc.Node)
    gamehall: cc.Node = null;


    start() {
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = false;
            this.getComponent(cc.Canvas).fitWidth = true;
        }
        findControl.setsceneNode(this.node);
        findControl.adapterBg(this.bg);
        findControl.adapterBg(this.gamehallBg);
        this.scheduleOnce(() => {
            this.init();
        })

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
    }

    init() {
        this.scroll_contect.destroyAllChildren()
        for (let i = 0; i < 30; i++) {
            let item = cc.instantiate(this.imgItem);
            this.scroll_contect.addChild(item);
            item.getComponent(imgItem).init(i, this);
        }
    }

    onClick_setting() {
        findControl.findSoundTool.commonBtnClick();
        findControl.findResUtil.showDialog(wicket.TreePop, { isGame: false });
        // findControl.findResUtil.showDialog(dialog.comment_dialog);
    }



    showToast(text: string) {
        findControl.findResUtil.showToast(text);
    }

    onClick_lvBook() {
        findControl.findSoundTool.commonBtnClick();
        this.gamehall.active = false;
        this.bookSelect.active = true;
    }

    onClick_blueBook() {
        findControl.findSoundTool.commonBtnClick();
        findControl.findResUtil.showToast("To unlock, conquer the preceding level first!");
    }
}
