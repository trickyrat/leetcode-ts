export class ParkingSystem {
  big: number = 0;
  medium: number = 0;
  small: number = 0;

  constructor(big: number, medium: number, small: number) {
    this.big = big;
    this.medium = medium;
    this.small = small;
  }

  addCar(carType: number): boolean {
    if (carType === 1 && this.big > 0) {
      this.big--;
      return true;
    } else if (carType === 2 && this.medium > 0) {
      this.medium--;
      return true;
    } else if (carType === 3 && this.small > 0) {
      this.small--;
      return true;
    }
    return false;
  }
}