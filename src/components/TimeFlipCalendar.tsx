import React, { useState } from 'react';
import { Box, Button, useDisclosure } from '@chakra-ui/react';
import { AuthTokenManager } from '../services/authService';
import Calendar from 'react-calendar';
import EventDetails from './EventDetails';
import LoginFormModal from './LoginFormModal';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const TimeFlipCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDateChange = (value: Value) => {
    setSelectedDate(value instanceof Date ? value : null);
  };

  const handleOnSubmit = (username: string, password: string) => {
    AuthTokenManager.setToken(username, password)
      .then(() => { onClose(); })
      .catch(err => { console.error(err); });
  };

  return (
    <>
      <LoginFormModal isOpen={isOpen} onSubmit={handleOnSubmit} onClose={onClose} />
      <Box maxWidth="fit-content" marginX="auto" paddingTop="25px">
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </Box>
      <Box textAlign="center" p={5}>
        <EventDetails selectedDate={selectedDate} />
        <Button colorScheme='blue' onClick={onOpen}>Login</Button>
      </Box>
    </>
  );
};

export default TimeFlipCalendar;