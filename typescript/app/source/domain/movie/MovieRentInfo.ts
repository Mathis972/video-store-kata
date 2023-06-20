export class MovieRentInfo {
  minRentDays: number;
  additionaCostPerDay: number;
  additionalRenterPoint: number;
  constructor(
    minRentDays: number,
    additionaCostPerDay: number,
    additionalRenterPoint: number
  ) {
    this.minRentDays = minRentDays;
    this.additionaCostPerDay = additionaCostPerDay;
    this.additionalRenterPoint = additionalRenterPoint;
  }
}
