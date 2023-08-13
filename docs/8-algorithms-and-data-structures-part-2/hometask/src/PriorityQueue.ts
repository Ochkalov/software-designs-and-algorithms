interface PriorityQueueI<T> {
  enqueue(value: T, priority: number): void;
  dequeue(): T | undefined;
  size(): number;
}

export class PriorityQueue<T> implements PriorityQueueI<T> {
  private heap: Array<{ value: T; priority: number }> = [];

  enqueue(value: T, priority: number): void {
    this.heap.push({ value, priority });
    this.bubbleUp(this.heap.length - 1);
  }

  dequeue(): T | undefined {
    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) return this.heap.pop()?.value;

    const root = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.bubbleDown(0);

    return root.value;
  }

  size(): number {
    return this.heap.length;
  }

  private bubbleUp(index: number) {
    const parentIndex = Math.floor((index - 1) / 2);

    if (index > 0 && this.heap[index].priority < this.heap[parentIndex].priority) {
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      this.bubbleUp(parentIndex);
    }
  }

  private bubbleDown(index: number) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let minIndex = index;

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].priority < this.heap[minIndex].priority) {
      minIndex = leftChildIndex;
    }

    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].priority < this.heap[minIndex].priority) {
      minIndex = rightChildIndex;
    }

    if (minIndex !== index) {
      [this.heap[index], this.heap[minIndex]] = [this.heap[minIndex], this.heap[index]];
      this.bubbleDown(minIndex);
    }
  }
}