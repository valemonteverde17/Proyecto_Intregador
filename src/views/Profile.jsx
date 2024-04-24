import React from "react";
import ProfileLayout from "../components/ProfileLayout";
import { Text } from "@chakra-ui/react";

function Profile() {
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
    </ProfileLayout>
  );
}

export default Profile;
