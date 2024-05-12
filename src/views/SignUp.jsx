import React, { useState } from "react";
import { Box, Input, useToast, Button, Flex, Text } from "@chakra-ui/react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import app from "../../firebase-config";
import RootLayout from "../components/layouts/RootLayout";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const toast = useToast();
  const navigate = useNavigate();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast({
          title: "Registro exitoso",
          description: "Tu cuenta ha sido creada.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });

        navigate("/home");
      })
      .catch((error) => {
        toast({
          title: "Error al registrarse",
          description: error.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
    <RootLayout>
      <Flex height="92vh" align={"center"} justifyContent="center">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        border="2px" borderColor="gray.200" p={4} rounded="md" w={"30%"}
      >
        <Text fontSize="5xl" fontWeight="extrabold"  mb={4}> Registro</Text>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          mt={5}
        />
        <Input
          placeholder="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          mt={5}
        />
        <Box >
        <Button onClick={handleSignUp} borderRadius={30} bgColor="#FF3F00AA" m={5}>
          Registrarse
        </Button>
        <Button
                as={NavLink}
                borderRadius={"30px"}
                bg={"null"}
                to={"/signin"}
                m={5}
              >
                Iniciar Sesión
              </Button>
        </Box>
      </Box>
      </Flex>
    </RootLayout>
  );
}

export default SignUp;
