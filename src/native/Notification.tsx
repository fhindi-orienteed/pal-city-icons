import * as React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgNotification = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="none" stroke="currentColor" strokeWidth={2}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 19v-9a6 6 0 0 1 6-6v0a6 6 0 0 1 6 6v9M6 19h12M6 19H4m14 0h2m-9 3h2"
      />
      <Circle cx={12} cy={3} r={1} />
    </G>
  </Svg>
);
export default SvgNotification;
