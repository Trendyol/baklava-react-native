import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgCoin = (props: SvgProps) => (
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
      d="M12 24c6.628 0 12-5.373 12-12S18.628 0 12 0C5.373 0 0 5.373 0 12s5.373 12 12 12Zm-1.646-6.05c.276.033.53.05.762.05 1.116 0 2.05-.166 2.801-.497.763-.332 1.365-.78 1.807-1.343a5.3 5.3 0 0 0 .978-1.906 8.283 8.283 0 0 0 .298-2.22h-2.27c0 .717-.084 1.353-.25 1.905-.154.553-.43 1-.828 1.343-.387.342-.928.574-1.624.696v-4.06l2.585-.896V9.597l-2.585.895V9.464l2.585-.895V7.127l-2.585.895V6h-2.42v2.85L8 9.399v1.442l1.608-.547v1.027L8 11.867v1.442l1.608-.547v5.072c.22.056.47.094.746.116Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgCoin;
