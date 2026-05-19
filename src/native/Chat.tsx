import * as React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChat = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="m4 19-.93-.37a1 1 0 0 0 1.125 1.35zm4.706-.936.474-.881-.317-.17-.352.07.195.98zm-3.082-3.147.93.37.163-.414-.196-.399zM19 12c0 3.246-2.853 6-6.53 6v2c4.641 0 8.53-3.514 8.53-8zM5.941 12c0-3.246 2.854-6 6.53-6V4C7.83 4 3.94 7.514 3.94 12h2zm6.53-6C16.147 6 19 8.754 19 12h2c0-4.486-3.889-8-8.53-8zm0 12c-1.205 0-2.328-.3-3.291-.817l-.948 1.761A8.9 8.9 0 0 0 12.471 20zm-8.276 1.98 4.706-.936-.39-1.961-4.706.936.39 1.962zm2.326-5.506A5.6 5.6 0 0 1 5.94 12h-2c0 1.2.282 2.338.786 3.36zm-1.826.073L3.07 18.631l1.858.738 1.624-4.083-1.858-.739z" />
      <Circle cx={9} cy={12} r={1} />
      <Circle cx={12.5} cy={12} r={1} />
      <Circle cx={16} cy={12} r={1} />
    </G>
  </Svg>
);
export default SvgChat;
