@echo off

SET CUR_DIR=%~dp0

cd "%CUR_DIR%..\.."

SET V=1.0.0.0
@echo "指定 Manifest 文件的主版本号:" + %V%

SET U=http://192.168.0.116/SERVER/test/
@echo "指定服务器远程包的地址，这个地址需要和最初发布版本中 Manifest 文件的远程包地址一致，否则无法检测到更新。:" + %U%

SET S=./
@echo "本地原生打包版本的目录相对路径：" + %S%

SET D=res/
@echo "保存 Manifest 文件的地址：" + %D%


SET F=/game/
@echo "前面必须加/ 过滤某个文件夹:" + %F%


START /B node %CUR_DIR%version_generator.js -v %V% -u %U% -s %S% -d %D% -f %F%

pause