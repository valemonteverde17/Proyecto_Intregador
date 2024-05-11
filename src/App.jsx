import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Page404 from "./views/others/Page404";
import Page500 from "./views/others/Page500";
import Profile from "./views/Profile";
import EditProfile from "./views/EditProfile";
import app from "../firebase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Protected from "./components/Protected";
import Loading from "./components/Loading";

function App() {
  const [userAuth, setUserAuth] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserAuth(user.email);
        console.log("Usuario autenticado:", user);
      } else {
        setUserAuth(null);
        console.log("No hay usuario autenticado");
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading></Loading>
  }

  return (
    <>
      <Routes>
        <Route
          path="/signin"
          element={userAuth ? <Navigate to="/" replace /> : <SignIn />}
        />
        <Route
          path="/signup"
          element={userAuth ? <Navigate to="/" replace /> : <SignUp />}
        />
        <Route path="/*" element={<Page404 />} />
        <Route path="/about" element={<About />} />
        <Route element={<Protected isActive={!userAuth} />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit" element={<EditProfile />} />
        </Route>
        {/* <Route path="/*" element = {<Page500 />} /> */}
      </Routes>
    </>
  );
}

export default App;
