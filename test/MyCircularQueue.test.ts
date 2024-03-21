import { MyCircularQueue } from "../src/MyCircularQueue";
import { expect, test } from 'vitest'


test("MyCircularFunctionalTest", () => {
  const myCircularQueue = new MyCircularQueue(3);
  expect(myCircularQueue.dequeue()).toEqual(false);
  expect(myCircularQueue.front()).toEqual(-1);
  expect(myCircularQueue.rear()).toEqual(-1);
  expect(myCircularQueue.enqueue(1)).toEqual(true);
  expect(myCircularQueue.enqueue(2)).toEqual(true);
  expect(myCircularQueue.enqueue(3)).toEqual(true);
  expect(myCircularQueue.enqueue(4)).toEqual(false);
  expect(myCircularQueue.front()).toEqual(1);
  expect(myCircularQueue.rear()).toEqual(3);
  expect(myCircularQueue.isFull()).toEqual(true);
  expect(myCircularQueue.dequeue()).toEqual(true);
  expect(myCircularQueue.enqueue(4)).toEqual(true);
  expect(myCircularQueue.rear()).toEqual(4);
})
