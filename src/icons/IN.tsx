import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgIn = (props: SvgProps) => (
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
        d="M12 0A12 12 0 0 0 1.19 6.783h21.62A12 12 0 0 0 12 0Z"
        fill="#FF9811"
      />
      <Path
        d="M12 24a12 12 0 0 0 10.81-6.783H1.19A12 12 0 0 0 12 24Z"
        fill="#6DA544"
      />
      <Path
        d="M12 16.174a4.174 4.174 0 1 0 0-8.348 4.174 4.174 0 0 0 0 8.348Z"
        fill="#0052B4"
      />
      <Path
        d="M12 14.609a2.609 2.609 0 1 0 0-5.218 2.609 2.609 0 0 0 0 5.218Z"
        fill="#F0F0F0"
      />
      <Path
        d="m12 8.78.805 1.826 1.983-.216L13.61 12l1.178 1.61-1.983-.216L12 15.219l-.805-1.825-1.983.216L10.39 12l-1.178-1.61 1.983.216L12 8.781Z"
        fill="#0052B4"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIn;
