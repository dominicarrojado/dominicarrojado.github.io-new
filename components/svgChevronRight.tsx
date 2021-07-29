import React, { SVGProps } from 'react';

function SvgChevronRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
      ></path>
    </svg>
  );
}

export default SvgChevronRight;
