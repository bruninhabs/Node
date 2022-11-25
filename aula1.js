var http = require('http');
http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'test/html'});
    res.write('<h2> Brasil 3 x 1 Servia </h2>\n ');
   res.write(Date().substring(16,24)+ '<br>');
    res.end('Leo viado');

}).listen(8080)