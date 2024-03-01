import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMealOrderCancel = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2 0a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H2ZM10 6H2.833l-1.31 4.286A12.003 12.003 0 0 0 1 13.792V22a2 2 0 0 0 2 2h8.343A9 9 0 0 1 22.306 9.73L21.166 6H14v1.5a.5.5 0 0 1-.724.447l-1.052-.526a.495.495 0 0 0-.448 0l-1.052.526A.5.5 0 0 1 10 7.5V6Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 17a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-10.171-3.172a1.121 1.121 0 0 1 1.585 0L17 15.414l1.586-1.586a1.121 1.121 0 0 1 1.586 1.586L18.586 17l1.586 1.586a1.121 1.121 0 0 1-1.586 1.586L17 18.586l-1.586 1.586a1.121 1.121 0 0 1-1.586-1.586L15.414 17l-1.585-1.586a1.121 1.121 0 0 1 0-1.586Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default SvgMealOrderCancel;
