const https = require('https');
const fs = require('fs');
const path = require('path');

// Image URL from data store
const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Shri_Hit_Premanand_Govind_Sharan_Ji_Maharaj_002_year_2023_%28cropped%29.jpg/960px-Shri_Hit_Premanand_Govind_Sharan_Ji_Maharaj_002_year_2023_%28cropped%29.jpg';

// Output filename
const filename = 'shri-hit-premanand-govind-sharan-ji-maharaj.jpg';
const outputPath = path.join(__dirname, '..', 'public', filename);

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Download the image with User-Agent header
const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
};

https.get(imageUrl, options, (response) => {
  if (response.statusCode === 200 || response.statusCode === 301 || response.statusCode === 302) {
    // Handle redirects
    if (response.statusCode === 301 || response.statusCode === 302) {
      const redirectUrl = response.headers.location;
      console.log(`🔄 Redirecting to: ${redirectUrl}`);
      https.get(redirectUrl, options, (redirectResponse) => {
        if (redirectResponse.statusCode === 200) {
          const fileStream = fs.createWriteStream(outputPath);
          redirectResponse.pipe(fileStream);
          
          fileStream.on('finish', () => {
            fileStream.close();
            console.log(`✅ Image downloaded successfully: ${filename}`);
            console.log(`📁 Saved to: ${outputPath}`);
            console.log(`\n💡 Update data-store.ts to use: "/${filename}"`);
          });
        } else {
          console.error(`❌ Failed to download image. Status code: ${redirectResponse.statusCode}`);
          process.exit(1);
        }
      }).on('error', (err) => {
        console.error(`❌ Error downloading image: ${err.message}`);
        process.exit(1);
      });
      return;
    }
    
    const fileStream = fs.createWriteStream(outputPath);
    response.pipe(fileStream);
    
    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`✅ Image downloaded successfully: ${filename}`);
      console.log(`📁 Saved to: ${outputPath}`);
      console.log(`\n💡 Update data-store.ts to use: "/${filename}"`);
    });
  } else {
    console.error(`❌ Failed to download image. Status code: ${response.statusCode}`);
    process.exit(1);
  }
}).on('error', (err) => {
  console.error(`❌ Error downloading image: ${err.message}`);
  process.exit(1);
});

