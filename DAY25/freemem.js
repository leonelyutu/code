								
//Name of the file: freemem.js
var os = require('os');
var value =  os.freemem();
console.log("os.freemem() => " + value);

								
//Name of the file: totalmem.js
var os = require('os');
var value =  os.totalmem();
console.log("os.totalmem() => " + value);