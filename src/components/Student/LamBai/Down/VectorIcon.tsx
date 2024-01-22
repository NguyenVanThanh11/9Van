import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M30.946 0.714591H27.9326C27.7277 0.714591 27.5348 0.815038 27.4143 0.97977L15.9996 16.7137L4.58485 0.97977C4.46431 0.815038 4.27145 0.714591 4.06654 0.714591H1.05315C0.79199 0.714591 0.639311 1.01191 0.79199 1.22486L14.959 20.7557C15.4732 21.4628 16.5259 21.4628 17.0362 20.7557L31.2032 1.22486C31.3598 1.01191 31.2072 0.714591 30.946 0.714591V0.714591Z'
      fill='black'
      fillOpacity={0.85}
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
