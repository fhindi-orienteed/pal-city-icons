import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgExploreOutline = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="m8.154 15.846 5.808-1.884 1.884-5.808-5.807 1.885zm3.842-2.73q-.467 0-.79-.327-.321-.327-.321-.793 0-.467.326-.79.327-.321.793-.321.467 0 .79.326.322.327.322.793 0 .467-.327.79-.327.322-.793.322M12.003 21q-1.867 0-3.51-.708-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857.709 3.509-.708 3.51-1.924 2.859-2.856 1.925-3.509.709M12 20q3.344 0 5.672-2.328T20 12t-2.328-5.672T12 4 6.328 6.328 4 12t2.328 5.672T12 20m0-8"
    />
  </Svg>
);
export default SvgExploreOutline;
