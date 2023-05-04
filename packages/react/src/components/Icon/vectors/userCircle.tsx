import { SvgType } from './svgType';

export const UserCircle = (props: SvgType) => (
  <path
    fillRule="evenodd"
    d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25zM7 16.333A3.333 3.333 0 0 1 10.333 13h3.334A3.333 3.333 0 0 1 17 16.333c0 .92-.746 1.667-1.667 1.667H8.667C7.747 18 7 17.254 7 16.333zM12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
    fill={props.color}
  />
);
