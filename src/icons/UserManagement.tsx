import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgUserManagement = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10.5 12c3.331 0 6-2.67 6-6s-2.669-6-6-6c-3.33 0-6 2.67-6 6s2.67 6 6 6ZM13.568 23.98a2.425 2.425 0 0 1-.407-.326l-.815-.815a2.376 2.376 0 0 1-.706-1.683 2.712 2.712 0 0 1 0-.584 2.376 2.376 0 0 1-1.14-2.036v-1.154a2.39 2.39 0 0 1 1.154-2.036 2.39 2.39 0 0 1 .262-1.784c-.464-.041-.937-.062-1.416-.062C4.837 13.5 0 16.434 0 21.083 0 23.417 5 24 10.5 24c1.051 0 2.085 0 3.068-.02Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.443 12a1.01 1.01 0 0 0-.715.296 1.02 1.02 0 0 0-.298.716v.656c0 .084-.066.144-.156.187a.246.246 0 0 1-.096 0 .167.167 0 0 1-.126-.049l-.456-.463a.995.995 0 0 0-.713-.295.98.98 0 0 0-.707.295l-.803.806a1.007 1.007 0 0 0 0 1.428l.461.463a.23.23 0 0 1 0 .247.211.211 0 0 1-.174.139h-.653c-.266 0-.521.105-.71.294a1.014 1.014 0 0 0-.297.711v1.138a1.014 1.014 0 0 0 .622.934c.122.051.253.078.385.078h.653c.084 0 .144.072.18.162a.206.206 0 0 1 0 .223l-.461.457a1.003 1.003 0 0 0 0 1.433l.803.807a.977.977 0 0 0 .707.295.99.99 0 0 0 .713-.295l.462-.463a.185.185 0 0 1 .12-.042.31.31 0 0 1 .126 0 .198.198 0 0 1 .132.174v.656A1.005 1.005 0 0 0 17.449 24h1.132c.268 0 .525-.106.715-.296.19-.19.297-.447.298-.716v-.656c0-.084.066-.144.156-.187a.246.246 0 0 1 .096 0 .167.167 0 0 1 .126.049l.456.463a.994.994 0 0 0 .713.295.98.98 0 0 0 .707-.295l.803-.806a1.007 1.007 0 0 0 0-1.427l-.461-.464a.206.206 0 0 1 0-.223.211.211 0 0 1 .174-.138h.653a1.005 1.005 0 0 0 .983-.976v-1.138c0-.268-.106-.525-.295-.715a1.005 1.005 0 0 0-.712-.296h-.653c-.084 0-.144-.073-.18-.163a.206.206 0 0 1 0-.223l.461-.463a.995.995 0 0 0 0-1.427l-.803-.807a.977.977 0 0 0-.707-.295.99.99 0 0 0-.713.295l-.462.463a.192.192 0 0 1-.12.049.323.323 0 0 1-.126-.03.198.198 0 0 1-.132-.175v-.656a1.014 1.014 0 0 0-.265-.716 1.005 1.005 0 0 0-.688-.326h-1.162ZM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgUserManagement;
