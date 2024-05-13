import React, { useEffect, useState } from "react";
import ProfileLayout from "../components/layouts/ProfileLayout";
import { Text, Box, Button } from "@chakra-ui/react";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase-config";
import axios from "axios";
import { set } from "firebase/database";
import Loading from "../components/Loading";
import MPost from "../components/ui-elements/MPost";
import { getCategoria, getPrivacidad } from "../components/utils/utils";

function Profile() {
  const auth = getAuth(app);
  const [posts, setPosts] = useState([]);
  const [currentUserPosts, setCurrentUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);
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
        const postsResponse = await axios.get(
          "http://localhost:8000/api/muro/",
          {
            headers: { Authorization: `Api-Key ${apiKey}` },
          }
        );

        // Establecer los posts en el estado
        setPosts(postsResponse.data);
      } catch (error) {
        console.error("Error al obtener los posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    // Filtrar las publicaciones del usuario actual
    if (posts.length > 0) {
      const currentUserEmail = auth.currentUser.email;
      const currentUserPosts = posts.filter(
        (post) => post.usuario === currentUserEmail
      );
      setCurrentUserPosts(currentUserPosts);
    }
  }, [posts, auth.currentUser]);

  return (
    <ProfileLayout
      avatar={
        auth.currentUser.photoURL
          ? auth.currentUser.photoURL
          : "https://bit.ly/broken-link"
      }
      username={
        auth.currentUser.displayName
          ? auth.currentUser.displayName
          : auth.currentUser.email
      }
      bio="Descripcion de prueba"
      grupo="default"
      noPublicaciones={currentUserPosts.length}
      noAmigos={0}
    >
      {/* Renderizar las publicaciones del usuario actual */}
      <Box mt={4}>
        {!loading ? (
          currentUserPosts.length > 0 ? (
            currentUserPosts.map((post) => (
              <MPost
                key={post.id}
                username={post.usuario}
                avatar={
                  auth.currentUser.photoURL
                    ? auth.currentUser.photoURL
                    : "https://bit.ly/broken-link"
                }
                category={getCategoria(post.etiqueta)}
                privacy={getPrivacidad(post.privacidad)}
                likes={post.likes.length}
                content={post.contenido}
              >
                {post.contenido}
              </MPost>
            ))
          ) : (
            <Text>No hay publicaciones aun</Text>
          )
        ) : (
          <Loading></Loading>
        )}
      </Box>
    </ProfileLayout>
  );
}

export default Profile;
