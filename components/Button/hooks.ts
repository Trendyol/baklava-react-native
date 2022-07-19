import React from 'react';

export const useIsPressed = () => {
  const [isPressed, setIsPressed] = React.useState<boolean>(false);

  return {
    pressableProps: {
      onPressIn: () => setIsPressed(true),
      onPressOut: () => setIsPressed(false),
    },
    isPressed,
  };
};
