import React, { useState, useEffect } from 'react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import TimeFlipCalendar from './TimeFlipCalendar.tsx';
import { AuthTokenManager } from '../services/authService';

const Login: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  useEffect(() => {
    setToken(AuthTokenManager.getToken());
  }, []);

  const handleOnSubmit = () => {
    AuthTokenManager.setToken(username, password).then(() => {
      setToken(AuthTokenManager.getToken());
    }).catch(err => {
      console.error(err);
    });
  };

  const handleLogout = () => {
    AuthTokenManager.removeToken();
    setToken(null);
  };

  return (
    <Box mt="2%" textAlign="center">
      {
        token ? (
          <>
            <TimeFlipCalendar />
            <Button mt={4} colorScheme='blue' onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <Box mx="auto" width="400px" px={5} py={4} borderRadius="lg" bg="gray.50" boxShadow="xl">
            <Box fontSize="xl" mb={6}>TimeFlip Login</Box>
            <Box as="form" onSubmit={handleOnSubmit}>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)} />
              </FormControl> <Box mt={6}>
                <Button colorScheme='blue' mr={3} onClick={handleOnSubmit}>Submit</Button>
              </Box>
            </Box>
          </Box>
        )}
    </Box>
  );
};

export default Login;