import { SvgType } from './svgType';

export const Bell = (props: SvgType) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M4.512 8.86a7.547 7.547 0 0 1 14.976 0l.99 7.912a2.65 2.65 0 0 1-2.63 2.978h-1.36l-.053.118a4.853 4.853 0 0 1-8.87 0l-.052-.118H6.152a2.65 2.65 0 0 1-2.63-2.978l.99-7.911Zm10.283 10.89h-5.59a3.354 3.354 0 0 0 5.59 0Z"
    fill={props.color}
  />
);
