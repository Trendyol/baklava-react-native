import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgTt = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M6.498 1.332a11.993 11.993 0 0 0-2.984 2.182c-.9.9-1.627 1.91-2.181 2.984l7.715 8.453 8.454 7.716a11.992 11.992 0 0 0 2.984-2.181c.9-.901 1.627-1.91 2.181-2.984l-7.716-8.454-8.453-7.716Z"
        fill="#F0F0F0"
      />
      <Path
        d="M20.486 20.486c.503-.504.952-1.04 1.347-1.604L5.118 2.167a12.068 12.068 0 0 0-2.951 2.951l16.715 16.715c.563-.395 1.1-.844 1.604-1.347Z"
        fill="#000"
      />
      <Path
        d="M3.514 20.486c3.786 3.786 9.472 4.512 13.988 2.181L1.332 6.497C-.997 11.015-.27 16.7 3.515 20.487ZM20.485 3.514C16.7-.272 11.014-.998 6.498 1.332l16.17 16.17c2.33-4.516 1.604-10.202-2.183-13.988Z"
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
export default SvgTt;
