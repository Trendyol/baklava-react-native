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

export type BoxProps = RNViewProps &
  RestyleProps & {
    /**
     * When true, allows this Box to shrink inside a row so long content
     * (e.g. Text with truncate) does not push siblings off-screen.
     * Opt-in to avoid changing existing layouts.
     */
    shrink?: boolean;
  };

const Box = React.forwardRef(
  (
    {
      testID,
      accessibilityLabel,
      accessible,
      shrink = false,
      ...rest
    }: BoxProps,
    ref: React.ForwardedRef<RNView>,
  ) => {
    const props = useRestyle(restyleFunctions, {
      ...(shrink ? { flexShrink: 1, minWidth: 0 } : null),
      ...rest,
    });

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

    return <RNView {...props} {...testProps} ref={ref} />;
  },
);

export default Box;
