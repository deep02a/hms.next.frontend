'use client';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

interface CalendarProps {
  selected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
  disabledDates?: Date[];
}

export function Calendar({ selected, onSelect, disabledDates = [] }: CalendarProps) {
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={onSelect}
      disabled={disabledDates}
      modifiersClassNames={{
        selected: 'bg-blue-500 text-white',
        disabled: 'text-gray-400 line-through',
      }}
      className="bg-white rounded-lg shadow-md p-4"
    />
  );
}
