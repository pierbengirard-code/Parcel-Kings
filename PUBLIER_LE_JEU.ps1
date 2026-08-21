$ErrorActionPreference = 'Stop'
$repoFolder = Split-Path -Parent $MyInvocation.MyCommand.Path
$siteUrl = 'https://pierbengirard-code.github.io/Parcel-Kings/'

function Stop-Publication([string]$message) {
    Write-Host ''
    Write-Host $message -ForegroundColor Red
    Write-Host 'Aucun autre changement ne sera effectue.' -ForegroundColor DarkGray
    exit 1
}

Clear-Host
Write-Host '============================================' -ForegroundColor DarkRed
Write-Host '       PARCEL KINGS - PUBLICATION' -ForegroundColor Yellow
Write-Host '============================================' -ForegroundColor DarkRed
Write-Host ''

$gitCommand = Get-Command git.exe -ErrorAction SilentlyContinue
if (-not $gitCommand) {
    $desktopGit = Get-ChildItem -Path (Join-Path $env:LOCALAPPDATA 'GitHubDesktop') -Filter git.exe -File -Recurse -ErrorAction SilentlyContinue |
        Where-Object { $_.FullName -like '*\resources\app\git\cmd\git.exe' } |
        Sort-Object FullName -Descending |
        Select-Object -First 1
    if (-not $desktopGit) {
        Stop-Publication 'Git est introuvable. Ouvrez GitHub Desktop puis reessayez.'
    }
    $gitPath = $desktopGit.FullName
} else {
    $gitPath = $gitCommand.Source
}

Set-Location -LiteralPath $repoFolder

Write-Host '[1/4] Verification des fichiers...' -ForegroundColor Cyan
$changes = & $gitPath status --porcelain
if ($LASTEXITCODE -ne 0) {
    Stop-Publication 'Impossible de lire le depot GitHub.'
}

if (-not $changes) {
    Write-Host ''
    Write-Host 'Le jeu est deja a jour. Aucun fichier a publier.' -ForegroundColor Green
    Write-Host $siteUrl -ForegroundColor Cyan
    exit 0
}

Write-Host '[2/4] Preparation de la nouvelle version...' -ForegroundColor Cyan
& $gitPath add --all
if ($LASTEXITCODE -ne 0) {
    Stop-Publication 'Impossible de preparer les fichiers.'
}

$versionDate = Get-Date -Format 'yyyy-MM-dd HH:mm'
$commitMessage = "Mise a jour du jeu - $versionDate"
& $gitPath commit -m $commitMessage
if ($LASTEXITCODE -ne 0) {
    Stop-Publication 'Impossible de creer la nouvelle version.'
}

Write-Host '[3/4] Envoi vers GitHub...' -ForegroundColor Cyan
$branch = (& $gitPath branch --show-current).Trim()
if (-not $branch) {
    Stop-Publication 'Impossible de determiner la branche GitHub.'
}

& $gitPath push origin $branch
if ($LASTEXITCODE -ne 0) {
    Stop-Publication 'Echec de l envoi. Verifiez Internet et ouvrez GitHub Desktop.'
}

Write-Host '[4/4] Publication envoyee.' -ForegroundColor Cyan
Write-Host ''
Write-Host 'SUCCES : la nouvelle version est sur GitHub.' -ForegroundColor Green
Write-Host 'GitHub Pages la mettra en ligne dans quelques minutes :' -ForegroundColor White
Write-Host $siteUrl -ForegroundColor Yellow
Write-Host ''
Write-Host 'Votre ami pourra actualiser avec Ctrl + F5.' -ForegroundColor DarkGray
