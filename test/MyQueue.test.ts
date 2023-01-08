import { MyQueue } from "../src/MyQueue";

let myQueue: MyQueue = new MyQueue();
myQueue.push(1);
myQueue.push(2);

test("PeekTest", () => {
  expect(myQueue.peek()).toEqual(1);
})

test("PopTest", () => {
  expect(myQueue.pop()).toEqual(1);
})

test("EmptyShouldBeFalseTest", () => {
  expect(myQueue.empty()).toEqual(false);
})

test("EmptyShouldBeTrueTest", () => {
  myQueue.pop();
  expect(myQueue.empty()).toEqual(true);
})
