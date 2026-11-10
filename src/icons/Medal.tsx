import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Medal = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M18 .3a.3.3 0 0 0-.3-.3h-4.4a.3.3 0 0 0-.3.3v4.272c0 .154.116.282.268.302a9.13 9.13 0 0 1 4.22 1.716c.207.153.512.011.512-.245V.3ZM6 .3a.3.3 0 0 1 .3-.3h4.4a.3.3 0 0 1 .3.3v4.272a.307.307 0 0 1-.268.302 9.13 9.13 0 0 0-4.22 1.716C6.304 6.743 6 6.601 6 6.345V.3Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 24a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm1.423-11.328-1.05-2.71a.4.4 0 0 0-.746 0l-1.05 2.71a.4.4 0 0 1-.351.255l-2.902.162a.4.4 0 0 0-.23.709l2.252 1.836a.4.4 0 0 1 .134.413l-.743 2.81a.4.4 0 0 0 .604.438l2.442-1.575a.4.4 0 0 1 .434 0l2.442 1.575a.4.4 0 0 0 .604-.439l-.743-2.81a.4.4 0 0 1 .134-.412l2.252-1.836a.4.4 0 0 0-.23-.71l-2.902-.16a.4.4 0 0 1-.35-.256Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Medal;
