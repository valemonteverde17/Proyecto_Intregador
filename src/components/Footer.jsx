import React from 'react';
import { Box, Container, Stack, Text, Link, useColorModeValue } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
      bg={"ccccff"}
    >
      <Container  py={4} spacing={4} justify={'center'} align={'center'}>
        <Stack direction={'row'} spacing={6} justify={'center'}>
          <Link href={'#'}>Inicio</Link>
          <Link href={'#'}>Productos</Link>
          <Link href={'#'}>Servicios</Link>
          <Link href={'#'}>Contacto</Link>
        </Stack>
        <Text>© 2024 Chakra UI Footer. Todos los derechos reservados</Text>
      </Container>
    </Box>
  );
}
export default Footer;