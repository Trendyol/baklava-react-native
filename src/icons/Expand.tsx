import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';

const SvgExpand = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect
      y={12}
      width={3}
      height={12}
      rx={1.5}
      fill={props?.fill ?? `#273142`}
    />
    <Rect
      y={24}
      width={3}
      height={12}
      rx={1.5}
      transform="rotate(-90 0 24)"
      fill={props?.fill ?? `#273142`}
    />
    <Rect
      x={24}
      y={12}
      width={3}
      height={12}
      rx={1.5}
      transform="rotate(180 24 12)"
      fill={props?.fill ?? `#273142`}
    />
    <Rect
      x={24}
      width={3}
      height={12}
      rx={1.5}
      transform="rotate(90 24 0)"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      d="M.94 20.94a1.5 1.5 0 0 0 2.12 2.12L.94 20.94Zm10.12-5.88a1.5 1.5 0 0 0-2.12-2.12l2.12 2.12Zm-8 8 8-8-2.12-2.12-8 8 2.12 2.12ZM12.94 8.94a1.5 1.5 0 0 0 2.12 2.12l-2.12-2.12Zm10.12-5.88A1.5 1.5 0 0 0 20.94.94l2.12 2.12Zm-8 8 8-8L20.94.94l-8 8 2.12 2.12Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgExpand;
