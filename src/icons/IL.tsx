import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgIl = (props: SvgProps) => (
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
        d="M16.518 9.391h-3.012L12 6.783 10.494 9.39H7.482L8.988 12l-1.506 2.609h3.012L12 17.217l1.506-2.608h3.012L15.012 12l1.506-2.609ZM13.85 12l-.925 1.603h-1.85L10.15 12l.925-1.602h1.85L13.85 12ZM12 8.795l.344.596h-.688L12 8.795Zm-2.776 1.603h.689l-.344.596-.345-.596Zm0 3.205.345-.597.344.597h-.689ZM12 15.205l-.344-.596h.688l-.344.596Zm2.776-1.602h-.689l.344-.597.345.597Zm-.689-3.205h.689l-.345.596-.344-.596ZM19.47 2.609H4.53a12.06 12.06 0 0 0-2.769 3.13H22.24a12.064 12.064 0 0 0-2.77-3.13ZM4.53 21.391h14.94a12.06 12.06 0 0 0 2.769-3.13H1.76a12.062 12.062 0 0 0 2.77 3.13Z"
        fill="#0052B4"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIl;
