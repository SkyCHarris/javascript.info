
alert ( true || true );
alert ( false || true );
alert ( true || false );
alert ( false || false );

if (1 || 0) {
    alert( 'truthy!' );
}

let hour = 9;

if (hour < 10 || hour > 18) {
    alert( 'The office is close.' );
}