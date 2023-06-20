export class MoviePrices {
  additionalCost: number;
  movieBasePrice: number;

  constructor(additionalCost: number, movieBasePrice: number) {
    this.additionalCost = additionalCost;
    this.movieBasePrice = movieBasePrice;
  }
}
