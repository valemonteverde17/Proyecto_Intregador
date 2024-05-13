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
import MButton from "./ui-elements/MButton";
import { getAllCategories } from "./utils/utils";
import app from "../../firebase-config";
import { getAuth } from "firebase/auth";
import axios from "axios";

const MyModal = ({ isOpen, onClose }) => {
  // Pasa isOpen y onClose como props
  const auth = getAuth(app);
  const [newPost, setNewPost] = useState({
    id_usuario: auth.currentUser.uid,
    usuario: auth.currentUser.email,
    contenido: null,
    imagen: null,
    privacidad: null,
    etiqueta: null,
  });
  const onCreate = () => {
    console.log(newPost);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Crear nuevo post</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Textarea
            placeholder="Contenido"
            onChange={(e) =>
              setNewPost({ ...newPost, contenido: e.target.value })
            }
          />
          <Select
            placeholder="Privacidad"
            onChange={(e) =>
              setNewPost({ ...newPost, privacidad: e.target.value })
            }
          >
            <option value="PUB">Público</option>
            <option value="CON">Solo contactos</option>
          </Select>
          <Select
            placeholder="Etiqueta"
            onChange={(e) =>
              setNewPost({ ...newPost, etiqueta: e.target.value })
            }
          >
            {getAllCategories().map((cat) => (
              <option value={cat.value}>{cat.label}</option>
            ))}
          </Select>
          {/* Image picker */}
        </ModalBody>
        <ModalFooter>
          <MButton variant="blue" mr={3} onClick={onClose}>
            Cerrar
          </MButton>
          <MButton onClick={onCreate}>Guardar</MButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default MyModal;
