// What is the last value alerted by this code? Why?

let i = 3;

while (i) {
    alert( i-- );
}

// 1. Because alert shows 1, then decreases i to 0, but does not alert again since while only works while truthy

