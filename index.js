// var http = require('http');
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write('hii everyone');
//     res.end();
// }).listen(5000);

var http = require('http');
var server = http.createServer((req,res)=> {
    res.end('hiii everyone');
});
server.listen(8080,'127.0.0.1',()=>{
    console.log('Listening to requests');
});
