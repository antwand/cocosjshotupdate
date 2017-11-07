# cocosjshotupdate
cocosjs hot update !
======


提供了两种热更方案 
分别为 HotUpdate （参照网上，有局限） 和 HotUpdate2 





HotUpdate2 的热更特点：


1：基于最新版的  cocosjs 3.16 的热更 

不需要基于A=>B=>C=>D =...   这样的依次版本更新 

 直接可以任何版本更新到最后一个版本 A => D ..
                                 B => D ..
                                 C => D .. 
                                 
                                 

								 
								 
								 

 
 
 
 2：使用方便即插即用：
 var fun = function (flag,percent) {
	if(flag == jsb.EventAssetsManager.UPDATE_FINISHED){
		cc.log("加载完成！");
		cc.director.runScene(new HelloWorldScene());
	}else if(flag == jsb.EventAssetsManager.UPDATE_PROGRESSION){
		cc.log("当前进度："+percent);
	}
}
//HotUpdate 热更使用 
// var hotupdate = new HotUpdate();
// hotupdate.run(fun);


//HotUpdate2 热更使用 
var hotupdate2 = new HotUpdate2();
hotupdate2.onLoad();
hotupdate2.hotUpdate(fun);








3：自动打包工具 TOOL 

