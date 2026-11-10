import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Feedback = (props: SvgProps) => (
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
      d="M19.2 0H0v21a3 3 0 0 0 3 3h6.627A10.178 10.178 0 0 1 6 16.2c0-1.118.18-2.194.512-3.2H5.25a1.25 1.25 0 1 1 0-2.5h2.49A10.19 10.19 0 0 1 16.2 6c1.044 0 2.052.157 3 .448V0ZM4 5.75c0-.69.56-1.25 1.25-1.25h3.5a1.25 1.25 0 1 1 0 2.5h-3.5C4.56 7 4 6.44 4 5.75Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      d="m16.663 13.984.974-.977 1.347 1.35-.974.976-1.348-1.35Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 16a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7.025-3.746-4.499 4.505a.992.992 0 0 0-.285.607l-.19 2.088a.5.5 0 0 0 .545.544l2.085-.19a.989.989 0 0 0 .607-.284l4.499-4.505c.364-.365.349-.976-.034-1.36l-1.37-1.37A1.012 1.012 0 0 0 17.62 12a.906.906 0 0 0-.645.254Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Feedback;
