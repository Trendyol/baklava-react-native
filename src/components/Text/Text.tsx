import {
  composeRestyleFunctions,
  TextProps as RestyleTextProps,
  useRestyle,
  color,
  createVariant,
  opacity,
  spacing,
  spacingShorthand,
  textShadow,
  typography,
  visible,
} from '@ergenekonyigit/restyle';
import React from 'react';
import {
  TextProps as RNTextProps,
  TextStyle as RNTextStyle,
  Text as RNText,
} from 'react-native';
import { Theme } from '../../theme';

export type TextVariants = RestyleTextProps<Theme>['variant'];

type RestyleProps = RestyleTextProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  color,
  opacity,
  visible,
  typography,
  spacing,
  spacingShorthand,
  textShadow,
  createVariant({ themeKey: 'textVariants' }),
]);

const truncateStyle: RNTextStyle = { flexShrink: 1, minWidth: 0 };

export type TextProps = RNTextProps &
  RestyleProps & {
    /** When true, truncates overflowing text with an ellipsis instead of wrapping. */
    truncate?: boolean;
  };

const Text = ({
  testID,
  accessibilityLabel,
  accessible,
  truncate = false,
  numberOfLines,
  ellipsizeMode,
  ...rest
}: TextProps) => {
  const props = useRestyle(restyleFunctions, rest);

  const testProps = React.useMemo(() => {
    const result: RNTextProps = {
      accessible: false,
      accessibilityLabel: undefined,
      testID: undefined,
    };

    if (!(testID || accessibilityLabel)) {
      return result;
    }

    result.accessible = accessible ?? true;
    result.accessibilityLabel = accessibilityLabel ?? testID;
    result.testID = testID ?? accessibilityLabel;

    return result;
  }, [testID, accessibilityLabel, accessible]);

  return (
    <RNText
      {...props}
      {...testProps}
      numberOfLines={numberOfLines ?? (truncate ? 1 : undefined)}
      ellipsizeMode={ellipsizeMode ?? (truncate ? 'tail' : undefined)}
      style={truncate ? [props.style, truncateStyle] : props.style}
    />
  );
};

export default Text;
