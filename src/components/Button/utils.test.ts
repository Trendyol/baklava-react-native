import { VariantProps } from '@ergenekonyigit/restyle';
import { Theme } from '../../theme';
import { variantColorSelector } from './utils';

describe('Button/utils', () => {
  let kind: VariantProps<Theme, 'buttonKindVariants'>['variant'];
  let variant: VariantProps<Theme, 'buttonVariants'>['variant'];
  let isPressed: boolean;
  let disabled: boolean;

  beforeEach(() => {
    kind = 'default';
    variant = 'primary';
    isPressed = false;
    disabled = false;
  });

  test('should return default colors', () => {
    // when
    const result = variantColorSelector({});

    // then
    expect(result).toEqual({
      backgroundColor: 'defaultColor',
      borderColor: 'defaultColor',
      color: 'white',
    });
  });

  test('should return disabled colors', () => {
    // given
    disabled = true;

    // when
    const result = variantColorSelector({ kind, variant, isPressed, disabled });

    // then
    expect(result).toEqual({
      backgroundColor: 'tertiaryColor',
      borderColor: 'tertiaryColor',
      color: 'secondaryColor',
    });
  });

  test('should return isPressed colors', () => {
    // given
    isPressed = true;

    // when
    const result = variantColorSelector({ kind, variant, isPressed, disabled });

    // then
    expect(result).toEqual({
      backgroundColor: 'defaultHover',
      borderColor: 'defaultHover',
      color: 'white',
    });
  });

  test('should return default variant colors', () => {
    // when
    const result = variantColorSelector({ kind, variant, isPressed, disabled });

    // then
    expect(result).toEqual({
      backgroundColor: 'defaultColor',
      borderColor: 'defaultColor',
      color: 'white',
    });
  });

  test('should return danger variant colors', () => {
    // given
    kind = 'danger';

    // when
    const result = variantColorSelector({ kind, variant, isPressed, disabled });

    // then
    expect(result).toEqual({
      backgroundColor: 'dangerColor',
      borderColor: 'dangerColor',
      color: 'white',
    });
  });
});
