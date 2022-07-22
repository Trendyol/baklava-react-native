import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgPlayFill = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0ZM8 16c0 .369.228.708.594.882.167.079.349.118.531.118.218 0 .437-.056.624-.168l6.75-4c.313-.185.501-.497.501-.832 0-.334-.188-.646-.5-.832l-6.75-4a1.246 1.246 0 0 0-1.156-.05C8.228 7.294 8 7.633 8 8v8Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgPlayFill;
