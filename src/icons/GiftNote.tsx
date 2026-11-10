import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const GiftNote = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M0 5a3 3 0 0 1 3-3h14v6H0V5ZM19 8V2h2a3 3 0 0 1 3 3v3h-5ZM20.5 10H24v9a3 3 0 0 1-3 3h-2V11.5l1.5 1.5.5-1 1-.5-1.5-1.5Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 11.5V22H3a3 3 0 0 1-3-3v-9h15.5L14 11.5l1 .5.5 1 1.5-1.5ZM4 14a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2H4Zm0 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H4Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default GiftNote;
