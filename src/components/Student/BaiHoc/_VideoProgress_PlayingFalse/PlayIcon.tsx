import { memo, SVGProps } from 'react';

const PlayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.2 2.86327C2.2 1.61155 3.57252 0.844595 4.63856 1.50061L12.9857 6.63731C14.0009 7.26209 14.0009 8.73784 12.9857 9.36262L4.63856 14.4993C3.57252 15.1553 2.2 14.3884 2.2 13.1367V2.86327Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(PlayIcon);
export { Memo as PlayIcon };
