import { ParkingSystem } from "../src/ParkingSystem";

let parkingSystem = new ParkingSystem(1, 1, 1);

test("ParkingSystemTest", () => {
  expect(parkingSystem.addCar(1)).toEqual(true);
  expect(parkingSystem.addCar(2)).toEqual(true);
  expect(parkingSystem.addCar(3)).toEqual(true);
  expect(parkingSystem.addCar(3)).toEqual(false);
  expect(parkingSystem.addCar(1)).toEqual(false);
  expect(parkingSystem.addCar(2)).toEqual(false);
})
