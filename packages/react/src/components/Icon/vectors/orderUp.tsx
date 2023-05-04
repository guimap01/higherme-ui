import { SvgType } from './svgType';

export function OrderUp({ color }: SvgType) {
  return (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.64645 0.353553C3.84171 0.158291 4.15829 0.158291 4.35355 0.353553L7.14645 3.14645C7.46143 3.46143 7.23835 4 6.79289 4H1.20711C0.761654 4 0.538571 3.46143 0.853554 3.14645L3.64645 0.353553Z"
      fill={color}
    />
  );
}
