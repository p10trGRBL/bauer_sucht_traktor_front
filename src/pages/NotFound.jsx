import { useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";

function NotFound() {
  let navigate = useNavigate();
  const handleClick = () => navigate("/tractors");
  return (
    <div className="relative">
      <div className="bg-[url('./assets/bb_lost_tractor.jpeg')] bg-no-repeat min-h-[75vh] bg-cover bg-center grayscale relative"></div>
      <div className="absolute  m-auto left-0 right-0 bottom-0 top-0 w-3/4 h-2/3 md:w-1/3 md:h-1/2 lg:w-1/4 p-10 flex flex-col justify-center backdrop-blur-md rounded-lg border-gray-300 border-[1px]">
        <h1 className="text-red-500 text-center m-0">404 </h1>
        <h2 className="text-yellow-500 text-center mt-3 mb-6">
          Hast Du dich verlaufen?
        </h2>
        <Button
          className="hover:scale-110 mb-5"
          content="Ich will Trecker anschauen!"
          color="olive"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default NotFound;
