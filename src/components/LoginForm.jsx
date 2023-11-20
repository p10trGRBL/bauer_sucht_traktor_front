import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/api.jsx";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthProvider.jsx";


function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {setIsLoggedIn} = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(
        '/auth/login',
        { email, password },
        { withCredentials: true }
      );
      
      if (response.status === 200) 
      
      navigate("/");
      //window.location.reload();
     setIsLoggedIn(true);
      
    } catch (error) {
      setError(error.response.data.error);
      toast.error(error.response.data.error || "Login Data nicht korrekt :(");
    }
  };

  return (
    <div>
      <h1>Login Form</h1>
      {error && <p className="text-2xl font-semibold mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            placeholder="Deine Email Adresse"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=""
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            placeholder="Dein Password"
            onChange={(e) => setPassword(e.target.value)}
            className=""
          />
        </div>
        <button type="submit" className="">
          Los geht's!
        </button>
      </form>
      <p>Hast Du kein Konto?</p>
      <Link to="/register" className="">
        Registrieren
      </Link>
    </div>
  );
}

export default LoginForm;
