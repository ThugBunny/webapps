// con strictNullChecks en true
let a: void = undefined; // Ok
let b: void = null; //Error
let c: void = 3; //Error
let d: void = "apple"; //Error

// con strictNullChecks en false
let a: void = undefined; // Ok
let b: void = null; // Ok
let c: void = 3; // Error
let d: void = "apple"; //Error
