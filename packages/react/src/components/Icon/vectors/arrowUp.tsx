import { SvgType } from './svgType';

export const ArrowUp = (props: SvgType) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M7 .25a.75.75 0 0 1 .75.75v12.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 0 1 1.06-1.06l4.72 4.72V1A.75.75 0 0 1 7 .25Z"
    fill={props.color}
  />
);
