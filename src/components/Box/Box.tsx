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
    { shrink = false, accessible, ...rest }: BoxProps,
    ref: React.ForwardedRef<RNView>,
  ) => {
    // testID ve accessibilityLabel rest uzerinden akar. accessible ise burada
    // ele alinir: HEAD'den beri varsayilan olarak false set edilir. Aksi halde
    // native varsayilan devreye girer ve kapsayicilar alt ogelerin etiketlerini
    // tek bir odak dugumunde birlestirir ("okunmayan icerik" bulgusu).
    const props = useRestyle(restyleFunctions, {
      ...(shrink ? { flexShrink: 1, minWidth: 0 } : null),
      ...rest,
    });

    return <RNView {...props} accessible={accessible ?? false} ref={ref} />;
  },
);

export default Box;
