import { MovieConfiguration } from './videoStore';

export class Rental {
  rentalDays: number;
  mc: MovieConfiguration;

  constructor(rentalDays: number, m: MovieConfiguration) {
    this.rentalDays = rentalDays;
    this.mc = m;
  }
}
