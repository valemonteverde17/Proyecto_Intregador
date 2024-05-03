import React from "react";
import ProfileLayout from "../components/layouts/ProfileLayout";
import { Text, Box, Button } from "@chakra-ui/react";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase-config";

function Profile() {
  const auth = getAuth(app);

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
          Cerrar Sesion
        </Button>
      </Box>
    </ProfileLayout>
  );
}

export default Profile;
