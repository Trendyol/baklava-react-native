import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgMyOffers = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      d="M0 12.5a1.5 1.5 0 0 1 3 0v9a1.5 1.5 0 0 1-3 0v-9ZM7.327 12H5v10l8.753 1.75a4 4 0 0 0 2.41-.267l7.037-3.127a1.348 1.348 0 0 0-.796-2.557L16 19l-3.575-.894A.562.562 0 0 1 12.562 17h5.048a1.39 1.39 0 0 0 .308-2.746L8.656 12.15C8.22 12.05 7.774 12 7.326 12Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.65 14.687A7.501 7.501 0 0 1 16.5 15c-2.12 0-4.036-.88-5.4-2.296l6.818 1.55c.292.066.544.222.732.433Zm1.422-.59a2.888 2.888 0 0 0-1.822-1.306l-8.452-1.92a7.5 7.5 0 1 1 10.274 3.226Zm-4.739-8.93a1.167 1.167 0 1 1-2.333 0 1.167 1.167 0 0 1 2.333 0ZM20 9.833a1.167 1.167 0 1 1-2.333 0 1.167 1.167 0 0 1 2.333 0Zm-.583-5.25a.825.825 0 0 0-1.167 0L13.583 9.25a.825.825 0 1 0 1.167 1.167l4.667-4.667a.825.825 0 0 0 0-1.167Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgMyOffers;
