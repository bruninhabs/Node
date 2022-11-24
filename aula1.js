var http = require('http');
http.createServer(function (req,res){
    res.write('Brasil 3 x 1 Servia \n');
    res.end('Leo viado');

}).listen(8080)