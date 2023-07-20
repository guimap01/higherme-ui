import { render, RenderResult } from '@testing-library/react';

import { getCssText } from '../../styles';

export const renderWithStyles = (
  component: React.ReactElement
): RenderResult<
  typeof import('/home/pedro/programacao/higherme-design-system/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries'),
  HTMLStyleElement,
  HTMLStyleElement
> => {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = getCssText();
  return render(component, {
    container: document.body.appendChild(styleElement),
  });
};
