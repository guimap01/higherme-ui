import { SvgType } from './svgType';

export const ChevronUp = (props: SvgType) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M11.47 8.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 1 1-1.06 1.06L12 10.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06l6-6Z"
    fill={props.color}
  />
);
