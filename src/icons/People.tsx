import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgPeople = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      d="M14 7c0 2.775-2.224 5-5 5-2.775 0-5-2.225-5-5s2.225-5 5-5c2.776 0 5 2.225 5 5ZM19.855 20.933A4.35 4.35 0 0 0 20 19.75c0-2.279-1.395-4.328-3.617-5.746 4.169.112 7.617 2.042 7.617 5.05 0 1.312-1.732 1.739-4.145 1.878ZM15.868 7c0 1.767-.65 3.382-1.722 4.614a4.447 4.447 0 0 0 1.82.386c2.479 0 4.464-2.003 4.464-4.5S18.445 3 15.967 3c-.427 0-.84.06-1.23.17A7.01 7.01 0 0 1 15.868 7ZM9 14c-4.854 0-9 2.235-9 5.778C0 21.556 4.286 22 9 22s9 0 9-2.222C18 16.234 13.881 14 9 14Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgPeople;
