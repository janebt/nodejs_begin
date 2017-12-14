let http = require("http");
let url = require("url");

let start = (route, handle) => {

	let onRequst = (request, response) => {
		let postData = "";
		let pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");

		request.setEncoding("utf8");

		request.addListener("data", function(postDataChunk){
			postData += postDataChunk;
			console.log("Received POST data chunk'"+ postDataChunk + "'.");
		})

		request.addListener("end", function(postDataChunk){
			route(handle, pathname, response, postData);
		})
	}

	http.createServer(onRequst).listen(8888);

	console.log("Server has started.");
	console.log("请在浏览器中打开 http://127.0.0.1:8888...");
}

exports.start = start;