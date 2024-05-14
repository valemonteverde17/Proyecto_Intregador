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
}
  from "@chakra-ui/react";
import MButton from "./ui-elements/MButton"; // Asegúrate de que la ruta sea correcta
import { getAllCategories } from "./utils/utils";
import app from "../../firebase-config";
import { getAuth } from "firebase/auth";
import axios from "axios";

const MyModal = ({ isOpen, onClose }) => {
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
    createPost(newPost); // Llamar a la función createPost con el nuevo post
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
              <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}

          </Select>
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

async function createPost(newPost) {
  try {
    const apiKeyResponse = await axios.get(
      "http://localhost:8000/generate-api-key/",
      { headers: { "API-Key": "mango" } }
    );
    const apiKey = apiKeyResponse.data.api_key;
    await axios.post(
      "http://localhost:8000/api/muro/",
      newPost,
      {
        headers: { Authorization: `Api-Key ${apiKey}` } // Corrección en la sintaxis de template string
      }
    );

    console.log("Post creado exitosamente");
    onClose();
  } catch (error) {
    console.error("Error al crear el post:", error);
  }
}