import { Box } from "@chakra-ui/react";
import React from "react";

const AuthCard = ({ children }) => {
  return (
    <Box border="2px" borderColor="gray.200" p={4} mt={"15px"} rounded="md">
      {children}
    </Box>
  );
};

export default AuthCard;
