
alert ( true || true );
alert ( false || true );
alert ( true || false );
alert ( false || false );

if (1 || 0) {
    alert( 'truthy!' );
}

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
    alert( 'The office is closed.' );
}
