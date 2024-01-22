import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.32134 0.714354H6.65169C6.60616 0.714354 6.5633 0.736675 6.53651 0.773282L3.99991 4.26971L1.4633 0.773282C1.43651 0.736675 1.39366 0.714354 1.34812 0.714354H0.678478C0.620442 0.714354 0.586514 0.780425 0.620442 0.827747L3.76866 5.16793C3.88294 5.32507 4.11687 5.32507 4.23026 5.16793L7.37848 0.827747C7.4133 0.780425 7.37937 0.714354 7.32134 0.714354V0.714354Z'
      fill='black'
      fillOpacity={0.25}
    />
  </svg>
);

const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
