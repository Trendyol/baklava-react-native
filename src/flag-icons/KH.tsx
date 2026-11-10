import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgKh = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M0 12c0 2.079.529 4.034 1.46 5.74L12 18.782l10.54-1.044C23.472 16.034 24 14.08 24 12c0-2.079-.529-4.034-1.46-5.74L12 5.218 1.46 6.261A11.946 11.946 0 0 0 0 12Z"
        fill="#D80027"
      />
      <Path
        d="M1.46 6.26h21.08A11.997 11.997 0 0 0 12 0C7.452 0 3.494 2.53 1.46 6.26ZM12 24c4.549 0 8.506-2.53 10.54-6.26H1.46A11.997 11.997 0 0 0 12 24Z"
        fill="#0052B4"
      />
      <Path
        d="M16.174 14.348v-1.565H15.13v-2.087l-1.043-1.044-1.043 1.044V8.609L12 7.565 10.957 8.61v2.087L9.912 9.652 8.87 10.696v2.087H7.826v1.565H6.783v1.565h10.434v-1.565h-1.043Z"
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
export default SvgKh;
