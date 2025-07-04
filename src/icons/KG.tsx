import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgKg = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
        fill="#D80027"
      />
      <Path
        d="m17.869 12-2.398 1.128 1.277 2.322-2.604-.498-.33 2.63L12 15.649l-1.814 1.935-.33-2.63-2.604.497 1.277-2.322L6.131 12l2.398-1.128L7.252 8.55l2.604.498.33-2.63L12 8.351l1.814-1.935.33 2.63 2.604-.497-1.277 2.322L17.869 12Z"
        fill="#FFDA44"
      />
      <Path
        d="M12 15.652a3.652 3.652 0 1 0 0-7.304 3.652 3.652 0 0 0 0 7.304Z"
        fill="#D80027"
      />
      <Path
        d="M10.174 12c-.088 0-.175.005-.26.013.002.506.186.969.488 1.329.161-.434.402-.83.705-1.169a2.595 2.595 0 0 0-.933-.173ZM11.298 13.966a2.082 2.082 0 0 0 1.404 0A2.61 2.61 0 0 0 12 12.748c-.335.33-.582.748-.702 1.218ZM13.807 10.957a2.086 2.086 0 0 0-3.614 0 3.628 3.628 0 0 1 1.807.49 3.628 3.628 0 0 1 1.807-.49ZM12.893 12.173c.303.339.544.735.705 1.169.302-.36.485-.823.489-1.329a2.612 2.612 0 0 0-1.194.16Z"
        fill="#FFDA44"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgKg;
