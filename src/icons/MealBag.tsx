import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMealBag = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2 0a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H2ZM10 6H2.833l-1.31 4.286A12.003 12.003 0 0 0 1 13.792V22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-8.208c0-1.188-.177-2.37-.524-3.506L21.166 6H14v3.191a.5.5 0 0 1-.724.447l-1.052-.526a.494.494 0 0 0-.448 0l-1.052.526A.5.5 0 0 1 10 9.191V6Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default SvgMealBag;
