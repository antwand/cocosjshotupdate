var HotManager ={}



/**
 *  热更新每次进游戏 需要init调用
 * @param callBack
 */
HotManager.setSearchPaths = function () {
    var searchPaths = ["assets/"]//jsb.fileUtils.getSearchPaths();
    var newPaths = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'blackjack-remote-asset/all/');
    searchPaths.unshift(newPaths)
    var newPaths2 = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'blackjack-remote-asset/baijiale/');
    searchPaths.unshift(newPaths2)
    var arr = Tool.unique(searchPaths)
    console.log(JSON.stringify(arr))
    jsb.fileUtils.setSearchPaths(arr);
}
HotManager.init = function (callBack) {
    console.log("======== HotManager.init  设置沙盒的读取文件目录 ==================================")
    if (window.cc && cc.sys.isNative) {
        HotManager.setSearchPaths();
        cc.loader.loadJs(["src/jsList.js"], function () {
                cc.loader.loadJs(jsList, function () {
                    callBack();
                });
            });
    }else{
        callBack();
    }
}





/**
 *  热更新管理
 * @param manifestUrl
 * @param gamename
 * @param callBack
 */
HotManager.hotUpdate = function (manifestUrl,gamename,callBack) {
    /**
     *   注册热更回调
     * @param flag 标记  8表示下载完成  5表示正在下载  其他表示失败
     * @param percent
     */
    var fun = function (flag,percent) {
        if (flag == jsb.EventAssetsManager.UPDATE_FINISHED) {
            cc.log("加载完成！");
            callBack()
        } else if (flag == jsb.EventAssetsManager.UPDATE_PROGRESSION) {
            cc.log("当前进度：" + percent);
        } else if (flag == jsb.EventAssetsManager.UPDATE_FAILED) {//更新错误
            cc.log("更新文件错误！");
        }else{
            callBack()
        }

    }
    // var hotupdate = new HotUpdate();
    // hotupdate.run(fun);

    if (window.cc && cc.sys.isNative) {
        var hotupdate2 = new HotUpdate2();
        hotupdate2.onLoad(manifestUrl,gamename);// manifestUrl 热更新的路径  gamename 热更新的模块
        hotupdate2.hotUpdate(fun);
    }else{
        callBack()
    }
}