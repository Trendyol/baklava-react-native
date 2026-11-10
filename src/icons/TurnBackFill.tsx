import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const TurnBackFill = (props: SvgProps) => (
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
      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Zm-1.793 11.207a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1-.074-1.332l2-2.5a1 1 0 0 1 1.562 1.25l-.7.875H13.5a5 5 0 1 1 0 10h-6a1 1 0 1 1 0-2h6a3 3 0 1 0 0-6H9.914l.293.293a1 1 0 0 1 0 1.414Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default TurnBackFill;
