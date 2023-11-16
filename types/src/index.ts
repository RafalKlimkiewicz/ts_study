console.log("Hello, TypeScript - Static Types");

function calculateTax(amount: number) {
    return Number((amount * 1.2).toFixed(2));
}

console.log(`${12} = ${calculateTax(12)}`);
//console.log(`${"Hi"} = ${calculateTax("Hi")}`); --error
//console.log(`${true} = ${calculateTax(true)}`); --error

let price: number = 100;
let taxAmout: number = calculateTax(price);
let halfShare: number = taxAmout / 2;

console.log(`Full price with tax: ${taxAmout}`);
console.log(`Half price with tax: ${halfShare}`);