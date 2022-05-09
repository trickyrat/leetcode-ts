import { RecentCounter } from "../src/RecentCounter"

test("RecentCounterTest", () => {
  let recentCounter = new RecentCounter();
  expect(recentCounter.ping(1)).toEqual(1);
  expect(recentCounter.ping(100)).toEqual(2);
  expect(recentCounter.ping(3001)).toEqual(3);
  expect(recentCounter.ping(3002)).toEqual(3);
})