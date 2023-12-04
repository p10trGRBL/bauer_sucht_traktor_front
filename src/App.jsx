import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Home from "./pages/Home";
import CreateNew from "./pages/CreateNew";
import EditPost from "./pages/EditPost";
import NotFound from "./pages/NotFound.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import LoginForm from "./components/LoginForm.jsx";
import RegistrationForm from "./components/RegistrationForm.jsx";
import Profile from "./components/Profile.jsx";
import { useAuth } from "./context/AuthProvider.jsx";

function App() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/profile" element={<Profile key={isLoggedIn} />} />
        <Route path="/tractors" element={<AllPosts />} />
        <Route path="/tractors/:id" element={<SinglePost />} />
        <Route path="/create" element={<CreateNew />} />
        <Route path="/update/:id" element={<EditPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
