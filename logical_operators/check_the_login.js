let visitor = prompt("Login");

if ( visitor === "Admin") {
    let pass = prompt("Password");

if ( pass === "TheMaster" ) {
    alert("Welcome!");
} else if ( pass === "" || pass === null ) {
    alert("Canceled");
} else {
    alert("Wrong password");
}

} else if ( visitor === "" || visitor === null ) {
    alert("Canceled")
} else {
    alert("I don't know you")
}

