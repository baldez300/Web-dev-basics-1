const fs = require('fs');

try {
    const data = fs.readFileSync('sample2.txt', 'utf8');
    console.log('File contents (Synchronous Read):', data);
} catch (err) {
    console.error('Error reading file:', err);
}

// write data to a file
try {
    fs.writeFileSync('output2.txt', 'This is some sample data (Synchronous Write).');
    console.log('Data written to output2.txt (Synchronous Write)');
  } catch (err) {
    console.error('Error writing file:', err);
}

// Import the os module and access various pieces of information about the operating system:
const os = require('os');

console.log('Hostname:', os.hostname());
console.log('OS Platform:', os.platform());
console.log('CPU Cores:', os.cpus());

// Use fs.writeFileSync() to log os.hostname() and os.platform().
const info = `Hostname: ${os.hostname()}\nPlatform: ${os.platform()}`;

// Write the information to a file
try {
  fs.writeFileSync('system_info.txt', info);
  console.log('System information has been written to system_info.txt');
} catch (err) {
  console.error('Error writing system information:', err);
}

// How to read all the files in a directory
const filesInDir = fs.readdirSync('./');
console.log('Files in current directory:', filesInDir);

// How to read all the files in a directory
fs.readdir('./', (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }
  
    console.log('Files in current directory:', files);
});

// How add event listeners to the process object
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('my-event', (event) => {
  console.log('Event fired!', event);
});

myEmitter.emit('my-event', {id: 1, url: 'http://'});

// How to add event listeners http locally
/*
const http = require('http');

const server = http.createServer((rep, res) => {
  if (req.url === '/') {
    res.write('Hello World');
    res.end();
  }
});
server.listen(3000);

console.log('Listening on port 3000...');
*/