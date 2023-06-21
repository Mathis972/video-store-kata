import { Rental } from './Rental';

const rentPointsFor = (
  f: (r: Rental) => number
): ((rentals: Rental[]) => number) => {
  return (rentals) => rentals.map((r) => f(r)).reduce((x, y) => x + y);
};

const rentPointFor = (r: Rental): number => {
  const baserenterPoint = 1;

  return r.rentalDays > 1
    ? baserenterPoint + r.mc.rentInfo.additionalRenterPoint
    : baserenterPoint;
};

export const calculateRentalPoints: (rentals: Rental[]) => number =
  rentPointsFor(rentPointFor);
