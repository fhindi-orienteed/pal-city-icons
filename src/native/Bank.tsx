import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBank = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M11 2.5 20 7v2H2V7zm4 7.5h4v8h-4zM2 22v-3h18v3zm7-12h4v8H9zm-6 0h4v8H3zm0 10v1h16v-1zm1-9v6h2v-6zm6 0v6h2v-6zm6 0v6h2v-6zM3 8h16v-.4l-8-4.02L3 7.6z"
    />
  </Svg>
);
export default SvgBank;
