import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgCy = (props: SvgProps) => (
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
        fill="#FCFCFC"
      />
      <Path
        d="M18.783 10.435h-1.566a5.217 5.217 0 0 1-10.434 0H5.218a6.785 6.785 0 0 0 4.93 6.526 1.736 1.736 0 0 0 .181 1.896l1.706-1.367 1.705 1.367c.45-.562.495-1.318.172-1.913a6.785 6.785 0 0 0 4.87-6.51Z"
        fill="#6DA544"
      />
      <Path
        d="M7.826 9.913s0 2.609 2.609 2.609l.521.521H12s.522-1.565 1.565-1.565c0 0 0-1.043 1.044-1.043h1.565s-.522-2.087 2.087-3.652l-1.044-.522s-3.652 2.609-6.26 2.087V9.39H9.912l-.522-.521-1.565 1.043Z"
        fill="#FFDA44"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgCy;
