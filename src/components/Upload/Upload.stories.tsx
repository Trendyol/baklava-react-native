import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import Box from '../Box/Box';
import Text from '../Text/Text';
import Upload from './Upload';
import { UploadFile } from './types';

const UploadMeta: ComponentMeta<typeof Upload> = {
  title: 'Upload',
  component: Upload,
  args: {
    label: 'Select File',
    description:
      'You can upload a maximum of 3 files, the total size of which cannot exceed 20 MB.',
    buttonLabel: 'Dosya Seç',
  },
};

export default UploadMeta;

type UploadStory = ComponentStory<typeof Upload>;

const uploadedFiles: UploadFile[] = [
  { id: '1', name: 'dosya_adı.jpg', status: 'uploaded' },
  { id: '2', name: 'dosya_adı.pdf', status: 'uploaded' },
];

const errorFiles: UploadFile[] = [
  {
    id: '1',
    name: 'dosya_adı.jpg',
    status: 'error',
    helperText: 'Optional helper text',
  },
];

const multipleStatusFiles: UploadFile[] = [
  {
    id: '1',
    name: 'dosya_adı.jpg',
    status: 'error',
    helperText:
      'Yanlış dosya formatı, dosya formatı PDF, PNG, JPG veya JPEG olmalıdır.',
  },
  { id: '2', name: 'dosya_adı.jpg', status: 'uploaded' },
];

export const Basic: UploadStory = args => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Upload
    </Text>
    <Box px="m" py="2xs">
      <Upload {...args} files={[]} onSelectPress={() => {}} />
    </Box>
  </>
);

export const Uploaded: UploadStory = args => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Uploaded Files
    </Text>
    <Box px="m" py="2xs">
      <Upload {...args} files={uploadedFiles} onSelectPress={() => {}} />
    </Box>
  </>
);

export const MultipleStatuses: UploadStory = args => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Multiple Status Displays
    </Text>
    <Box px="m" py="2xs">
      <Upload
        {...args}
        files={multipleStatusFiles}
        onSelectPress={() => {}}
        onRemove={() => {}}
      />
    </Box>
  </>
);

export const ErrorValidation: UploadStory = args => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Upload Error Validation
    </Text>
    <Box px="m" py="2xs">
      <Upload {...args} files={errorFiles} onSelectPress={() => {}} />
    </Box>
  </>
);

export const Disabled: UploadStory = args => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Disabled
    </Text>
    <Box px="m" py="2xs">
      <Upload {...args} files={[]} disabled onSelectPress={() => {}} />
    </Box>
  </>
);

export const Interactive: UploadStory = args => {
  const [files, setFiles] = React.useState<UploadFile[]>([]);

  return (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Interactive Upload
      </Text>
      <Box px="m" py="2xs">
        <Upload
          {...args}
          files={files}
          onSelectPress={() => {
            const nextIndex = files.length + 1;
            setFiles(current => [
              ...current,
              {
                id: `${Date.now()}`,
                name: `dosya_adı_${nextIndex}.jpg`,
                size: 1024,
                status: 'uploaded',
              },
            ]);
          }}
          onRemove={id => {
            setFiles(current => current.filter(file => file.id !== id));
          }}
        />
      </Box>
    </>
  );
};
