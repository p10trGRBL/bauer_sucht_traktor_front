import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/api.jsx";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthProvider.jsx";
import { Button } from "semantic-ui-react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(
        "/auth/login",
        { email, password },
        { withCredentials: true }
      );

      if (response.status === 200) navigate("/");
      toast.success('Willkommen!')
      //window.location.reload();
      setIsLoggedIn(true);
    } catch (error) {
      setError(error.response.data.error);
      toast.error(error.response.data.error || "Login Data nicht korrekt :(");
    }
  };

  return (
    <div className="relative">
      <div className="bg-[url('./assets/bb_road.jpeg')] min-h-[75vh] bg-cover bg-center ">
        {" "}
      </div>
      <div className="absolute m-auto left-0 right-0 bottom-0 top-0 border-[1px] border-gray-300 w-3/4 h-2/3 md:w-1/3 md:h-1/2 lg:w-1/4 backdrop-blur-md flex flex-col justify-center text-white rounded-md">
        <h1 className="text-center m-0 pt-10">Melde Dich an:</h1>
        {error && <p className="text-2xl font-semibold mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="text-center mt-10">
          <div className="mb-1">
            <label 
  className="mr-[25px]"
            >
              Email:</label>
            <input
              type="text"
              placeholder="Deine Email Adresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-[1px] mx-3 p-1"
            />
          </div>
          <div className="mb-5">
            <label>Passwort:</label>
            <input
              type="password"
              value={password}
              placeholder="Dein Passwort"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent border-[1px] mx-3 p-1"
            />
          </div>
          <div className="pt-5">
          <Button
            className="hover:scale-125"
            content="Los geht's!"
            color="olive"
            type="submit"
          />
          </div>
        </form>

        <div className="flex justify-end mt-20">
          <p className="">Hast Du kein Konto?</p>
          <Link to="/register" className=" mx-5">
            Registrieren
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
