// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=11598-1424
// source=src/components/Upload/Upload.tsx
// component=Upload
import figma from 'figma';
const instance = figma.selectedInstance;

const disabled = instance.getEnum('State', {
  Default: false,
  'Loading Documents': false,
  Disabled: true,
});

export default {
  example: figma.code`
    <Upload
      disabled={${disabled}}
      onSelectPress={() => {}}
    />
  `,
  imports: ["import { Upload } from '@trendyol/baklava-react-native'"],
  id: 'upload',
  metadata: { nestable: false },
};
