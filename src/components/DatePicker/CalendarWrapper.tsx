// React Native örnek kullanım:
import React from 'react';
import CalendarPicker from './CalendarPicker';
import MonthPicker from './MonthPicker';
import YearPicker from './YearPicker';
import BottomSheet from '../BottomSheet/BottomSheet';
import CalendarHeader from './CalendarHeader';
import { ShowPickerType } from './constants';
import { useDatePickerContext } from './DatePickerContext';


interface CalendarWrapperProps {
  closeButtonLabel: string;
  selectButtonLabel: string;
  title: string;
}
const CalendarWrapper: React.FC<CalendarWrapperProps> = (props) => {
  const context = useDatePickerContext();

  return (
    <BottomSheet
      title={props.title}
      visible={context.visible}
      closeButtonAction={context.handleClose}
      closeButtonLabel={props.closeButtonLabel || ''}
      selectButtonLabel={props.selectButtonLabel || ''}
      selectButtonAction={context.onChange}
      testID={context.testID}
    >
      <CalendarHeader
        context={context}
      />
      {context.showPickerType === ShowPickerType.MONTH && (
        <MonthPicker  
          context={context}
        />
      )}
      {context.showPickerType === ShowPickerType.YEAR && (
        <YearPicker
          context={context}
        />
      )}
      {context.showPickerType === ShowPickerType.NONE && (
        <CalendarPicker
          context={context}
        />
      )}
    </BottomSheet>
  );
};

export default CalendarWrapper;
  