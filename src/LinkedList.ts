import Sorter from './Sorter';
class Node {
    public next: Node | null = null;

    constructor(public value: number) {}
}

export default class LinkedList extends Sorter {
    public head: Node | null = null;

    public add(value: number): void {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;

            return;
        }

        let tail = this.head;

        while (tail.next) {
            tail = tail.next;
        }

        tail.next = newNode;
    }

    public get length(): number {
        if (!this.head) {
            return 0;
        }

        let counter = 1;
        let currentNode = this.head;

        while (currentNode.next) {
            counter++;
            currentNode = currentNode.next;
        }

        return counter;
    }

    public at(index: number): Node {
        if (!this.head) {
            throw new Error('Index out of bounds');
        }

        let counter = 0;
        let currentNode: Node | null = this.head;

        while (currentNode) {
            if (counter === index) {
                return currentNode;
            }

            counter++;
            currentNode = currentNode.next;
        }

        throw new Error('Index out of bounds');
    }

    public compare(leftIndex: number, rightIndex: number): boolean {
        if (!this.head) {
            throw new Error('List is empty');
        }

        return this.at(leftIndex).value > this.at(rightIndex).value;
    }

    public swap(leftIndex: number, rightIndex: number): void {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);

        const temp = leftNode.value;
        leftNode.value = rightNode.value;
        rightNode.value = temp;
    }

    public print(): void {
        if (!this.head) {
            return;
        }

        let currentNode: Node | null = this.head;

        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}
