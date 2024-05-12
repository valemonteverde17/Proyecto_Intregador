import React from "react";
import GeneralLayout from "../components/layouts/GeneralLayout";
import MPost from "../components/ui-elements/MPost";

function Home() {
  const postData = {
    userImage: "ruta/a/la/imagen.png",
    username: "Usuario Ejemplo",
    category: "Entretenimiento",
    privacy: "Público",
    likes: 0,
    content: "Contenido del post aquí"
  };

  return (
    <GeneralLayout>
      <MPost {...postData}>{postData.content}</MPost>
    </GeneralLayout>
  );
}

export default Home;
