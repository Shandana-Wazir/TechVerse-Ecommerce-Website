const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'images');

const missing = [
  {
    name: 'hero_phone.png',
    url: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&auto=format&fit=crop&q=85' // Dark matte smartphone
  },
  {
    name: 'prod_charger.png',
    url: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=85' // Wireless charging station / dock
  },
  {
    name: 'hero_main_showcase.jpg',
    url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000&auto=format&fit=crop&q=85'
  }
];

async function downloadMissing() {
  for (const item of missing) {
    const dest = path.join(imgDir, item.name);
    try {
      const res = await fetch(item.url);
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(dest, Buffer.from(buffer));
        console.log(`Saved ${item.name} (${buffer.byteLength} bytes)`);
      } else {
        console.log(`Still failed ${item.name}: ${res.status}`);
      }
    } catch (e) {
      console.error(e.message);
    }
  }
}

downloadMissing();
