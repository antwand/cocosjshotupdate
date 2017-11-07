/**
  热更核心类

 jsb.EventAssetsManager.UPDATE_FINISHED = 8;

 //使用方法


 /**
 *   注册热更回调
 * @param flag 标记  8表示下载完成  5表示正在下载  其他表示失败
 * @param percent
 *
 var fun = function (flag,percent) {
    if(flag == jsb.EventAssetsManager.UPDATE_FINISHED){
        cc.director.runScene(new HelloWorldScene());
    }else if(flag == jsb.EventAssetsManager.UPDATE_PROGRESSION){
        cc.log("当前进度："+percent);
    }
}
var hotupdate = new HotUpdate();
hotupdate.run(fun);



 *
 * @type {number}
 * @private
 */

var __failCount = 0;
var HotUpdate = cc.Class.extend({
    // var assetsManagerScene = cc.Scene.extend({
        _am:null,
        // _progress:null,
        _percent:0,
        _percentByFile:0,
        _callBack:null, //热更回调函数
        run:function(callBack) {
            this._callBack = callBack;


            //如果不是原生设备  则直接跳过
            if (!cc.sys.isNative) {
                cc.log("not native");
                this._loadGame();
                return;
            }

            // var layer = new cc.Layer();
            // this._progress = new cc.LabelTTF("%0","Arial",12);
            // this._progress.x = cc.winSize.width/2;
            // this._progress.y = cc.winSize.height/2+50;
            // layer.addChild(this._progress);

            var self = this;
            var storagePath = (jsb.fileUtils?jsb.fileUtils.getWritablePath():"./");
            cc.log("path:"+storagePath);
            this._am = new jsb.AssetsManager("res/project.manifest",storagePath);
            this._am.retain();

            if (!this._am.getLocalManifest().isLoaded()){
                cc.log("fail to update assets, local manifest fial load");
                this._loadGame();
            }else {
                var that = this;
                var listener = new jsb.EventListenerAssetsManager(this._am,function (event) {
                    switch (event.getEventCode()){

                        //没有文件 下载
                        case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                            cc.log("No local manifest file found, skip assets update.");
                            that._loadGame();
                            break;
                        case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                            that._percent = event.getPercent();
                            that._percentByFile = event.getPercentByFile();
                            cc.log(that._percent + "%");

                            self._updateProgress();
                            var msg = event.getMessage();
                            if (msg) {
                                cc.log(msg);
                            }
                            break;
                        case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                        case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                            cc.log("Fail to download manifest file, update skipped." + event.getEventCode()+ event.getMessage());
                            that._loadGame();
                            break;
                        case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                        case jsb.EventAssetsManager.UPDATE_FINISHED:
                            cc.log("Update finished.");
                            that._loadGame();
                            break;
                        case jsb.EventAssetsManager.UPDATE_FAILED:
                            cc.log("Update failed. " + event.getMessage());

                            __failCount ++;
                            if (__failCount < 5)
                            {
                                that._am.downloadFailedAssets();
                            }
                            else
                            {
                                //达到最大的失败重试次数  退出热更
                                cc.log("Reach maximum fail count, exit update process");
                                __failCount = 0;
                                that._loadGame();
                            }
                            break;
                        case jsb.EventAssetsManager.ERROR_UPDATING:
                            cc.log("Asset update error: " + event.getAssetId() + ", " + event.getMessage());
                            that._loadGame();
                            break;
                        case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                            cc.log(event.getMessage());
                            that._loadGame();
                            break;
                        default:
                            break;
                    }
                });
                cc.eventManager.addListener(listener, 1);
                this._am.update();
                // cc.director.runScene(this);
            }
            // this.schedule(this.updateProgress, 0.5);
            // cc.director.getScheduler().unschedule(this._updateProgress, this);
            // cc.director.getScheduler().schedule(this._updateProgress, this, 0.5,cc.REPEAT_FOREVER, 0, false, "keyCountDownTime");
        },





        /***
         *  记载完成 开始启动到主场景
         */
        _loadGame:function(flag){
            cc.director.getScheduler().unschedule(this._updateProgress, this);

            var self = this;
            cc.loader.loadJs(["src/jsList.js"],function () {
                cc.loader.loadJs(jsList,function (error) {

                    self._callBack(flag || jsb.EventAssetsManager.UPDATE_FINISHED);
                    self.onExit();
                    //cc.director.runScene(new HelloWorldScene());
                })
            })

        },
        _updateProgress:function(dt){
            cc.log("当前进度：" + this._percent);
            this._callBack(jsb.EventAssetsManager.UPDATE_PROGRESSION,this._percent);
            // this._progress.string = "" + this._percent;
        },
        onExit:function(){
            cc.log("AssetsManager::onExit");

            this._am.release();
            // this._super();
        }
    })
// };
