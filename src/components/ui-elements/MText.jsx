// MText.jsx
import React from "react";
import { Box } from "@chakra-ui/react";

const MText = ({ children, bg = "#FFCCD8", color = "black", borderRadius = "8px", padding = "8px", ...props }) => {
  return (
    <Box
      bg={bg}
      color={color}
      borderRadius={borderRadius}
      padding={padding}
      {...props}
    >
      {children}
    </Box>
  );
};

export default MText;
