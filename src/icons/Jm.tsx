import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgJm = (props: SvgProps) => (
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
        fill="#FFDA44"
      />
      <Path
        d="M19.306 2.48A11.946 11.946 0 0 0 12 0C9.25 0 6.718.925 4.694 2.48L12 9.787l7.306-7.305Z"
        fill="#6DA544"
      />
      <Path
        d="M2.48 4.694A11.947 11.947 0 0 0 0 12c0 2.75.925 5.282 2.48 7.306L9.787 12 2.481 4.694Z"
        fill="#000"
      />
      <Path
        d="M4.694 21.52A11.947 11.947 0 0 0 12 24c2.75 0 5.282-.925 7.306-2.48L12 14.213l-7.306 7.305Z"
        fill="#6DA544"
      />
      <Path
        d="M21.52 19.306A11.947 11.947 0 0 0 24 12c0-2.75-.925-5.282-2.48-7.306L14.213 12l7.305 7.306Z"
        fill="#000"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgJm;
