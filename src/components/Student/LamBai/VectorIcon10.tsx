import { memo, SVGProps } from 'react';

const VectorIcon10 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15.6822 5.54037C13.9894 1.9743 11.4305 0.179657 8.0001 0.179657C4.56796 0.179657 2.01081 1.9743 0.317957 5.54216C0.250056 5.68594 0.214841 5.84297 0.214841 6.00198C0.214841 6.16099 0.250056 6.31802 0.317957 6.4618C2.01081 10.0279 4.56974 11.8225 8.0001 11.8225C11.4322 11.8225 13.9894 10.0279 15.6822 6.46001C15.8197 6.17073 15.8197 5.83501 15.6822 5.54037V5.54037ZM8.0001 10.5368C5.11974 10.5368 3.01081 9.07609 1.52331 6.00109C3.01081 2.92609 5.11974 1.46537 8.0001 1.46537C10.8805 1.46537 12.9894 2.92609 14.4769 6.00109C12.9912 9.07609 10.8822 10.5368 8.0001 10.5368ZM7.92867 2.85823C6.19296 2.85823 4.78581 4.26537 4.78581 6.00109C4.78581 7.7368 6.19296 9.14394 7.92867 9.14394C9.66439 9.14394 11.0715 7.7368 11.0715 6.00109C11.0715 4.26537 9.66439 2.85823 7.92867 2.85823ZM7.92867 8.00109C6.82331 8.00109 5.92867 7.10644 5.92867 6.00109C5.92867 4.89573 6.82331 4.00109 7.92867 4.00109C9.03403 4.00109 9.92867 4.89573 9.92867 6.00109C9.92867 7.10644 9.03403 8.00109 7.92867 8.00109Z'
      fill='black'
      fillOpacity={0.25}
    />
  </svg>
);

const Memo = memo(VectorIcon10);
export { Memo as VectorIcon10 };