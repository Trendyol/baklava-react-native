import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgOrderCheck = (props: SvgProps) => (
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
      d="M19.2 0H0v21a3 3 0 0 0 3 3h6.627a10.206 10.206 0 0 1-3.238-5H5.25a1.25 1.25 0 0 1 0-2.5h.754a10.19 10.19 0 0 1 .508-3.5H5.25a1.25 1.25 0 1 1 0-2.5h2.49A10.19 10.19 0 0 1 16.2 6c1.044 0 2.052.157 3 .448V0ZM5.25 4.5a1.25 1.25 0 0 0 0 2.5h3.5a1.25 1.25 0 1 0 0-2.5h-3.5ZM24 16a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8.015 2.983.02-.019 4.023-4.014a1.114 1.114 0 0 0-1.573-1.577l-3.157 3.149-1.579-1.576a1.114 1.114 0 0 0-1.573 1.578l2.497 2.492c.362.36.948.36 1.31 0l.032-.033Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgOrderCheck;
