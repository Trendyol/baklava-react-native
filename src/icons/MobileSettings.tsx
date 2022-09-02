import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgMobileSettings = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M1 3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v5.021A2.886 2.886 0 0 0 16.66 8h-1.385a2.9 2.9 0 0 0-.775.106V3.5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h3.961a2.85 2.85 0 0 0 .755 1.307l.977.978a2.9 2.9 0 0 0 .242.215H4a3 3 0 0 1-3-3V3Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.516 10.345A1.18 1.18 0 0 1 15.35 10h1.356c.307.016.595.153.803.38.208.227.319.527.31.835v.766a.232.232 0 0 0 .153.204.376.376 0 0 0 .147.035.223.223 0 0 0 .14-.056l.538-.541a1.16 1.16 0 0 1 .832-.345 1.134 1.134 0 0 1 .825.345l.938.941a1.16 1.16 0 0 1 .26 1.284 1.16 1.16 0 0 1-.26.38l-.539.542a.24.24 0 0 0 0 .26c.042.105.112.19.21.19h.762c.312 0 .61.124.83.345.221.221.345.521.345.834v1.328c-.01.3-.135.586-.349.798a1.173 1.173 0 0 1-.798.34h-.762a.244.244 0 0 0-.203.162.24.24 0 0 0 0 .26l.539.54a1.173 1.173 0 0 1 .255 1.284c-.06.142-.146.272-.255.381l-.938.941a1.148 1.148 0 0 1-.825.345 1.156 1.156 0 0 1-.832-.345l-.531-.54a.197.197 0 0 0-.147-.057.289.289 0 0 0-.112 0c-.105.05-.182.12-.182.218v.766a1.19 1.19 0 0 1-.348.835c-.222.22-.521.345-.834.345h-1.321c-.312 0-.61-.124-.831-.346a1.183 1.183 0 0 1-.344-.834v-.766a.232.232 0 0 0-.154-.203.36.36 0 0 0-.147 0c-.05-.001-.1.016-.14.049l-.538.54a1.16 1.16 0 0 1-.832.345 1.136 1.136 0 0 1-.825-.345l-.938-.94a1.165 1.165 0 0 1-.35-.837 1.21 1.21 0 0 1 .35-.836l.539-.534a.24.24 0 0 0 0-.26c-.042-.105-.112-.189-.21-.189h-.762a1.17 1.17 0 0 1-1.086-.729A1.184 1.184 0 0 1 9 17.664v-1.328c.002-.312.126-.61.347-.83.22-.22.517-.343.828-.343h.762a.244.244 0 0 0 .203-.162.268.268 0 0 0 0-.287l-.539-.541a1.173 1.173 0 0 1-.255-1.284c.06-.143.146-.272.255-.381l.938-.941a1.148 1.148 0 0 1 .825-.345 1.156 1.156 0 0 1 .832.345l.531.54a.197.197 0 0 0 .147.057.289.289 0 0 0 .112 0c.105-.05.182-.12.182-.218v-.766a1.19 1.19 0 0 1 .348-.835ZM18.333 17a2.333 2.333 0 1 1-4.667 0 2.333 2.333 0 0 1 4.667 0Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      d="M6 1h6v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgMobileSettings;
