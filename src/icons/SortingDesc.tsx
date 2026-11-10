import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SortingDesc = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M6.54 13.408c.234.3.688.3.922 0l2.89-3.717a.583.583 0 0 0-.461-.941H4.11a.583.583 0 0 0-.46.942l2.89 3.716Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      d="M7.461.592a.583.583 0 0 0-.92 0L3.648 4.309a.583.583 0 0 0 .46.941h5.782a.583.583 0 0 0 .46-.941L7.461.592Z"
      fill="#95A1B5"
    />
  </Svg>
);
export default SortingDesc;
