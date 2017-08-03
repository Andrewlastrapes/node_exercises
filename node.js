
// Read a file

const fs = require('fs');
const readline = require("readline")

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


// rl.question("Please enter a filename?", (filename) =>{
// 	var answer = filename.toUpperCase();
// 	console.log("Hello, I am" + answer);
// 	rl.close();
// 	fs.readFile(filename, (err, buffer) => {
// 		if (err){
// 			console.log(err.message);
// 			return;
// 		}
// 	});
// });


// DNS lookup


const dns = require('dns');

rl.question("Please enter a domain name: ", (url) => {
	dns.lookup(url, function (err, addresses) {
  console.log(addresses);
};

