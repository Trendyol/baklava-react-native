import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgGe = (props: SvgProps) => (
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
        d="M23.898 10.435H13.565V.102a12.12 12.12 0 0 0-3.13 0v10.333H.102a12.12 12.12 0 0 0 0 3.13h10.333v10.333a12.121 12.121 0 0 0 3.13 0V13.565h10.333a12.12 12.12 0 0 0 0-3.13Z"
        fill="#D80027"
      />
      <Path
        d="M7.304 5.74V4.173H5.74v1.565H4.174v1.565h1.565V8.87h1.565V7.304H8.87V5.74H7.304ZM18.26 5.74V4.173h-1.564v1.565H15.13v1.565h1.566V8.87h1.565V7.304h1.565V5.74h-1.565ZM7.304 16.696V15.13H5.74v1.566H4.174v1.565h1.565v1.565h1.565v-1.565H8.87v-1.565H7.304ZM18.26 16.696V15.13h-1.564v1.566H15.13v1.565h1.566v1.565h1.565v-1.565h1.565v-1.565h-1.565Z"
        fill="#D80027"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgGe;
