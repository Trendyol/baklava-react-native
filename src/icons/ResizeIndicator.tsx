import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const ResizeIndicator = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.868.32a1.091 1.091 0 0 1 0 1.543L1.863 25.868A1.091 1.091 0 0 1 .32 24.325L24.325.32a1.091 1.091 0 0 1 1.543 0Zm0 6.546a1.091 1.091 0 0 1 0 1.544L8.41 25.868a1.091 1.091 0 0 1-1.544-1.543L24.325 6.866a1.091 1.091 0 0 1 1.543 0Zm0 6.547a1.091 1.091 0 0 1 0 1.543L14.957 25.869a1.091 1.091 0 0 1-1.544-1.543l10.912-10.912a1.091 1.091 0 0 1 1.543 0Zm0 6.547a1.091 1.091 0 0 1 0 1.543l-4.365 4.365a1.091 1.091 0 0 1-1.543-1.543l4.365-4.365a1.091 1.091 0 0 1 1.543 0Z"
        fill={props?.fill ?? '#273142'}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props?.fill ?? '#273142'} d="M0 0h26.188v26.188H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ResizeIndicator;
