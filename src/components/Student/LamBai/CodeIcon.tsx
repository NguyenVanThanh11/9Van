import { memo, SVGProps } from 'react';

const CodeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M14.6667 7.87331V8.12665C14.6651 8.25892 14.6126 8.3855 14.52 8.47998L11.76 11.2333C11.729 11.2646 11.6921 11.2894 11.6515 11.3063C11.6109 11.3232 11.5673 11.3319 11.5233 11.3319C11.4793 11.3319 11.4358 11.3232 11.3951 11.3063C11.3545 11.2894 11.3176 11.2646 11.2867 11.2333L10.8133 10.76C10.7823 10.7296 10.7576 10.6933 10.7408 10.6532C10.724 10.6131 10.7153 10.5701 10.7153 10.5266C10.7153 10.4832 10.724 10.4402 10.7408 10.4001C10.7576 10.36 10.7823 10.3237 10.8133 10.2933L13.1133 7.99998L10.8133 5.70665C10.7821 5.67566 10.7573 5.63879 10.7404 5.59817C10.7234 5.55755 10.7147 5.51398 10.7147 5.46998C10.7147 5.42598 10.7234 5.38241 10.7404 5.34179C10.7573 5.30117 10.7821 5.2643 10.8133 5.23331L11.2867 4.76665C11.3176 4.7354 11.3545 4.71061 11.3951 4.69368C11.4358 4.67676 11.4793 4.66805 11.5233 4.66805C11.5673 4.66805 11.6109 4.67676 11.6515 4.69368C11.6921 4.71061 11.729 4.7354 11.76 4.76665L14.52 7.51998C14.6138 7.61366 14.6665 7.74075 14.6667 7.87331ZM2.88666 7.99998L5.18 5.70665C5.21104 5.67623 5.2357 5.63993 5.25253 5.59986C5.26937 5.5598 5.27804 5.51677 5.27804 5.47331C5.27804 5.42985 5.26937 5.38683 5.25253 5.34677C5.2357 5.3067 5.21104 5.2704 5.18 5.23998L4.70666 4.76665C4.67567 4.7354 4.63881 4.71061 4.59819 4.69368C4.55757 4.67676 4.514 4.66805 4.46999 4.66805C4.42599 4.66805 4.38242 4.67676 4.3418 4.69368C4.30118 4.71061 4.26432 4.7354 4.23333 4.76665L1.47999 7.51998C1.38741 7.61446 1.33486 7.74104 1.33333 7.87331V8.12665C1.33344 8.25921 1.3862 8.3863 1.47999 8.47998L4.24 11.2333C4.27098 11.2646 4.30785 11.2894 4.34847 11.3063C4.38909 11.3232 4.43266 11.3319 4.47666 11.3319C4.52067 11.3319 4.56423 11.3232 4.60485 11.3063C4.64547 11.2894 4.68234 11.2646 4.71333 11.2333L5.18666 10.7666C5.2179 10.7357 5.2427 10.6988 5.25963 10.6582C5.27655 10.6176 5.28526 10.574 5.28526 10.53C5.28526 10.486 5.27655 10.4424 5.25963 10.4018C5.2427 10.3612 5.2179 10.3243 5.18666 10.2933L2.88666 7.99998ZM10.22 2.91331L9.57333 2.66665C9.48923 2.63814 9.39739 2.64299 9.31677 2.68021C9.23614 2.71742 9.17286 2.78415 9.14 2.86665L5.59999 12.6666C5.56997 12.7497 5.57418 12.8414 5.61168 12.9214C5.64918 13.0014 5.71692 13.0632 5.79999 13.0933L6.42666 13.32C6.50984 13.3482 6.60072 13.3432 6.68026 13.3059C6.7598 13.2686 6.82182 13.202 6.85333 13.12L10.3933 3.33331C10.4213 3.25105 10.4161 3.16111 10.3787 3.08266C10.3413 3.00421 10.2748 2.94344 10.1933 2.91331H10.22Z'
      fill='black'
      fillOpacity={0.25}
    />
  </svg>
);

const Memo = memo(CodeIcon);
export { Memo as CodeIcon };