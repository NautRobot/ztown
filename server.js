const express = require('express');
const http = require('http');
const path = require('path');
const { createWispServer } = require('@cloverworks/wisp-server-node');
const { uvPath } = require('@titaniumnetwork-dev/ultraviolet');

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname__, 'public')));

app.use('/uv/', express.static(uvPath));

server.on('upgrade', (req, socket, head) => {
    if (req.url.startsWith('/wisp/')) {
        createWispServer(req, socket, head);
    } else {
        socket.end();
    }
});

server.listen(PORT, () => {
    console.log("Online at ${PORT}");
});