import { SvgType } from './svgType';

export function OrderDown({ color }: SvgType) {
  return (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.35355 3.64645C4.15829 3.84171 3.84171 3.84171 3.64645 3.64645L0.853552 0.853552C0.53857 0.538569 0.761654 -6.32796e-07 1.20711 -5.93854e-07L6.79289 -1.05529e-07C7.23835 -6.65859e-08 7.46143 0.538571 7.14645 0.853553L4.35355 3.64645Z"
      fill={color}
    />
  );
}
