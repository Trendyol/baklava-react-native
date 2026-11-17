import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { ModalProps } from '../Modal/Modal';
import Box from '../Box/Box';
import Text from '../Text/Text';
import BaseModal from '../Modal/BaseModal';

export type BottomSheetProps = ModalProps & {
  closeButtonLabel: string;
  selectButtonLabel?: string;
  selectButtonAction?: () => void;
  header?: React.ReactNode;
};
export const BottomSheetTitle = ({
  closeButtonAction,
  closeButtonLabel,
  selectButtonLabel,
  selectButtonAction,
  testID,
  children,
}: {
  closeButtonAction?: () => void;
  closeButtonLabel: string;
  selectButtonLabel?: string;
  selectButtonAction?: () => void;
  testID?: string;
  children: React.ReactNode;
}) => {
  return (
    <Box flexDirection="column" width="100%" gap="s" mb="m">
      <Box
        justifyContent="space-between"
        width="100%"
        alignItems="center"
        flexDirection="row">
        <TouchableOpacity
          onPress={closeButtonAction}
          style={styles.titleSmallButton}
          testID={`${testID}-header-close`}>
          <Text variant="subtitle3Medium" textAlign="left">
            {closeButtonLabel}
          </Text>
        </TouchableOpacity>
        <Text
          variant="subtitle3Medium"
          textAlign="center"
          style={styles.titleLabel}
          testID={`${testID}-header-label`}
          numberOfLines={1}>
          {children}
        </Text>
        <TouchableOpacity
          onPress={selectButtonAction}
          style={styles.titleSmallButton}
          testID={`${testID}-header-select`}>
          <Text
            variant="subtitle3Medium"
            color="primaryColor"
            textAlign="right">
            {selectButtonLabel}
          </Text>
        </TouchableOpacity>
      </Box>
      <Box height={1} backgroundColor="borderColor" mx="-m" />
    </Box>
  );
};
const BottomSheet = ({
  children,
  closeButtonLabel,
  closeButtonAction,
  selectButtonAction,
  selectButtonLabel,
  testID,
  title,
  header,
  ...etc
}: BottomSheetProps) => {
  return (
    <BaseModal
      {...etc}
      justifyContent="flex-end"
      p="none"
      borderBottomStartRadius="none"
      borderBottomEndRadius="none"
      closeButtonAction={closeButtonAction}
      testID={testID}
      header={
        header ?? (
          <BottomSheetTitle
            closeButtonLabel={closeButtonLabel}
            closeButtonAction={closeButtonAction}
            selectButtonAction={selectButtonAction}
            selectButtonLabel={selectButtonLabel}
            testID={testID}>
            {title}
          </BottomSheetTitle>
        )
      }>
      {children}
    </BaseModal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  titleSmallButton: { width: '25%' },
  titleLabel: { width: '50%' },
});
