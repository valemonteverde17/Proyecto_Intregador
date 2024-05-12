import { Box, Button, Center, Text, } from '@chakra-ui/react'
import React from 'react'

function page404() {
  return (
    <Box bg='tomato' w='100%' p={4}>
    <Center height="95.4vh" backgroundColor="pink.200" >
      <Box textAlign="center" border="2px" borderColor="gray.200" p={4} rounded="md">
        <Text fontSize="9xl" fontWeight="extrabold" color="red.500" mb={4}>
          404
        </Text>
        <Text fontSize="2xl" mb={8}>
          Página no encontrada
        </Text>
        <Button colorScheme="red" onClick={() => window.location.href = '/'}>
          Inicio
        </Button>
      </Box>
    </Center>
    </Box>
  );
};

export default page404