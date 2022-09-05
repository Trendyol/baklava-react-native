import * as React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from './theme';

export interface RenderOptions {
  wrapper?: React.ComponentType<any>;
  createNodeMock?: (element: React.ReactElement<any>) => any;
}

const AllProviders = ({ children }: { children?: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options }) as any;

export * from '@testing-library/react-native';

export { customRender as render };
