import { useAuth } from "../context/AuthProvider.jsx";
import { format } from "date-fns";

function Profile() {
  const { userData } = useAuth();
  const formattedDate = userData.date
    ? format(new Date(userData.date), "MMM dd, yyyy HH:mm")
    : "";

  return (
    <div>
      <div className="bg-[url('./assets/bb_countryside.jpeg')] bg-no-repeat min-h-[75vh] bg-cover bg-center relative"></div>
      <div className='absolute  md:start-[75vh] md:top-[35vh] start-[15vh] top-[40vh] flex flex-col justify-center backdrop-blur-md text-center rounded-lg border-gray-300 border-[1px] p-10'>
        <h2 className="text-yellow-500">Hallo {userData.username}!</h2>
        <p className="text-white">Deine Email: {userData.email}</p>
        {formattedDate && <p className="text-white">Auf "Bauer sucht Traktor" seit: {formattedDate}</p>}
      </div>
    </div>
  );
}

export default Profile;
