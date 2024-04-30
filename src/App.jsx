import React, { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Page404 from "./views/others/Page404";
import Page500 from "./views/others/Page500";
import Navbar from "./components/Navbar";
import Profile from "./views/Profile";
import EditProfile from "./views/EditProfile";
import app from '../firebase-config';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Protected from './components/Protected';

function App() {
  const [userAuth, setUserAuth] = useState(null);
  const auth = getAuth(app);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserAuth(user.email);
        console.log(user);
      } else {
        console.log("Favor de volverse a autenticar");
      }
    });
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<Page404 />} />
        <Route path="/about" element={<About />} />
        <Route element={<Protected isActive={!userAuth} />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit" element={<EditProfile />} />

        {/* <Route path="/*" element = {<Page500 />} /> */}
      </Routes>
    </>
  );
}

export default App;
