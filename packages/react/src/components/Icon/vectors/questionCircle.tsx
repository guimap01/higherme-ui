import { SvgType } from './svgType';

export const QuestionCircle = (props: SvgType) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-9 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-2.25-6a1.25 1.25 0 1 1 2.5 0v.121c0 .364-.145.713-.402.97L11.47 12.47a.75.75 0 1 0 1.06 1.06l1.379-1.378a2.871 2.871 0 0 0 .841-2.03V10a2.75 2.75 0 1 0-5.5 0v.5a.75.75 0 0 0 1.5 0V10Z"
    fill={props.color}
  />
);
