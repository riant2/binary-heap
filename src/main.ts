import { BinaryHeap } from './binary-heaps';

async function main(best: (a: number, b: number) => number) {
  const bh = new BinaryHeap<number>(val => val, best);

  for (let i = 0; i < 10; i++) {
    bh.push(random(-100, 100));
  }

  const values = bh.pullAll();
  console.log(values);
}

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

main(Math.max).catch(console.error);
main(Math.min).catch(console.error);
