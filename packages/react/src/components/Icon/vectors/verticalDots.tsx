import { SvgType } from './svgType';

export function VerticalDots({ color }: SvgType) {
  return (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 7C0.9 7 0 7.9 0 9C0 10.1 0.9 11 2 11C3.1 11 4 10.1 4 9C4 7.9 3.1 7 2 7ZM0 16C0 14.9 0.9 14 2 14C3.1 14 4 14.9 4 16C4 17.1 3.1 18 2 18C0.9 18 0 17.1 0 16Z"
      fill={color}
    />
  );
}
