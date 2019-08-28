// con strictNullChecks en true
let a: undefined = undefined; // Ok
let b: undefined = null; //Error
let c: number = undefined; //Error
let d: void = undefined; //Ok

// con strictNullChecks en false
let a: undefined = undefined; // Ok
let b: undefined = null; // Ok
let c: number = undefined; // Ok
let d: void = undefined; //Ok
