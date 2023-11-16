"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = require("./calc");
test("test output result", () => {
    let result = (0, calc_1.sum)(10, 20, 30);
    expect(result).toBe(60);
});
//# sourceMappingURL=calc.test.js.map