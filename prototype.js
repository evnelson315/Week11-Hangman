// Take in an input value in the form of an integer
var a = process.argv[2];
var wins = 0;
var losses = 0;
var computerChoices = ['a','b','c','d','e','d','e','f','g','h', 'i' ,'j' ,'k' ,'l', 'm' ,'n' ,'o' ,'p' ,'q' ,'r' ,'s' ,'t', 'u', 'v', 'w' ,'x' ,'y' ,'z'];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// Go from 6 to the number. Adding up 6 each time (to only get multiples of 6).
if (a == computerGuess){
	console.log("you won!"),
	wins++;
}
else {
	console.log("you lost!"),
	losses++;
};
// Each time add i to the sum. (ex: 6, 12, 18, etc.)
console.log("wins:"+wins);
console.log("losses:"+losses);
// Print out the sum
