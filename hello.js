var http = require("http"), fs = require("fs");

http.createServer(function(request, response){
	var new_file = fs.createWriteStream("log.txt");
	var total = request.headers["content-length"];
	var uploadBytes = 0;

	request.pipe(new_file);

	request.on("data", function(chunk){
		uploadBytes += chunk.length;
		var porcentagem = ( uploadBytes / total) * 100;
		console.log("Progresso:" + porcentagem);		
	});

	request.on("end", function(){
		response.end();
	});

}).listen(8080);

console.log("Escutando na 8080");