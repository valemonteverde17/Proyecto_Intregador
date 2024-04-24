import React from "react";
import PublicNavbar from "./PublicNavbar";

//Layout para las paginas no protegidas (login, registro y about)
function RootLayout({ children }) {
  return (
    <>
      <PublicNavbar />
      {children}
    </>
  );
}

export default RootLayout;
