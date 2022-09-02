import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgStorePerformance = (props: SvgProps) => (
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
      d="M20 10.007a3.02 3.02 0 0 0 1.772.74l.228.008v10.286C22 22.123 21.105 23 20 23H4c-1.105 0-2-.877-2-1.96V10.756c.769 0 1.47-.283 2-.748.289.253.628.452 1 .58V20h14.001v-9.412c.373-.13.711-.329 1-.581ZM19.5 1c.944 0 1.833.436 2.4 1.176l1.5 1.959a2.9 2.9 0 0 1 .6 1.763v.939c0 1.082-.895 1.959-2 1.959s-2-.877-2-1.96c0 1.083-.895 1.96-2 1.96s-2-.877-2-1.96c0 1.083-.895 1.96-2 1.96s-2-.877-2-1.96c0 1.083-.895 1.96-2 1.96s-2-.877-2-1.96c0 1.083-.895 1.96-2 1.96s-2-.877-2-1.96c0 1.083-.895 1.96-2 1.96s-2-.877-2-1.96v-.938a2.9 2.9 0 0 1 .6-1.763l1.5-1.96A3.021 3.021 0 0 1 4.5 1h15Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.4 10.083a1 1 0 0 1 .517 1.316v-.001l-.013.035a38.843 38.843 0 0 0-.149.433l-.016.049c-.101.298-.233.689-.392 1.125-.313.864-.739 1.943-1.241 2.87a7.865 7.865 0 0 1-.854 1.297c-.307.366-.71.742-1.22.932a1.882 1.882 0 0 1-1.739-.207c-.493-.326-.874-.857-1.187-1.485a3.243 3.243 0 0 0-.223-.386l-.014.02c-.416.595-.749 1.674-.912 2.21a1 1 0 1 1-1.914-.582l.018-.057c.15-.497.559-1.843 1.168-2.716.28-.402.88-1.106 1.801-1.023.462.042.838.275 1.126.56.283.281.524.65.738 1.08.222.442.394.626.478.692a1.46 1.46 0 0 0 .348-.324c.2-.238.412-.565.627-.963.431-.796.817-1.763 1.12-2.6.15-.414.277-.787.377-1.083l.027-.08c.08-.237.159-.471.212-.594a1 1 0 0 1 1.316-.518Zm-6.348 5.787-.01.007c.006-.006.01-.007.01-.007Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgStorePerformance;
