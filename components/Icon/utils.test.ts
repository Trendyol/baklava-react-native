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
});
