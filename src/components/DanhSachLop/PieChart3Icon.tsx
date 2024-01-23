import { memo, SVGProps } from 'react';

const PieChart3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10 0C11.3132 1.566e-08 12.6136 0.258658 13.8268 0.761205C15.0401 1.26375 16.1425 2.00035 17.0711 2.92893C17.9997 3.85752 18.7363 4.95991 19.2388 6.17317C19.7413 7.38643 20 8.68679 20 10M10 0V10M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5229 20 10M10 0C15.5228 0 20 4.47716 20 10M20 10L10 10M20 10C20 11.5781 19.6265 13.1338 18.9101 14.5399C18.1936 15.946 17.1546 17.1626 15.8779 18.0902L10 10'
      stroke='#475467'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(PieChart3Icon);
export { Memo as PieChart3Icon };
