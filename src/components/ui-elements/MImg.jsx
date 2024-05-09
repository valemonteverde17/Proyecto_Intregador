// MImg.jsx
import React from "react";
import { Box } from "@chakra-ui/react";

const MImg = ({ src, alt, borderWidth = "3px", borderColor = "blue", borderRadius = "8px", ...props }) => {
  return (
    <Box
      as="figure"
      borderWidth={borderWidth}
      borderColor={borderColor}
      borderRadius={borderRadius}
      overflow="hidden"
      display="inline-block"
      {...props}
    >
      <img
        src={src}
        alt={alt}
        style={{
          display: "block",
          width: "100%",
          borderRadius: borderRadius,
        }}
      />
    </Box>
  );
};

export default MImg;
