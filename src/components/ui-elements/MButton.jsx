import { Button } from "@chakra-ui/react";
import React from "react";

function MButton({ children, variant }) {
  let background;
  switch (variant) {
    case "general":
      background = "#FF3F00AA";
      break;
    case "aceptar":
      break;
    case "cancelar":
      break;
    default:
      background = "#FF3F00AA";
      break;
  }
  return (
    <Button borderRadius={30} bgColor={background}>
      {children}
    </Button>
  );
}

export default MButton;
