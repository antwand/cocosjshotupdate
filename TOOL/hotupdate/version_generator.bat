@echo off

SET CUR_DIR=%~dp0

cd "%CUR_DIR%..\.."

SET V=1.0.0.0
@echo "ָ�� Manifest �ļ������汾��:" + %V%

SET U=http://192.168.0.116/SERVER/test/
@echo "ָ��������Զ�̰��ĵ�ַ�������ַ��Ҫ����������汾�� Manifest �ļ���Զ�̰���ַһ�£������޷���⵽���¡�:" + %U%

SET S=./
@echo "����ԭ������汾��Ŀ¼���·����" + %S%

SET D=res/
@echo "���� Manifest �ļ��ĵ�ַ��" + %D%


SET F=/game/
@echo "ǰ������/ ����ĳ���ļ���:" + %F%


START /B node %CUR_DIR%version_generator.js -v %V% -u %U% -s %S% -d %D% -f %F%

pause