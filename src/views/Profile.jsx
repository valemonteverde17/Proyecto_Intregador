import React, { useEffect, useState, useMemo } from "react";
import ProfileLayout from "../components/layouts/ProfileLayout";
import { Text, Box, Button } from "@chakra-ui/react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import app from "../../firebase-config";
import axios from "axios";
import Loading from "../components/Loading";
import MPost from "../components/ui-elements/MPost";
import { getCategoria, getPrivacidad } from "../components/utils/utils";

function Profile() {
  const auth = getAuth(app);
  const navigate = useNavigate(); // Inicializamos el hook de navegación
  const [data, setData] = useState({
    posts: [],
    loading: true,
    error: null,
  });

  const currentUser = auth.currentUser;

  useEffect(() => {
    async function fetchData() {
      try {
        const apiKeyResponse = await axios.get(
          "http://localhost:8000/generate-api-key/",
          { headers: { "API-Key": process.env.REACT_APP_API_KEY } }
        );
        const apiKey = apiKeyResponse.data.api_key;

        const postsResponse = await axios.get(
          "http://localhost:8000/api/muro/",
          { headers: { Authorization: `Api-Key ${apiKey}` } }
        );

        setData({ posts: postsResponse.data, loading: false, error: null });
      } catch (error) {
        console.error("Error al obtener los posts:", error);
        setData({ posts: [], loading: false, error: "Error al cargar los posts" });
      }
    }

    fetchData();
  }, []);

  const currentUserPosts = useMemo(() => {
    if (!currentUser) return [];
    return data.posts.filter((post) => post.usuario === currentUser.email);
  }, [data.posts, currentUser]);

  if (!currentUser) {
    return <Text>No has iniciado sesión.</Text>;
  }

  return (
    <ProfileLayout
      avatar={currentUser.photoURL || "https://bit.ly/broken-link"}
      username={currentUser.displayName || currentUser.email}
      bio="Descripción de prueba"
      grupo="default"
      noPublicaciones={currentUserPosts.length}
      noAmigos={0}
    >
      {/* Botón para redirigir a la edición del perfil */}
      <Button colorScheme="blue" onClick={() => navigate("/edit")} mt={4}>
        Editar Perfil
      </Button>

      <Box mt={4}>
        {data.loading ? (
          <Loading />
        ) : data.error ? (
          <Text color="red.500">{data.error}</Text>
        ) : currentUserPosts.length > 0 ? (
          currentUserPosts.map((post) => (
            <MPost
              key={post.id}
              username={post.usuario}
              avatar={currentUser.photoURL || "https://bit.ly/broken-link"}
              category={getCategoria(post.etiqueta)}
              privacy={getPrivacidad(post.privacidad)}
              likes={post.likes.length}
              content={post.contenido}
            />
          ))
        ) : (
          <Text>No hay publicaciones aún</Text>
        )}
      </Box>
    </ProfileLayout>
  );
}

export default Profile;
