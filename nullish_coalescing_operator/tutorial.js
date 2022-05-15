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