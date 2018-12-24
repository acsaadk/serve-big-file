'use strict';
const path = require('path');

module.exports = {
  filesPath: path.resolve('./data'), //absolute route
  bigFileName: 'big.file',
  bufferSize: 64 * 1024,
  listeningPort: 8000
};
