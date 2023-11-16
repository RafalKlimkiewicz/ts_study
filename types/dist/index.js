console.log("Hello, TypeScript - Static Types");
function calculateTax(amount) {
    return Number((amount * 1.2).toFixed(2));
}
console.log(`${12} = ${calculateTax(12)}`);
//console.log(`${"Hi"} = ${calculateTax("Hi")}`); --error
//console.log(`${true} = ${calculateTax(true)}`); --error
let price = 100;
let taxAmout = calculateTax(price);
let halfShare = taxAmout / 2;
console.log(`Full price with tax: ${taxAmout}`);
console.log(`Half price with tax: ${halfShare}`);
