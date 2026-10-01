import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

const SvgOrtakGrad = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M14.022 12.572l-.893.206a5.183 5.183 0 0 0-3.883 3.881l-.664 2.869c-.034.146-.243.146-.277 0l-.663-2.869a5.181 5.181 0 0 0-3.884-3.88l-.892-.207S1.51 12.357 0 12.363C.193 18.823 5.49 24 12 24s11.805-5.176 12-11.633h-7.56a20.12 20.12 0 0 0-2.418.205Z"
      fill="url(#paint0_linear_3387_9439)"
    />
    <Path
      d="M7.642 7.295l.663-2.869c.034-.146.243-.146.277 0l.663 2.87a5.182 5.182 0 0 0 3.884 3.88l.01.002c.11.023 1.04.21 3.4.377.685.049 5.47.022 7.46.025C23.776 5.147 18.49 0 12 0 5.509 0 .224 5.147.001 11.579c2.785-.185 3.757-.403 3.757-.403a5.182 5.182 0 0 0 3.884-3.881Z"
      fill="url(#paint1_linear_3387_9439)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_3387_9439"
        x1={0}
        y1={0}
        x2={24.6946}
        y2={0.7136}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.201923} stopColor="#753EFF" />
        <Stop offset={0.798077} stopColor="#4E0B9F" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_3387_9439"
        x1={0}
        y1={0}
        x2={24.6946}
        y2={0.7136}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.201923} stopColor="#753EFF" />
        <Stop offset={0.798077} stopColor="#4E0B9F" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgOrtakGrad;
