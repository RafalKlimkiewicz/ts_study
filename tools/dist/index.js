"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = require("./calc");
function printMessage(msg) {
    console.log(`Komunikat: ${msg}`);
}
//ts: tsc-watch
//js: npx tsc-watch --onsuccess \"node ./dist/index.js\"
let message = `Witaj, TypeScript`;
printMessage(message);
debugger; //eslint-disable-line no-debugger
let total = (0, calc_1.sum)(100, 100, 200);
console.log(`warotść całkowita: ${total}`);
//npx eslint . -> to check recommendation for formating or so
//# sourceMappingURL=index.js.map