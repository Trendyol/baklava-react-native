import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMoney = (props: SvgProps) => (
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
      d="M1.213 1.25h17.574c.322 0 .63.136.858.376.227.24.355.565.355.904v9.943c0 .338-.128.663-.355.903-.228.24-.537.374-.858.374H1.213c-.321 0-.63-.136-.857-.375A1.315 1.315 0 0 1 0 12.473V2.53c0-.339.128-.664.355-.904.228-.24.536-.375.858-.376ZM5 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm11.25 1.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM10 4.375a3.125 3.125 0 1 0 0 6.25 3.125 3.125 0 0 0 0-6.25ZM1.517 15l14.596 3.715a1.186 1.186 0 0 0 1.421-.826L18.348 15H16.4l-.487 1.729L9.119 15H1.517Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default SvgMoney;
