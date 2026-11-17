import React, { PropsWithChildren } from 'react';
import { TouchableOpacity } from 'react-native';
import Box from '../Box/Box';
import Button, { ButtonProps } from '../Button/Button';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import BaseModal, { BaseModalProps } from './BaseModal';

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
  accessible = true,
  children,
  titleLineNumber = 2,
  ...etc
}: ModalProps) => {
  // accessibilityLabel'a burada dokunulmaz; etc uzerinden BaseModal'a akar.

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
        testID={`${testID}-header`}>
        <Box flex={1}>
          <Text
            variant="subtitle2Medium"
            testID={`${testID}-title`}
            numberOfLines={titleLineNumber}
            textAlign="left">
            {title}
          </Text>
        </Box>
        {closable && (
          <TouchableOpacity
            testID={`${testID}-close`}
            hitSlop={{ left: 0, bottom: 0, top: 12, right: 12 }}
            onPress={closeButtonAction}>
            <Box p="4xs" pl="2xs" pb="2xs">
              <Icon name="close" color="neutralDarker" size="xs" />
            </Box>
          </TouchableOpacity>
        )}
      </Box>
    );
  }, [closeButtonAction, closable, testID, title, titleLineNumber]);

  const actions = React.useMemo(() => {
    if (!actionButtonProps && !secondActionButtonProps) {
      return null;
    }

    return (
      <Box testID={`${testID}-actions-area`}>
        {actionButtonProps && (
          <Button
            mt="m"
            filled
            size="l"
            variant="primary"
            testID={`${testID}-action`}
            {...actionButtonProps}
          />
        )}
        {secondActionButtonProps && (
          <Button
            mt="m"
            filled
            size="l"
            variant="secondary"
            testID={`${testID}-second-action`}
            {...secondActionButtonProps}
          />
        )}
      </Box>
    );
  }, [actionButtonProps, secondActionButtonProps, testID]);

  return (
    <BaseModal
      {...etc}
      closeButtonAction={closeButtonAction}
      header={header}
      accessible={accessible}
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
