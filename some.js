const fs = require('fs');
const path = require('path');
const mkdir = require('fs/promises').mkdir

setInterval(() => {
    const memoryUsage = process.memoryUsage();
    console.log('Использование памяти:');
    console.log(`RSS: ${Math.round(memoryUsage.rss / 1024 / 1024)} MB`);
    console.log(`Heap Total: ${Math.round(memoryUsage.heapTotal / 1024 / 1024)} MB`);
    console.log(`Heap Used: ${Math.round(memoryUsage.heapUsed / 1024 / 1024)} MB`);
    console.log(`External: ${Math.round(memoryUsage.external / 1024 / 1024)} MB`);
    console.log(`Array Buffers: ${Math.round(memoryUsage.arrayBuffers / 1024 / 1024)} MB`);
}, 5000);

function generateRandomName() {
    return Math.random().toString(36).substring(2, 15);
}

const createRandomFolders = async () => {
    const folderName = generateRandomName();
    const folderPath = path.join(__dirname,'tmp', folderName);
    await mkdir(folderPath);
}

(async () => {
while (true) {
    const promises = []
    for (let i = 0; i < 300; i++) {
        promises.push(createRandomFolders());
    }
    await Promise.all(promises);
}
})()
