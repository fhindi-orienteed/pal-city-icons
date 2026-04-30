import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgExploreOutline = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="m7.5 16.5 7-2 2-7-7 2zm4.5-3q-.625 0-1.062-.437T10.5 12t.438-1.062T12 10.5t1.063.438T13.5 12t-.437 1.063T12 13.5m0 8.5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9 2 12t.788-3.9 2.137-3.175T8.1 2.788 12 2t3.9.788 3.175 2.137T21.213 8.1 22 12t-.788 3.9-2.137 3.175-3.175 2.138T12 22m0-2q3.325 0 5.663-2.337T20 12t-2.337-5.663T12 4 6.337 6.338 4 12t2.338 5.663T12 20m0-8"
    />
  </Svg>
);
export default SvgExploreOutline;
