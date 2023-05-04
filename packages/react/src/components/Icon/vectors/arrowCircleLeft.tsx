import { SvgType } from './svgType';

export const ArrowCircleLeft = (props: SvgType) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10ZM9.53 7.53a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72H14a.75.75 0 0 0 0-1.5H7.81l1.72-1.72Z"
    fill={props.color}
  />
);
