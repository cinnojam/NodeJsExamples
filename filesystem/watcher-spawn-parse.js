'use strict';
const fs = require('fs');
const spawn = require('child_process').spawn;
const filename = process.argv[2];
if (!filename) {
  throw Error('A file to watch must be specified!');
}
fs.watch(filename,()=> {
  const ls = spawn('ls',['-l','-h',filename]);
  let output = '';
  ls.stdout.on('data',chunk=>output+=chunk);
  ls.on('close',()=>{
    const parts = output.replace('\n',' ').split(" ");
    console.log(`Output = ${output}`);
    console.log(`Output has ${parts.length} parts`);
    console.log([parts[0],parts[4],parts[8]]);
  });
  parts.reduce((p, c) => {}, initial);
  //console.log(`File ${filename} changed!`));
});
console.log(`Now watching ${filename} for changes...`);
