import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgVacationMode = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12 17c-6.627 0-12 2.444-12 5.46C0 23.577 5.373 24 12 24c6.629 0 12-.42 12-1.54C24 19.443 18.628 17 12 17Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 7.927c-3 0-5.5 3.523-5.5 3.523 0-8.053 6.025-7.561 6.025-7.561C10.5 1.887 7.5 2.39 7.5 2.39c2.958-2.515 6.83-.788 6.83-.788C20-2.643 24 2.893 24 2.893c-4.5-1.51-6 1.51-6 1.51 5.5.504 5.5 6.544 5.5 6.544-3-3.02-6.306-3.268-6.306-3.268 1.29 2.586 1.748 5.898 1.885 8.576a16.49 16.49 0 0 0-3.132-.9C16.233 11.459 15 8.43 15 8.43c-3 1.51-4.5 6.543-4.5 6.543-1.5-3.523 0-7.046 0-7.046Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);

export default SvgVacationMode;
