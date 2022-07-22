import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgRotate = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C5.373 0 0 5.373 0 12c0 2.915 1.041 5.59 2.77 7.669l.016.019a.418.418 0 0 0 .01.012l.074.082H1.527a1.527 1.527 0 0 0 0 3.054h5.091c.753 0 1.393-.548 1.51-1.291l.726-4.655a1.527 1.527 0 1 0-3.018-.471l-.278 1.78-.46-.508A8.903 8.903 0 0 1 3.055 12 8.945 8.945 0 1 1 12 20.945 1.527 1.527 0 1 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgRotate;
