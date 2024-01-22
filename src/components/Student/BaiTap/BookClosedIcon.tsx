import { memo, SVGProps } from 'react';

const BookClosedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16 17V14H3C1.34315 14 0 15.3431 0 17M4.8 20H12.8C13.9201 20 14.4802 20 14.908 19.782C15.2843 19.5903 15.5903 19.2843 15.782 18.908C16 18.4802 16 17.9201 16 16.8V3.2C16 2.07989 16 1.51984 15.782 1.09202C15.5903 0.715695 15.2843 0.409734 14.908 0.217987C14.4802 0 13.9201 0 12.8 0H4.8C3.11984 0 2.27976 0 1.63803 0.32698C1.07354 0.614601 0.614601 1.07354 0.32698 1.63803C0 2.27976 0 3.11984 0 4.8V15.2C0 16.8802 0 17.7202 0.32698 18.362C0.614601 18.9265 1.07354 19.3854 1.63803 19.673C2.27976 20 3.11984 20 4.8 20Z'
      stroke='#A6A6A6'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(BookClosedIcon);
export { Memo as BookClosedIcon };
