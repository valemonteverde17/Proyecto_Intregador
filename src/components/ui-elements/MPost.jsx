import { Button } from "@chakra-ui/react";
import React from "react";

const MPost = ({ children, variant = "solid", colorScheme = "purple", ...props }) => {
  const buttonProps = {
    variant,
    colorScheme,
    ...props
  };

  return <Button {...buttonProps}>{children}</Button>;
};

export default MPost;