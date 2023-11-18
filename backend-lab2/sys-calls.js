const fs = require('fs');
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File contents:', data);
    }
});


fs.writeFile('output.txt', 'This is some sample data.', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('Data written to output.txt');
    }
});


const os = require('os');
console.log('Home directory:', os.homedir());
console.log('Hostname:', os.hostname());
console.log('Free memory:', os.freemem());
console.log('OS type:', os.type());
console.log('OS release:', os.release());
console.log('OS uptime:', os.uptime());
console.log('OS platform:', os.platform());
console.log('OS cpus:', os.cpus());

fs.writeFile('output.txt', '\n'+os.machine(), (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('Data written to output.txt');
    }
});

