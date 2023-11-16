import { sum } from "./calc";
function printMessage(msg: string) : void{
    console.log(`Komunikat: ${msg}`)
}

//ts: tsc-watch
//js: npx tsc-watch --onsuccess \"node ./dist/index.js\"
let message = `Witaj, TypeScript`;
printMessage(message);
debugger; //eslint-disable-line no-debugger

let total = sum(100,100,200);
console.log(`warotść całkowita: ${total}`);

//npx eslint . -> to check recommendation for formating or so