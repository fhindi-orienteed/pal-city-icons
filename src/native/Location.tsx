import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLocation = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 16 16" {...props}>
    <Path fill="none" d="M0 0h16v16H0z" />
    <G fill="none" stroke="currentColor">
      <Path d="M8 14.5C10.5 11 12.5 8 12.5 6a4.5 4.5 0 1 0-9 0c0 2 2 5 4.5 8.5Z" />
      <Path d="M10 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
    </G>
  </Svg>
);
export default SvgLocation;
