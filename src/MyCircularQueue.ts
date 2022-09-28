export class MyCircularQueue {
  frontIndex: number;
  rearIndex: number;
  capacity: number;
  elements: number[];

  constructor(k: number) {
    this.capacity = k + 1;
    this.elements = new Array<number>(this.capacity);
    this.rearIndex = this.frontIndex = 0;
  }
  enqueue(value: number): boolean {
    if (this.isFull()) {
      return false;
    }
    this.elements[this.rearIndex] = value;
    this.rearIndex = (this.rearIndex + 1) % this.capacity;
    return true;
  }

  dequeue(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    this.frontIndex = (this.frontIndex + 1) % this.capacity;
    return true;
  }

  front(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.elements[this.frontIndex];
  }

  rear(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.elements[((this.rearIndex - 1) + this.capacity) % this.capacity];
  }

  isEmpty(): boolean {
    return this.rearIndex === this.frontIndex;
  }

  isFull(): boolean {
    return ((this.rearIndex + 1) % this.capacity) === this.frontIndex;
  }

}