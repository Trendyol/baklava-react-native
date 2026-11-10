import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const StarFill = (props: SvgProps) => (
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
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Zm2.116-14.912-1.668-3.38a.5.5 0 0 0-.896 0l-1.668 3.38-3.729.542a.5.5 0 0 0-.277.852l2.698 2.63-.637 3.714a.5.5 0 0 0 .726.528L12 15.6l3.335 1.754a.5.5 0 0 0 .726-.527l-.637-3.714 2.698-2.63a.5.5 0 0 0-.277-.853l-3.729-.542Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default StarFill;
