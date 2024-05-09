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
    <Box
      width={["95%", "80%", "60%", "35%"]}
      display="flex"
      flexDirection={["column-reverse", "column-reverse", "row", "row"]}
      m="auto"
      justifyContent="space-between"
    >
      <Box flex="1" mt={["6", "6", "0", "0"]}>
        <EventDetails selectedDate={selectedDate} />
      </Box>
      <Box flex="1">
        <ThemedCalendar onChange={handleDateChange} date={selectedDate} />
      </Box>
    </Box>
  );
};

export default TimeFlipCalendar;