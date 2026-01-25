:: Important stuff
@echo off && cls
title meSpeak engine
if not exist "installed" (if not exist "notinstalled" (echo meSpeak engine Configuration File >> notinstalled))
::::::::::::::::::::
:: Initialization ::
::::::::::::::::::::

:: Terminate existing node.js apps
TASKKILL /IM node.exe /F 2>nul
cls

:::::::::::::::::::::::::::::
:: Start meSpeak engine ::
:::::::::::::::::::::::::::::

:: Check for installation
if exist notinstalled (
	echo meSpeak engine is not installed! Installing...
	call npm install
	ren "notinstalled" "installed"
	cls
	goto start
) else (
	goto start
)

:: Run npm start
:start
echo meSpeak engine is now starting...
echo Only able to do raw
node index.js
pause & exit
