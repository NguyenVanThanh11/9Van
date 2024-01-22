import { memo, SVGProps } from 'react';

const ChevronUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M10 5.5L5 0.5L0 5.5' stroke='#667085' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(ChevronUpIcon);
export { Memo as ChevronUpIcon };
