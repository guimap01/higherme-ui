import { SvgType } from './svgType';

export const ArrowCircleUp = (props: SvgType) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm.53-14.53a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72V14a.75.75 0 0 0 1.5 0V7.81l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
    fill={props.color}
  />
);
