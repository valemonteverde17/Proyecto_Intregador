import React from "react";
import { Box, Button, Badge, IconButton, Avatar } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

function MPost({
  children,
  username,
  category,
  privacy,
  avatar,
  likes = 0,
  ...props
}) {
  const userImage =
    "https://img.freepik.com/fotos-premium/cara-cara-mapache-cara-linda-animal-tranquilo-pacifico-hermoso-retrato_21085-4272.jpg";

  const buttonProps = {
    variant: "outline",
    colorScheme: "orange",
    size: "sm",
    ...props,
  };

  return (
    <Box
      position="relative"
      border="5px solid #D4E1FF"
      borderRadius="md"
      padding="2"
      marginBottom="5"
      backgroundColor="#D4E1FF"
      marginTop="50px"
    >
      <Box
        position="absolute"
        top="-45px"
        left="5.8%"
        transform="translateX(-50%)"
        backgroundColor="#A4D9FF"
        borderRadius="md"
        padding="2"
      >
        <Badge colorScheme="black">{username}</Badge>
      </Box>
      <Box display="flex" alignItems="center" marginBottom="2">
        <Box marginRight="2">
          <Avatar size="lg" src={avatar && avatar} />
        </Box>
        <Box flex="1">
          <Box fontSize="xl" fontWeight="bold">
            {username}
          </Box>
          <Box fontSize="md">{children}</Box>
          <Button {...buttonProps}>Privacidad: {privacy}</Button>
          <Button {...buttonProps}>Categoría: {category}</Button>
          <Button {...buttonProps} leftIcon={<StarIcon />}>
            Likes: {likes}
          </Button>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginTop="2"
      >
        <Box>
          <Button {...buttonProps}>Comentar</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default MPost;
