import * as React from "react";
import type { SVGProps } from "react";
const SvgLogin = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.98 20v-1h6.405q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T18.384 5h-6.403V4h6.404q.69 0 1.152.463T20 5.616v12.769q0 .69-.463 1.153T18.385 20zm-.71-4.461-.703-.72 2.32-2.319H4.019v-1h8.868l-2.32-2.32.702-.718L14.808 12z"
    />
  </svg>
);
export default SvgLogin;
