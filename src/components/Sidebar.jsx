import { Avatar, Box, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import MButton from "./ui-elements/MButton";

function Sidebar({ avatar }) {
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
          <MButton>Perfil</MButton>
          <MButton>Amigos</MButton>
          <MButton>Grupo</MButton>
          <Box py={55}>
            <MButton>Cerrar sesión</MButton>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
}

export default Sidebar;
