import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import EventDetails from "../components/EventDetails.tsx";
import ThemedCalendar from "../components/ThemedCalendar.tsx";

const TimeFlipCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Box maxWidth="fit-content">
        <ThemedCalendar onChange={handleDateChange} date={selectedDate} />
        <Box textAlign="center" mt={3}>
          <EventDetails selectedDate={selectedDate} />
        </Box>
      </Box>
    </Box>
  )
};

export default TimeFlipCalendar;