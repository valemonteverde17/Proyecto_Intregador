import { Button } from "@chakra-ui/react";
import React from "react";

function MButton({ children, variant, onClick, ...props }) {
  let background;
  switch (variant) {
    case "general":
      background = "#FF3F00AA";
      break;
    case "pink":
      background = "#FFCCD8";
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
    <Button borderRadius={30} bgColor={background} onClick={onClick} {...props}>
      {children}
    </Button>
  );
}

export default MButton;
