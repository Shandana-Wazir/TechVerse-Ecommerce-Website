const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'images');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

// Curated high quality gadget images matching each specific item
const imagesToFetch = [
  // Hero elements or composites
  {
    name: 'hero_composite.jpg',
    url: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=1200&auto=format&fit=crop&q=85' // Apple watch & gadget aesthetic
  },
  {
    name: 'hero_headphones.png',
    url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=85' // Premium silver/black headphones
  },
  {
    name: 'hero_smartwatch.png',
    url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=85' // Minimal watch
  },
  {
    name: 'hero_earbuds.png',
    url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=85' // Wireless earbuds case
  },
  {
    name: 'hero_phone.png',
    url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02560?w=800&auto=format&fit=crop&q=85' // Smartphone
  },
  
  // Category thumbnails
  {
    name: 'cat_audio.png',
    url: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&auto=format&fit=crop&q=85' // Headphones
  },
  {
    name: 'cat_smart_devices.png',
    url: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=400&auto=format&fit=crop&q=85' // Smart speaker cylinder
  },
  {
    name: 'cat_wearables.png',
    url: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&auto=format&fit=crop&q=85' // Smart watch
  },
  {
    name: 'cat_accessories.png',
    url: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&auto=format&fit=crop&q=85' // Phone case / gadget accessory
  },
  {
    name: 'cat_deals.png',
    url: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&auto=format&fit=crop&q=85' // Deals / shopping gift
  },

  // Trending Products (6 items)
  {
    name: 'prod_smartwatch.png',
    url: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&auto=format&fit=crop&q=85' // Smart Watch Series 9
  },
  {
    name: 'prod_earbuds.png',
    url: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&auto=format&fit=crop&q=85' // Wireless Earbuds Pro
  },
  {
    name: 'prod_speaker.png',
    url: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=85' // Bluetooth Speaker
  },
  {
    name: 'prod_charger.png',
    url: 'https://images.unsplash.com/photo-1622445262464-84b150777731?w=600&auto=format&fit=crop&q=85' // Wireless Charger stand
  },
  {
    name: 'prod_drone.png',
    url: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=600&auto=format&fit=crop&q=85' // 4K Drone
  },
  {
    name: 'prod_gimbal.png',
    url: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=600&auto=format&fit=crop&q=85' // Gimbal / stabilizer
  },

  // Lifestyle Upgrade Cards (5 items)
  {
    name: 'idea_tech_setup.jpg',
    url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=85' // Desk setup with laptop & headphones
  },
  {
    name: 'idea_travel_tech.jpg',
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=85' // Travel flatlay EDC
  },
  {
    name: 'idea_smart_home.jpg',
    url: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=85' // Smart home living room
  },
  {
    name: 'idea_gaming_gear.jpg',
    url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=85' // RGB gaming battlestation
  },
  {
    name: 'idea_minimal_desk.jpg',
    url: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&auto=format&fit=crop&q=85' // Minimal desk setup
  }
];

async function downloadImages() {
  console.log('Downloading assets...');
  for (const item of imagesToFetch) {
    const dest = path.join(imgDir, item.name);
    try {
      const res = await fetch(item.url);
      if (!res.ok) {
        console.error(`Failed ${item.name}: ${res.status}`);
        continue;
      }
      const buffer = await res.arrayBuffer();
      fs.writeFileSync(dest, Buffer.from(buffer));
      console.log(`Saved ${item.name} (${buffer.byteLength} bytes)`);
    } catch (err) {
      console.error(`Error saving ${item.name}:`, err.message);
    }
  }
  console.log('Done downloading images.');
}

downloadImages();
