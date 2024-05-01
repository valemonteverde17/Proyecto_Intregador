import { Button } from "@chakra-ui/react";
import React from "react";

const MFriends = ({ children, variant = "solid", colorScheme = "blue", ...props }) => {
  const buttonProps = {
    variant,
    colorScheme,
    ...props
  };

  return <Button {...buttonProps}>{children}</Button>;
};

export default MFriends;
