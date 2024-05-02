import React, {useState} from "react";
import {Box} from "@chakra-ui/react";
import EventDetails from "../components/EventDetails.tsx";
import Calendar from 'react-calendar';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const TimeFlipCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    
  const handleDateChange = (value: Value) => {
    setSelectedDate(value instanceof Date ? value : null);
  };
    
  return (
    <Box width="100%" display="flex" justifyContent="center"> 
      <Box maxWidth="fit-content">
        <Calendar onChange={handleDateChange} value={selectedDate}/>
        <Box textAlign="center" mt={5}>
          <EventDetails selectedDate={selectedDate}/>
        </Box>
      </Box>
    </Box>
  )
};

export default TimeFlipCalendar;