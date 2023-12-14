import { ThemeProvider } from '@ergenekonyigit/restyle';
import { render } from '@testing-library/react-native';
import * as React from 'react';
import {
  GestureResponderHandlers,
  PanResponder,
  PanResponderCallbacks,
} from 'react-native';
import theme from './theme';
import { PortalProvider } from '.';

theme.fonts = {
  light: 'Rubik-Light',
  regular: 'Rubik-Regular',
  medium: 'Rubik-Medium',
  semiBold: 'Rubik-SemiBold',
  bold: 'Rubik-Bold',
};

export interface RenderOptions {
  wrapper?: React.ComponentType<any>;
  createNodeMock?: (element: React.ReactElement<any>) => any;
}

const AllProviders = ({ children }: { children?: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <PortalProvider>{children}</PortalProvider>
  </ThemeProvider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options }) as any;

const mockPanResponder = () => {
  jest
    .spyOn(PanResponder, 'create')
    .mockImplementation(
      ({
        onStartShouldSetPanResponderCapture,
        onMoveShouldSetPanResponder,
        onPanResponderGrant,
        onPanResponderMove,
        onPanResponderRelease,
      }: PanResponderCallbacks) => ({
        panHandlers: {
          onStartShouldSetResponderCapture: onStartShouldSetPanResponderCapture,
          onMoveShouldSetResponder: onMoveShouldSetPanResponder,
          onResponderGrant: onPanResponderGrant,
          onResponderMove: onPanResponderMove,
          onResponderRelease: onPanResponderRelease,
        } as GestureResponderHandlers,
      }),
    );
};

export * from '@testing-library/react-native';
export { customRender as render, mockPanResponder };
