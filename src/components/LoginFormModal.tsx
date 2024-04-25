import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const LoginFormModal: React.FC<ModalProps> = ({ isOpen, onClose }) => (
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
);

export default LoginFormModal;