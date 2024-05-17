import { Button } from "@chakra-ui/react";
import React from "react";

function MButton({ children, variant, onClick, isLoading = false, ...props }) {
  let background;
  switch (variant) {
    case "general":
      background = "#FF3F00AA";
      break;
    case "pink":
      background = "#FFCCD8";
      break;
    case "blue":
      background = "#CCCCFF";
      break;
    case "aceptar":
      background = "green";
      break;

    case "cancelar":
      background = "red";
      break;
    default:
      background = "#FF3F00AA";
      break;
  }
  return (
    <Button
      borderRadius={30}
      bgColor={background}
      onClick={onClick}
      isLoading={isLoading}
      {...props}
    >
      {children}
    </Button>
  );
}

export default MButton;
