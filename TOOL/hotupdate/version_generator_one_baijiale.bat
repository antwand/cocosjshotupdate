@echo off

SET CUR_DIR=%~dp0

cd "%CUR_DIR%..\.."

SET V=1.0.0.0
@echo "ָ�� Manifest �ļ������汾��:" + %V%

SET U=http://192.168.0.116/SERVER/test/
@echo "ָ��������Զ�̰��ĵ�ַ�������ַ��Ҫ����������汾�� Manifest �ļ���Զ�̰���ַһ�£������޷���⵽���¡�:" + %U%

SET S=./
@echo "����ԭ������汾��Ŀ¼���·����" + %S%

SET D=res/game/baijiale/
@echo "���� Manifest �ļ��ĵ�ַ��" + %D%


SET F=____false
@echo "ǰ������/ ����ĳ���ļ���:" + %F%

SET N=baijiale
@echo "��Ϸ����:" + %N%




START /B node %CUR_DIR%version_generator_one.js -n %N% -d %D% -v %V% -u %U% -s %S% -f %F%

pause