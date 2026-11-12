// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=12259-1738
// source=src/components/SearchInput/SearchInput.tsx
// component=SearchInput
import figma from 'figma';
const instance = figma.selectedInstance;

const placeholder = instance.findText('Tarihe Göre Arama').textContent;
const size = instance.getEnum('Size', {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
});
const loading = instance.getEnum('State', {
  Default: false,
  Focused: false,
  Loading: true,
  Typing: false,
  Searched: false,
});

export default {
  example: figma.code`
    <SearchInput
      size="${size}"
      placeholder="${placeholder}"
      loading={${loading}}
    />
  `,
  imports: ["import { SearchInput } from '@trendyol/baklava-react-native'"],
  id: 'search-input',
  metadata: { nestable: true },
};
