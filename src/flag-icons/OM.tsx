import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgOm = (props: SvgProps) => (
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
        d="M0 12c0 4.549 2.53 8.506 6.26 10.54V1.46A11.997 11.997 0 0 0 0 12Z"
        fill="#D80027"
      />
      <Path
        d="M23.254 16.174c.482-1.3.746-2.706.746-4.174 0-1.468-.264-2.874-.746-4.174H.746A11.973 11.973 0 0 0 0 12c0 1.468.264 2.874.746 4.174L12 17.217l11.254-1.043Z"
        fill="#D80027"
      />
      <Path
        d="M12 24c5.16 0 9.558-3.256 11.254-7.826H.746C2.442 20.744 6.84 24 12 24Z"
        fill="#6DA544"
      />
      <Path
        d="M0 12c0 5.544 3.76 10.21 8.87 11.587V.413C3.76 1.79 0 6.456 0 12Z"
        fill="#D80027"
      />
      <Path
        d="M7.341 5.28 6.235 4.175l-.738.738-.738-.738L3.652 5.28l.738.738-.738.737L4.76 7.863l.738-.738.738.738L7.34 6.756l-.737-.737.737-.738Z"
        fill="#F0F0F0"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgOm;
