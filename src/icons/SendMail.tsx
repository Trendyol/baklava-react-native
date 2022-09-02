import * as React from 'react';
import Svg, { SvgProps, Path, Rect } from 'react-native-svg';

const SvgSendMail = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.741 3a3 3 0 0 0-2.915 2.291L4.681 10H5.94a1 1 0 1 1 0 2H4.195l-.486 2h4.203a1 1 0 1 1 0 2h-4.69l-.614 2.527A2 2 0 0 0 4.55 21h13.318a3 3 0 0 0 2.91-2.275l3.146-12.62A2.5 2.5 0 0 0 21.499 3H8.74Zm.03 2.5a.5.5 0 0 0-.328.877l4.704 4.088a2 2 0 0 0 2.476.117l5.835-4.175a.5.5 0 0 0-.291-.907H8.771Z"
      fill={props?.fill ?? `#273142`}
    />
    <Rect
      x={-0.001}
      y={8}
      width={3}
      height={2}
      rx={1}
      fill={props?.fill ?? `#273142`}
    />
    <Rect
      x={1.999}
      y={12}
      width={7}
      height={2}
      rx={1}
      fill={props?.fill ?? `#273142`}
    />
    <Rect
      x={-0.001}
      y={16}
      width={6}
      height={2}
      rx={1}
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgSendMail;
