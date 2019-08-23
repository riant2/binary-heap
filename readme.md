# Binary heap

Small implementation of the binary heap in typescript.

## What to use for

This is meant as a fast sorter in a big list with about equal push/pull.
Also you are only interested in the best value as other values will not be sorted correctly.

## Getting started

Use npm and add

```
npm install "@rickard.antonsson/binary-heap"
```

### How to use

```
interface TestClass {
	something:string;
	sortedProperty:number;
}

const propertyGetterMethod = (obj: TestClass) => obj.sortedProperty;
const binaryHeap = new BinaryHeap(propertyGetterMethod);

/// Add a few objects
binaryHeap.push([
	{ something:'first', sortedProperty: 25 },
	{ something:'second', sortedProperty: 2 },
	{ something:'third', sortedProperty: 200 }
]);

/// Pull object with highest sortedProperty
const best = binaryHeap.pull(); // { something:'third', sortedProperty: 200 }
```
