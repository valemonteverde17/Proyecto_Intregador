import React, { useEffect, useState } from "react";
import ProfileLayout from "../components/layouts/ProfileLayout";
import { Text, Box, Button } from "@chakra-ui/react";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase-config";
import axios from "axios";

function Profile() {
  const auth = getAuth(app);
  const [posts, setPosts] = useState([]);
  const [currentUserPosts, setCurrentUserPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Obtener la API key
        const apiKeyResponse = await axios.get(
          "http://localhost:8000/generate-api-key/",
          { headers: { "API-Key": "mango" } }
        );
        const apiKey = apiKeyResponse.data.api_key;

        // Obtener los posts utilizando la API key
        const postsResponse = await axios.get("http://localhost:8000/api/muro/", {
          headers: { Authorization: `Api-Key ${apiKey}` },
        });

        // Establecer los posts en el estado
        setPosts(postsResponse.data);
      } catch (error) {
        console.error("Error al obtener los posts:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    // Filtrar las publicaciones del usuario actual
    if (posts.length > 0) {
      const currentUserEmail = auth.currentUser.email;
      const currentUserPosts = posts.filter(post => post.usuario === currentUserEmail);
      setCurrentUserPosts(currentUserPosts);
    }
  }, [posts, auth.currentUser]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sesión cerrada exitosamente");
      })
      .catch((error) => {
        console.error("Error al cerrar sesión", error);
      });
  };

  return (
    <ProfileLayout
      avatar="https://blob.luznoticias.mx/images/2024/04/23/ai-generated-8678087-1280-focus-0-0-966-544.jpg"
      username="Pedro"
      bio="Descripcion de prueba"
      grupo="default"
      noPublicaciones={0}
      noAmigos={0}
    >
      <Text>Hola mundo</Text>
      <Box mt={4}>
        <Button onClick={handleSignOut} borderRadius={30} bgColor="#FF3F00AA">
          Cerrar Sesión
        </Button>
      </Box>
      {/* Renderizar las publicaciones del usuario actual */}
      <Box mt={4}>
        {currentUserPosts.map((post) => (
          <div key={post.id}>
            <p>Usuario: {post.usuario}</p>
            <p>Fecha de publicación: {post.fecha_publicacion}</p>
            <p>Contenido: {post.contenido}</p>
            {/* Agregar más campos del post si es necesario */}
          </div>
        ))}
      </Box>
    </ProfileLayout>
  );
}

export default Profile;
