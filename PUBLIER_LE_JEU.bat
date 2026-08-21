@echo off
title Parcel Kings - Publication
cd /d "%~dp0"
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0PUBLIER_LE_JEU.ps1"
pause

