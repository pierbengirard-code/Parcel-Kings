$ErrorActionPreference = 'Stop'
$gameFolder = Split-Path -Parent $MyInvocation.MyCommand.Path
$pythonPath = Join-Path $gameFolder '.tools\Python310\python.exe'
$server = Get-NetTCPConnection -LocalPort 4173 -State Listen -ErrorAction SilentlyContinue

if (-not $server) {
    Start-Process -FilePath $pythonPath `
        -ArgumentList '-m','http.server','4173','--bind','127.0.0.1' `
        -WorkingDirectory $gameFolder `
        -WindowStyle Hidden
}
