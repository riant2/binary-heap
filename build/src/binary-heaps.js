"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const heap_1 = require("./heap");
class BinaryHeap {
    constructor(property, math = Math.max) {
        this.property = property;
        this.math = math;
        this.heap = new heap_1.OneBasedArray();
        this.push = (...objects) => {
            objects.forEach(object => this._push(object));
        };
        this.pull = () => {
            const { heap } = this;
            const object = heap.get(1);
            const last = heap.pop();
            if (!last)
                throw new Error('Nothing to pull');
            if (heap.length === 1)
                return object;
            let lastPosition = 1;
            heap.set(lastPosition, last);
            while (true) {
                const newPosition = lastPosition * 2, o1 = heap.get(newPosition), o2 = heap.get(newPosition + 1), bestPosition = this.better(o1, o2) ? newPosition : newPosition + 1, shouldSwap = this.better(last, heap.get(bestPosition));
                if (shouldSwap) {
                    this.swap(lastPosition, bestPosition);
                    lastPosition = bestPosition;
                    continue;
                }
                break;
            }
            return object;
        };
        this.better = (a, b) => {
            if (typeof b === 'undefined')
                return true;
            return this.math(this.property(a), this.property(b)) === this.property(a);
        };
        this._push = (object) => {
            const { heap, better, swap } = this;
            const position = heap.length;
            heap.set(position, object);
            while (true) {
                const newPosition = Math.floor(position / 2);
                if (better(object, heap.get(newPosition))) {
                    swap(position, newPosition);
                }
                else
                    break;
            }
        };
        // p = position, o = object
        this.swap = (p1, p2) => {
            const { heap } = this, o1 = heap.get(p1), o2 = heap.get(p2);
            heap.set(p1, o2);
            heap.set(p2, o1);
        };
    }
}
exports.BinaryHeap = BinaryHeap;
//# sourceMappingURL=binary-heaps.js.map