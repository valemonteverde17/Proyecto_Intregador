import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import app from "../../firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import RootLayout from "../components/layouts/RootLayout";
import AuthCard from "../components/ui-elements/AuthCard";

function SignIn() {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        const user = credentials.user;
        console.log("Se autenticó con el email", user.email);
        navigate("/home");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <>
      <RootLayout></RootLayout>
      <Flex align={"center"}>
        <Box
          px={60}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign="center"
        >
          <AuthCard>
            <Text fontSize="4xl" fontWeight="extrabold" mb={4}>
              {" "}
              Inicio de Sesión
            </Text>
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
            <Button
              onClick={handleLogin}
              borderRadius={30}
              bgColor="#FF3F00AA"
              m={5}
            >
              Iniciar sesión
            </Button>
            <Button
              as={NavLink}
              borderRadius={"30px"}
              bg={"null"}
              to={"/signup"}
              m={5}
            >
              Registrarse
            </Button>
          </AuthCard>
        </Box>
      </Flex>
    </>
  );
}

export default SignIn;
