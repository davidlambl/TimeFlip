import React, { useState } from 'react';
import { Button, useDisclosure } from '@chakra-ui/react';
import Calendar from 'react-calendar';
import EventDetails from './EventDetails';
import LoginFormModal from './LoginFormModal';
import './TimeFlipCalendar.css';
import { AuthTokenManager } from '../services/authService';
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
      <div className="upper-half">
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>
      <div className="lower-half">
        <EventDetails selectedDate={selectedDate} />
        <Button colorScheme='teal' onClick={onOpen}>Login</Button>
      </div>
    </>
  );
};

export default TimeFlipCalendar;