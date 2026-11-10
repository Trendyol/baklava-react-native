import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const MealOrderChange = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10 7.5a.5.5 0 0 0 .724.447l1.052-.526a.502.502 0 0 1 .448 0l1.052.526A.5.5 0 0 0 14 7.5V6h7.167l1.14 3.732A9 9 0 0 0 11.345 24H3a2 2 0 0 1-2-2v-8.208c0-1.188.177-2.37.524-3.506L2.834 6H10v1.5Zm7 2.5a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm0 3c-.815 0-1.575.245-2.208.664a.715.715 0 0 0-1.427.05v1.598c0 .351.256.651.604.706l1.46.228a.715.715 0 0 0 .221-1.412l-.029-.005A2.571 2.571 0 1 1 14.43 17a.715.715 0 1 0-1.429.001 4 4 0 1 0 4-4Zm5-13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h20Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default MealOrderChange;
