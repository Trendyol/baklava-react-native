import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgFo = (props: SvgProps) => (
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
        d="m23.478 12 .42-1.565a11.995 11.995 0 0 0-.311-1.565h-12.63V.046a11.97 11.97 0 0 0-1.566.24l-2.087 1.28-1.043-.106c-.55.3-1.072.64-1.565 1.02v6.39H.413C.276 9.379.172 9.9.102 10.435L.522 12l-.42 1.565c.07.534.174 1.056.311 1.565h4.283v6.39c.493.38 1.016.72 1.565 1.02l1.565-.105 1.565 1.28c.51.112 1.033.193 1.566.24V15.13h12.63c.137-.51.241-1.032.311-1.566L23.478 12Z"
        fill="#0052B4"
      />
      <Path
        d="M23.898 10.435H9.391V.285C8.282.531 7.231.93 6.261 1.46v8.976H.1a12.12 12.12 0 0 0 0 3.13h6.16v8.976c.97.53 2.021.928 3.13 1.174v-10.15h14.507a12.12 12.12 0 0 0 0-3.13Z"
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
export default SvgFo;
