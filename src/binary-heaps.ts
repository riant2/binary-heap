import { OneBasedArray } from './heap';

export const positiveSort = (a: number, b: number) => (a >= b ? a : b);
export const negativeSort = (a: number, b: number) => (a <= b ? a : b);

export class BinaryHeap<T> {
	private heap = new OneBasedArray<T>();

	constructor(
		private sortBy: (a: T) => number,
		private math: (a: number, b: number) => number = Math.max
	) {}

	get empty(): boolean {
		return this.heap.length < 1;
	}

	get peek(): T {
		return this.heap.get(1);
	}

	push = (object: T | T[]) => {
		if (Array.isArray(object)) {
			return object.forEach(this._push);
		}
		this._push(object);
	};

	pull = (): T => {
		const { heap, better, swap } = this,
			object = heap.get(1),
			last = heap.pop();
		if (last === undefined) throw new Error('Nothing to pull');
		if (heap.length === 0) return object;

		heap.set(1, last);
		let lastPosition = 1;
		while (true) {
			const first = lastPosition << 1,
				second = (lastPosition << 1) + 1,
				best = better(first, second);

			if (better(best, lastPosition) === best) {
				swap(lastPosition, best);
				lastPosition = best;
				continue;
			}
			break;
		}

		return object;
	};

	pullAll = (): T[] => {
		const values: T[] = [];
		while (!this.empty) {
			values.push(this.pull());
		}
		return values;
	};

	private better = (a: number, b: number): number => {
		if (b === undefined) return a;
		const av = this.sortBy(this.heap.get(a)),
			bv = this.sortBy(this.heap.get(b));
		return this.math(av, bv) === av ? a : b;
	};

	private _push = (object: T) => {
		const { heap, better, swap } = this;

		let p1 = heap.length + 1;
		heap.set(p1, object);

		if (p1 === 1) return;

		while (p1 > 1) {
			const p2 = p1 >> 1;
			if (better(p1, p2) === p1) {
				swap(p1, p2);
				p1 = p2;
			} else break;
		}
	};

	// p = position, o = object
	private swap = (p1: number, p2: number) => {
		const {
				heap: { get, set },
			} = this,
			o1 = get(p1),
			o2 = get(p2);
		set(p1, o2);
		set(p2, o1);
	};
}
