import { Avatar, Box, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import MButton from "./ui-elements/MButton";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase-config";

function Sidebar({ avatar }) {
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
    <Box>
      <Flex
        direction="column"
        justifyContent="center"
        display={"flex"}
        py={4}
        position={"relative"}
        width="100%"
        alignItems="center"
      >
        <Avatar size="lg" src={avatar && avatar} />
        <VStack>
          <MButton w={125} m="2">Perfil</MButton>
          <MButton w={125}m="1">Amigos</MButton>
          <MButton w={125}m="2">Grupo</MButton>
          <Box py={55} marginTop={"100%"}>
            <MButton onClick={handleSignOut} borderRadius={30} bgColor="#FF3F00AA">Cerrar sesión</MButton>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
}

export default Sidebar;
