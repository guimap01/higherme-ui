import { SvgType } from './svgType';

export const CircleList = (props: SvgType) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M4.63 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm5.25-2a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5h-10A.75.75 0 0 1 9.88 5Zm.75 6.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5h-10Zm0 7a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5h-10Zm-4-6.25a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    fill={props.color}
  />
);
