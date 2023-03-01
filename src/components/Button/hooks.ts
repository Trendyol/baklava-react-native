import React from 'react';

export const useIsPressed = (state = false) => {
  const [isPressed, setIsPressed] = React.useState<boolean>(state);

  return {
    pressableProps: {
      onPressIn: () => setIsPressed(true),
      onPressOut: () => setIsPressed(false),
    },
    isPressed,
  };
};
