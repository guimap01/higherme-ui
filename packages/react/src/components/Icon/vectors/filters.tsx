import { SvgType } from './svgType';

export const Filters = (props: SvgType) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M10.25 3a2.75 2.75 0 0 1 5.396-.75H19a.75.75 0 0 1 0 1.5h-3.354A2.751 2.751 0 0 1 10.25 3Zm-10 0A.75.75 0 0 1 1 2.25h6a.75.75 0 0 1 0 1.5H1A.75.75 0 0 1 .25 3Zm0 14a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H1A.75.75 0 0 1 .25 17Zm15.396-.75H19a.75.75 0 0 1 0 1.5h-3.354a2.751 2.751 0 1 1 0-1.5ZM1 9.25a.75.75 0 0 0 0 1.5h3.354a2.751 2.751 0 1 0 0-1.5H1Zm12 0a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z"
    fill={props.color}
  />
);
