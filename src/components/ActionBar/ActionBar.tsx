import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Portal } from '@gorhom/portal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Box from '../Box/Box';

type ActionBarProps = React.ComponentProps<typeof Box> & {
  children: React.ReactNode;
  disableSafeArea?: boolean;
  testID?: string;
  accessibilityLabel?: string;
};

const ActionBar = ({
  children,
  disableSafeArea = false,
  testID,
  accessibilityLabel,
  ...rest
}: ActionBarProps) => {
  const insets = useSafeAreaInsets();

  const safeAreaPadding = disableSafeArea ? 0 : insets.bottom;

  const containerStyle: ViewStyle = {
    paddingBottom: safeAreaPadding,
  };

  const testProps = React.useMemo(() => {
    const result: {
      testID?: string;
      accessibilityLabel?: string;
    } = {};

    if (testID || accessibilityLabel) {
      result.testID = testID ?? accessibilityLabel;
      result.accessibilityLabel = accessibilityLabel ?? testID;
    }

    return result;
  }, [testID, accessibilityLabel]);

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
        {...testProps}
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
