import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMealOrderReturn = (props: SvgProps) => (
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
      d="M2 0a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H2Zm8 6H2.833l-1.31 4.286A12.003 12.003 0 0 0 1 13.792V22a2 2 0 0 0 2 2h8.343A9 9 0 0 1 22.306 9.73L21.166 6H14v1.5a.5.5 0 0 1-.724.447l-1.052-.526a.495.495 0 0 0-.448 0l-1.052.526A.5.5 0 0 1 10 7.5V6Zm7 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm-2.208-10.336a.714.714 0 0 0-1.427.05v1.598c0 .352.256.651.604.705l1.46.229a.714.714 0 1 0 .221-1.412l-.029-.005A2.571 2.571 0 1 1 14.43 17a.714.714 0 0 0-1.429.001 4 4 0 1 0 1.792-3.336Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default SvgMealOrderReturn;
