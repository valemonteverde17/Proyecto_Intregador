import { Button } from "@chakra-ui/react";
import React from "react";

const MText = ({ children, variant = "solid", colorScheme = "pink", ...props }) => {
  const buttonProps = {
    variant,
    colorScheme,
    ...props
  };

  return <Button {...buttonProps}>{children}</Button>;
};

export default MText;
