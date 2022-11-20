import { ParkingSystem } from "../src/ParkingSystem";

const parkingSystem = new ParkingSystem(1, 1, 1);

test.each([
  [1, true],
  [2, true],
  [3, true],
  [3, false],
  [1, false],
  [2, false],
])("ParkingSystem.add(%i)", (carType: number, expected: boolean) => {
  expect(parkingSystem.addCar(carType)).toEqual(expected);
})
