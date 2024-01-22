import { memo, SVGProps } from 'react';

const ResizerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_6244_98571)'>
      <path d='M4 8L8 4' stroke='#262626' strokeWidth={0.5} />
      <path d='M0 8L8 0' stroke='#262626' strokeWidth={0.5} />
    </g>
    <defs>
      <clipPath id='clip0_6244_98571'>
        <rect width={8} height={8} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(ResizerIcon);
export { Memo as ResizerIcon };
