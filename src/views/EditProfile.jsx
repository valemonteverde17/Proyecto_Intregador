import React, { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase-config";

function EditProfile() {
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const auth = getAuth(app);

  const handleUpdateProfile = () => {
    const user = auth.currentUser;
    updateProfile(user, {
      displayName: displayName,
      photoURL: photoURL,
    })
      .then(() => {
        console.log("Perfil actualizado correctamente");
      })
      .catch((error) => {
        console.error("Error al actualizar el perfil:", error.message);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL de la foto de perfil"
        value={photoURL}
        onChange={(e) => setPhotoURL(e.target.value)}
      />
      <button onClick={handleUpdateProfile}>Actualizar perfil</button>
    </div>
  );
}

export default EditProfile;
