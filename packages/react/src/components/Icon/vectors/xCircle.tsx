import { SvgType } from './svgType';

export const XCircle = (props: SvgType) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10ZM7.53 6.47a.75.75 0 0 0-1.06 1.06L8.94 10l-2.47 2.47a.75.75 0 1 0 1.06 1.06L10 11.06l2.47 2.47a.75.75 0 1 0 1.06-1.06L11.06 10l2.47-2.47a.75.75 0 0 0-1.06-1.06L10 8.94 7.53 6.47Z"
    fill={props.color}
  />
);
