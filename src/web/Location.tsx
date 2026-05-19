import * as React from "react";
import type { SVGProps } from "react";
const SvgLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path fill="none" d="M0 0h16v16H0z" />
    <g fill="none" stroke="currentColor">
      <path d="M8 14.5C10.5 11 12.5 8 12.5 6a4.5 4.5 0 1 0-9 0c0 2 2 5 4.5 8.5Z" />
      <path d="M10 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
    </g>
  </svg>
);
export default SvgLocation;
