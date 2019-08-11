export declare class OneBasedArray<T> {
    private contents;
    readonly length: number;
    get: (position: number) => T;
    pop: () => T | undefined;
    set: (position: number, object: T) => T;
}
