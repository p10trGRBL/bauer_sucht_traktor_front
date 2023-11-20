import { Button } from "semantic-ui-react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/api.jsx";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthProvider.jsx";

function Header() {
  let navigate = useNavigate();
  const handleClick = () => navigate("/create");
  const handleLogin = () => navigate("/login");
  const handleProfile = ()=> navigate("/profile")

  const {isLoggedIn, setIsLoggedIn} = useAuth();

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout", {}, { withCredentials: true });
      navigate("/");
      //window.location.reload();
      setIsLoggedIn(false);
    } catch (error) {
      toast.error("Abmelden fehlgeschlagen");
    }
  };

  return (
    <div className="header w-full">
      <Link to="/">
        <img
          className="logo"
          src="https://images.ctfassets.net/i6i4u8iowebg/5Fj0I9dBrUwPOLxMyKgClr/2a3fd945cf6323f80932de4e1f4d638d/bauer_sucht_traktor.png"
        />
      </Link>
      <br />
      {isLoggedIn ? (
        <div>
          <Button
            className="newTraktor"
            content="Neuer Traktor!"
            icon="add"
            labelPosition="right"
            basic
            color="olive"
            onClick={handleClick}
          />
          <button className="text-white" onClick={handleLogout}>
            Abmelden
          </button>
          <button className="text-white" onClick={handleProfile}>
            Profil
          </button>
        </div>
      ) : (
        <div>
          <Button
            className="newTraktor"
            content="Neuer Traktor!"
            icon="add"
            labelPosition="right"
            basic
            color="grey"
            onClick={handleClick}
            disabled
          />
          <button className="text-white" onClick={handleLogin}>
            Anmelden
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
