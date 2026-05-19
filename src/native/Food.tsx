import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFood = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.25 2.75v7a3 3 0 0 0 3 3h1m4-10v7a3 3 0 0 1-3 3h-1m0-10v10m0 0v8.5m13.5 0v-6.5m0 0V3.286a.536.536 0 0 0-.536-.536 4.464 4.464 0 0 0-4.464 4.464v5.536a2 2 0 0 0 2 2z"
    />
  </Svg>
);
export default SvgFood;
