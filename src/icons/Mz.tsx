import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgMz = (props: SvgProps) => (
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
        fill="#F0F0F0"
      />
      <Path
        d="m6.486 16.696-2.97 3.789A11.96 11.96 0 0 0 12 24c4.96 0 9.218-3.01 11.045-7.304H6.486Z"
        fill="#FFDA44"
      />
      <Path
        d="M23.064 7.348C21.247 3.03 16.978 0 12 0a11.96 11.96 0 0 0-8.485 3.515L6.52 7.348h16.544Z"
        fill="#496E2D"
      />
      <Path
        d="M2.609 8.826v6.304h20.978c.269-.998.413-2.047.413-3.13 0-1.099-.148-2.163-.425-3.174H2.61Z"
        fill="#000"
      />
      <Path
        d="M3.515 3.515c-4.687 4.686-4.687 12.284 0 16.97L12 12 3.515 3.515Z"
        fill="#A2001D"
      />
      <Path
        d="m4.857 8.87.777 2.39h2.514L6.114 12.74l.777 2.391-2.034-1.478-2.035 1.478.777-2.391-2.034-1.478H4.08l.777-2.391Z"
        fill="#FFDA44"
      />
      <Path d="M2.583 12h4.548v2.087H2.583V12Z" fill="#F0F0F0" />
      <Path
        d="m7.992 9.607-.738-.737-2.397 2.397L2.459 8.87l-.738.737 2.4 2.396-2.4 2.4.738.727 2.398-2.393 2.397 2.393.738-.727-2.4-2.4 2.4-2.396Z"
        fill="#000"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgMz;
