import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTravel = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="m9.983 20.048-2.09-3.946-3.966-2.11 1.083-1.077 3.452.587 3.05-3.05L4.01 7.25l1.388-1.38 9.125 1.565 3.12-3.139q.42-.421 1.03-.421t1.03.421q.422.421.422 1.028t-.421 1.028l-3.145 3.125 1.566 9.12-1.394 1.394-3.189-7.502-3.05 3.05.573 3.427z"
    />
  </Svg>
);
export default SvgTravel;
