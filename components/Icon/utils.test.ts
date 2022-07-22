import { toPascalCase } from './utils';

describe('Icon/utils', () => {
  test('should return given string correctly', () => {
    // given
    const iconName = 'icon-name';

    // when
    const result = toPascalCase(iconName);

    // then
    expect(result).toBe('IconName');
  });

  test('should return correctly when no string is entered', () => {
    // given
    const iconName = 234;

    // when
    //@ts-ignore
    const result = toPascalCase(iconName);

    // then
    expect(result).toBe('');
  });

  test('should return correctly when string length is 0', () => {
    // given
    const iconName = '';

    // when
    const result = toPascalCase(iconName);

    // then
    expect(result).toBe('');
  });

  test('should return correctly when iconName is not given', () => {
    // given
    //const iconName = '';

    // when
    //@ts-ignore
    const result = toPascalCase();

    // then
    expect(result).toBe('');
  });
});
