import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Narrow = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12 1.5a1.5 1.5 0 0 1 3 0v5.379l5.94-5.94a1.5 1.5 0 0 1 2.12 2.122L17.122 9H22.5a1.5 1.5 0 0 1 0 3h-9a1.5 1.5 0 0 1-1.5-1.5v-9ZM10.5 12a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-3 0v-5.379l-5.94 5.94a1.5 1.5 0 0 1-2.12-2.122L6.878 15H1.5a1.5 1.5 0 0 1 0-3h9Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Narrow;
