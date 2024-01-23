import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMotorcycleCheck = (props: SvgProps) => (
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
      d="M18 1a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm2.704 4.045a.643.643 0 0 1 0 .91l-3 3a.643.643 0 0 1-.909 0l-1.5-1.5a.643.643 0 1 1 .91-.91l1.045 1.046 2.545-2.546a.643.643 0 0 1 .91 0ZM9 6a1 1 0 0 1 1 .994v.012A1 1 0 0 1 9 8H7.857l-1.7 6.409A6.035 6.035 0 0 1 9.65 18H12v-4c0-.482.315-.883.734-.978A7.97 7.97 0 0 0 18 15c1.138 0 2.22-.238 3.2-.665.213.344.362.741.429 1.172l.359 3.329c.093.609-.342 1.164-.913 1.164H8c0-2.206-1.794-4-4-4a3.96 3.96 0 0 0-2.4.8 1 1 0 0 1-1.201-1.6 6 6 0 0 1 1.728-.903A2.004 2.004 0 0 1 4 13h.5l.5-2h-.5a1.5 1.5 0 1 1 0-3h1.25L6 7a1 1 0 0 1 .884-.993L7 6h2Zm8 17c1.39 0 2.56-.838 3-2h-6c.44 1.162 1.61 2 3 2ZM4 17a3 3 0 1 1-.001 6 3 3 0 0 1 0-6Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default SvgMotorcycleCheck;
