// Con strictNullChecks en true
let a: string = undefined;  //Error
let b: string = null;  //Error
let c: string = "";  //Error
let d: string = "y";  //Error
let e: string = "building";  //Error
let f: string = 3;  //Error
let g: string = "3";  //Error


// Con strictNullChecks en false
let a: string = undefined;  //Ok
let b: string = null; //Ok
let c: string = "";  
let d: string = "y";  
let e: string = "building";
let f: string = 3;  //Error
let g: string = "3"; 


let e: string = "building";
let f: number = 300;

let sentence: string = "the ${e} in front of my office is ${f} feet tall.";


