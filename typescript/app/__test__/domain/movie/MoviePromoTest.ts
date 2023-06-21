import {
  childrenConfiguration,
  newReleaseConfiguration,
} from '../../../source/domain/movie/videoStore';
import { calculateTotalMoviesPrice } from '../../../source/domain/movie/price';
import { Rental } from '../../../source/domain/movie/Rental';

describe('MoviePromo', function () {
  it('rent w/ discount on combo', () => {
    expect(
      calculateTotalMoviesPrice([
        new Rental(2, newReleaseConfiguration('UNUSED')),
        new Rental(2, newReleaseConfiguration('UNUSED')),
        new Rental(2, childrenConfiguration('ENFANT')),
      ])
    ).toEqual(12.15);
  });

  it('rent w/out discount', () => {
    expect(
      calculateTotalMoviesPrice([
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
      ])
    ).toEqual(6);
  });

  it('rent w/ two discounts', () => {
    expect(
      calculateTotalMoviesPrice([
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, childrenConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, childrenConfiguration('UNUSED')),
      ])
    ).toEqual(5);
  });
});
