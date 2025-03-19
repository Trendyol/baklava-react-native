import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgQatar = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
        fill="#F0F0F0"
      />
      <Path
        d="M24 12c0-6.627-5.373-12-12-12-2.348 0-4.537.675-6.387 1.84l2.63 1.117-3.547 1.508 3.547 1.507L4.696 7.48l3.547 1.507-3.547 1.507L8.243 12l-3.547 1.507 3.547 1.507-3.547 1.508 3.547 1.507-3.547 1.507 3.547 1.507-2.629 1.117A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12Z"
        fill="#751A46"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgQatar;
