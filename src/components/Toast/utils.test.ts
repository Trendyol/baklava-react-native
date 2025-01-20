import { capitalizeFirstLetter, getFirstNChar, pausableTimer } from './utils';

describe('Toast Utils', () => {
  describe('capitalizeFirstLetter', () => {
    test('should return capitalized sentence', () => {
      // given
      const text = 'lorem ipsum dolor sit amet.';

      // when
      const result = capitalizeFirstLetter(text);

      // then
      expect(result).toBe('Lorem ipsum dolor sit amet.');
    });

    test('should return empty string', () => {
      // given
      const text = '';

      // when
      const result = capitalizeFirstLetter(text);

      // then
      expect(result).toBe('');
    });

    test('should return empty string when params isnt string', () => {
      // given
      const text = 17;

      // when
      const result = capitalizeFirstLetter(text as any);

      // then
      expect(result).toBe('');
    });
  });

  describe('getFirstNChar', () => {
    test('should return first 10 char', () => {
      // given
      const text = 'Lorem ipsum dolor';

      // when
      const result = getFirstNChar(text, 10);

      // then
      expect(result.length).toBe(10);
      expect(result).toBe('Lorem ipsu');
    });

    test('should return first 10 char with suffix', () => {
      // given
      const text = 'Lorem ipsum dolor';

      // when
      const result = getFirstNChar(text, 10, '...');

      // then
      expect(result.length).toBe(13);
      expect(result).toBe('Lorem ipsu...');
    });

    test('Should return the given if less than 10 characters', () => {
      // given
      const text = 'Lorem';

      // when
      const result = getFirstNChar(text, 10, '...');

      // then
      expect(result.length).toBe(5);
      expect(result).toBe('Lorem');
    });
  });

  describe('pausableTimer', () => {
    test('should finish', () => {
      // given
      jest.useFakeTimers();
      const mockCallback = jest.fn();

      // when
      pausableTimer(mockCallback, 1000);
      jest.runAllTimers();

      // then
      expect(mockCallback).toBeCalled();
    });

    test('should pause', () => {
      // given
      jest.useFakeTimers();
      const mockCallback = jest.fn();

      // when
      const timer = pausableTimer(mockCallback, 1000);
      timer.pause();
      jest.runAllTimers();

      // then
      expect(mockCallback).not.toBeCalled();
    });

    test('should resume', () => {
      // given
      jest.useFakeTimers();
      const mockCallback = jest.fn();

      // when
      const timer = pausableTimer(mockCallback, 1000);
      timer.pause();
      jest.runAllTimers();

      timer.resume();
      jest.runAllTimers();

      // then
      expect(mockCallback).toBeCalledTimes(1);
    });

    test('should kill', () => {
      // given
      jest.useFakeTimers();
      const mockCallback = jest.fn();

      // when
      const timer = pausableTimer(mockCallback, 1000);
      timer.kill();
      jest.runAllTimers();
      timer.resume();
      jest.runAllTimers();

      // then
      expect(mockCallback).not.toBeCalled();
    });
  });
});
