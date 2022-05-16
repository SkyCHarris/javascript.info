// The "while" loop

while (condition) {
    // code
    // so-called "loop body"
}

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
    alert( i );
    i++;
}

let i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
    alert( i );
    i--;
}


// The "do...while" loop

do {
    // loop body
} while (condition);

let i = 0;
do {
    alert( i );
    i++;
} while (i < 3);


// The "for" loop

for (begin; condition; step) {
    // ... loop body ...
}

for (let i = 0; i <3; i++) { // shows 0, then 1, then 2
    alert(i);
}

// for (let i=0; i<3; i++)

// run begin
let i = 0
// if condition -> run body and run step
if (i <3) { alert(i); i++}
// if condition -> run body and run step
if (i <3) { alert(i); i++}
// if condition -> run body and run step
if (i <3) { alert(i); i++}
// ...finish, because now i == 3


// Skipping Parts

let i = 0 // we have i already declared and assigned

for (; i<3; i++) { // no need for "begin"
    alert( i ); // 0, 1, 2
}

// remove step part

let i = 0;

for (; i < 3;) {
    alert( i ++ );
}

// remove everything

for (;;) {
    // repeats without limits
}


// Breaking the loop

let sum = 0;

while (true) {
    let value = +prompt("Enter a number", '');
    if (!value) break; // (*)
    sum += value;
}
alert( 'Sum: ' + sum );



// Continue to the next iteration

 for (let i=0; i<10; i++) {
     
    // if ture skip the remaining part of the body
    if (i % 2 == 0) continue;

    alert(i); // 1, then 3, 5, 7, 9
 }

// Continue directive helps decrease nesting

for (let i = 0; i < 10; i++) {
    if (i % 2) {
        alert(i);
    }
}

// No break/continue to the right side of '?'

if (i > 5) {
    alert(i);
} else {
    continue;
}



// Labels for break/continue

for (let i=0; i<3; i++) {
    for (let j=0; j<3; j++) {
        let input = prompt(`Value at coords (${i},${j})`, '');
        // what if we want to exit from here to Done (below) ?
    }
}

alert('Done!');

// break <labelName>

outer: for (let i=0; i<3; i++) {
    for (let j=0; j<3; j++) {
        let input = prompt(`Value at coords (${i},${j})`, '');

        // if an emptry string or canceled, then break out of both loops
        if (!input) break outer; // (*)

        // do something with the value...
    }
}

alert('Done!');

// Labels do not allow to "jump" anywhere

break label; // jump to the label below (doesn't work)

label: for (...)

// must be inside code block

label: {
    // ...
    break label; // works
    // ...
}