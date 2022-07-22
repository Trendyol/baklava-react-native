import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgAward = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      d="M13.5 17h-3v5H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-1.5v-5Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 0a1 1 0 0 0-1 1v9a8 8 0 1 0 16 0V1a1 1 0 0 0-1-1H5Zm8.604 5.76-1.167-2.476a.478.478 0 0 0-.874 0L10.395 5.76a.49.49 0 0 1-.366.28l-2.611.396c-.4.061-.56.575-.27.87l1.89 1.926a.524.524 0 0 1 .14.451l-.447 2.721c-.068.416.35.734.707.537l2.335-1.284a.468.468 0 0 1 .454 0l2.335 1.284c.357.197.775-.12.707-.537l-.446-2.72a.524.524 0 0 1 .14-.452l1.89-1.927c.288-.294.129-.808-.27-.869l-2.612-.397a.49.49 0 0 1-.367-.279Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      d="M0 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5ZM21.5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgAward;
