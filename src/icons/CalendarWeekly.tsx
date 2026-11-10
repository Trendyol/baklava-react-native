import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const CalendarWeekly = (props: SvgProps) => (
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
      d="M18 0a1.5 1.5 0 0 1 1.5 1.5V3h.5a4 4 0 0 1 4 4v13a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h.5V1.5a1.5 1.5 0 1 1 3 0V3h9V1.5A1.5 1.5 0 0 1 18 0ZM8.731 8.6a.392.392 0 0 0-.266.098.341.341 0 0 0-.098.252v1.4a.39.39 0 0 0 .098.266.392.392 0 0 0 .266.098h4.186l-3.234 7.252a.344.344 0 0 0-.028.126c0 .084.028.16.084.224a.286.286 0 0 0 .21.084h1.806c.15 0 .261-.042.336-.126a1.06 1.06 0 0 0 .154-.21l3.235-7.238c.046-.093.083-.187.11-.28.029-.093.043-.21.043-.35V8.95a.341.341 0 0 0-.098-.252.36.36 0 0 0-.266-.097H8.73Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default CalendarWeekly;
