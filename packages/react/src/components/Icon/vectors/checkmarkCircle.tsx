import { SvgType } from './svgType';

export const CheckmarkCircle = (props: SvgType) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm4.53-12.47a.75.75 0 0 0-1.06-1.06L9 10.94 7.53 9.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l5-5Z"
    fill={props.color}
  />
);
