import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { flexbox, color, space } from 'styled-system';
import Text from '../Text/Text';
import theme from '../../src/theme';
import { useIsPressed } from './hooks';
import type {
  ButtonSizeTypes,
  ButtonTypeTypes,
  ButtonVariantTypes,
} from './types';
import type { TextVariantTypes } from '../Text/types';
import { IconNameType } from '../Icon/types';
import Icon from '../Icon/Icon';

const BaseButton = styled(Pressable)`
  ${flexbox}
  ${color}
  ${space}
`;

const StyledButton = styled(BaseButton)`
  ${theme.buttonSize}
  ${theme.buttonType}
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
  icon?: IconNameType | null;
  text?: string;
  disabled?: boolean;
  filled?: boolean;
  [key: string]: any;
}) => {
  const { pressableProps, isPressed } = useIsPressed(rest.isPressed);

  /* istanbul ignore next */
  const onPressIn = () => pressableProps.onPressIn();
  /* istanbul ignore next */
  const onPressOut = () => pressableProps.onPressOut();

  const buttonTypes = theme.buttonStyles.type({
    variant,
    type,
    isPressed,
    disabled,
  });

  const textVariants = {
    large: 'subtitle02Medium',
    medium: 'subtitle03Medium',
    small: 'subtitle03Medium',
  }[size] as TextVariantTypes;

  const typeColor = disabled
    ? theme.colors.contentPassive
    : isPressed && type !== 'text'
    ? theme.colors.white
    : buttonTypes[type].color;

  const textStyle = type === 'text' && !disabled ? styles.underlineText : {};

  return (
    <StyledButton
      //@ts-ignore
      type={type}
      size={size}
      variant={variant}
      text={text}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      isPressed={isPressed}
      alignSelf={filled ? 'stretch' : 'flex-start'}
      disabled={disabled}
      {...rest}>
      {icon ? (
        <Icon name={icon} size="small" color={typeColor} testID="button-icon" />
      ) : null}
      {text ? (
        <Text
          variant={textVariants}
          color={typeColor}
          style={textStyle}
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
