import { SVGProps } from 'react';

function SvgLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="973.23"
      height="1122.52"
      viewBox="0 0 25750 29700"
      shapeRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4850 19266H1025V2039l4600-129c2511 0 4500 735 5970 2206 1470 1470 2206 3423 2206 5854 0 6199-2985 9296-8951 9296zM4086 4719v11751c494 48 1025 72 1599 72 1543 0 2752-558 3624-1679s1310-2688 1310-4705c0-3684-1712-5524-5135-5524-329 0-795 28-1398 85zm17656 21711l-1437-3969h-6721l974-2655h4730l-2242-6854 1518-4167 7010 17645zM17826 435h3307L10351 29313H7044l4243-11322c1982-1513 2973-4055 2973-7627 0-171-4-340-11-506l3577-9423z"
      />
    </svg>
  );
}

export default SvgLogo;
