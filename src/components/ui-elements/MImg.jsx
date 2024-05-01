import { Button } from "@chakra-ui/react";
import React from "react";

const MImg = ({ children, variant = "solid", colorScheme = "red", ...props }) => {
  const buttonProps = {
    variant,
    colorScheme,
    ...props
  };

  return <Button {...buttonProps}>{children}</Button>;
};

export default MImg;
