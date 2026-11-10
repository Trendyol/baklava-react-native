import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const PhotoOff = (props: SvgProps) => (
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
      d="M2.402.211A1.03 1.03 0 0 1 3.842.4l16.946 21.957c.345.447.26 1.088-.19 1.432a1.03 1.03 0 0 1-1.44-.189L17.151 21H4a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h.031L2.212 1.643a1.017 1.017 0 0 1 .19-1.432ZM12.49 14.96l1.315 1.704a5 5 0 0 1-5.859-7.592l1.315 1.704a3 3 0 0 0 3.229 4.184Zm-1.562-7.845-3.732-4.91.21-.314A2 2 0 0 1 9.07 1h5.86a2 2 0 0 1 1.664.89L18 4h2a4 4 0 0 1 4 4v9a4.002 4.002 0 0 1-2.687 3.78l-4.894-6.439a5 5 0 0 0-5.492-7.226ZM20 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default PhotoOff;
