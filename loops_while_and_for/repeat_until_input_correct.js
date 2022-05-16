// Write a loop which prompts for a number greater than 100. If the visitor enters another number- ask them to input again

// Loop must ask for a number until either the visitor enters a number greater than 100 or cancel sthe input/enters an empty line

// Can assume the visitor only i nputs numbers. No need to implemeent special handling for a non-numeric input

let input;

do {
   input = prompt("Enter a number greater than 100!", 0);
} while (input <= 100 && input)
