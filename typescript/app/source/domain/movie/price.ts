import { compose } from '../compose';
import { MoviePrices } from './MoviePrices';
import { Rental } from './Rental';

const calculateAdditionalCost = (rental: Rental): MoviePrices => {
  let additionalCost = 0.0;
  if (rental.rentalDays > rental.mc.rentInfo.minRentDays) {
    const additionalDays = rental.rentalDays - rental.mc.rentInfo.minRentDays;
    additionalCost = rental.mc.rentInfo.additionaCostPerDay * additionalDays;
  }
  return new MoviePrices(additionalCost, rental.mc.price);
};

const calculatePrice = (moviePrices: MoviePrices): number =>
  moviePrices.movieBasePrice + moviePrices.additionalCost;

export const calculateSingleMoviePrice: (x: Rental) => number = compose(
  calculateAdditionalCost,
  calculatePrice
);

export const calculateTotalMoviesPrice = (rentals: Rental[]) => {
  let total = 0;
  let wasChildPrice = 0;
  let wasRegularPrice = 0;
  for (const rental of rentals) {
    const isChild = rental.mc.price === 1.5;
    const isRegular = rental.mc.price === 3.0;
    const n = calculateSingleMoviePrice(rental);
    if (wasChildPrice && isRegular) {
      total +=
        wasChildPrice + n - ((wasChildPrice + n) * 30) / 100 - wasChildPrice;
    } else if (wasRegularPrice && isChild) {
      total +=
        wasRegularPrice +
        n -
        ((wasRegularPrice + n) * 30) / 100 -
        wasRegularPrice;
    } else {
      total += n;
    }
    wasChildPrice = rental.mc.price === 1.5 ? rental.mc.price : 0;
    wasRegularPrice = rental.mc.price === 3.0 ? rental.mc.price : 0;
  }
  return total;
};
