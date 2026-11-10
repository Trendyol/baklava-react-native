import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Bold = (props: SvgProps) => (
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
      d="M12 1c4.018 0 7.34 2.966 7.34 6.553 0 1.398-.502 2.638-1.271 3.686C19.842 12.423 21 14.33 21 16.447 21 20.084 17.674 23 13.66 23H7.02C4.765 23 3 21.424 3 19.411V4.59C3 2.629 4.759 1 7.02 1H12ZM7.718 18.787h5.942c1.437 0 2.622-1.024 2.622-2.34 0-1.277-1.192-2.34-2.622-2.34H7.718v4.68Zm0-8.893H12c1.437 0 2.621-1.024 2.621-2.34 0-1.277-1.191-2.341-2.621-2.341H7.718v4.68Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Bold;
