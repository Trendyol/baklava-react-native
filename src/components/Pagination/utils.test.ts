import {
  clampCurrentPage,
  getPaginationItems,
  normalizeTotalPages,
} from './utils';

describe('Pagination utils', () => {
  describe('normalizeTotalPages', () => {
    test('should keep a valid total page count', () => {
      expect(normalizeTotalPages(10)).toBe(10);
    });

    test('should floor a decimal total page count', () => {
      expect(normalizeTotalPages(10.8)).toBe(10);
    });

    test('should normalize values below one to one', () => {
      expect(normalizeTotalPages(0)).toBe(1);
      expect(normalizeTotalPages(-5)).toBe(1);
    });

    test('should normalize non-finite values to one', () => {
      expect(normalizeTotalPages(Number.NaN)).toBe(1);
      expect(normalizeTotalPages(Number.POSITIVE_INFINITY)).toBe(1);
    });
  });

  describe('clampCurrentPage', () => {
    test('should keep a current page within range', () => {
      expect(clampCurrentPage(4, 10)).toBe(4);
    });

    test('should floor a decimal current page', () => {
      expect(clampCurrentPage(4.8, 10)).toBe(4);
    });

    test('should clamp a current page below the first page', () => {
      expect(clampCurrentPage(0, 10)).toBe(1);
    });

    test('should clamp a current page above the last page', () => {
      expect(clampCurrentPage(11, 10)).toBe(10);
    });

    test('should normalize a non-finite current page', () => {
      expect(clampCurrentPage(Number.NaN, 10)).toBe(1);
    });

    test('should normalize an invalid total page count', () => {
      expect(clampCurrentPage(5, 0)).toBe(1);
    });
  });

  describe('getPaginationItems', () => {
    test('should return all pages for simple pagination when they fit', () => {
      expect(getPaginationItems(4, 7, false)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    test('should return all pages for jumper pagination when they fit', () => {
      expect(getPaginationItems(3, 5, true)).toEqual([1, 2, 3, 4, 5]);
    });

    test('should return the simple start range', () => {
      expect(getPaginationItems(1, 150, false)).toEqual([
        1,
        2,
        3,
        4,
        5,
        'ellipsis-end',
        150,
      ]);
    });

    test('should keep the fifth page in the simple start range', () => {
      expect(getPaginationItems(5, 150, false)).toEqual([
        1,
        2,
        3,
        4,
        5,
        'ellipsis-end',
        150,
      ]);
    });

    test('should return the simple middle range', () => {
      expect(getPaginationItems(8, 150, false)).toEqual([
        1,
        'ellipsis-start',
        7,
        8,
        9,
        'ellipsis-end',
        150,
      ]);
    });

    test('should return the simple end range', () => {
      expect(getPaginationItems(150, 150, false)).toEqual([
        1,
        'ellipsis-start',
        146,
        147,
        148,
        149,
        150,
      ]);
    });

    test('should keep the first page in the jumper start range', () => {
      expect(getPaginationItems(1, 15, true)).toEqual([
        1,
        2,
        3,
        'ellipsis-end',
        15,
      ]);
    });

    test('should keep the third page in the jumper start range', () => {
      expect(getPaginationItems(3, 15, true)).toEqual([
        1,
        2,
        3,
        'ellipsis-end',
        15,
      ]);
    });

    test('should return the jumper middle range', () => {
      expect(getPaginationItems(8, 15, true)).toEqual([
        'ellipsis-start',
        7,
        8,
        9,
        'ellipsis-end',
      ]);
    });

    test('should return the jumper end range', () => {
      expect(getPaginationItems(15, 15, true)).toEqual([
        1,
        'ellipsis-start',
        13,
        14,
        15,
      ]);
    });

    test('should clamp invalid values before calculating items', () => {
      expect(getPaginationItems(99, 3.9, false)).toEqual([1, 2, 3]);
      expect(getPaginationItems(99, 0, true)).toEqual([1]);
    });
  });
});
