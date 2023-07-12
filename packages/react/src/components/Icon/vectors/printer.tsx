import { SvgType } from './svgType';

export const Printer = (props: SvgType) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M8.33333 1.875H8.29C7.54127 1.87498 6.91692 1.87496 6.42127 1.94159C5.89811 2.01193 5.42577 2.16666 5.04622 2.54622C4.66666 2.92578 4.51193 3.39811 4.44159 3.92127C4.37495 4.41692 4.37497 5.04127 4.375 5.79V5.83333V6.66667C4.375 6.70278 4.37806 6.73817 4.38394 6.7726C4.13992 6.82214 3.93488 6.89487 3.75 7.0016C3.36995 7.22103 3.05436 7.53662 2.83493 7.91667C2.5 8.49683 2.5 9.27567 2.5 10.8333V12.5C2.5 13.6649 3.29673 14.6438 4.375 14.9213V14.979V15V15.0211C4.37499 15.3914 4.37499 15.7007 4.39231 15.9545C4.41034 16.2188 4.44921 16.4683 4.54944 16.7103C4.78203 17.2718 5.22816 17.718 5.78968 17.9506C6.03167 18.0508 6.28128 18.0897 6.54553 18.1077C6.79936 18.125 7.10853 18.125 7.47888 18.125H7.47895H7.5H12.5H12.5211C12.8915 18.125 13.2007 18.125 13.4545 18.1077C13.7187 18.0897 13.9683 18.0508 14.2103 17.9506C14.7718 17.718 15.218 17.2718 15.4506 16.7103C15.5508 16.4683 15.5897 16.2188 15.6077 15.9545C15.625 15.7007 15.625 15.3914 15.625 15.0211V15V14.9789V14.9213C16.7032 14.6438 17.5 13.6649 17.5 12.5V10.8333C17.5 9.27567 17.5 8.49683 17.1651 7.91667C16.9457 7.53662 16.6301 7.22103 16.25 7.0016C16.0652 6.89487 15.8601 6.82214 15.6161 6.7726C15.6219 6.73817 15.625 6.70278 15.625 6.66667V5.83333V5.79001V5.78998C15.625 5.04126 15.6251 4.41692 15.5584 3.92127C15.4881 3.39811 15.3333 2.92578 14.9537 2.54622C14.5742 2.16666 14.1019 2.01193 13.5787 1.94159C13.0831 1.87496 12.4587 1.87498 11.71 1.875H11.6667H8.33333ZM14.375 6.67208C14.375 6.67028 14.375 6.66848 14.375 6.66667V5.83333C14.375 5.02999 14.3737 4.49036 14.3196 4.08783C14.2678 3.70328 14.1785 3.53869 14.0699 3.4301C13.9613 3.3215 13.7968 3.23215 13.4122 3.18045C13.0097 3.12633 12.47 3.125 11.6667 3.125H8.33333C7.52999 3.125 6.99036 3.12633 6.58782 3.18045C6.20327 3.23215 6.03869 3.3215 5.9301 3.4301C5.8215 3.53869 5.73215 3.70328 5.68045 4.08783C5.62632 4.49036 5.625 5.02999 5.625 5.83333V6.66667C5.625 6.66848 5.62499 6.67028 5.62497 6.67208C5.92866 6.66667 6.27276 6.66667 6.66667 6.66667H13.3333C13.7273 6.66667 14.0713 6.66667 14.375 6.67208ZM5 8.54167C4.65482 8.54167 4.375 8.8215 4.375 9.16667C4.375 9.51183 4.65482 9.79167 5 9.79167H5.83333C6.17851 9.79167 6.45833 9.51183 6.45833 9.16667C6.45833 8.8215 6.17851 8.54167 5.83333 8.54167H5ZM6.26804 13.2043C6.33233 13.1777 6.43001 13.1531 6.63062 13.1394C6.83684 13.1253 7.10317 13.125 7.5 13.125H12.5C12.8968 13.125 13.1632 13.1253 13.3694 13.1394C13.57 13.1531 13.6677 13.1777 13.732 13.2043C13.9872 13.31 14.19 13.5128 14.2957 13.768C14.3223 13.8323 14.3469 13.93 14.3606 14.1306C14.3747 14.3368 14.375 14.6032 14.375 15C14.375 15.3968 14.3747 15.6632 14.3606 15.8694C14.3469 16.07 14.3223 16.1677 14.2957 16.232C14.19 16.4872 13.9872 16.69 13.732 16.7958C13.6677 16.8223 13.57 16.8469 13.3694 16.8606C13.1632 16.8747 12.8968 16.875 12.5 16.875H7.5C7.10317 16.875 6.83684 16.8747 6.63062 16.8606C6.43001 16.8469 6.33233 16.8223 6.26804 16.7958C6.0128 16.69 5.81002 16.4872 5.70429 16.232C5.67766 16.1677 5.6531 16.07 5.63941 15.8694C5.62534 15.6632 5.625 15.3968 5.625 15C5.625 14.6032 5.62534 14.3368 5.63941 14.1306C5.6531 13.93 5.67766 13.8323 5.70429 13.768C5.81002 13.5128 6.0128 13.31 6.26804 13.2043Z"
    fill={props.color}
  />
);