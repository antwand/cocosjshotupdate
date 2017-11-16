cocosjs hot update !
======


提供了两种热更方案 
-----
分别为 HotUpdate （参照网上，有局限） 和 HotUpdate2 





HotUpdate2 的热更特点：
---------------


1：基于最新版的  cocosjs 3.16 的热更 <br>
---------

不需要基于A=>B=>C=>D =...   这样的依次版本更新 <br>

 直接可以任何版本更新到最后一个版本 A => D .. <br>
                                 B => D ..<br>
                                 C => D .. <br>
                                 
                                 

								 
								 
								 

 
 
 
 2：使用方便即插即用：
 ------------
 ``` js
	/**
	 *   注册热更回调
	 *   注意如果有文件更新后 不会抛出 jsb.EventAssetsManager.UPDATE_FINISHED 加载完成事件，会自动 cc.game.restart
	     其他方式，比如检测无加载文件等 会抛出 jsb.EventAssetsManager.UPDATE_FINISHED 
	 
	 * @param flag 标记  8表示下载完成  5表示正在下载  其他表示失败
	 * @param percent
	 */
	var fun = function (flag,percent) {
	    if(flag == jsb.EventAssetsManager.UPDATE_FINISHED){
		cc.log("加载完成！");
		cc.director.runScene(new HelloWorldScene());
	    }else if(flag == jsb.EventAssetsManager.UPDATE_PROGRESSION){
		cc.log("当前进度："+percent);
	    }else if (flag == jsb.EventAssetsManager.UPDATE_FAILED){//更新错误
		cc.log("更新文件错误！");
	    }
	}
	// var hotupdate = new HotUpdate();
	// hotupdate.run(fun);



	var hotupdate2 = new HotUpdate2();
	hotupdate2.onLoad();
	hotupdate2.hotUpdate(fun);


 ```






3：自动打包工具 TOOL 
-----------



4:可以分拆成多个小包
--------------------



5:编译使用
--------------------
cocos compile -p android --android-studio

ssh-keygen -t rsa -C "antwand@sina.com"

