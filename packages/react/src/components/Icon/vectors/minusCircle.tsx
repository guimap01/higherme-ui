import { SvgType } from './svgType';

export const MinusCircle = (props: SvgType) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10ZM6 9.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H6Z"
    fill={props.color}
  />
);
