import { Box, Button, Card, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import app from '../../firebase-config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import RootLayout from "../components/RootLayout";

function Login() {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        const user = credentials.user;
        console.log("Se autenticó con el email", user.email);
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <>
      <RootLayout>
      </RootLayout>
      <Box px={60} backgroundSize={"cover"}
        backgroundPosition={"center"}
        display={"flex"}
        w={"100%"}
        h={"700"}
        justifyContent={"center"}
        alignItems={"center"}>
        <Card>
          <Input placeholder="Usuario" onChange={(e) => setEmail(e.target.value)}></Input>
          <Input placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)}></Input>
          <Button onClick={handleLogin}>Registrar</Button>
        </Card>
      </Box>
    </>
  )
}

export default Login