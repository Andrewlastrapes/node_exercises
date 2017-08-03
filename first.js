
// Read a file

const fs = require('fs');
const readline = require("readline")

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


rl.question("Please enter a filename?", (filename) =>{
	var answer = filename.toUpperCase();
	console.log("Hello, I am" + answer);
	rl.close();
	fs.readFile(filename, (err, buffer) => {
		if (err){
			console.log(err.message);
			return;
		}
	});
});



