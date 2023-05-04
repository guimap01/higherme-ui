import { SvgType } from './svgType';

export const MoreMenu = (props: SvgType) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M2 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm0 3C.9 7 0 7.9 0 9s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm-2 9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2Z"
    fill={props.color}
  />
);
