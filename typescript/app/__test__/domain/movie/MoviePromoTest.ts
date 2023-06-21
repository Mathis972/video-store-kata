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
    ).toEqual(19.67);
  });

  it('rent over or equal 5 same movies', () => {
    expect(
      calculateTotalMoviesPrice([
        new Rental(3, newReleaseConfiguration('UNUSED')),
        new Rental(3, newReleaseConfiguration('UNUSED')),
        new Rental(2, newReleaseConfiguration('UNUSED')),
        new Rental(2, newReleaseConfiguration('UNUSED')),
        new Rental(2, newReleaseConfiguration('UNUSED')),
      ])
    ).toEqual(34.2);
  });

  it('rent over or equal 8 same movies w/ discount (with 10% off)', () => {
    expect(
      calculateTotalMoviesPrice([
        new Rental(3, newReleaseConfiguration('UNUSED')),
        new Rental(3, newReleaseConfiguration('UNUSED')),
        new Rental(2, newReleaseConfiguration('UNUSED')),
        new Rental(2, newReleaseConfiguration('UNUSED')),
        new Rental(2, newReleaseConfiguration('UNUSED')),
        new Rental(2, newReleaseConfiguration('UNUSED')),
        new Rental(4, newReleaseConfiguration('UNUSED')),
        new Rental(4, newReleaseConfiguration('UNUSED')),
        new Rental(2, newReleaseConfiguration('UNUSED')),
      ])
    ).toEqual(64.8);
  });

  it('rent over or equal 20 same movies w/ discount (with 30% off)', () => {
    expect(
      calculateTotalMoviesPrice([
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
      ])
    ).toEqual(42);
  });

  it('rent over or equal 40 same movies w/ discount (limit of 80% off)', () => {
    expect(
      calculateTotalMoviesPrice([
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
        new Rental(1, newReleaseConfiguration('UNUSED')),
      ])
    ).toEqual(36);
  });
});
