import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgDialog = (props: SvgProps) => (
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
      d="M19.2 12V3.6A3.6 3.6 0 0 0 15.6 0h-12A3.6 3.6 0 0 0 0 3.6V12a3.6 3.6 0 0 0 3.6 3.6V18a1.2 1.2 0 0 0 .66 1.068c.166.09.352.135.54.132a1.2 1.2 0 0 0 .72-.24l1.92-1.44 2.556-1.92H15.6a3.6 3.6 0 0 0 3.6-3.6ZM8.038 20.4a3.754 3.754 0 0 1-.735-.076l3.78-2.824h5.834C19.09 17.5 21 15.3 21 13.125V4.862c1.708.313 3 1.778 3 3.538v8.4c0 1.988-1.65 3.6-3.683 3.6v2.4a1.197 1.197 0 0 1-.676 1.068 1.246 1.246 0 0 1-1.29-.108l-4.579-3.36H8.038Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgDialog;
