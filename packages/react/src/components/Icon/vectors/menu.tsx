import { SvgType } from './svgType';

export const Menu = (props: SvgType) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M3.25 7A.75.75 0 0 1 4 6.25h16a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 7Zm0 5a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75ZM4 16.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"
    fill={props.color}
  />
);
