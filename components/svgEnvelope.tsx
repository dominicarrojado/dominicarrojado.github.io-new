import { SVGProps } from 'react';

function SvgEnvelope(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        fill="currentColor"
        d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm0 48v40.805l-134.587 106.5c-16.84 13.247-50.2 45.072-73.413 44.7-23.208.375-56.58-31.46-73.413-44.7L48 152.805V112h416zM48 400V214.398l104.938 82.646C174.795 314.25 213.072 352.23 256 352c42.717.23 80.51-37.2 103.053-54.947L464 214.4V400H48z"
      />
    </svg>
  );
}

export default SvgEnvelope;
