import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Portal } from '@gorhom/portal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Box from '../Box/Box';

type ActionBarProps = React.ComponentProps<typeof Box> & {
  children: React.ReactNode;
  disableSafeArea?: boolean;
};

const ActionBar = ({
  children,
  disableSafeArea = false,
  ...rest
}: ActionBarProps) => {
  const insets = useSafeAreaInsets();

  const safeAreaPadding = disableSafeArea ? 0 : insets.bottom;

  const containerStyle: ViewStyle = {
    paddingBottom: safeAreaPadding,
  };

  // testID ve accessibilityLabel dahil tum native prop'lar rest uzerinden
  // Box'a, oradan da native view'a akar.
  return (
    <Portal>
      <Box
        style={[styles.container, containerStyle]}
        backgroundColor="neutralFull"
        paddingHorizontal="m"
        paddingTop="m"
        borderTopLeftRadius="l"
        borderTopRightRadius="l"
        shadowColor="neutralDarker"
        shadowOffset={shadowOffset}
        shadowOpacity={0.15}
        shadowRadius={7.5}
        gap="m"
        {...rest}>
        {children}
      </Box>
    </Portal>
  );
};

const shadowOffset = { width: 0, height: -4 };

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 5,
  },
});

export default ActionBar;
