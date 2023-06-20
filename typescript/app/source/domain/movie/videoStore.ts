export class MoviePrices {
  additionalCost: number;
  movieBasePrice: number;

  constructor(additionalCost: number, movieBasePrice: number) {
    this.additionalCost = additionalCost;
    this.movieBasePrice = movieBasePrice;
  }
}
export class Rental {
  rentalDays: number;
  mc: MovieConfiguration;

  constructor(rentalDays: number, m: MovieConfiguration) {
    this.rentalDays = rentalDays;
    this.mc = m;
  }
}
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
export class MovieConfiguration {
  title: string;
  price: number;
  rentInfo: MovieRentInfo;

  constructor(title: string, price: number, rentInfo: MovieRentInfo) {
    this.title = title;
    this.price = price;
    this.rentInfo = rentInfo;
  }
}
export const newReleaseConfiguration: (title: string) => MovieConfiguration = (
  title: string
) => {
  return new MovieConfiguration(title, 3.0, new MovieRentInfo(1, 3.0, 1));
};
export const childrenConfiguration: (title: string) => MovieConfiguration = (
  title: string
) => {
  return new MovieConfiguration(title, 1.5, new MovieRentInfo(3, 1.5, 0));
};
