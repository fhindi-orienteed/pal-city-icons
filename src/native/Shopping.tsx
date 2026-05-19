import * as React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgShopping = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 48 48"
    {...props}
  >
    <Path fill="none" d="M0 0h48v48H0z" />
    <G fill="none">
      <Path d="M39 32H13L8 12h36z" />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M3 6h3.5L8 12m0 0 5 20h26l5-20z"
      />
      <Circle
        cx={13}
        cy={39}
        r={3}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      />
      <Circle
        cx={39}
        cy={39}
        r={3}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      />
    </G>
  </Svg>
);
export default SvgShopping;
