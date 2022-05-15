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

