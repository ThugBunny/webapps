// strictNullChecks set to true

let a: null = nukk; //Todo bien
let b: undefined = nukk; //Error
let c: number = null; //Error
let d: void = null; //Error

// strictNullChecks set to false

let a: null = null; //Todo bien
let b: undefined = null; //Ok
let c: number = null; //Ok
let d: void = null; //Ok
