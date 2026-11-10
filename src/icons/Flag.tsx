import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Flag = (props: SvgProps) => (
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
      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0ZM9 4a1 1 0 0 0-1 1v14a1 1 0 1 0 2 0v-5l7.679-3.072c.838-.335.838-1.521 0-1.856L10 6V5a1 1 0 0 0-1-1Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Flag;
