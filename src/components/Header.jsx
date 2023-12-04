import { Button, Icon } from "semantic-ui-react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/api.jsx";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthProvider.jsx";

function Header() {
  let navigate = useNavigate();
  const handleClick = () => navigate("/create");
  const handleLogin = () => navigate("/login");
  const handleProfile = () => navigate("/profile");

  const { setUserData, isLoggedIn, setIsLoggedIn } = useAuth();

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout", {}, { withCredentials: true });
      navigate("/");
      //window.location.reload();
      setIsLoggedIn(false);
      setUserData({});
    } catch (error) {
      toast.error("Abmelden fehlgeschlagen");
    }
  };

  return (
    <div className="header w-full flex items-center justify-between border-b-4 border-[#FBBD08] bg-white sticky top-0 object-top z-10">
      <Link to="/">
        <img
          className="p-0 ml-3 w-48 lg:w-56 hover:scale-90"
          src="https://images.ctfassets.net/i6i4u8iowebg/5Fj0I9dBrUwPOLxMyKgClr/2a3fd945cf6323f80932de4e1f4d638d/bauer_sucht_traktor.png"
        />
      </Link>
      <div className="z-10">
        {isLoggedIn ? (
          <div className="space-x-2 mr-6">
            <div className="hidden sm:inline">
              <Button
                className="newTraktor hover:scale-110 "
                content="Neuer Traktor!"
                icon="add"
                labelPosition="right"
                basic
                color="olive"
                onClick={handleClick}
              />
            </div>
            <button
              className=" border-2 p-2 rounded-md border-[#E3001B] hover:scale-125 hover:mx-5 text-[#E3001B]"
              onClick={handleLogout}
            >
              {" "}
              <Icon name="power off" color="red" />
            </button>
            <button
              className=" border-2 p-2 rounded-md border-[#FBBD08] hover:scale-125 hover:ml-3 text-[#FBBD08]"
              onClick={handleProfile}
            >
              Profil
            </button>
          </div>
        ) : (
          <div className="z-10">
            <div className="hidden sm:inline">
              <Button
                content="Neuer Traktor!"
                icon="add"
                labelPosition="right"
                basic
                color="grey"
                onClick={() =>
                  toast.info(
                    "Logge dich ein, um neue Fahrzeuge hinzufügen zu können!"
                  )
                }
              />
            </div>
            <button
              className=" border-2 p-1.5 rounded-md border-[#A7BD0D] mr-6 hover:scale-125 hover:ml-3"
              onClick={handleLogin}
            >
              <p className="text-[#A7BD0D] animate-pulse p-0 m-0">Anmelden</p>
            </button>
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
