import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgMa = (props: SvgProps) => (
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
        fill="#D80027"
      />
      <Path
        d="M19.092 9.848h-5.418L12 4.696l-1.674 5.152H4.908l4.383 3.184-1.674 5.153L12 15l4.383 3.185-1.674-5.153 4.383-3.184Zm-8.574 2.786.566-1.743h1.832l.566 1.743L12 13.71l-1.482-1.076Zm2.059-2.786h-1.154L12 8.072l.577 1.776Zm1.793 2.14-.357-1.097h1.867l-1.51 1.098Zm-4.383-1.097L9.63 11.99 8.12 10.89h1.867Zm-.385 4.562.577-1.776.933.678-1.51 1.098Zm3.286-1.098.933-.678.577 1.776-1.51-1.098Z"
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
export default SvgMa;
