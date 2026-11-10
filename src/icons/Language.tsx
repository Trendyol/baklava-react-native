import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Language = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m6.017 15.846 1.155-3.399 1.154 3.399H6.017Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 8h6v3a4 4 0 0 0 4 4h1v4a3 3 0 0 1-3 3H7v2l-2.667-2H3a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3Zm5.665 8.845.558 1.643h1.12L7.614 11H6.73L4 18.488h1.12l.558-1.643h2.987Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 0a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4v2l2.667-2H21a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3h-8Zm6.033 4.89h1.811v-.876h-3.362V3h-1.12v1.014H13v.876h5.164c-.18.714-.667 1.494-1.242 2.22-.4-.507-.76-1.039-1-1.557a9.305 9.305 0 0 1-.873.12c.262.64.701 1.341 1.314 2.098a21.605 21.605 0 0 1-2.169 2.09l.531.67a21.81 21.81 0 0 0 2.197-2.107 21.81 21.81 0 0 0 2.197 2.107l.531-.67a21.605 21.605 0 0 1-2.169-2.09c.874-1.079 1.395-2.044 1.552-2.88Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Language;
