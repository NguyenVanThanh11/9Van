import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 36 28' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M35.2851 12.9658C31.4761 4.94217 25.7185 0.904227 18.0002 0.904227C10.2779 0.904227 4.52433 4.94217 0.715404 12.9699C0.562627 13.2934 0.483392 13.6467 0.483392 14.0045C0.483392 14.3622 0.562627 14.7155 0.715404 15.039C4.52433 23.0627 10.2819 27.1007 18.0002 27.1007C25.7225 27.1007 31.4761 23.0627 35.2851 15.035C35.5944 14.3841 35.5944 13.6288 35.2851 12.9658V12.9658ZM18.0002 24.2078C11.5194 24.2078 6.77433 20.9212 3.42746 14.0024C6.77433 7.08369 11.5194 3.79708 18.0002 3.79708C24.481 3.79708 29.2261 7.08369 32.573 14.0024C29.2301 20.9212 24.485 24.2078 18.0002 24.2078ZM17.8395 6.93101C13.9342 6.93101 10.7681 10.0971 10.7681 14.0024C10.7681 17.9078 13.9342 21.0739 17.8395 21.0739C21.7449 21.0739 24.9109 17.9078 24.9109 14.0024C24.9109 10.0971 21.7449 6.93101 17.8395 6.93101ZM17.8395 18.5024C15.3525 18.5024 13.3395 16.4895 13.3395 14.0024C13.3395 11.5154 15.3525 9.50244 17.8395 9.50244C20.3266 9.50244 22.3395 11.5154 22.3395 14.0024C22.3395 16.4895 20.3266 18.5024 17.8395 18.5024Z'
      fill='black'
      fillOpacity={0.85}
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };