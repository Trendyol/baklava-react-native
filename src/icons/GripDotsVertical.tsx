import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const GripDotsVertical = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10.5 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM10.5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM10.5 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM17.5 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM17.5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM17.5 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default GripDotsVertical;
