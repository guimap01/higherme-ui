import { SvgType } from './svgType';

export const NotePad = (props: SvgType) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M15.15.845a2.75 2.75 0 0 1 3.7 0c.049.044.1.096.168.164l.012.012.013.013c.067.067.12.119.163.168a2.75 2.75 0 0 1-.163 3.867l-.013.013-3.933 3.933-.073.074c-.708.708-1.166 1.165-1.729 1.484-.563.319-1.19.476-2.162.718l-.1.026-1.851.462a.75.75 0 0 1-.91-.91l.463-1.85.025-.1c.243-.972.4-1.6.718-2.163.32-.563.777-1.02 1.485-1.728l.074-.074 3.933-3.933.012-.012c.068-.068.12-.12.168-.164ZM8.944.302H10a.75.75 0 0 1 0 1.5H9c-1.907 0-3.261.001-4.29.14-1.005.135-1.585.388-2.008.811-.423.424-.677 1.003-.812 2.01-.138 1.027-.14 2.382-.14 4.289v2c0 1.906.002 3.261.14 4.289.135 1.006.389 1.586.812 2.009.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h2c1.907 0 3.261-.002 4.29-.14 1.005-.135 1.585-.39 2.008-.812.423-.424.677-1.003.812-2.01.138-1.027.14-2.382.14-4.288v-1a.75.75 0 1 1 1.5 0v1.056c0 1.838 0 3.293-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.237-1.14.154-2.595.154-4.433.154H8.944c-1.838 0-3.294 0-4.433-.154-1.172-.157-2.121-.49-2.87-1.238-.748-.748-1.08-1.697-1.238-2.87C.25 14.402.25 12.947.25 11.109V8.995c0-1.838 0-3.293.153-4.432.158-1.173.49-2.122 1.238-2.87C2.39.944 3.34.613 4.511.455 5.651.302 7.106.302 8.944.302Z"
    fill={props.color}
  />
);
