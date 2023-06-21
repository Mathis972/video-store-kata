import {
  childrenConfiguration,
  newReleaseConfiguration,
} from '../../../source/domain/movie/videoStore';
import { calculateTotalMoviesPrice } from '../../../source/domain/movie/price';
import { Rental } from '../../../source/domain/movie/Rental';

describe('MoviePromo', function () {
  it('rent w/ discount on combo only', () => {
    expect(
      calculateTotalMoviesPrice([
        new Rental(3, newReleaseConfiguration('UNUSED')),
        new Rental(6, childrenConfiguration('ENFANT')),
      ])
    ).toEqual(10.5);
  });
  it('rent w/ discount on combo', () => {
    expect(
      calculateTotalMoviesPrice([
        new Rental(2, newReleaseConfiguration('UNUSED')),
        new Rental(2, newReleaseConfiguration('UNUSED')),
        new Rental(4, childrenConfiguration('ENFANT')),
      ])
    ).toEqual(12.3);
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
        new Rental(2, newReleaseConfiguration('UNUSED')),
        new Rental(1, childrenConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, childrenConfiguration('UNUSED')),
      ])
    ).toEqual(8.4);
  });

  it('rent w/ two discounts separated', () => {
    expect(
      calculateTotalMoviesPrice([
        new Rental(3, newReleaseConfiguration('UNUSED')),
        new Rental(3, newReleaseConfiguration('UNUSED')),
        new Rental(2, newReleaseConfiguration('UNUSED')),
        new Rental(1, childrenConfiguration('UNUSED')),
        new Rental(1, childrenConfiguration('UNUSED')),
      ])
    ).toEqual(20.7);
  });
});
