import React, { useState } from "react";
import { Box, Input, useToast, Button } from "@chakra-ui/react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
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
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        p={5}
      >
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          mt={4}
        />
        <Button onClick={handleSignUp} borderRadius={30} bgColor="#FF3F00AA">
          Registrarse
        </Button>
      </Box>
    </RootLayout>
  );
}

export default SignUp;
