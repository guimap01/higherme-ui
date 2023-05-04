import { SvgType } from './svgType';

export const ArrowLeft = ({ color }: SvgType) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M7.53.47a.75.75 0 0 1 0 1.06L2.81 6.25H15a.75.75 0 0 1 0 1.5H2.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
    fill={color}
  />
);
