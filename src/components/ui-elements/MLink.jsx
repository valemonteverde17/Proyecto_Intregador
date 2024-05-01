import { Button } from "@chakra-ui/react";
import React from "react";

const MLink = ({ children, variant = "solid", colorScheme = "orange", ...props }) => {
  const buttonProps = {
    variant,
    colorScheme,
    ...props
  };

  return <Button {...buttonProps}>{children}</Button>;
};

export default MLink;