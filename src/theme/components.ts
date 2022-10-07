import { variant } from 'styled-system';
import {
  ButtonTypeTypes,
  ButtonVariantTypes,
} from '../components/Button/types';

// TODO: Unitless shorthands https://github.com/styled-components/css-to-react-native/issues/40
export const textStyle = {
  // Heading
  heading1: {
    fontSize: 6,
    fontWeight: 1,
    fontFamily: 1,
    // lineHeight: 7,
  },
  heading2: {
    fontSize: 5,
    fontWeight: 1,
    fontFamily: 1,
    // lineHeight: 6,
  },
  heading3: {
    fontSize: 4,
    fontWeight: 1,
    fontFamily: 1,
    // lineHeight: 5,
  },
  // Subtitle01
  subtitle01Regular: {
    fontSize: 3,
    fontWeight: 1,
    fontFamily: 1,
    // lineHeight: 4,
  },
  subtitle01Medium: {
    fontSize: 3,
    fontWeight: 2,
    fontFamily: 2,
    // lineHeight: 4,
  },
  subtitle01Semibold: {
    fontSize: 3,
    fontWeight: 3,
    fontFamily: 3,
    // lineHeight: 4,
  },
  subtitle01Bold: {
    fontSize: 3,
    fontWeight: 4,
    fontFamily: 4,
    // lineHeight: 4,
  },
  // Subtitle02
  subtitle02Regular: {
    fontSize: 2,
    fontWeight: 1,
    fontFamily: 1,
    // lineHeight: 3,
  },
  subtitle02Medium: {
    fontSize: 2,
    fontWeight: 2,
    fontFamily: 2,
    // lineHeight: 3,
  },
  subtitle02Semibold: {
    fontSize: 2,
    fontWeight: 3,
    fontFamily: 3,
    // lineHeight: 3,
  },
  subtitle02Bold: {
    fontSize: 2,
    fontWeight: 4,
    fontFamily: 4,
    // lineHeight: 3,
  },
  // Subtitle03
  subtitle03Regular: {
    fontSize: 1,
    fontWeight: 1,
    fontFamily: 1,
    // lineHeight: 2,
  },
  subtitle03Medium: {
    fontSize: 1,
    fontWeight: 2,
    fontFamily: 2,
    // lineHeight: 2,
  },
  subtitle03Semibold: {
    fontSize: 1,
    fontWeight: 3,
    fontFamily: 3,
    // lineHeight: 2,
  },
  subtitle03Bold: {
    fontSize: 1,
    fontWeight: 4,
    fontFamily: 4,
    // lineHeight: 2,
  },
  // Subtitle04
  subtitle04Regular: {
    fontSize: 0,
    fontWeight: 1,
    fontFamily: 1,
    // lineHeight: 1,
  },
  subtitle04Medium: {
    fontSize: 0,
    fontWeight: 2,
    fontFamily: 2,
    // lineHeight: 1,
  },
  subtitle04Semibold: {
    fontSize: 0,
    fontWeight: 3,
    fontFamily: 3,
    // lineHeight: 1,
  },
  subtitle04Bold: {
    fontSize: 0,
    fontWeight: 4,
    fontFamily: 4,
    // lineHeight: 1,
  },
  // Body
  bodyText: {
    fontSize: 1,
    fontWeight: 1,
    fontFamily: 1,
    // lineHeight: 2,
  },
  bodyUnderline: {
    fontSize: 1,
    fontWeight: 1,
    fontFamily: 1,
    // lineHeight: 2,
    textDecorationLine: 'underline',
  },
  bodyTextLink: {
    fontSize: 1,
    fontWeight: 2,
    fontFamily: 2,
    // lineHeight: 2,
    textDecorationLine: 'underline',
  },
  bodyLongText: {
    fontSize: 1,
    fontWeight: 1,
    fontFamily: 1,
    // lineHeight: 2,
  },
  // Caption
  captionText: {
    fontSize: 0,
    fontWeight: 1,
    fontFamily: 1,
    // lineHeight: 0,
  },
  captionMedium: {
    fontSize: 0,
    fontWeight: 2,
    fontFamily: 2,
    // lineHeight: 0,
  },
  captionLongText: {
    fontSize: 0,
    fontWeight: 1,
    fontFamily: 1,
    // lineHeight: 0,
  },
  captionTextLink: {
    fontSize: 0,
    fontWeight: 2,
    fontFamily: 2,
    // lineHeight: 0,
    textDecorationLine: 'underline',
  },
};

const buttonCommon = {
  borderRadius: 'normal',
};

export const buttonStyles = {
  height: [32, 40, 48],
  padding: [8, 12, 14, 16, 24, 32],
  variant: {
    primary: {
      color: 'white',
      backgroundColor: 'primaryColor',
      ...buttonCommon,
    },
    secondary: {
      color: 'white',
      backgroundColor: 'secondaryColor',
      ...buttonCommon,
    },
    success: {
      color: 'white',
      backgroundColor: 'successColor',
      ...buttonCommon,
    },
    danger: {
      color: 'white',
      backgroundColor: 'dangerColor',
      ...buttonCommon,
    },
  },
  type: (props: {
    variant: ButtonVariantTypes;
    isPressed: boolean;
    disabled: boolean;
    type: ButtonTypeTypes;
  }) => {
    const variantColor = props.disabled
      ? 'tertiaryColor'
      : `${props.variant}Color` ?? 'primaryBackground';
    const variantHoverColor = `${props.variant}Hover` ?? 'primaryBackground';

    return {
      contained: {
        color: props.disabled ? 'secondaryColor' : 'white',
        backgroundColor: props.disabled
          ? 'tertiaryColor'
          : props.isPressed
          ? variantHoverColor
          : variantColor,
        borderWidth: 1,
        borderColor: variantColor,
        ...buttonCommon,
      },
      outline: {
        color: props.isPressed ? 'white' : variantColor,
        backgroundColor: props.disabled
          ? variantColor
          : props.isPressed
          ? variantHoverColor
          : 'transparent',
        borderWidth: 1,
        borderColor: variantColor,
        ...buttonCommon,
      },
      text: {
        color: props.isPressed ? variantHoverColor : variantColor,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'transparent',
        textDecorationLine: 'underline',
        ...buttonCommon,
      },
    };
  },
  size: (props: { text: string }) => {
    return {
      large: {
        paddingVertical: buttonStyles.padding[2],
        paddingHorizontal: props.text
          ? buttonStyles.padding[5]
          : buttonStyles.padding[2],
      },
      medium: {
        paddingVertical: buttonStyles.padding[1],
        paddingHorizontal: props.text
          ? buttonStyles.padding[4]
          : buttonStyles.padding[1],
      },
      small: {
        paddingVertical: buttonStyles.padding[0],
        paddingHorizontal: props.text
          ? buttonStyles.padding[3]
          : buttonStyles.padding[0],
      },
    };
  },
};

export const buttonVariant = variant({
  prop: 'variant',
  variants: buttonStyles.variant,
});

export const buttonType = (props: any) =>
  variant({
    prop: 'type',
    variants: buttonStyles.type(props),
  });

export const buttonSize = (props: any) =>
  variant({
    prop: 'size',
    variants: buttonStyles.size(props),
  });

export const inputStyle = {
  height: [32, 40, 48],
};

export const iconSizes = [12, 14, 16, 20, 24, 32];

export default {
  textStyle,
  buttonStyles,
  buttonVariant,
  buttonType,
  buttonSize,
  inputStyle,
  iconSizes,
};
