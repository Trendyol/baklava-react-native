import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgHappy = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Zm-7.86 1.68a.9.9 0 0 0-1.246.162l-.003.004a.975.975 0 0 1-.072.069 2.219 2.219 0 0 1-.43.29c-.425.227-1.178.495-2.39.495-1.21 0-1.964-.268-2.388-.494a2.221 2.221 0 0 1-.43-.291.967.967 0 0 1-.072-.07l-.003-.003A.9.9 0 0 0 7.68 14.94l.72-.54-.72.541.002.001.001.002.004.005.008.01a1.56 1.56 0 0 0 .083.099c.05.055.119.124.207.202.176.157.431.349.779.534.7.374 1.747.706 3.236.706s2.535-.332 3.236-.706c.348-.185.603-.377.78-.534a2.753 2.753 0 0 0 .289-.3l.008-.01.004-.006.001-.002h.001c0-.001 0-.002-.719-.542l.72.54a.9.9 0 0 0-.18-1.26ZM6 9.6a1.2 1.2 0 1 1 2.4 0 1.2 1.2 0 0 1-2.4 0Zm10.8-1.2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgHappy;