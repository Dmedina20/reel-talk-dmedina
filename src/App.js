import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Email from "./pages/Email";
import EmailNew from "./pages/EmailNew";
import Create from "./pages/Create";
import Nav from "./components/Navigation/Nav";
import Birthday from "./pages/Birthday";
import TopGenres from "./pages/TopGenres";
import TopMovies from "./pages/TopMovies";
import TheEnd from "./pages/TheEnd";
import Start from "./pages/Start";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./firebase/firebase";
import { login, setLoading } from "./firebase/userSlice";

function App() {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        console.log("user is logged out");
      }
    });
  }, [dispatch]);

  return (
    <>
      {" "}
      <Nav />
      {!user ? (
        <Routes>
          {" "}
          <Route path="/" element={<Home />} />{" "}
          <Route path="/login" element={<Email />} />{" "}
          <Route path="/create" element={<EmailNew />} />{" "}
          <Route path="/signup" element={<Create />} />{" "}
        </Routes>
      ) : (
        <Routes>
          {" "}
          <Route path="/" element={<Start />} />{" "}
          <Route path="/end" element={<TheEnd />} />{" "}
          <Route path="/birth" element={<Birthday />} />{" "}
          <Route path="/genres" element={<TopGenres />} /> \
          <Route path="/movies" element={<TopMovies />} />{" "}
        </Routes>
      )}
    </>
  );
}

export default App;
