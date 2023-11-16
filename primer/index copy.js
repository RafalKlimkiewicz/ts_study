let hatPrice = 100;
//console.log(`Cena czapki: ${hatPrice}`);
let bootsPrice = "100";
//console.log(`Cena butów: ${bootsPrice}`);


function sumPrices2(...numbers) {
    return numbers.reduce((total, val) => 
        total + (Number.isNaN(Number(val)) ? 0 : Number(val)));
}

let sumPrices = (...numberes) => numberes.reduce((total, val) => total + (Number.isNaN(Number(val)) ? 0 : Number(val)), 0);

let names = ["czapka", "buty", "rękawiczki"];
let prices = [];
prices.push(100);
prices.push(200);
prices.push(300);

console.log(Number.isNaN(Number("czp")));

let combinedArray = [...names, ...prices];

combinedArray.forEach(e => console.log(`itemek: ${e}`));
console.log(``);



let totalPrices = sumPrices(...names);

//let totalPrices = sumPrices(hatPrice, bootsPrice);
console.log(`Sum prices: ${totalPrices} ${typeof totalPrices}`);

let [one, two] = combinedArray;
console.log(`one: ${one} two: ${two}`);

let [, , ...three] = combinedArray;
console.log(`three: ${three}`);

let hat = {
    name: "czapka",
    _price: 100,
    priceIncTax: 100 * 1.2,

    set price(newPrice){
        this._price = newPrice;
        this.priceIncTax = this._price * 1.2;
    },

    get price(){
        return this._price;
    },


};

let boots = {
    name: "buty",
    price: "100",
};

var gloves ={
    productName: "rękawiczki",
    price: "40"
}

console.log(`czapka: ${hat.price}, ${hat.priceIncTax}`);
hat.price = 120;
console.log(`czapka: ${hat.price}, ${hat.priceIncTax}`);



let additionalProperties = { ...hat, discounted: true};
console.log(`\n\nDodatkowe: ${JSON.stringify(additionalProperties)}`)

let  replacedProperties = {...hat, price: 10};
console.log(`Zastąpione properties ${JSON.stringify(replacedProperties)}`)

let {price, ...someProperties} = boots;
console.log(`Wybrane: ${JSON.stringify(someProperties)}     price: ${price}`)


console.log(`\n\n\n\n`);

let myObject ={
    greeting: "IN   ",

    getWritter(){
        return (message) => console.log(`${this.greeting} - ${message}`);
    }
}

greeting = "outside";

let writer = myObject.getWritter();
writer(`deszcz`);
myObject.getWritter()(`dupa`);
let standAlone = myObject.getWritter;
standAlone(`teset`);
let standAloneWriter = standAlone();
standAloneWriter(`dzisjiaj mam`);




//totalPrices = sumPrices(100, 200, 300);
//console.log(`Sum prices: ${totalPrices} ${typeof totalPrices}`);

//totalPrices = sumPrices(100, 200);
//console.log(`Sum prices: ${totalPrices} ${typeof totalPrices}`);