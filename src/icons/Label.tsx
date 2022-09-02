import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgLabel = (props: SvgProps) => (
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
      d="M12.595.005a2.551 2.551 0 0 0-1.97.742L.747 10.625a2.551 2.551 0 0 0 0 3.608l9.02 9.02a2.551 2.551 0 0 0 3.608 0l9.878-9.878c.52-.52.79-1.238.742-1.97l-.553-8.467a2.551 2.551 0 0 0-2.38-2.38L12.595.005Zm3.486 7.914a2.551 2.551 0 1 0 3.607-3.607 2.551 2.551 0 0 0-3.607 3.607Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgLabel;
