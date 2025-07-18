import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgHk = (props: SvgProps) => (
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
        d="M13.239 9.078c-.273 1.135-.757.918-.995 1.907a2.609 2.609 0 0 1 1.22-5.072c-.476 1.978.019 2.15-.225 3.165ZM9.604 9.919c.995.61.64 1.004 1.506 1.536a2.609 2.609 0 0 1-4.447-2.728c1.734 1.064 2.051.646 2.941 1.192ZM9.28 13.636c.888-.758 1.152-.298 1.926-.958a2.609 2.609 0 0 1-3.968 3.387c1.548-1.321 1.248-1.752 2.042-2.43ZM12.715 15.092c-.446-1.078.073-1.188-.316-2.128a2.609 2.609 0 0 1 1.995 4.821c-.778-1.88-1.28-1.729-1.679-2.693ZM15.162 12.275c-1.163.092-1.107-.436-2.122-.357a2.61 2.61 0 0 1 5.202-.407c-2.029.159-2.04.683-3.08.764Z"
        fill="#F0F0F0"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgHk;
