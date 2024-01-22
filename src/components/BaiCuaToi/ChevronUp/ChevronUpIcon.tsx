import { memo, SVGProps } from 'react';

const ChevronUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M12 6L6 0L0 6' stroke='black' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(ChevronUpIcon);
export { Memo as ChevronUpIcon };
