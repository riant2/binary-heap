import { performance } from 'perf_hooks';
import { BinaryHeap, negativeSort, positiveSort } from './binary-heaps';

const randomNumbers = getRandomNumbers(1000000);

async function main(best: (a: number, b: number) => number) {
	const bh = new BinaryHeap<number>(val => val, best);

	const t1 = performance.now();
	bh.push(randomNumbers);
	const t2 = performance.now();
	const first = bh.pull();
	const t3 = performance.now();
	const second = bh.pull();
	const t4 = performance.now();
	const values = bh.pullAll();
	const t5 = performance.now();

	console.log(
		`push took:${t2 - t1}, pull took: ${t3 - t2}, second pull took: ${t4 -
			t3}, pullAll took: ${t5 - t4}`
	);
}

function random(min: number, max: number) {
	return Math.floor(Math.random() * (max + 1 - min) + min);
}

function getRandomNumbers(amount: number): number[] {
	const numbers: number[] = [];
	for (let i = 0; i < amount; i++) {
		numbers.push(random(0, 100));
	}
	return numbers;
}

function testNormalSort() {
	const numbers = getRandomNumbers(10000000);
	const t1 = performance.now();
	numbers.sort((a, b) => a - b);
	const t2 = performance.now();
	console.log(`sort took:${t2 - t1}`);
}

main(positiveSort).catch(console.error);
main(negativeSort).catch(console.error);
testNormalSort();
