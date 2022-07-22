import * as React from 'react';
import Svg, { SvgProps, Path, Rect } from 'react-native-svg';

const SvgEdit = (props: SvgProps) => (
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
      d="M14.924.762 1.43 14.276a2.974 2.974 0 0 0-.856 1.823l-.568 6.264a1.501 1.501 0 0 0 1.63 1.631l6.256-.57a2.967 2.967 0 0 0 1.822-.852L23.21 9.056c1.09-1.096 1.045-2.927-.102-4.078L18.999.867A3.037 3.037 0 0 0 16.86 0c-.721 0-1.43.252-1.936.762Zm-.936 5.19 2.922-2.93 4.041 4.048-2.92 2.928-4.043-4.047Z"
      fill={props?.fill ?? `#273142`}
    />
    <Rect
      x={13}
      y={21}
      width={11}
      height={3}
      rx={1.5}
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgEdit;
