import { MyCircularQueue } from "../src/MyCircularQueue";


let myCircularQueue = new MyCircularQueue(3);

test("MyCircularFunctionalityTest622. Design Circular Queue", () => {
  expect(myCircularQueue.enQueue(1)).toEqual(true);
  expect(myCircularQueue.enQueue(2)).toEqual(true);
  expect(myCircularQueue.enQueue(3)).toEqual(true);
  expect(myCircularQueue.enQueue(4)).toEqual(false);
  expect(myCircularQueue.Rear()).toEqual(3);
  expect(myCircularQueue.isFull()).toEqual(true);
  expect(myCircularQueue.deQueue()).toEqual(true);
  expect(myCircularQueue.enQueue(4)).toEqual(true);
  expect(myCircularQueue.Rear()).toEqual(4);
})
