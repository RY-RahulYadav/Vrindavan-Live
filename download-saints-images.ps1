# Script to download all saint images to public folder

$publicDir = "public"
$ErrorActionPreference = "Continue"

# Create public directory if it doesn't exist
if (-not (Test-Path $publicDir)) {
    New-Item -ItemType Directory -Path $publicDir
}

# Array of images to download: [URL, LocalFilename]
# Using alternative URLs for Wikimedia images
$images = @(
    @("https://commons.wikimedia.org/wiki/File:Premanand_Maharaj_photo.jpg", "premanand-maharaj.jpg"),
    @("https://commons.wikimedia.org/wiki/File:Radhanath_Swami_2010.jpg", "radhanath-swami.jpg"),
    @("https://satsvarupadasagoswami.com/wp-content/uploads/2017/01/SrilaPrabhupada.jpg", "srila-prabhupada.jpg"),
    @("https://www.dnaofhinduism.com/uploads/7/1/4/2/71428171/sri-chaitanya-mahaprabhu_orig.jpg", "sri-chaitanya-mahaprabhu.jpg"),
    @("https://commons.wikimedia.org/wiki/File:Vallabhacharya_temple_pichwai.jpg", "vallabhacharya.jpg"),
    @("https://commons.wikimedia.org/wiki/File:Jayadayal_Goyandka_Gita_Press.jpg", "jayadayal-goyandka.jpg")
)

Write-Host "Starting download of saint images..." -ForegroundColor Green

# For images that failed, we'll use placeholder or existing images
# Check if we can use existing image for Premanand Maharaj
if (Test-Path "public\shri-hit-premanand-govind-sharan-ji-maharaj.jpg") {
    Copy-Item "public\shri-hit-premanand-govind-sharan-ji-maharaj.jpg" "public\premanand-maharaj.jpg" -Force
    Write-Host "Using existing image for Premanand Maharaj" -ForegroundColor Green
}

foreach ($image in $images) {
    $url = $image[0]
    $filename = $image[1]
    $filepath = Join-Path $publicDir $filename
    
    # Skip if file already exists
    if (Test-Path $filepath) {
        Write-Host "File already exists: $filename" -ForegroundColor Cyan
        continue
    }
    
    try {
        Write-Host "Downloading: $filename" -ForegroundColor Yellow
        # Try direct download first
        if ($url -like "*commons.wikimedia.org*") {
            # For Wikimedia, try to get the direct image URL
            $directUrl = $url -replace "/wiki/File:", "/wiki/Special:FilePath/"
            try {
                Invoke-WebRequest -Uri $directUrl -OutFile $filepath -ErrorAction Stop
                Write-Host "Successfully downloaded: $filename" -ForegroundColor Green
            } catch {
                Write-Host "Failed to download $filename from Wikimedia, will use placeholder" -ForegroundColor Yellow
            }
        } else {
            Invoke-WebRequest -Uri $url -OutFile $filepath -ErrorAction Stop
            Write-Host "Successfully downloaded: $filename" -ForegroundColor Green
        }
    }
    catch {
        Write-Host "Failed to download $filename : $_" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Download process completed!" -ForegroundColor Green
Write-Host "Note: Some images may need to be downloaded manually or use placeholder images." -ForegroundColor Yellow
