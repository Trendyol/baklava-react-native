import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgIq = (props: SvgProps) => (
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
        d="M12 0C6.84 0 2.442 3.256.746 7.826h22.508C21.558 3.256 17.159 0 12 0Z"
        fill="#A2001D"
      />
      <Path
        d="M12 24c5.16 0 9.558-3.256 11.254-7.826H.746C2.442 20.744 6.84 24 12 24Z"
        fill="#000"
      />
      <Path
        d="M9.13 11.217H6.818c.116-.449.524-.782 1.01-.782V8.87a2.612 2.612 0 0 0-2.61 2.608v1.305h3.914c.143 0 .26.117.26.26v.522H4.174v1.565h6.783v-2.087c0-1.006-.82-1.826-1.826-1.826ZM13.044 13.565V8.87h-1.566v6.26h2.61v-1.565h-1.044ZM18.26 13.565V8.87h-1.564v4.695h-.522V12h-1.565v3.13h4.695v-1.565h-1.043Z"
        fill="#496E2D"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIq;
