import React from "react";
import { IconButton } from "@chakra-ui/react";
import { FaThumbsUp, FaComment, FaEdit } from "react-icons/fa";

const MIconButton = ({ onClick, variant, color }) => {
  let IconComponent;

  switch (variant) {
    case "like":
      IconComponent = FaThumbsUp; //nombres de iconos de react icons
      break;
    case "comentario":
      IconComponent = FaComment;
      break;
    case "editar":
      IconComponent = FaEdit;
      break;
    default:
      IconComponent = null;
  }

  return (
    <IconButton
      onClick={onClick}
      icon={IconComponent && <IconComponent />}
      color={color}
      variant="ghost"
      _hover={{ bg: "transparent" }}
      _active={{ bg: "transparent" }}
      _focus={{ boxShadow: "none" }}
    />
  );
};

export default MIconButton;
