import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgFlashFill = (props: SvgProps) => (
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
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12ZM9.78 5h5.444a.5.5 0 0 1 .455.707L13.5 10.5h3.333a.5.5 0 0 1 .362.845l-7.504 7.88c-.375.393-1.021-.012-.83-.521L11 13H7.64a.5.5 0 0 1-.485-.621l1.656-6.622A1 1 0 0 1 9.78 5Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgFlashFill;
