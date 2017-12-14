let http = require("http")

let onRequst = (request, response) => {
	console.log("Request received.");
	response.writeHead(200, {"Content-Type":"text/plain;charset=utf-8"});
	response.write("xxx");
	response.end();
}

http.createServer(onRequst).listen(8888);

console.log("Server has started.");
console.log("请在浏览器中打开 http://127.0.0.1:8888...");