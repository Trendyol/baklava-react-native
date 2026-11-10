import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Secure = (props: SvgProps) => (
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
      d="M21.328 2.792 12.738.119a2.626 2.626 0 0 0-1.591.009L2.59 2.895C1.633 3.205.995 4.03 1 4.95l.055 7.963c.017 2.419 1 4.751 2.767 6.568.808.83 1.842 1.544 3.166 2.18l4.66 2.236a1.075 1.075 0 0 0 .928-.005l4.617-2.288c1.31-.647 2.335-1.371 3.135-2.213 1.739-1.836 2.689-4.179 2.672-6.595l-.055-7.969c-.005-.917-.655-1.736-1.617-2.034Zm-4.797 7.176a1.185 1.185 0 0 0 0-1.697 1.238 1.238 0 0 0-1.729 0l-4.024 3.951-1.58-1.551a1.238 1.238 0 0 0-1.729 0 1.185 1.185 0 0 0 0 1.697l2.445 2.4a1.238 1.238 0 0 0 1.728 0l4.889-4.8Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Secure;
