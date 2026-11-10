import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgWs = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12L12 0c6.627 0 12 5.373 12 12Z"
        fill="#D80027"
      />
      <Path d="M12 12V0C5.373 0 0 5.373 0 12h12Z" fill="#0052B4" />
      <Path
        d="m9.612 7.826.194.598h.629l-.509.37.194.597-.508-.37-.509.37.194-.598-.508-.369h.628l.195-.598ZM6.454 3.13l.324.997h1.048l-.848.616.324.996-.848-.616-.847.616.324-.996-.848-.616h1.048l.323-.997ZM9.585 4.174l.324.996h1.047l-.847.616.323.997-.847-.616-.848.616.324-.997-.848-.616h1.048l.324-.996ZM7.11 8.348l.324.996h1.048l-.848.616.324.996-.848-.615-.847.616.324-.997-.848-.616h1.048l.323-.996ZM4.368 5.74l.323.996H5.74l-.848.615.324.997-.847-.616-.848.616.324-.997-.848-.615h1.048l.324-.997Z"
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
export default SvgWs;
