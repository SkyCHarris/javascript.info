// Using the if...else construct, write the code which asks: 'What is the "official" name of JavaScript?'
// If the visitor enters "ECMAScript", then output "Right!", othewrwise - output: "You don't know? ECMAScript!"

let userInput = prompt("What is the 'official' name of JavaScript?");

if ( userInput == "ECMAScript") {
    alert("Right!");
} else {
    alert("You don't know? ECMAScript!")
}