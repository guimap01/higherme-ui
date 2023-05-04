import { SvgType } from './svgType';

export const Star = (props: SvgType) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M10.673.42a.75.75 0 0 0-1.346 0L6.5 6.182l-5.61.826a.75.75 0 0 0-.42 1.273l4.207 4.19-1.408 6.203a.75.75 0 0 0 1.074.833L10 16.594l5.657 2.913a.75.75 0 0 0 1.074-.833l-1.408-6.202 4.206-4.19a.75.75 0 0 0-.42-1.274l-5.61-.826L10.674.42Z"
    fill={props.color}
  />
);
