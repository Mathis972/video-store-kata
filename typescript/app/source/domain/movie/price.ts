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

export const calculateSingleMoviePrice = (x: Rental) =>
  calculatePrice(calculateAdditionalCost(x));

export const calculateTotalMoviesPrice = (rentals: Rental[]) => {
  let total = 0;
  const history: Rental[] = [];
  for (const rental of rentals) {
    const isChild = rental.mc.price === 1.5;
    const isRegular = rental.mc.price === 3.0;
    const n = calculateSingleMoviePrice(rental);
    const wasRegularPrice = history.find((r) => r.mc.price === 3)?.mc.price;
    const wasChildPrice = history.find((r) => r.mc.price === 1.5)?.mc.price;
    const wasRegularIndex = history.findIndex((r) => r.mc.price === 3);
    const wasChildIndex = history.findIndex((r) => r.mc.price === 1.5);
    if (wasChildPrice && isRegular) {
      total +=
        wasChildPrice + n - ((wasChildPrice + n) * 30) / 100 - wasChildPrice;
      history.splice(wasChildIndex, 1);
    } else if (wasRegularPrice && isChild) {
      total +=
        wasRegularPrice +
        n -
        ((wasRegularPrice + n) * 30) / 100 -
        wasRegularPrice;
      history.splice(wasRegularIndex, 1);
    } else {
      total += n;
      history.push(rental);
    }
  }
  return Math.round((total + Number.EPSILON) * 100) / 100;
};
