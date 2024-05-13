import React, { useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Select,
  Textarea,
  Button,
} from "@chakra-ui/react";

const MyModal = ({ isOpen, onClose }) => {
  // Pasa isOpen y onClose como props
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Crear nuevo elemento</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Textarea placeholder="Contenido" />
          <Select placeholder="Privacidad">
            <option value="PUB">Público</option>
            <option value="CON">Solo contactos</option>
          </Select>
          <Select placeholder="Etiqueta">{/* Opciones de etiquetas */}</Select>
          {/* Image picker */}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Cerrar
          </Button>
          <Button colorScheme="green">Guardar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
