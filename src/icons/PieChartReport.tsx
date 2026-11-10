import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const PieChartReport = (props: SvgProps) => (
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
      d="M2 3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V3Zm10.43.477c0-.277.225-.504.5-.474a4.596 4.596 0 0 1 4.067 4.067c.03.275-.197.5-.474.5h-3.675a.418.418 0 0 1-.418-.418V3.477Zm-1.356-.028c.282-.043.52.187.52.473V7.57c0 .462.375.836.836.836h3.649c.285 0 .515.238.472.52a4.804 4.804 0 1 1-5.477-5.477ZM6 16a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default PieChartReport;
