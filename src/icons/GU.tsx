import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgGu = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M5.237 21.913A11.944 11.944 0 0 0 12 24c2.509 0 4.838-.77 6.764-2.087L12 20.87l-6.763 1.043ZM18.764 2.087A11.944 11.944 0 0 0 12 0C9.491 0 7.162.77 5.237 2.087L12 3.13l6.764-1.043Z"
        fill="#D80027"
      />
      <Path
        d="M24 12c0-3.97-2.377-7.958-5.236-9.913H5.237A11.987 11.987 0 0 0 0 12c0 4.119 2.075 7.752 5.237 9.913h13.526A11.986 11.986 0 0 0 24 12Z"
        fill="#0052B4"
      />
      <Path
        d="M11.32 19.575c-.163-.14-4.016-3.49-4.016-7.575s3.853-7.434 4.017-7.575L12 3.843l.68.582c.163.14 4.016 3.49 4.016 7.575s-3.853 7.434-4.017 7.575l-.679.582-.68-.582Z"
        fill="#D80027"
      />
      <Path
        d="M15.652 12C15.652 8.348 12 5.217 12 5.217S8.348 8.347 8.348 12c0 1.117.342 2.185.816 3.13h5.672c.474-.945.816-2.013.816-3.13Z"
        fill="#338AF3"
      />
      <Path
        d="M15.652 12c0 1.117-.342 2.185-.816 3.13L12 15.652l-2.836-.521c-.474-.946-.816-2.014-.816-3.131h7.304Z"
        fill="#0052B4"
      />
      <Path
        d="M12 18.783s1.76-1.509 2.836-3.653H9.164C10.241 17.274 12 18.783 12 18.783Z"
        fill="#FFDA44"
      />
      <Path d="M9.652 9.913h4.696L12 12.261 9.652 9.913Z" fill="#6DA544" />
      <Path d="M11.217 11.478h1.566v4.696h-1.566v-4.696Z" fill="#A2001D" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgGu;
