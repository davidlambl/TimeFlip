import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import Calendar from 'react-calendar';
import EventDetails from './EventDetails';
import './TimeFlipCalendar.css';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const TimeFlipCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDateChange = (value: Value) => {
    setSelectedDate(value instanceof Date ? value : null);
  };

  return (
    <>
      <div className="upper-half">
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>
      <div className="lower-half">
        <EventDetails selectedDate={selectedDate} />
        <Button colorScheme='teal' onClick={onOpen}>Login</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input placeholder='Username' />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input placeholder='Password' type='password' />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default TimeFlipCalendar;