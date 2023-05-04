import { SvgType } from './svgType';

export const Checkmark = (props: SvgType) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M17.507.447a.75.75 0 0 1 .046 1.06l-11 12a.75.75 0 0 1-1.083.023l-5-5a.75.75 0 1 1 1.06-1.06l4.446 4.446L16.447.493a.75.75 0 0 1 1.06-.046Z"
    fill={props.color}
  />
);
