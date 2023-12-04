import { useAuth } from "../context/AuthProvider.jsx";
import { format } from "date-fns";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { SpinnerDotted } from "spinners-react";

function Profile() {
  const { userData, isLoading, isLoggedIn } = useAuth();
  const formattedDate = userData.date
    ? format(new Date(userData.date), "MMM dd, yyyy HH:mm")
    : "";
  let navigate = useNavigate();
  const handleClick = () => navigate("/tractors");


  if (isLoading) {
    return (
      <div className="m-auto my-10 text-center">
        <SpinnerDotted
          size={50}
          thickness={100}
          speed={50}
          color="#36ad47"
          className="m-auto"
        />
        <h3>Dateien werden abgerufen...</h3>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-[url('/bb_countryside.jpeg')] bg-no-repeat min-h-[75vh] bg-cover bg-center relative"></div>
      {isLoggedIn?( <div className="absolute  m-auto left-0 right-0 bottom-0 top-0 w-3/4 h-1/3 md:w-1/3 lg:w-1/4 flex flex-col justify-center backdrop-blur-md text-center rounded-lg border-gray-300 border-[1px] p-10">
        <h2 className="text-yellow-500">Hallo {userData.username}!</h2>
        <p className="text-white">Deine Email: {userData.email}</p>
        {formattedDate && (
          <p className="text-white">
            Auf "Bauer sucht Traktor" seit: {formattedDate}
          </p>
        )}
        <div className="text-center my-8">
          <Button
            className="hover:scale-125"
            content="Verfügbare Fahrzeuge anschauen"
            color="yellow"
            onClick={handleClick}
          />
        </div>
      </div>):(
        <div className="absolute  m-auto left-0 right-0 bottom-0 top-0 w-3/4 h-1/3 md:w-1/3 lg:w-1/4 flex flex-col justify-center backdrop-blur-md text-center rounded-lg border-gray-300 border-[1px] p-10">
        <h3 className="text-white">Du hast keine Berechtigung, diese Seite anzusehen. </h3>
        <h5 className="text-gray-300">Bitte logge dich ein oder registriere dich</h5>
        <div className="text-center my-8">
          <Button
            className="hover:scale-125"
            content="Anmelden"
            color="yellow"
            onClick={()=>navigate("/login")}
          />
        </div>
        </div>
      )}
     
    </div>
  );
}

export default Profile;
