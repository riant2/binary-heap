"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OneBasedArray {
    constructor() {
        this.contents = [];
        this.get = (position) => this.contents[position - 1];
        this.pop = this.contents.pop;
        this.set = (position, object) => (this.contents[position - 1] = object);
    }
    get length() {
        return this.contents.length;
    }
}
exports.OneBasedArray = OneBasedArray;
//# sourceMappingURL=heap.js.map