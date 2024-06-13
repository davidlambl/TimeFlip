import React from 'react';
import DatePicker from 'react-datepicker';
import { Box } from '@chakra-ui/react';

interface ThemedCalendarProps {
  onChange: (date: Date) => void;
  date: Date;
}

const ThemedCalendar: React.FC<ThemedCalendarProps> = ({ onChange, date }) => {
  return (
    <Box>
      <DatePicker
        selected={date}
        onChange={onChange}
        inline
      />
    </Box>
  );
};

export default ThemedCalendar;