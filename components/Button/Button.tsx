import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { flexbox, color, space } from 'styled-system';
import { SvgProps } from 'react-native-svg';
import Text from '../Text/Text';
import theme, { buttonSize, buttonType } from '../../src/theme';
import { useIsPressed } from './hooks';
import type {
  ButtonSizeTypes,
  ButtonTypeTypes,
  ButtonVariantTypes,
} from './types';

const BaseButton = styled(Pressable)`
  ${flexbox}
  ${color}
  ${space}
`;

const StyledButton = styled(BaseButton)`
  ${buttonSize}
  ${buttonType}
`;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  underlineText: {
    textDecorationLine: 'underline',
  },
});

const Button = ({
  type = 'contained',
  size = 'medium',
  variant = 'primary',
  icon,
  text,
  disabled = false,
  filled = false,
  ...rest
}: {
  variant?: ButtonVariantTypes;
  type?: ButtonTypeTypes;
  size?: ButtonSizeTypes;
  icon?: (props: SvgProps) => JSX.Element;
  text?: string;
  disabled?: boolean;
  filled?: boolean;
  [key: string]: any;
}) => {
  const { pressableProps, isPressed } = useIsPressed(rest.isPressed);

  const buttonTypes = theme.buttonStyles.type({
    variant,
    type,
    isPressed,
    disabled,
  });

  const typeColor = disabled
    ? theme.colors.contentPassive
    : isPressed && type !== 'text'
    ? theme.colors.white
    : buttonTypes[type].color;

  const textVariants: string = {
    large: 'subtitle02Medium',
    medium: 'subtitle03Medium',
    small: 'subtitle03Medium',
  }[size];

  return (
    <StyledButton
      //@ts-ignore
      type={type}
      size={size}
      variant={disabled ? 'passive' : variant}
      text={text}
      onPressIn={() => pressableProps.onPressIn()}
      onPressOut={() => pressableProps.onPressOut()}
      isPressed={isPressed}
      alignSelf={filled ? 'stretch' : 'flex-start'}
      disabled={disabled}
      {...rest}>
      {icon
        ? React.createElement(icon, {
            fill: typeColor as string,
            testID: 'button-icon',
          })
        : null}
      {text ? (
        <Text
          variant={textVariants}
          color={typeColor}
          style={type === 'text' && !disabled ? styles.underlineText : {}}
          marginLeft={icon ? 3 : 0}
          testID="button-text">
          {text}
        </Text>
      ) : null}
    </StyledButton>
  );
};

Button.defaultProps = {
  ...styles.button,
};

export default Button;
