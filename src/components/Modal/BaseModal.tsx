import Box, { BoxProps } from '../Box/Box';
import { Animated, ScrollView, StyleSheet } from 'react-native';
import { Portal } from '@gorhom/portal';
import React, { PropsWithChildren } from 'react';
import theme from '../../theme';

export type A11yProps = {
  testID?: string;
  accessibilityLabel?: string;
  accessible?: boolean;
};

export type BaseModalProps = A11yProps &
  PropsWithChildren<{
    modalKey?: string;
    visible: boolean;
    closable?: boolean;
    closeButtonAction?: () => void;
    duration?: number;
    justifyContent?: 'flex-start' | 'flex-end' | 'center';
    wrongPressThresholdMs?: number;
    borderBottomStartRadius?: BoxProps['borderBottomStartRadius'];
    borderBottomEndRadius?: BoxProps['borderBottomEndRadius'];
    p?: BoxProps['p'];
    actions?: React.ReactNode;
    header?: React.ReactNode;
  }>;

const BaseModal = ({
  modalKey,
  justifyContent,
  p = 'l',
  accessible,
  accessibilityLabel,
  testID,
  children,
  header,
  actions,
  visible,
  duration = 200,
  closable = true,
  wrongPressThresholdMs = 1000, // 1 second
  closeButtonAction,
  borderBottomStartRadius,
  borderBottomEndRadius,
}: BaseModalProps) => {
  const anim = React.useRef(new Animated.Value(0)).current;
  const preventWrongPressToClose = React.useRef(Date.now());
  React.useEffect(() => {
    if (visible) {
      preventWrongPressToClose.current = Date.now();
      Animated.timing(anim, {
        toValue: 0.7,
        duration,
        useNativeDriver: true,
      }).start();
    } else {
      anim.setValue(0);
    }
  }, [anim, duration, visible]);

  const close = React.useCallback(() => {
    const threshold = preventWrongPressToClose.current + wrongPressThresholdMs;
    if (closable && threshold < Date.now()) {
      closeButtonAction?.();
    }
  }, [closable, closeButtonAction, wrongPressThresholdMs]);

  const testProps = React.useMemo(() => {
    return {
      accessible: accessible,
      accessibilityLabel: accessibilityLabel ?? testID,
      testID: testID ?? accessibilityLabel,
    } as A11yProps;
  }, [testID, accessibilityLabel, accessible]);

  if (!visible || !children) {
    return null;
  }

  return (
    <Portal name={modalKey ?? 'base-modal'}>
      <Box
        position="absolute"
        justifyContent={justifyContent}
        p={p}
        top={0}
        bottom={0}
        left={0}
        right={0}
        testID={`${testProps.testID}-wrapper`}
        accessibilityLabel={`${testProps.accessibilityLabel}-wrapper`}>
        <Animated.View
          testID={`${testProps.testID}-overlay`}
          accessibilityLabel={`${testProps.testID}-overlay`}
          style={[styles.overlay, { opacity: anim }]}
          onStartShouldSetResponder={() => true}
          onResponderRelease={close}
        />
        <Box
          {...testProps}
          bg="white"
          p="m"
          borderRadius={'l'}
          borderBottomStartRadius={borderBottomStartRadius}
          borderBottomEndRadius={borderBottomEndRadius}
          style={styles.card}>
          {header}
          <ScrollView
            testID={`${testProps.testID}-body`}
            accessibilityLabel={`${testProps.accessibilityLabel}-body`}
            bounces={false}
            showsVerticalScrollIndicator>
            {children}
          </ScrollView>
          {actions}
        </Box>
      </Box>
    </Portal>
  );
};

const styles = StyleSheet.create({
  card: {
    maxHeight: '90%',
  },
  overlay: {
    position: 'absolute',
    backgroundColor: theme.colors.neutralDarker,
    opacity: 0.7,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default BaseModal;
