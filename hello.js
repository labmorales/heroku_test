var http = require("http");

http.createServer(function(request, response){
	response.writeHead(200);
	response.write("Hello World\n");
	setTimeout(function(){
		response.write("Goobye World");
		response.end();
	}, 5000);
	
}).listen(8080);

console.log("Escutando na 8080");