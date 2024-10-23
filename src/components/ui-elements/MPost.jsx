import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

function MPost({
  children,
  username = "Usuario",
  category = "General",
  privacy = "Público",
  avatar,
  likes = 40,
  ...props
}) {
  const buttonProps = {
    variant: "ghost",
    colorScheme: "orange",
    size: "sm",
    ...props,
  };

  return (
    <Box
      position="relative"
      borderRadius="lg"
      backgroundColor="#C7C8FB"
      padding="15px"
      marginTop="50px" 
      maxWidth="550px" 
     
    >
      <Text fontSize="lg" fontWeight="bold">
        {children}
      </Text>

      
      <Box
        position="absolute"
        top="-10%"
        left="0"
        transform="translateY(-40%)"
        backgroundColor="#FF8B60"
        borderRadius="lg"
        padding="4px 10px"
        display="flex"
        alignItems="flex-start"
        zIndex="-1"
      >
        <Text fontSize="sm" color="white" fontWeight="bold">
          @{username}
        </Text>
      </Box>

      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        marginTop="50px"
      >
        <Box display="flex" alignItems="center" color="orange.400" marginRight="10px">
          <Text fontSize="xs" marginRight="4px">
            {likes}
          </Text>
          <StarIcon boxSize={5} />
        </Box>
        <Button size="sm" colorScheme="orange" variant="ghost">
          Comentarios
        </Button>
      </Box>
    </Box>
  );
}

export default MPost;
