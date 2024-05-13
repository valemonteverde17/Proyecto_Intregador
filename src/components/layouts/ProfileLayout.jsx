import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar";
import MButton from "../ui-elements/MButton";
import { getAuth, signOut } from "firebase/auth";
import app from "../../../firebase-config";

function ProfileLayout({
  children,
  avatar,
  username = "User",
  bio = "Esta es una prueba",
  grupo = "default",
  noPublicaciones = 0,
  noAmigos = 0,
}) {
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
      <Stack>
        <Navbar />
        <Flex
          bgImage="https://cdn.pixabay.com/photo/2017/08/15/08/23/stars-2643089_640.jpg"
          borderRadius="md"
          boxShadow="md"
          alignItems="center"
          p="120"
          zIndex={-1}
          mt={-20}
        />
      </Stack>
      <Flex
        direction="column"
        justifyContent="center"
        display={"flex"}
        mt={-20}
        position={"relative"}
        width="100%"
        alignItems="center"
      >
        <Avatar size="2xl" src={avatar && avatar} />
        <Text fontWeight="bold" fontSize="xl">
          {username}
        </Text>

        <Text fontSize="sm" color="gray.500" px={-20}>
          {bio}
        </Text>
        <HStack py={3}>
          <MButton>{noPublicaciones} Publicaciones</MButton>
          <MButton>{noAmigos} Amigos</MButton>
          <MButton>{grupo}</MButton>
        </HStack>
        <MButton onClick={handleSignOut} variant={"pink"}>
          Cerrar Sesión
        </MButton>
      </Flex>

      <Box p={4} mt={4}>
        {children}
      </Box>
    </Box>
  );
}

export default ProfileLayout;
