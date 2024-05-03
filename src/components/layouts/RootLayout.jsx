import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Navbar from "../Navbar";
import app from "../../../firebase-config";

//Layout para las paginas no protegidas (login, registro y about)
function RootLayout({ children }) {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.email);
        console.log("Usuario autenticado:", user);
      } else {
        setUser(null);
        console.log("No hay usuario autenticado");
      }
    });
  }, []);
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default RootLayout;
