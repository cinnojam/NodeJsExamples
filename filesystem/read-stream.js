'use strict';
const fs = require('fs');
fs.createReadStream(process.argv[2])
  .on('data',chunk=>process.stdout.write(`CHUNK: ${chunk}`))
  .on('error',err=>process.stderr.write(`ERROR: ${err.message}\n`));
