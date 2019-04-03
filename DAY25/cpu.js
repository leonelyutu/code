								
//Name of the file : cpus.js
var http = require('http');
var host = '127.0.0.1'
var port = 3000

var os = require('os');
var value =  os.cpus();
var fs = require('fs');
content = "os.cpus() ==> " + JSON.stringify(value) ;

var server = http.createServer((request, response) => {
  console.log("os.cpus() ==> " + JSON.stringify(value) );
  fs.writeFile('index.html', content , (err) => {
	if (err) 
		throw err;
	console.log('It\'s saved!');
});

response.writeHead(200, {'Content-Type': 'text/html'});
fs.readFile('index.html', (err, data) => {

    //checking for errorsos.cpus() ==> [{"model":"AMD E-450 APU with Radeon(tm) HD Graphics","speed":1650,"times":{"user":4250900,"nice":2800,"sys":1217700,"idle":12850600,"irq":0}},{"model":"AMD E-450 APU with Radeon(tm) HD Graphics","speed":1320,"times":{"user":4266200,"nice":2200,"sys":1233500,"idle":12666600,"irq":0}}]
    if (err) 
        throw err;
    console.log("Operation Success");
    //sending the response
    response.end(data);
});



});



server.listen(port,host, (error) => {  
  if (error) {
    return console.log('Error occured : ', error );
  }

  console.log('server is listening on ' + host + ':'+ port);
});	
		


