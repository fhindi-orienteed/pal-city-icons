import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHome = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <G
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path d="M6.133 21C4.955 21 4 20.02 4 18.81v-8.802c0-.665.295-1.295.8-1.71l5.867-4.818a2.09 2.09 0 0 1 2.666 0l5.866 4.818c.506.415.801 1.045.801 1.71v8.802c0 1.21-.955 2.19-2.133 2.19z" />
      <Path d="M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21" />
    </G>
  </Svg>
);
export default SvgHome;
