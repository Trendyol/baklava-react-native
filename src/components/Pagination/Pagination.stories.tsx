import type { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import theme from '../../theme';
import Box from '../Box/Box';
import Text from '../Text/Text';
import Pagination, { PaginationProps } from './Pagination';

const PaginationExample = (props: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(props.currentPage);

  useEffect(() => {
    setCurrentPage(props.currentPage);
  }, [props.currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    props.onPageChange(page);
  };

  return (
    <Pagination
      {...props}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  );
};

const PaginationMeta: Meta<typeof Pagination> = {
  title: 'Pagination',
  component: Pagination,
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1 },
    },
    totalPages: {
      control: { type: 'number', min: 1 },
    },
  },
  args: {
    currentPage: 1,
    totalPages: 150,
    hasJumper: false,
    onPageChange: () => undefined,
  },
};

export default PaginationMeta;

type Story = StoryObj<typeof PaginationMeta>;

const StoryContainer = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) => {
  const insets = useSafeAreaInsets();

  return (
    <Box
      flex={1}
      justifyContent="space-between"
      pt="2xs"
      style={{ paddingBottom: insets.bottom + theme.spacing['2xs'] }}
      width="100%">
      <Box>
        <Text p="2xs" variant="subtitle01Bold">
          {title}
        </Text>
        {description ? (
          <Text px="2xs" variant="captionMedium" color="neutralDark">
            {description}
          </Text>
        ) : null}
      </Box>

      {children}
    </Box>
  );
};

export const Basic: Story = {
  render: args => (
    <StoryContainer title="Pagination">
      <PaginationExample {...args} />
    </StoryContainer>
  ),
};

export const FewPages: Story = {
  render: args => (
    <StoryContainer
      title="Pagination Few Pages"
      description="All pages fit, no ellipsis is needed.">
      <PaginationExample {...args} />
    </StoryContainer>
  ),
  args: {
    currentPage: 2,
    totalPages: 3,
  },
};

export const MiddlePage: Story = {
  render: args => (
    <StoryContainer
      title="Pagination Middle Page"
      description="Ellipsis is shown on both sides of the current page.">
      <PaginationExample {...args} />
    </StoryContainer>
  ),
  args: {
    currentPage: 8,
    totalPages: 150,
  },
};

export const Jumper: Story = {
  render: args => (
    <StoryContainer
      title="Pagination Jumper"
      description="Double arrows jump directly to the first or last page.">
      <PaginationExample {...args} />
    </StoryContainer>
  ),
  args: {
    currentPage: 1,
    totalPages: 15,
    hasJumper: true,
  },
};

export const JumperMiddlePage: Story = {
  render: args => (
    <StoryContainer
      title="Pagination Jumper Middle Page"
      description="With jumper, only the neighbours of the current page are listed.">
      <PaginationExample {...args} />
    </StoryContainer>
  ),
  args: {
    currentPage: 8,
    totalPages: 150,
    hasJumper: true,
  },
};
