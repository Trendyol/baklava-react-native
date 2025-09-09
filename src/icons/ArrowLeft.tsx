import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { I18nManager } from 'react-native';

const SvgArrowLeft = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={[
      { transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }] },
      props.style,
    ]}
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.64 3.93c.67.67.67 1.756 0 2.425L10.996 12l5.644 5.645a1.714 1.714 0 1 1-2.424 2.424L7.36 13.212a1.714 1.714 0 0 1 0-2.424l6.857-6.857c.67-.67 1.755-.67 2.425 0Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);

export default SvgArrowLeft;
