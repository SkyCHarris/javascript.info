result = (a !== null && a !== undefined) ? a : b;

// 1
let user;

alert(user ?? "Anonymous"); // Anonymous (user not defined)

let user = "John";

alert(user ?? "Anonymous"); // John (user defined)


// 2
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder


// Comparison with ||


// 1
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first truthy value:
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder

// 2
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0


// Precedence

// 1
let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area); 

// without parentheses
let area = height ?? 100 * width ?? 50;

// ...works this way (not what we want)
let area = height ?? (100 * width) ?? 50;


// Using ?? with && or ||

let x = 1 && 2 ?? 3; // Syntax error

let x = (1 && 2) ?? 3; // Works

alert(x); // 2