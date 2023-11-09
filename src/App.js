import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Email from "./pages/Email";
import EmailNew from "./pages/EmailNew";
import Create from "./pages/Create";
import Nav from "./components/Navigation/Nav";
function App() {
  return (
    <>
      {" "}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/login" element={<Email />} />{" "}
        <Route path="/create" element={<EmailNew />} />{" "}
        <Route path="/signup" element={<Create />} />{" "}
      </Routes>{" "}
    </>
  );
}

export default App;
