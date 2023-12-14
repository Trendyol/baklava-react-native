import { Portal } from '@gorhom/portal';
import React, { PropsWithChildren } from 'react';
import {
  Animated,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import theme from '../../theme';
import Box from '../Box/Box';
import Button, { ButtonProps } from '../Button/Button';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';

type A11yProps = {
  testID?: string;
  accessibilityLabel?: string;
  accessible?: boolean;
};

export type ModalProps = A11yProps &
  PropsWithChildren<{
    visible: boolean;
    title?: string;
    closable?: boolean;
    modalKey?: string;
    closeButtonAction?: () => void;
    actionButtonProps?: ButtonProps;
    secondActionButtonProps?: ButtonProps;
    duration?: number;
    justifyContent?: 'flex-start' | 'flex-end' | 'center';
    wrongPressThresholdMs?: number;
  }>;

const Modal = ({
  visible,
  title,
  closable = true,
  modalKey,
  closeButtonAction,
  actionButtonProps,
  secondActionButtonProps,
  duration = 200,
  justifyContent = 'center',
  wrongPressThresholdMs = 1000, // 1 second
  testID,
  accessibilityLabel,
  accessible = true,
  children,
}: ModalProps) => {
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

  const testProps = React.useMemo(() => {
    return {
      accessible: accessible,
      accessibilityLabel: accessibilityLabel ?? testID,
      testID: testID ?? accessibilityLabel,
    } as A11yProps;
  }, [testID, accessibilityLabel, accessible]);

  const close = React.useCallback(() => {
    const threshold = preventWrongPressToClose.current + wrongPressThresholdMs;
    if (closable && threshold < Date.now()) {
      closeButtonAction?.();
    }
  }, [closable, closeButtonAction, wrongPressThresholdMs]);

  const header = React.useMemo(() => {
    if (!title && !closable) {
      return null;
    }

    return (
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-start"
        mb="m"
        testID={`${testProps.testID}-header`}
        accessibilityLabel={`${testProps.accessibilityLabel}-header`}>
        <Box flex={1}>
          <Text
            variant="subtitle2Medium"
            testID={`${testProps.testID}-title`}
            numberOfLines={2}>
            {title}
          </Text>
        </Box>
        {closable && (
          <TouchableOpacity
            testID={`${testProps.testID}-close`}
            accessibilityLabel={`${testProps.accessibilityLabel}-close`}
            hitSlop={{ left: 0, bottom: 0, top: 12, right: 12 }}
            onPress={close}>
            <Box p="4xs" pl="2xs" pb="2xs">
              <Icon name="close" color="neutralDarker" size="xs" />
            </Box>
          </TouchableOpacity>
        )}
      </Box>
    );
  }, [closable, close, testProps.accessibilityLabel, testProps.testID, title]);

  const actions = React.useMemo(() => {
    if (!actionButtonProps && !secondActionButtonProps) {
      return null;
    }

    return (
      <Box
        testID={`${testProps.testID}-actions-area`}
        accessibilityLabel={`${testProps.accessibilityLabel}-actions-area`}>
        {actionButtonProps && (
          <Button
            mt="m"
            filled
            size="l"
            variant="primary"
            testID={`${testProps.testID}-action`}
            accessibilityLabel={`${testProps.accessibilityLabel}-action`}
            {...actionButtonProps}
          />
        )}
        {secondActionButtonProps && (
          <Button
            mt="m"
            filled
            size="l"
            variant="secondary"
            testID={`${testProps.testID}-second-action`}
            accessibilityLabel={`${testProps.accessibilityLabel}-second-action`}
            {...secondActionButtonProps}
          />
        )}
      </Box>
    );
  }, [
    actionButtonProps,
    secondActionButtonProps,
    testProps.accessibilityLabel,
    testProps.testID,
  ]);

  if (!visible || !children) {
    return null;
  }

  return (
    <Portal name={modalKey ?? 'modal'}>
      <Box
        position="absolute"
        justifyContent={justifyContent}
        p="l"
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
          borderRadius="l"
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

export default Modal;
