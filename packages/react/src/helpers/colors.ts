/* eslint-disable @typescript-eslint/ban-ts-comment */
import { theme } from '../styles';

/** if a theme color was used - grab it, otherwise (hex, rgb, etc) just return it **/
export const resolveColor = (color: string, opacity = null) => {
  // if color is in format 'mainBlue100'
  if (opacity !== null && !isNaN(parseInt(opacity, 10))) {
    // @ts-ignore
    if (theme && theme.colors && theme.colors[`${color}`]) {
      // theme color with opacity
      // @ts-ignore
      return `${theme.colors[`${color}`]}${Math.floor(opacity * 255).toString(
        16
      )}`;
    } else if (color && color.length > 0 && color[0] === '#') {
      // hex color with opacity
      return `${color}${Math.floor(opacity * 255).toString(16)}`;
    }
  }
  // @ts-ignore
  if (theme && theme.colors && theme.colors[color]) {
    // theme color without opacity
    // @ts-ignore
    return theme.colors[color];
  }
  // hex color w/out opacity or rgb(a)
  return color;
};
