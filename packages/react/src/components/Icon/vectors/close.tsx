import { SvgType } from './svgType';

export const Close = (props: SvgType) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M.47.47a.75.75 0 0 1 1.06 0L7 5.94 12.47.47a.75.75 0 1 1 1.06 1.06L8.06 7l5.47 5.47a.75.75 0 1 1-1.06 1.06L7 8.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L5.94 7 .47 1.53a.75.75 0 0 1 0-1.06Z"
    fill={props.color}
  />
);
