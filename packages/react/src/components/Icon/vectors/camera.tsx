import { SvgType } from './svgType';

export const Camera = (props: SvgType) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M8.944.25h.112c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87l.012.095c.567-.424 1.057-.782 1.473-1.009.473-.257 1.081-.472 1.7-.162.62.31.813.925.891 1.458.077.526.077 1.226.077 2.047V11.06c0 .822 0 1.521-.077 2.047-.078.533-.271 1.149-.89 1.458-.62.31-1.228.095-1.701-.162-.416-.226-.906-.585-1.473-1.009a11.57 11.57 0 0 1-.012.095c-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153h-.112c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87C.25 12.349.25 10.894.25 9.056v-.112c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87C2.39.893 3.34.561 4.511.403 5.651.25 7.106.25 8.944.25Zm8.806 8.901V11.001c0 .258 0 .403.01.511a.611.611 0 0 0 .016.098v.002l.001.001.002.003a6.617 6.617 0 0 0 .47.384c.72.539 1.19.89 1.549 1.085.17.092.264.12.31.13.02-.042.053-.135.08-.326.06-.403.062-.99.062-1.889V7c0-.898-.002-1.486-.061-1.89a1.147 1.147 0 0 0-.082-.324c-.045.008-.14.037-.309.13-.358.194-.83.545-1.548 1.084a6.596 6.596 0 0 0-.404.316.594.594 0 0 0-.062.062l-.007.009v.001l-.001.002a6.61 6.61 0 0 0-.026.61V9.152Zm0-.207v.006-.006Zm0 .006v.008-.008Zm0 .008v.008-.008Zm0 .008v.009-.008Zm0 .009v.008-.008Zm0 .008v.008-.008Zm0 .008V9 8.99Zm0 .009Zm0 0v.008V9Zm0 .008v.008-.008Zm0 .008v.008-.008Zm0 .008v.009-.009Zm0 .009v.008-.008Zm0 .008v.008-.008Zm0 .008v.007-.007Zm0 .007Zm2.392-4.272s-.005.001-.013-.001c.01 0 .014 0 .013.001Zm-.046-.017-.009-.01c0-.001.004.002.01.01Zm-.009 8.476s.003-.005.01-.01c-.006.008-.01.011-.01.01Zm.042-.026c.008-.002.013-.002.013-.001 0 0-.003.002-.013.001Z"
    fill={props.color}
  />
);