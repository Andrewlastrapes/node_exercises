



const readline = require("readline")
const dns = require('dns');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


	



rl.question("Please enter a url: ", (url) => {
	dns.lookup(url, function (err, addresses) {
  	console.log(addresses);
  	if(err){
  		console.log("error")
  		return;
  	}
  	});
});
