cc.Component.prototype.addAutoReleaseAsset = function(_asset:cc.Asset) {
    let tempAuto = this.node.getComponent(AutoReleaseAssets);
    if(!cc.isValid(tempAuto)){
        tempAuto = this.node.addComponent(AutoReleaseAssets);
    }
    tempAuto.addAutoReleaseAsset(_asset);
}

cc.Component.prototype.addAutoReleaseAssets = function(_assets:cc.Asset[]) {
    let tempAuto = this.node.getComponent(AutoReleaseAssets);
    if(!cc.isValid(tempAuto)){
        tempAuto = this.node.addComponent(AutoReleaseAssets);
    }
    for (const _assetOne  of _assets) {
        tempAuto.addAutoReleaseAsset(_assetOne);
    }
}

//-----------------------------------------------------------------------------------------------------AutoReleaseAssets

const {ccclass} = cc._decorator;

@ccclass
export default class AutoReleaseAssets extends cc.Component {

    private dynamicsAssets: cc.Asset[] = [];

    public addAutoReleaseAsset(_asset:cc.Asset){
        if(cc.isValid(_asset)){
            _asset.addRef();
            this.dynamicsAssets.push(_asset);
            // console.log("1111111111");
        }
    }

    onDestroy(): void {
        // console.log("222222222");
        for (let index = 0; index < this.dynamicsAssets.length; index++) {
            if(cc.isValid(this.dynamicsAssets[index])){
                this.dynamicsAssets[index].decRef();
            }
        }
        this.dynamicsAssets = [];
    }
     
}
