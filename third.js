

const fs = require('fs');
const readline = require("readline")

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});





rl.question("Please enter a filename: ", (file1) => {
	var file1 = file1.toUpperCase();
	fs.readFile(file1, (err, data) => {
		if (err) throw err;
		console.log(data);
	});
	fs.writeFile(file2, file1, function(err) {
		if (err) return console.log(err);

	})



})