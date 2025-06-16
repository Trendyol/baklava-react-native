import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgAx = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M23.587 15.13c.269-.998.413-2.047.413-3.13 0-1.083-.144-2.132-.413-3.13L10.957.046a11.939 11.939 0 0 0-6.261 2.433L.413 8.87A12.013 12.013 0 0 0 0 12c0 1.077.143 2.12.409 3.113l4.287 6.407a11.938 11.938 0 0 0 6.26 2.434l12.63-8.824Z"
        fill="#FFDA44"
      />
      <Path
        d="M.413 15.13a12.01 12.01 0 0 0 4.283 6.39v-6.39H.413ZM10.956 23.954c.344.03.692.046 1.044.046 5.544 0 10.21-3.76 11.587-8.87h-12.63v8.824ZM23.587 8.87C22.209 3.76 17.544 0 12 0c-.352 0-.7.016-1.044.046V8.87h12.63ZM4.696 2.48A12.01 12.01 0 0 0 .413 8.87h4.283V2.48Z"
        fill="#0052B4"
      />
      <Path
        d="M23.898 10.435H9.391V.285C8.282.531 7.231.93 6.261 1.46v8.976H.1a12.104 12.104 0 0 0 0 3.13h6.16v8.976c.97.53 2.021.928 3.13 1.174v-10.15h14.507a12.118 12.118 0 0 0 0-3.13Z"
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
export default SvgAx;
