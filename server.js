'use strict';

const { filesPath, bigFileName, bufferSize, listeningPort } = require('./config/defaults');
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();
server.on('request', (req, res) => {
  console.log(req.headers);
  let stream = fs.createReadStream(path.join(filesPath, bigFileName), { bufferSize });
  stream.pipe(res);
});
server.listen(listeningPort);
