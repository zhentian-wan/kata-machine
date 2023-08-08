export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        // Insert the value at the end of the array
        this.data[this.length] = value;
        // Heapify up
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number | undefined {
        if (this.length === 0) {
            return undefined;
        }
        // take the last element and put it at the root
        this.swap(0, this.length - 1);
        // remove the root element
        const val = this.data.pop();
        this.length--;
        // heapify down
        this.heapifyDown(0);

        return val;
    }

    heapifyDown(index: number) {
        if (index > this.length) {
            return;
        }

        const leftChildIdx = this.getLeftChild(index);
        const rightChildIdx = this.gerRightChild(index);

        // no children
        if (leftChildIdx >= this.length) {
            return;
        }

        // only left child
        if (rightChildIdx >= this.length) {
            if (this.data[rightChildIdx] < this.data[index]) {
                this.swap(index, rightChildIdx);
                this.heapifyDown(rightChildIdx);
            }
        }

        // both children
        if (this.data[leftChildIdx] < this.data[rightChildIdx]) {
            if (this.data[index] > this.data[leftChildIdx]) {
                this.swap(index, leftChildIdx);
                this.heapifyDown(leftChildIdx);
            }
        } else {
            if (this.data[index] > this.data[rightChildIdx]) {
                this.swap(index, rightChildIdx);
                this.heapifyDown(rightChildIdx);
            }
        }
    }

    heapifyUp(index: number) {
        if (index < 0) {
            return;
        }
        const parentIndex = this.getParent(index);
        // Already at the root
        if (parentIndex < 0) {
            return;
        }

        if (this.data[index] < this.data[parentIndex]) {
            this.swap(index, parentIndex);
            this.heapifyUp(parentIndex);
        }
    }

    swap(idx1: number, idx2: number) {
        const temp = this.data[idx1];
        this.data[idx1] = this.data[idx2];
        this.data[idx2] = temp;
    }

    getLeftChild(index: number): number {
        return 2 * index + 1;
    }

    gerRightChild(index: number): number {
        return 2 * index + 2;
    }

    getParent(index: number): number {
        return Math.floor((index - 1) / 2);
    }
}
