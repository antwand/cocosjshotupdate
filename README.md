cocosjs hot update !
======


提供了两种热更方案 
-----
分别为 HotUpdate （参照网上，有局限） 和 HotUpdate2 





HotUpdate2 的热更特点：
---------------


1：基于最新版的  cocosjs 3.16 的热更 <br>

不需要基于A=>B=>C=>D =...   这样的依次版本更新 <br>

 直接可以任何版本更新到最后一个版本 A => D .. <br>
                                 B => D ..<br>
                                 C => D .. <br>
                                 
                                 

								 
								 
								 

 
 
 
 2：使用方便即插即用：
 ------------
 var fun = function (flag,percent) {<br>
	>>>if(flag == jsb.EventAssetsManager.UPDATE_FINISHED){<br>
	>>>>>	cc.log("加载完成！");<br>
	>>>>>	cc.director.runScene(new HelloWorldScene());<br>
	>>>}else if(flag == jsb.EventAssetsManager.UPDATE_PROGRESSION){<br>
	>>>>>	cc.log("当前进度："+percent);<br>
	>>>}<br>
}<br>
//HotUpdate 热更使用 <br>
// var hotupdate = new HotUpdate();<br>
// hotupdate.run(fun);<br>


//HotUpdate2 热更使用 <br>
var hotupdate2 = new HotUpdate2();<br>
hotupdate2.onLoad();<br>
hotupdate2.hotUpdate(fun);<br>








3：自动打包工具 TOOL 
-----------

