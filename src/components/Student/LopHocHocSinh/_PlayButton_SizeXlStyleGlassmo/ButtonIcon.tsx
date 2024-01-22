import { memo, SVGProps } from 'react';

const ButtonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80ZM33.75 54.6721L56.25 42.096C57.9167 41.1645 57.9167 38.8355 56.25 37.904L33.75 25.3279C32.0833 24.3963 30 25.5608 30 27.4239L30 52.5761C30 54.4392 32.0833 55.6037 33.75 54.6721Z'
      fill='white'
      fillOpacity={0.3}
    />
  </svg>
);

const Memo = memo(ButtonIcon);
export { Memo as ButtonIcon };
