import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgDonation = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 11A1.5 1.5 0 0 0 0 12.5v9a1.5 1.5 0 0 0 3 0v-9A1.5 1.5 0 0 0 1.5 11ZM5 12h2.327c.447 0 .893.05 1.33.151l9.26 2.136A1.406 1.406 0 0 1 19 15.662a1.4 1.4 0 0 1-1.39 1.41h-5.048a.566.566 0 0 0-.562.57c0 .262.175.49.425.553l3.575.907 6.404-1.218c.83-.158 1.596.487 1.596 1.343 0 .54-.314 1.03-.8 1.25l-7.038 3.173a3.948 3.948 0 0 1-2.409.271L5 22.145V12Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.123.345a4.053 4.053 0 0 1 3.266 0c.516.227.984.559 1.377.976a4.5 4.5 0 0 1 .914 1.451 4.691 4.691 0 0 1 0 3.41 4.5 4.5 0 0 1-.914 1.451l-4.48 4.755-4.77-1.27-3.282-3.485A4.606 4.606 0 0 1 9 4.477c0-1.179.441-2.315 1.234-3.156a4.136 4.136 0 0 1 3.01-1.32c1.285 0 2.39.525 3.256 1.499.47-.528.985-.875 1.623-1.155ZM16.56 13.997a.616.616 0 0 1-.365-.079l.365.08Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgDonation;
