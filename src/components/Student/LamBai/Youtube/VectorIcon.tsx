import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 36 28' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M36 13.8897C36 13.8013 36 13.7009 35.996 13.5843C35.992 13.2589 35.9839 12.8933 35.9759 12.5035C35.9438 11.3826 35.8875 10.2656 35.7991 9.21291C35.6786 7.76246 35.5018 6.55309 35.2607 5.64505C35.0063 4.69744 34.5077 3.8332 33.8146 3.1387C33.1215 2.44421 32.2583 1.94379 31.3112 1.68746C30.1741 1.38211 27.9482 1.19327 24.8143 1.07675C23.3237 1.0205 21.7286 0.98434 20.1335 0.96425C19.575 0.956215 19.0567 0.952197 18.5906 0.948179H17.4094C16.9433 0.952197 16.425 0.956215 15.8665 0.96425C14.2714 0.98434 12.6763 1.0205 11.1857 1.07675C8.05179 1.19729 5.82187 1.38613 4.68884 1.68746C3.74143 1.94316 2.87787 2.44337 2.18469 3.13796C1.4915 3.83255 0.993054 4.69713 0.739286 5.64505C0.494196 6.55309 0.321429 7.76246 0.200893 9.21291C0.1125 10.2656 0.0562499 11.3826 0.0241071 12.5035C0.0120535 12.8933 0.00803563 13.2589 0.00401777 13.5843C0.00401777 13.7009 -2.23517e-08 13.8013 -2.23517e-08 13.8897V14.1147C-2.23517e-08 14.2031 -8.37192e-08 14.3035 0.00401777 14.4201C0.00803563 14.7455 0.0160713 15.1111 0.0241071 15.5009C0.0562499 16.6218 0.1125 17.7388 0.200893 18.7915C0.321429 20.2419 0.498214 21.4513 0.739286 22.3593C1.25357 24.2839 2.76429 25.8026 4.68884 26.3169C5.82187 26.6223 8.05179 26.8111 11.1857 26.9276C12.6763 26.9839 14.2714 27.0201 15.8665 27.0401C16.425 27.0482 16.9433 27.0522 17.4094 27.0562H18.5906C19.0567 27.0522 19.575 27.0482 20.1335 27.0401C21.7286 27.0201 23.3237 26.9839 24.8143 26.9276C27.9482 26.8071 30.1781 26.6183 31.3112 26.3169C33.2357 25.8026 34.7464 24.2879 35.2607 22.3593C35.5058 21.4513 35.6786 20.2419 35.7991 18.7915C35.8875 17.7388 35.9438 16.6218 35.9759 15.5009C35.9879 15.1111 35.992 14.7455 35.996 14.4201C35.996 14.3035 36 14.2031 36 14.1147V13.8897V13.8897ZM33.1071 14.0986C33.1071 14.183 33.1071 14.2754 33.1031 14.3839C33.0991 14.6973 33.0911 15.0428 33.083 15.4165C33.0549 16.4852 32.9987 17.554 32.9143 18.5464C32.8058 19.8401 32.6531 20.9009 32.4643 21.612C32.2152 22.5401 31.4839 23.2754 30.5598 23.5205C29.7161 23.7455 27.5906 23.9263 24.7018 24.0348C23.2393 24.091 21.6643 24.1272 20.0933 24.1473C19.5429 24.1553 19.0326 24.1593 18.5746 24.1593H17.4254L15.9067 24.1473C14.3357 24.1272 12.7647 24.091 11.2982 24.0348C8.40938 23.9223 6.27991 23.7455 5.44018 23.5205C4.51607 23.2714 3.78482 22.5401 3.53571 21.612C3.34687 20.9009 3.1942 19.8401 3.08571 18.5464C3.00134 17.554 2.94911 16.4852 2.91696 15.4165C2.90491 15.0428 2.90089 14.6933 2.89688 14.3839C2.89688 14.2754 2.89286 14.179 2.89286 14.0986V13.9058C2.89286 13.8214 2.89286 13.729 2.89688 13.6205C2.90089 13.3071 2.90893 12.9616 2.91696 12.5879C2.94509 11.5192 3.00134 10.4504 3.08571 9.458C3.1942 8.16425 3.34687 7.10354 3.53571 6.39238C3.78482 5.46425 4.51607 4.72898 5.44018 4.48389C6.28393 4.25889 8.40938 4.07809 11.2982 3.96961C12.7607 3.91336 14.3357 3.8772 15.9067 3.85711C16.4571 3.84907 16.9674 3.84505 17.4254 3.84505H18.5746L20.0933 3.85711C21.6643 3.8772 23.2353 3.91336 24.7018 3.96961C27.5906 4.08211 29.7201 4.25889 30.5598 4.48389C31.4839 4.733 32.2152 5.46425 32.4643 6.39238C32.6531 7.10354 32.8058 8.16425 32.9143 9.458C32.9987 10.4504 33.0509 11.5192 33.083 12.5879C33.0951 12.9616 33.0991 13.3111 33.1031 13.6205C33.1031 13.729 33.1071 13.8254 33.1071 13.9058V14.0986ZM14.4241 19.3861L23.7455 13.962L14.4241 8.61827V19.3861Z'
      fill='black'
      fillOpacity={0.85}
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };