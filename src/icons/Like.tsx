import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgLike = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 4.555v4.81h6c.347-.003 1.271.025 1.587.169a2.393 2.393 0 0 1 1.318 1.528c.097.335.12.688.068 1.034l-1.65 10.854a2.417 2.417 0 0 1-.816 1.476c-.44.377-1 .58-1.576.574H6V11.77l5.124-10.27c.17-.34.518-.564.892-.507C13.59 1.236 15 2.414 15 4.555ZM2 25h2V12H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgLike;
