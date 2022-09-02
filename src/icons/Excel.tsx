import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgExcel = (props: SvgProps) => (
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
      d="M0 21.334V2.667L13.846 0v24L0 21.334Zm7.147-7.69 1.611 3.045h2.497l-2.882-4.715 2.804-4.636H8.83l-1.486 2.778c-.143.36-.24.632-.294.815h-.025a4.903 4.903 0 0 0-.281-.788L5.407 7.339H2.845l2.726 4.676-2.98 4.674h2.51l1.616-3.018c.114-.292.186-.51.216-.653h.025c.066.304.128.512.19.626ZM14.77 2.769h8.458c.425 0 .773.361.773.803v16.856c0 .442-.348.803-.773.803h-8.458v-2.77h2.77v-1.846h-2.77V14.77h2.77v-1.846h-2.77v-1.846h2.77V9.23h-2.77V7.398h2.798V5.524H14.77V2.769Zm3.693 15.693h3.692v-1.847h-3.692v1.847Zm0-3.693h3.692v-1.846h-3.692v1.846Zm0-3.692h3.692V9.23h-3.692v1.846Zm0-3.692h3.692V5.538h-3.692v1.847Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgExcel;
