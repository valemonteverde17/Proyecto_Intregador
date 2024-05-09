import React from "react";
import { useNavigate } from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout";
import MButton from "../components/ui-elements/MButton";
import MImg from "../components/ui-elements/MImg";
import MText from "../components/ui-elements/MText";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

function About({ userAuth }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (userAuth) {
      navigate("/home");
    } else {
      navigate("/signin");
    }
  };

  return (
    <RootLayout>
      <Box maxW="800px" margin="auto" padding="24px" textAlign="center">
        <Heading as="h1" size="2xl" color="#ff6b6b" mb="8">
          Sobre Nosotros
        </Heading>
        <Text fontSize="lg" mb="16">
          Bienvenido a nuestra red social, diseñada específicamente para la
          comunidad estudiantil de la Universidad Marista de Guadalajara.
        </Text>

        <VStack spacing={8}>
          <Box bg="#f8f8f8" boxShadow="md" p="6" rounded="md">
            <Heading as="h2" size="lg" mb="4">Misión</Heading>
            <MText
              bg="#FFCCD8"
              color="black"
              borderRadius="8px"
              padding="16px"
            >
              Facilitar la comunicación, colaboración y apoyo mutuo entre los
              estudiantes de la Universidad Marista de Guadalajara, creando un
              espacio digital seguro y exclusivo que fomente un sentido de
              comunidad y hermandad.
            </MText>
            <MImg
              src="/public/VisionMisionDalle3.png"
              alt="Imagen representando la misión"
              borderWidth="3px"
              borderColor="#CCCCFF"
              borderRadius="8px"
              mt="4"
            />
          </Box>

          <Box bg="#f8f8f8" boxShadow="md" p="6" rounded="md">
            <Heading as="h2" size="lg" mb="4">Visión</Heading>
            <MText
              bg="#CCCCFF"
              color="black"
              borderRadius="8px"
              padding="16px"
            >
              Convertirnos en la plataforma líder y punto de encuentro virtual
              para la comunidad estudiantil marista, brindando un entorno
              integral que potencie el crecimiento académico, personal y social
              de cada alumno dentro de un ecosistema digital enriquecedor y
              confiable.
            </MText>
          </Box>

          <Box bg="#f8f8f8" boxShadow="md" p="6" rounded="md">
            <Heading as="h2" size="lg" mb="4">
              Característica diferenciadora principal
            </Heading>
            <Text fontSize="lg">
              Nuestra aplicación es la única red social diseñada exclusivamente
              por y para los estudiantes de la Universidad Marista de
              Guadalajara, lo que garantiza un entorno digital seguro,
              personalizado y alineado con las necesidades específicas de esta
              comunidad universitaria. Al utilizar el correo institucional como
              requisito de registro, aseguramos que solo los alumnos maristas
              puedan acceder, fomentando una atmósfera de confianza y
              privacidad. Además, nuestra plataforma contará con funcionalidades
              exclusivas adaptadas a las dinámicas y actividades propias de un
              estudiante marista.
            </Text>
          </Box>
        </VStack>

        {userAuth ? (
          <MButton variant="general" onClick={handleButtonClick} mt="8">
            Ir a Home
          </MButton>
        ) : (
          <MButton variant="general" onClick={handleButtonClick} mt="8">
            Únete a nuestra red
          </MButton>
        )}
      </Box>
    </RootLayout>
  );
}

export default About;
