import calcTaxandSum, { calculateTax } from "./tax";
import { printDetails, applyDiscount } from "./utils";

class Product {
    constructor(name, price) {
        this.id = Symbol();
        this.name = name;
        this.price = price;
    }

    toString() {
        return `toString: nazwa: ${this.name}, cena: ${this.price}`;
    }
}

class Supplier{
    constructor(name, productsids){
        this.name = name;
        this.productsids = productsids;
    }
}

class TaxedProduct extends Product {
    constructor(name, price, taxRate = 1.2) {
        super(name, price);
        this.taxRate = taxRate;
    }

    getPriceIncTax() {
        return Number(this.price) * this.taxRate;
    }

    toString() {
        let chainResult = super.toString();
        return `${chainResult}, z podatkiem: ${this.getPriceIncTax()}`;
    }

    static process(...products) {
        products.forEach(p => console.log(p.toString()));
    }
}

class GiftPack{
    constructor(name, prod1, prod2, prod3){
        this.name = name;
        this.prod1 = prod1;
        this.prod2 = prod2;
        this.prod3 = prod3;
    }

    getTotalPrice(){
        return [this.prod1, this.prod2, this.prod3].reduce((total, p) => total + p.getPriceIncTax(), 0);
    }

    *[Symbol.iterator](){
        yield this.prod1;
        yield this.prod2;
        yield this.prod3;
    }

    *getGenerator(){
        yield this.prod1;
        yield this.prod2;
        yield this.prod3;
    }
}

function CreateProductIterator() {
    const hat = new Product("czapa", 200);
    const boots = new Product("boots", 400);
    const umbrella = new Product("umbrella", 600);

    let lastVal;

    return {
        next() {
            switch (lastVal) {
                case undefined:
                    lastVal = hat;
                    return { value: hat, done: false };
                case hat:
                    lastVal = boots;
                    return { value: boots, done: false };
                case boots:
                    lastVal = umbrella;
                    return { value: umbrella, done: false };
                case umbrella:
                    return { value: undefined, done: true };

            }
        }
    }
}

function* generateProductIterator(){
    yield new Product("czapa2", 200);
    yield new Product("boots2", 400);
    yield new Product("umbrella2", 600);
}


//main
console.log(`*operator rozwinięcia:\n`);
[...generateProductIterator()].forEach(p => console.log(p.toString()));

console.log(`\n\n*generator\n`);
let generator = generateProductIterator();
let resultsG  = generator.next();
while(!resultsG.done){
    console.log(resultsG.value.toString())
    resultsG = generator.next();
}


console.log(`\n\n*iterator:\n`);

let iterator = CreateProductIterator();
let results  = iterator.next();
while(!results.done){
    console.log(results.value.toString())
    results = iterator.next();
}

let hat = new TaxedProduct("czapka", 12);
let boots = new TaxedProduct("buty", 13, 1.3);
let umbrella = new TaxedProduct("umbrella", 15);

// console.log(hat.toString());
// console.log(boots.toString());
// TaxedProduct.process(hat, boots)

console.log(`\n\n*objects and iteration:\n`);

let winter = new GiftPack("zima", hat, boots, umbrella);

console.log(`warość całkowita: ${ winter.getTotalPrice()}`);

[...winter.getGenerator()].forEach(p => console.log(`Produkt: ${p}`));
//2
console.log(`\n2nd approach:\n`);
[...winter].forEach(p => console.log(`Produkt: ${p}`));


let data = {
    hat: new Product("czapka", 100)
}

data.boots = new Product("buty", 400);

Object.keys(data).forEach(key => console.log(data[key].toString()));

//Map()
console.log(`\nMap:\n`);

let data2 = new Map();
data2.set("hat", new Product("czapka", 100));
data2.set("buty", new Product("buty", 200));

[...data2.keys()].forEach(key => console.log(data2.get(key).toString()));


//Map() + symbol
console.log(`\nMap + symbol:\n`);
let acmeProducts = [new Product("P1", 101), new Product("P2", 102)];
let zoomProducts = [new Product("P1", 101), new Product("P2", 102)];

let products = new Map();
[...acmeProducts, ...zoomProducts].forEach(p => products.set(p.id, p));
let suppliers = new Map();

suppliers.set("acme", new Supplier("Acme Co", acmeProducts.map(p => p.id)));
suppliers.set("zoom", new Supplier("Zoom Co", zoomProducts.map(p => p.id)));

suppliers.get("acme").productsids.forEach(id => console.log(`nazwa: ${products.get(id).name}`))


//push
console.log(`\n\nSet:`);
let prd = new Product("nike", 100);

let productArray = [];
let productSet = new Set();

for (let i = 0; i < 5; i++) {
    productArray.push(prd);
    productSet.add(prd);
}

console.log(`array: ${productArray.length}`);
console.log(`set: ${productSet.size}`);



let taxedPrice = calculateTax(prd.price);
console.log(`tax: ${taxedPrice}`);

let products2 = [new Product("prd1", 200), new Product("prd2", 300)];
let totPrice = calcTaxandSum(...products2.map(p => p.price));
console.log(`${totPrice.toFixed(2)}`);

//modules
console.log(`\n\n\n`);

let productSamsung = new Product("S22", 6000);
applyDiscount(productSamsung, 5000)
let taxedSamsungPrice = calculateTax(productSamsung.price);
printDetails(productSamsung);
console.log(`price: ${productSamsung.price}`);
console.log(`taxed: ${taxedSamsungPrice}`);