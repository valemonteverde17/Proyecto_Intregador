import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Page404 from "./views/others/Page404";
import Page500 from "./views/others/Page500";
import Navbar from "./components/Navbar";

function App() {
  return (
  <>
  <Navbar/>
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/about" element = {<About />} />
      <Route path="/signin" element = {<SignIn />} />
      <Route path="/signup" element = {<SignUp />} />
      <Route path="/*" element = {<Page404 />} />
      <Route path="/*" element = {<Page500 />} />
    </Routes>
  </>
  );
}

export default App;
