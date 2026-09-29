import React from 'react';
import { StyleSheet } from 'react-native';
import Box, { BoxProps } from '../Box/Box';

type AccordionGroupProps = BoxProps & {
  children: React.ReactNode;
  multiple?: boolean;
  defaultOpenIndex?: number;
};

const styles = StyleSheet.create({
  borderCollapse: { marginTop: -1 },
});

const AccordionGroup = ({
  children,
  multiple = false,
  defaultOpenIndex,
  ...rest
}: AccordionGroupProps) => {
  const [openIndices, setOpenIndices] = React.useState<Set<number>>(
    () => new Set(defaultOpenIndex !== undefined ? [defaultOpenIndex] : []),
  );

  const handleOpenChange = (index: number, isOpen: boolean) => {
    setOpenIndices(prev => {
      if (multiple) {
        const next = new Set(prev);
        if (isOpen) {
          next.add(index);
        } else {
          next.delete(index);
        }
        return next;
      }
      return isOpen ? new Set([index]) : new Set();
    });
  };

  return (
    <Box
      testID="accordion-group"
      accessibilityLabel="accordion-group"
      {...rest}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) {
          return child;
        }
        return React.cloneElement(child as React.ReactElement, {
          fullWidth: true,
          open: openIndices.has(index),
          onOpenChange: (isOpen: boolean) => handleOpenChange(index, isOpen),
          style: index > 0 ? styles.borderCollapse : undefined,
        });
      })}
    </Box>
  );
};

export default AccordionGroup;
