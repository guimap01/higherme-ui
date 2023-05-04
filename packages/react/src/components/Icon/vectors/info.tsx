import { SvgType } from './svgType';

export const Info = (props: SvgType) => (
  <path
    d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-10-1.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75ZM12 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    fill={props.color}
    fillRule="evenodd"
  />
);
