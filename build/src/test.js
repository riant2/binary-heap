"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binary_heaps_1 = require("./binary-heaps");
async function main() {
    const bh = new binary_heaps_1.BinaryHeap(val => val);
    bh.push(1, 3, 5, 3, 6, 7, 9, 54, 2, 4, 56, 6, 4, 3234, 35, 456, 3, 5, 23, 423, 56, 7, 7);
    console.log(bh.pull());
}
main();
//# sourceMappingURL=test.js.map