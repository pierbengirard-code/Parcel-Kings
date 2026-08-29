@echo off
title Box or Bust - Publication
cd /d "%~dp0"
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0PUBLIER_LE_JEU.ps1"
pause
