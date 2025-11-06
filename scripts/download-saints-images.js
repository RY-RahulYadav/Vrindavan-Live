const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// Saints images to download
const saintsImages = [
  {
    id: 1,
    name: "Premanand Maharaj",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Shri_Hit_Premanand_Govind_Sharan_Ji_Maharaj_002_year_2023_%28cropped%29.jpg/960px-Shri_Hit_Premanand_Govind_Sharan_Ji_Maharaj_002_year_2023_%28cropped%29.jpg",
    filename: "shri-hit-premanand-govind-sharan-ji-maharaj.jpg"
  },
  {
    id: 2,
    name: "A.C. Bhaktivedanta Swami Prabhupada",
    url: "https://satsvarupadasagoswami.com/wp-content/uploads/2017/01/SrilaPrabhupada.jpg",
    filename: "srila-prabhupada.jpg"
  },
  {
    id: 3,
    name: "Chaitanya Mahaprabhu",
    url: "https://www.dnaofhinduism.com/uploads/7/1/4/2/71428171/sri-chaitanya-mahaprabhu_orig.jpg",
    filename: "sri-chaitanya-mahaprabhu.jpg"
  },
  {
    id: 4,
    name: "Ramesh Baba Maharaj",
    url: "https://i.ytimg.com/vi/1O6mPzJ5w3A/maxresdefault.jpg",
    filename: "ramesh-baba-maharaj.jpg"
  },
  {
    id: 5,
    name: "Radhanath Swami",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Radhanath_Swami_2010.jpg",
    filename: "radhanath-swami-2010.jpg"
  },
  {
    id: 6,
    name: "Vallabhacharya",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Vallabhacharya_temple_pichwai.jpg",
    filename: "vallabhacharya-temple-pichwai.jpg"
  },
  {
    id: 7,
    name: "Jayadayal Goyandka",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Jayadayal_Goyandka_Gita_Press.jpg",
    filename: "jayadayal-goyandka-gita-press.jpg"
  }
];

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Download function
function downloadImage(imageData) {
  return new Promise((resolve, reject) => {
    const imageUrl = new URL(imageData.url);
    const isHttps = imageUrl.protocol === 'https:';
    const client = isHttps ? https : http;
    
    const outputPath = path.join(publicDir, imageData.filename);
    
    // Skip if already exists
    if (fs.existsSync(outputPath)) {
      console.log(`⏭️  Skipping ${imageData.name} - file already exists`);
      resolve({ ...imageData, skipped: true });
      return;
    }

    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    };

    console.log(`⬇️  Downloading ${imageData.name}...`);

    const request = client.get(imageData.url, options, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        const redirectUrl = response.headers.location;
        console.log(`🔄 Redirecting ${imageData.name} to: ${redirectUrl}`);
        const redirectClient = redirectUrl.startsWith('https') ? https : http;
        const redirectRequest = redirectClient.get(redirectUrl, options, (redirectResponse) => {
          if (redirectResponse.statusCode === 200) {
            const fileStream = fs.createWriteStream(outputPath);
            redirectResponse.pipe(fileStream);
            
            fileStream.on('finish', () => {
              fileStream.close();
              console.log(`✅ Downloaded: ${imageData.name} -> ${imageData.filename}`);
              resolve({ ...imageData, success: true });
            });
          } else {
            console.error(`❌ Failed to download ${imageData.name}. Status: ${redirectResponse.statusCode}`);
            reject(new Error(`Status code: ${redirectResponse.statusCode}`));
          }
        });
        
        redirectRequest.on('error', reject);
        return;
      }

      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(outputPath);
        response.pipe(fileStream);
        
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✅ Downloaded: ${imageData.name} -> ${imageData.filename}`);
          resolve({ ...imageData, success: true });
        });
      } else {
        console.error(`❌ Failed to download ${imageData.name}. Status: ${response.statusCode}`);
        reject(new Error(`Status code: ${response.statusCode}`));
      }
    });

    request.on('error', (err) => {
      console.error(`❌ Error downloading ${imageData.name}: ${err.message}`);
      reject(err);
    });
  });
}

// Download all images
async function downloadAll() {
  console.log('🚀 Starting download of all saints images...\n');
  
  const results = [];
  
  for (const imageData of saintsImages) {
    try {
      const result = await downloadImage(imageData);
      results.push(result);
      // Small delay between downloads to be respectful
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`❌ Error with ${imageData.name}:`, error.message);
      results.push({ ...imageData, error: error.message });
    }
  }
  
  console.log('\n📊 Download Summary:');
  console.log('='.repeat(50));
  const successful = results.filter(r => r.success);
  const skipped = results.filter(r => r.skipped);
  const failed = results.filter(r => r.error);
  
  console.log(`✅ Successful: ${successful.length}`);
  console.log(`⏭️  Skipped: ${skipped.length}`);
  console.log(`❌ Failed: ${failed.length}`);
  
  if (successful.length > 0 || skipped.length > 0) {
    console.log('\n💡 Update data-store.ts with these local paths:');
    saintsImages.forEach(img => {
      console.log(`  "${img.name}": "/${img.filename}"`);
    });
  }
  
  if (failed.length > 0) {
    console.log('\n⚠️  Failed downloads:');
    failed.forEach(img => {
      console.log(`  - ${img.name}: ${img.error}`);
    });
  }
}

downloadAll().catch(console.error);

