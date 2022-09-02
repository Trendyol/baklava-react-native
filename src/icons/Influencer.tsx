import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgInfluencer = (props: SvgProps) => (
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
      d="M10.8 0a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm4.347 14.753-3.359.516-.153.037a.929.929 0 0 0-.37 1.53l2.456 2.514-.58 3.57-.013.15a.929.929 0 0 0 1.379.812l2.993-1.656 2.993 1.656.138.063a.929.929 0 0 0 1.228-1.025l-.582-3.57 2.458-2.515.1-.12a.93.93 0 0 0-.623-1.446l-3.361-.516-1.51-3.22a.928.928 0 0 0-1.681 0l-1.513 3.22Zm-5.873-.185.676-.18H9a9 9 0 0 0-9 9V24h10.867l.633-3.62-3.072-3.402c-.791-.773-.424-2.036.598-2.354l.248-.056Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgInfluencer;
