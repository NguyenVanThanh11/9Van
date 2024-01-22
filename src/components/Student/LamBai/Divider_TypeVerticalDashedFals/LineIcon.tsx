import { memo, SVGProps } from 'react';

const LineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 0 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0V12' stroke='black' strokeOpacity={0.06} />
  </svg>
);

const Memo = memo(LineIcon);
export { Memo as LineIcon };
