$ErrorActionPreference = "Stop"
$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location -LiteralPath $projectRoot

$pythonCommand = Get-Command py -ErrorAction SilentlyContinue
if ($pythonCommand) {
    & py -3 tools\generate_object_thumbnails.py
    & py -3 tools\validate_site.py
} else {
    $pythonCommand = Get-Command python -ErrorAction SilentlyContinue
    if (-not $pythonCommand) { throw "Python est nécessaire pour préparer la publication." }
    & python tools\generate_object_thumbnails.py
    & python tools\validate_site.py
}

if ($LASTEXITCODE -ne 0) { throw "La validation a échoué. Corrigez les erreurs avant de publier." }
Write-Host ""
Write-Host "Box or Bust est prêt à être publié." -ForegroundColor Green
Read-Host "Appuyez sur Entrée pour fermer"
