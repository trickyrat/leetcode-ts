export class MyCircularQueue {
  _front: number;
  _rear: number;
  _capacity: number;
  _elements: number[];

  constructor(k: number) {
    this._capacity = k + 1;
    this._elements = new Array<number>(this._capacity);
    this._rear = this._front = 0;
  }
  enQueue(value: number): boolean {
    if (this.isFull()) {
      return false;
    }
    this._elements[this._rear] = value;
    this._rear = (this._rear + 1) % this._capacity;
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    this._front = (this._front + 1) % this._capacity;
    return true;
  }

  Front(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this._elements[this._front];
  }

  Rear(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this._elements[((this._rear - 1) + this._capacity) % this._capacity];
  }

  isEmpty(): boolean {
    return this._rear === this._front;
  }

  isFull(): boolean {
    return ((this._rear + 1) % this._capacity) === this._front;
  }

}