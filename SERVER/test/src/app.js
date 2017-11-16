

var app = {};




app.init = function () {

        var callBack =function () {
            //更新游戏中的 all 模块
            HotManager.hotUpdate(res.manifestUrl,"all",function () {
                cc.loader.loadJs(["src/jsList.js"], function () {
                    cc.loader.loadJs(jsList, function () {
                        cc.director.runScene(new LoginScene());
                    });
                });
            });
        }
        HotManager.init(callBack);//初始化  读取沙盒目录

}