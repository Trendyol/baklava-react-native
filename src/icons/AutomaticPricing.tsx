import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgAutomaticPricing = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m22.066 11.484 1.248.714c.316.182.546.48.64.827.093.348.044.719-.139 1.03l-1.37 2.355a1.349 1.349 0 0 1-.83.633 1.386 1.386 0 0 1-1.042-.136l-1.264-.724a8.325 8.325 0 0 1-2.31 1.398V16.5a9.46 9.46 0 0 0-1.005-4.259 3 3 0 1 0-4.236-4.236A9.46 9.46 0 0 0 7.5 7a9.485 9.485 0 0 0-3.142.532 1.346 1.346 0 0 1-.142-1.559l1.37-2.355a1.348 1.348 0 0 1 .83-.633 1.386 1.386 0 0 1 1.04.135l1.22.697A8.248 8.248 0 0 1 11.25 2.32v-.96a1.333 1.333 0 0 1 .4-.96 1.378 1.378 0 0 1 .97-.4h2.741c.365.001.715.145.972.4s.4.6.399.959v.96a8.246 8.246 0 0 1 2.575 1.498l1.237-.708a1.379 1.379 0 0 1 1.872.498l1.37 2.354c.182.312.232.682.138 1.03a1.368 1.368 0 0 1-.639.826l-1.22.699c.198.98.198 1.988 0 2.968Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 16.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-8.488 3.75a5.25 5.25 0 0 1-.545-.031 3.726 3.726 0 0 1-.533-.073v-3.17l-1.148.342v-.9l1.148-.343v-.642l-1.148.342v-.901l1.148-.342V12.75h1.729v1.264l1.847-.56v.902l-1.847.559v.642l1.847-.56v.892l-1.847.56v2.537c.497-.076.884-.22 1.16-.435.284-.214.481-.494.592-.839.118-.345.177-.742.177-1.191h1.622c0 .476-.07.939-.213 1.388-.142.442-.375.839-.698 1.191-.316.352-.746.632-1.29.84-.537.206-1.204.31-2.001.31Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgAutomaticPricing;
