const fs = require("fs")
const http = require("http");
const server = http.createServer( (req, res) => {
	console.log(req.url);
	let urlPath = req.url.slice(1);
	fs.readFile("blah.html", (error, buffer) => {
		res.end(buffer,toString());
	});
});

server.listen(8887, () => {
	console.log("Here I am");
});