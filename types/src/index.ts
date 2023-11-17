console.log("Hello, TypeScript - Static Types");

function calculateTax(amount: any): any { //src/index.ts(3,23): error TS7006: Parameter 'amount' implicitly has an 'any' type.  --  "noImplicitAny": true,    
    return `${(amount * 1.2).toFixed(2)} $`;
}

console.log(`${12} = ${calculateTax(12)}`);
//console.log(`${"Hi"} = ${calculateTax("Hi")}`); --error
//console.log(`${true} = ${calculateTax(true)}`); --error
console.log(`\n`);


let price = 100;
let taxAmout = calculateTax(price);
let halfShare = taxAmout / 2;

console.log(`Full price with tax: ${taxAmout}`);
console.log(`Half price with tax: ${halfShare}`); //NaN

function calculateTax2(amount: number, format: boolean): number | string {
    const calcAmount = amount * 1.2;
    return format ? `${calcAmount.toFixed(2)} $` : calcAmount;
}

let taxNumber = calculateTax2(200, false);
let taxString = calculateTax2(200, true);

//console.log(`number: ${taxNumber.toFixed(2)}`); //Property 'toFixed' does not exist on type 'string | number'. Property 'toFixed' does not exist on type 'string'.
//console.log(`string: ${taxString.charAt(0)}`); //Property 'charAt' does not exist on type 'string | number'.  Property 'charAt' does not exist on type 'number'.
console.log(`string: ${taxString}`);

//Type Assertion
console.log(`\n`);


let taxNumberTa = calculateTax2(200, false) as number;
let taxStringTa = calculateTax2(200, true) as string;
let taxStringTa2 = <string> calculateTax2(200, true); //2nd aproach

//let taxBooleanTa = calculateTax2(200, true) as boolean; //Conversion of type 'string | number' to type 'boolean' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first. Type 'number' is not comparable to type 'boolean'.
let taxBooleanTa = calculateTax2(200, true) as any as boolean;

console.log(`number: ${taxNumberTa.toFixed(2)}`);
console.log(`string: ${taxStringTa.charAt(0)}`);
console.log(`boolean: ${taxBooleanTa}  ${typeof taxBooleanTa}`); //boolean: 240.00 $

//Unexpected Type Assertion

console.log(`\n`);

let taxValue = calculateTax2(100, false);

if(typeof taxValue === "number"){
    console.log(`number type: ${taxValue.toFixed(2)}`);
} else if(typeof taxValue === "string"){
    console.log(`string type: ${taxValue.charAt(7)}${taxValue.charAt(8)}`);

}

