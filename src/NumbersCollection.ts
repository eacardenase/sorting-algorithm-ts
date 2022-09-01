import Sorter from './Sorter';

export default class NumbersCollection extends Sorter {
    constructor(public data: number[]) {
        super();
    }

    public get length(): number {
        return this.data.length;
    }

    public compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    public swap(leftIndex: number, rightIndex: number): void {
        const temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    }
}
