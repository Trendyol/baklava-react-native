import React, { PropsWithChildren } from 'react';
import { TouchableOpacity } from 'react-native';
import Box from '../Box/Box';
import Button, { ButtonProps } from '../Button/Button';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import BaseModal, { BaseModalProps, A11yProps } from './BaseModal';

export type ModalProps = BaseModalProps &
  PropsWithChildren<{
    title?: string;
    titleLineNumber?: number;
    actionButtonProps?: ButtonProps;
    secondActionButtonProps?: ButtonProps;
  }>;

const Modal = ({
  visible,
  title,
  closable = true,
  modalKey,
  closeButtonAction,
  actionButtonProps,
  secondActionButtonProps,
  justifyContent = 'center',
  testID,
  accessibilityLabel,
  accessible = true,
  children,
  titleLineNumber = 2,
  ...etc
}: ModalProps) => {
  const testProps = React.useMemo(() => {
    return {
      accessible: accessible,
      accessibilityLabel: accessibilityLabel ?? testID,
      testID: testID ?? accessibilityLabel,
    } as A11yProps;
  }, [testID, accessibilityLabel, accessible]);

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
            numberOfLines={titleLineNumber}
            textAlign="left">
            {title}
          </Text>
        </Box>
        {closable && (
          <TouchableOpacity
            testID={`${testProps.testID}-close`}
            accessibilityLabel={`${testProps.accessibilityLabel}-close`}
            hitSlop={{ left: 0, bottom: 0, top: 12, right: 12 }}
            onPress={closeButtonAction}>
            <Box p="4xs" pl="2xs" pb="2xs">
              <Icon name="close" color="neutralDarker" size="xs" />
            </Box>
          </TouchableOpacity>
        )}
      </Box>
    );
  }, [
    closeButtonAction,
    closable,
    testProps.accessibilityLabel,
    testProps.testID,
    title,
    titleLineNumber,
  ]);

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

  return (
    <BaseModal
      {...etc}
      closeButtonAction={closeButtonAction}
      header={header}
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      actions={actions}
      modalKey={modalKey}
      justifyContent={justifyContent}
      closable={closable}
      visible={visible}>
      {children}
    </BaseModal>
  );
};

export default Modal;
