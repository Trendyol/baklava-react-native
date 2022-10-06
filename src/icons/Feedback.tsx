import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgFeedback = (props: SvgProps) => (
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
      d="M19.2 0H0v21a3 3 0 0 0 3 3h6.627A10.178 10.178 0 0 1 6 16.2c0-1.118.18-2.194.512-3.2H5.25a1.25 1.25 0 1 1 0-2.5h2.49A10.19 10.19 0 0 1 16.2 6c1.044 0 2.052.157 3 .448V0ZM4 5.75c0-.69.56-1.25 1.25-1.25h3.5a1.25 1.25 0 1 1 0 2.5h-3.5C4.56 7 4 6.44 4 5.75ZM24 16a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-6.782-4.683-5.622 5.631a1.24 1.24 0 0 0-.357.76l-.237 2.61a.626.626 0 0 0 .68.68l2.607-.238c.286-.026.555-.152.758-.355l5.624-5.631c.455-.457.436-1.22-.042-1.7l-1.713-1.713c-.239-.24-.569-.361-.89-.361-.302 0-.596.105-.808.317Zm-.39 2.163 1.218-1.22 1.684 1.686-1.217 1.22-1.685-1.686Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);

export default SvgFeedback;
