import {
  GestureResponderHandlers,
  PanResponder,
  PanResponderCallbacks,
} from 'react-native';

export function mockPanResponder() {
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
}
