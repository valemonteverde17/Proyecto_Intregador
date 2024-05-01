import { Box, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import app from '../../firebase-config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import RootLayout from "../components/RootLayout";

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
        <Box>
            <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} mt={4} />
            <Button onClick={handleLogin} borderRadius={30} bgColor="#FF3F00AA">Registrar</Button>
        </Box>
      </Box>
    </>
  )
}

export default SignIn