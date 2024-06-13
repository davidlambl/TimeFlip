import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Box } from '@chakra-ui/react';
import EventDetails from "./EventDetails.tsx";

interface ThemedCalendarProps {
  onChange: (date: Date) => void;
  date: Date;
}

const WrappedDatePicker: React.FC<ThemedCalendarProps> = ({ onChange, date }) => {
  return (
    <Box>
      <DatePicker
        selected={date}
        onChange={onChange}
        inline
      />
    </Box>
  );
}


const ThemedCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <Box
      width={["95%", "80%", "60%", "35%"]}
      display="flex"
      flexDirection={["column-reverse", "column-reverse", "row", "row"]}
      marginLeft="auto"
      marginRight="auto"
      justifyContent="space-between"
    >
      <Box flex="1" mt={["6", "6", "0", "0"]}>
        <EventDetails selectedDate={selectedDate} />
      </Box>
      <Box flex="1">
        <WrappedDatePicker onChange={handleDateChange} date={selectedDate} />
      </Box>
    </Box>
  );
};
export default ThemedCalendar;