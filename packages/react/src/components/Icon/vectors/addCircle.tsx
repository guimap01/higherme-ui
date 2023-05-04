import { SvgType } from './svgType';

export const AddCircle = (props: SvgType) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm.75-14a.75.75 0 0 0-1.5 0v3.25H8a.75.75 0 0 0 0 1.5h3.25V16a.75.75 0 0 0 1.5 0v-3.25H16a.75.75 0 0 0 0-1.5h-3.25V8Z"
    fill={props.color}
  />
);
