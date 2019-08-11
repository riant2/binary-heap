export declare class BinaryHeap<T> {
    private property;
    private math;
    private heap;
    constructor(property: (a: T) => number, math?: (a: number, b: number) => number);
    push: (...objects: T[]) => void;
    pull: () => T;
    private better;
    private _push;
    private swap;
}
