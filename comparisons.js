const greaterThan = 5 > 4;
// True
console.log(greaterThan);

const fruit = "apple" > "pineapple";
// False
console.log(fruit);

const numberStrings = "2" > "12";
// True
console.log(numberStrings);

const undeNul = undefined == null;
// True
console.log(undeNul);

const undeNulStrict = undefined === null;
// False
console.log(undeNulStrict);

const nulTestOne = null == "\n0\n";
// False
console.log(nulTestOne);

const nulTestTwo = null === +"\n0\n";
// False
console.log(nulTestTwo);