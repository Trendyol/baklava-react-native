// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=8339-6899
// source=src/components/BottomSheet/BottomSheet.tsx
// component=BottomSheet
import figma from 'figma';
const instance = figma.selectedInstance;

const slot1 = instance.getSlot('Slot 1');
const showSelect = instance.getEnum('"Choose" Button', {
  True: true,
  False: false,
});

export default {
  example: figma.code`
    <BottomSheet
      visible={true}
      closeButtonLabel="Kapat"
      ${showSelect ? figma.code`selectButtonLabel="Seç"` : ''}
    >
      ${slot1}
    </BottomSheet>
  `,
  imports: ["import { BottomSheet } from '@trendyol/baklava-react-native'"],
  id: 'bottom-sheet',
  metadata: { nestable: false },
};
