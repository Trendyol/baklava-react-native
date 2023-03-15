import {
  composeRestyleFunctions,
  TextProps,
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
import { TextProps as RNTextProps, Text as RNText } from 'react-native';
import { Theme } from '../../theme';

export type TextVariants = TextProps<Theme>['variant'];

type RestyleProps = TextProps<Theme>;

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

type Props = RNTextProps & RestyleProps;

const Text = ({ testID, accessibilityLabel, accessible, ...rest }: Props) => {
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
    result.accessibilityLabel = accessibilityLabel;
    result.testID = testID ?? accessibilityLabel;

    return result;
  }, [testID, accessibilityLabel, accessible]);

  return <RNText {...props} {...testProps} />;
};

export default Text;
