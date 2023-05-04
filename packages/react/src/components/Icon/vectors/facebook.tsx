import { SvgType } from './svgType';

export const Facebook = (props: SvgType) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm1.25-15h1.5v2h-1.5a.5.5 0 0 0-.5.5V11h2l-.5 2h-1.5v4h-2v-4h-1.5v-2h1.5V9.5a2.5 2.5 0 0 1 2.5-2.5Z"
    fill={props.color}
  />
);
