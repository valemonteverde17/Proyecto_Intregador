import { Center, Spinner } from '@chakra-ui/react';
import React from 'react'

function Loading() {
    return (
        <Center h="100vh">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      );
    }
export default Loading;