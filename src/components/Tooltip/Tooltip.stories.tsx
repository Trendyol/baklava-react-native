import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import { deviceHeight } from '../../utils/dimentions';
import Box from '../Box/Box';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import Tooltip from './Tooltip';
import { TooltipRef } from './types';

const positions = ['top', 'bottom'];

const TooltipMeta: ComponentMeta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {
    position: {
      options: positions,
      control: { type: 'radio' },
    },
  },
  args: {
    content: 'Lorem ipsum dolor sit amet',
    overlay: true,
    hole: true,
    highlight: true,
    holePadding: 4,
  },
};

export default TooltipMeta;

type TooltipStory = ComponentStory<typeof Tooltip>;

export const Basic: TooltipStory = args => {
  return (
    <>
      <Box height={deviceHeight * 0.3} />
      <Box
        p="3xl"
        flexDirection="row"
        bg="secondaryColor"
        alignItems="center"
        justifyContent="center">
        <Tooltip
          id="basic"
          position={args.position}
          overlay={args.overlay}
          hole={args.hole}
          holePadding={args.holePadding}
          highlight={args.highlight}
          content={args.content}>
          <Icon name="info" color="primaryColor" size="m" />
        </Tooltip>
        <Box ml="m">
          <Text color="white" variant="subtitle2Medium">
            Click to info icon
          </Text>
        </Box>
      </Box>
      <Box style={{ height: deviceHeight * 0.5 }} />
    </>
  );
};

export const Overflow: TooltipStory = () => {
  return (
    <>
      <Box p="m" flexDirection="row" alignItems="center">
        <Tooltip
          id="text"
          overlay
          hole
          position="top"
          content="opened at the bottom because there was not enough space">
          <Box bg="primaryColor" padding="s" borderRadius="m">
            <Text color="white" variant="subtitle2Medium">
              too close to top
            </Text>
          </Box>
        </Tooltip>
      </Box>
      <Box style={{ height: deviceHeight * 0.64 }} />
      <Box p="m" flexDirection="row" alignItems="center">
        <Tooltip
          id="text"
          overlay
          hole
          position="bottom"
          content="opened at the top because there was not enough space">
          <Box bg="primaryColor" padding="s" borderRadius="m">
            <Text color="white" variant="subtitle2Medium">
              too close to bottom
            </Text>
          </Box>
        </Tooltip>
      </Box>
    </>
  );
};

export const Overlay: TooltipStory = () => {
  return (
    <Box p="l" backgroundColor="secondaryColor">
      <Box p="m" flexDirection="row" alignItems="center">
        <Tooltip
          id="test1"
          position="bottom"
          content="text Lorem ipsum dolor sit amet consectetur. Sagittis viverra id hendrerit nunc ultrices volutpat. Scelerisque tincidunt cras mattis.">
          <Box bg="primaryColor" padding="s" borderRadius="m">
            <Text color="white" variant="subtitle2Medium">
              no overlay
            </Text>
          </Box>
        </Tooltip>
      </Box>
      <Box p="m" flexDirection="row" alignItems="center">
        <Tooltip
          id="test2"
          overlay
          position="bottom"
          content="text Lorem ipsum dolor sit amet consectetur. Sagittis viverra id hendrerit nunc ultrices volutpat. Scelerisque tincidunt cras mattis.">
          <Box bg="primaryColor" padding="s" borderRadius="m">
            <Text color="white" variant="subtitle2Medium">
              overlay
            </Text>
          </Box>
        </Tooltip>
      </Box>
      <Box p="m" flexDirection="row" alignItems="center">
        <Tooltip
          id="test3"
          overlay
          hole
          position="bottom"
          content="text Lorem ipsum dolor sit amet consectetur. Sagittis viverra id hendrerit nunc ultrices volutpat. Scelerisque tincidunt cras mattis.">
          <Box bg="primaryColor" padding="s" borderRadius="m">
            <Text color="white" variant="subtitle2Medium">
              overlay + hole
            </Text>
          </Box>
        </Tooltip>
      </Box>
      <Box p="m" flexDirection="row" alignItems="center">
        <Tooltip
          id="test3"
          overlay
          hole
          highlight
          position="bottom"
          content="text Lorem ipsum dolor sit amet consectetur. Sagittis viverra id hendrerit nunc ultrices volutpat. Scelerisque tincidunt cras mattis.">
          <Box bg="primaryColor" padding="s" borderRadius="m">
            <Text color="white" variant="subtitle2Medium">
              overlay + hole + highlight
            </Text>
          </Box>
        </Tooltip>
      </Box>
      <Box p="m" flexDirection="row" alignItems="center">
        <Tooltip
          id="test4"
          overlay
          hole
          holePadding={10}
          position="bottom"
          content="text Lorem ipsum dolor sit amet consectetur. Sagittis viverra id hendrerit nunc ultrices volutpat. Scelerisque tincidunt cras mattis.">
          <Box bg="primaryColor" padding="s" borderRadius="m">
            <Text color="white" variant="subtitle2Medium">
              overlay + hole + extra padding
            </Text>
          </Box>
        </Tooltip>
      </Box>
      <Box p="m" flexDirection="row" alignItems="center">
        <Tooltip
          id="test4"
          overlay
          hole
          highlight
          holePadding={10}
          position="bottom"
          content="text Lorem ipsum dolor sit amet consectetur. Sagittis viverra id hendrerit nunc ultrices volutpat. Scelerisque tincidunt cras mattis.">
          <Box bg="primaryColor" padding="s" borderRadius="m">
            <Text color="white" variant="subtitle2Medium">
              overlay + hole + highlight + extra padding
            </Text>
          </Box>
        </Tooltip>
      </Box>
    </Box>
  );
};

export const Methods: TooltipStory = () => {
  const tooltipRef = React.useRef<TooltipRef>(null);

  const action = React.useCallback(() => {
    setTimeout(() => {
      tooltipRef.current?.show();
      setTimeout(() => {
        tooltipRef.current?.hide();
      }, 3000);
    }, 2000);
  }, []);

  return (
    <>
      <Box p="m" flexDirection="row" alignItems="center">
        <Tooltip
          id="test5"
          ref={tooltipRef}
          overlay
          hole
          position="bottom"
          content="text Lorem ipsum dolor sit amet consectetur. Sagittis viverra id hendrerit nunc ultrices volutpat. Scelerisque tincidunt cras mattis.">
          <Button
            label="Show after 2sec and hide after 3sec"
            onPress={action}
          />
        </Tooltip>
      </Box>
      <Box style={{ height: deviceHeight * 0.5 }} />
    </>
  );
};
