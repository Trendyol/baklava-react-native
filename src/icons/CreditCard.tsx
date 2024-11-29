import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCreditCard = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M0 6c0-1.886 0-2.828.586-3.414C1.172 2 2.114 2 4 2h16c1.886 0 2.828 0 3.414.586C24 3.172 24 4.114 24 6v1H0V6Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 10h24v8c0 1.886 0 2.828-.586 3.414C22.828 22 21.886 22 20 22H4c-1.886 0-2.828 0-3.414-.586C0 20.828 0 19.886 0 18v-8Zm17.5 6a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 0 0-3h-2Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default SvgCreditCard;
