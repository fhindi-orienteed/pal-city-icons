import * as React from "react";
import type { SVGProps } from "react";
const SvgNotification = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="none" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 19v-9a6 6 0 0 1 6-6v0a6 6 0 0 1 6 6v9M6 19h12M6 19H4m14 0h2m-9 3h2"
      />
      <circle cx={12} cy={3} r={1} />
    </g>
  </svg>
);
export default SvgNotification;
