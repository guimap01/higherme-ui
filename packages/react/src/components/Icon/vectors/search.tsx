import { SvgType } from './svgType';

export const Search = (props: SvgType) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M11.12 20.12a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm8.53-1.53a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 1 0 1.06-1.06l-2-2Z"
    fill={props.color}
  />
);
