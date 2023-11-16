import {sum} from "./calc";

test("test output result", () => {
    let result = sum(10,20,30);
    expect(result).toBe(60);
});