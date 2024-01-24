import React from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';
import { getCounterText, getTextColor } from './utils';

export const TextAreaCounterText = React.memo(
  ({
    counterText,
    errorState,
  }: {
    counterText?: number;
    errorState: boolean;
  }): JSX.Element | null => {
    const textColor = getTextColor({ errorState });

    const content = getCounterText({
      counterText,
      errorState,
    });

    return (
      <Box mt="3xs" ml="m">
        <Text variant="subtitle04Regular" color={textColor}>
          {`${content}/200`}
        </Text>
      </Box>
    );
  },
);
