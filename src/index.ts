class Sorter {
    constructor(public collection: number[]) {}

    sort(): void {
        let end = this.collection.length - 1;
        let noSwaps: boolean;

        for (let i = end; i >= 0; i--) {
            noSwaps = true;

            for (let j = 0; j <= i; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    let temp = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = temp;

                    noSwaps = false;
                }
            }

            if (noSwaps) {
                break;
            }
        }
    }
}

const sorter = new Sorter([10, 3, -5, 0, 1]);
console.log(sorter.collection);
sorter.sort();
console.log(sorter.collection);
