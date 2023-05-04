import { SvgType } from './svgType';

export const Mail = (props: SvgType) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M1.172 1.172C0 2.343 0 4.229 0 8c0 3.771 0 5.657 1.172 6.828C2.343 16 4.229 16 8 16h4c3.771 0 5.657 0 6.828-1.172C20 13.657 20 11.771 20 8c0-3.771 0-5.657-1.172-6.828C17.657 0 15.771 0 12 0H8C4.229 0 2.343 0 1.172 1.172Zm3.244 2.204a.75.75 0 0 0-.832 1.248l6 4a.75.75 0 0 0 .832 0l6-4a.75.75 0 1 0-.832-1.248L10 7.099 4.416 3.376Z"
    fill={props.color}
  />
);
