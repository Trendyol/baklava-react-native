// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=2903-32858
// source=src/components/DatePicker/DatePicker.tsx
// component=DatePicker
import figma from 'figma';
const instance = figma.selectedInstance;

const multiple = instance.getEnum('Type', {
  Day: false,
  'Date Range': true,
  Month: false,
  Year: false,
});

export default {
  example: figma.code`
    <DatePicker
      value={null}
      onChange={() => {}}
      nameOfWeekdays={['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz']}
      nameOfMonths={['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']}
      closeButtonLabel="Kapat"
      selectButtonLabel="Seç"
      firstDayOfWeek={1}
      multiple={${multiple}}
    />
  `,
  imports: ["import { DatePicker } from '@trendyol/baklava-react-native'"],
  id: 'date-picker',
  metadata: { nestable: false },
};
