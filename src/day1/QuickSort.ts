function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let idx = low - 1;

    for (let i = low; i < high; i++) {
        if (arr[i] <= pivot) {
            idx++;
            const temp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = temp;
        }
    }

    // swap pivot to its correct position
    idx++;
    arr[high] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

function qs(arr: number[], low: number, high: number): void {
    if (low >= high) {
        return;
    }

    const pivotIdx = partition(arr, low, high);
    qs(arr, low, pivotIdx - 1);
    qs(arr, pivotIdx + 1, high);
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
