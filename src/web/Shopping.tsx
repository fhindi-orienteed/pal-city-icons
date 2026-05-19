import * as React from "react";
import type { SVGProps } from "react";
const SvgShopping = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    {...props}
  >
    <path fill="none" d="M0 0h48v48H0z" />
    <g fill="none">
      <path d="M39 32H13L8 12h36z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M3 6h3.5L8 12m0 0 5 20h26l5-20z"
      />
      <circle
        cx={13}
        cy={39}
        r={3}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      />
      <circle
        cx={39}
        cy={39}
        r={3}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      />
    </g>
  </svg>
);
export default SvgShopping;
