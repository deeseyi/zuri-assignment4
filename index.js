const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.url === '/') {

        fs.createReadStream('./client/index.html').pipe(res)
    }
    if (req.url === '/about') {

        fs.createReadStream('./client/about.html').pipe(res)
    }
    if (req.url === '/contact') {

        fs.createReadStream('./client/contact.html').pipe(res)
    }
    if (req.url === '/home') {
        res.writeHead(302, { 'Location': '/' });
        res.end();  
    }
  
});


server.listen(1337, () => {
    console.log('Server is listening on port 1337');
});






