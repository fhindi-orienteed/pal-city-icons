import * as React from "react";
import type { SVGProps } from "react";
const SvgSecurity = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 20.962q-3.014-.895-5.007-3.651T5 11.1V5.692l7-2.615 7 2.615V11.1q0 3.454-1.993 6.21T12 20.963m0-1.062q2.425-.75 4.05-2.962T17.95 12H12V4.144L6 6.375v5.156q0 .194.05.469H12z"
    />
  </svg>
);
export default SvgSecurity;
