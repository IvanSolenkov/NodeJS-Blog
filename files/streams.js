const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt');
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => {
//     writeStream.write('\n New Chunk \n');
//     writeStream.write(chunk);
// })

// Piping

readStream.pipe(writeStream);