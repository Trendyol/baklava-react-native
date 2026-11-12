// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=13218-1851
// source=src/components/Pagination/Pagination.tsx
// component=Pagination
import figma from 'figma';
const instance = figma.selectedInstance;

const hasJumper = instance.getEnum('Type', {
  Default: false,
  Short: false,
  Jumper: true,
  Middle: false,
});

export default {
  example: figma.code`
    <Pagination
      currentPage={1}
      totalPages={10}
      onPageChange={() => {}}
      hasJumper={${hasJumper}}
    />
  `,
  imports: ["import { Pagination } from '@trendyol/baklava-react-native'"],
  id: 'pagination',
  metadata: { nestable: false },
};
