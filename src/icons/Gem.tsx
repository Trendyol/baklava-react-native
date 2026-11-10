import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Gem = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M17.629 1a3 3 0 0 1 2.525 1.38l3.688 5.747a1 1 0 0 1-.07 1.176l-11 13.334a1 1 0 0 1-1.543 0l-11-13.334a1 1 0 0 1-.07-1.176L3.845 2.38A3 3 0 0 1 6.37 1h11.258Zm-5.63 17.229 2.355-8.562H9.645L12 18.229Zm-2.203-.472L7.57 9.667H3.122l6.674 8.09Zm4.407 0 6.675-8.09h-4.45l-2.225 8.09Zm2.226-10.09h4.74L18.472 3.46a1 1 0 0 0-.842-.46h-2.484l1.284 4.667Zm-6.784 0h4.71L13.07 3H10.93L9.645 7.667ZM6.371 3a1 1 0 0 0-.842.46L2.83 7.667h4.741L8.854 3H6.371Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Gem;
