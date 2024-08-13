import {
  backgroundColor,
  backgroundColorShorthand,
  opacity,
  visible,
  layout,
  spacing,
  border,
  shadow,
  position,
  useRestyle,
  spacingShorthand,
  composeRestyleFunctions,
  BoxProps as RestyleBoxProps,
} from '@ergenekonyigit/restyle';
import React from 'react';
import { ViewProps as RNViewProps, View as RNView } from 'react-native';
import { Theme } from '../../theme';

type RestyleProps = RestyleBoxProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  backgroundColor,
  backgroundColorShorthand,
  opacity,
  visible,
  layout,
  spacing,
  spacingShorthand,
  border,
  shadow,
  position,
]);

export type BoxProps = RNViewProps & RestyleProps;

const Box = ({ testID, accessibilityLabel, accessible, ...rest }: BoxProps) => {
  const props = useRestyle(restyleFunctions, rest);

  const testProps = React.useMemo(() => {
    const result: RNViewProps = {
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

  return <RNView {...props} {...testProps} />;
};

export default Box;
