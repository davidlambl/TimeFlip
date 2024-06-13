import React, { useState, useEffect } from 'react';
import { Box, Button, FormControl, Flex, FormLabel, Input, Switch } from '@chakra-ui/react';
import TimeFlipCalendar from './TimeFlipCalendar.tsx';
import { AuthTokenManager } from '../services/authService';

const Login: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isToggled, setIsToggled] = useState<boolean>(false);

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

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsToggled(event.target.checked);
  };

  const handleLogout = () => {
    AuthTokenManager.removeToken();
    setToken(null);
  };

  return (
    <Box textAlign="center">
      {
        token ? (
          <Box>
            <Flex width="100%" justifyContent="flex-end" p={4}>
              <Box textAlign="right" display="flex" alignItems="center">
                <FormLabel htmlFor="toggle-switch" mb="0" mr="2" whiteSpace="nowrap">
                  Switch Calendar
                </FormLabel>
                <Switch id="toggle-switch" colorScheme="teal" isChecked={isToggled} onChange={handleToggleChange} />
                <Button ml={4} colorScheme="blue" onClick={handleLogout}>
                  Logout
                </Button>
              </Box>
            </Flex>
            <TimeFlipCalendar isToggled={isToggled} />
          </Box>
        ) : (
          <Box mt="2%" mx="auto" width="400px" px={5} py={4} borderRadius="lg" bg="gray.50" boxShadow="xl">
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