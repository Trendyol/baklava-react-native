import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgLk = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path d="M.001 2.087H0v19.826h.001V2.087Z" fill="#FF9811" />
      <Path
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
        fill="#FFDA44"
      />
      <Path
        d="M9.391 2.087H5.237c-.185.126-.365.257-.541.392L3.652 12l1.044 9.52c.176.136.356.267.54.393h4.155V2.087Z"
        fill="#FF9811"
      />
      <Path
        d="M0 12a11.98 11.98 0 0 0 4.696 9.52V2.48A11.98 11.98 0 0 0 0 12Z"
        fill="#6DA544"
      />
      <Path d="M19.304 7.315v.3l.012.002-.012-.302Z" fill="#FFDA44" />
      <Path
        d="M23.044 15.13h-2.261l-.957 1.044v2.087H17.74v-1.044h1.044V15.13h-4.696v1.305h-1.043v-2.486a1.561 1.561 0 0 1-.522-1.166V6c0-.864.7-1.565 1.565-1.565v9.652h2.087l.716-.597a2.495 2.495 0 0 1-.194-.968v-1.565H15.13v-3.13h3.13c0-.523.784-1.044.784-1.044s.782.521.782 1.043v3.131c.58.006 1.503-.009 2.5 0-.263-.458-.413-1-.413-1.566 0-.92.398-1.748 1.03-2.32a12.048 12.048 0 0 0-4.18-4.984h-7.807v19.826h7.808a12.027 12.027 0 0 0 4.692-6.332l-.412-.45Z"
        fill="#A2001D"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgLk;
