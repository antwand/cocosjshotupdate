@echo off

SET CUR_DIR=%~dp0

cd "%CUR_DIR%..\.."


SET SERVER=D:\xampp\htdocs\SERVER\test

copy /y ".\res\project.manifest" %SERVER%
copy /y ".\res\version.manifest" %SERVER%


XCOPY /e/h/y .\res %SERVER%\res\
XCOPY /e/h/y .\src %SERVER%\src\

@echo "success"


pause