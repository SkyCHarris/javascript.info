
// if the first operand is truthy,
// AND returns the second operand:

alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first oeprand is falsy,
// AND returns it. The second operand is ignored

alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

alert( 1 && 2 && null && 3 ); // null

alert( 1 && 2 && 3 ); // 3, the last one