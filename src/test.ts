import { performance } from 'perf_hooks';
import { BinaryHeap, negativeSort } from './binary-heap';

const randomNumbers = getRandomNumbers(1000000);

async function main(best?: (a: number, b: number) => number) {
	const bh = new BinaryHeap((val: { num: number }) => val.num, best);

	const t1 = performance.now();
	bh.push(randomNumbers.map(num => ({ num })));
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
	return ~~(Math.random() * (max + 1 - min) + min);
}

function getRandomNumbers(amount: number): number[] {
	const numbers: number[] = [];
	for (let i = 0; i < amount; i++) {
		numbers.push(random(0, 100));
	}
	return numbers;
}

main(negativeSort).catch(console.error);
main().catch(console.error);
