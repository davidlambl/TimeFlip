import React, { useState, useEffect } from 'react';
import { Box, Button, useDisclosure } from '@chakra-ui/react';
import TimeFlipCalendar from './TimeFlipCalendar.tsx';
import LoginFormModal from '../components/LoginFormModal';
import { AuthTokenManager } from '../services/authService';
import 'react-calendar/dist/Calendar.css';

const Login: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(AuthTokenManager.getToken());
  }, []);
  

  const handleOnSubmit = (username: string, password: string) => {
    AuthTokenManager.setToken(username, password)
      .then(() => {
        setToken(AuthTokenManager.getToken());
        onClose();
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleLogout = () => {
    AuthTokenManager.removeToken();
    setToken(null);
  };

  return (
    <>
      <LoginFormModal isOpen={isOpen} onSubmit={handleOnSubmit} onClose={onClose}/>
      <Box textAlign="center" mt={5}>
        {token ? (
          <>
            <TimeFlipCalendar/>
            <Button mt={3} colorScheme='blue' onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <Button colorScheme='blue' onClick={onOpen}>Login</Button>
        )}
      </Box>
    </>
  );
};

export default Login;