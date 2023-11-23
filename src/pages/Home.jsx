import { Button, Icon } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  const handleClick = () => navigate("/tractors");

  return (
    <div>
      <div className="bg-[url('./assets/bb_4tractors.jpg')] bg-cover bg-center bg-no-repeat min-h-[50vh] flex flex-col place-items-center justify-center ">
        <div className="backdrop-blur-md rounded-md  border-[1px] text-white p-20 text-center mb-16">
          <h1>Bauer sucht Traktor </h1>
          <h2>Dein AirBnB für Landmaschinen </h2>
          <h3>Miete und Vermiete Trecker, Technik und mehr...</h3>
          
        </div>
        <div className="relative">
        <Button
          className="hover:scale-125"
          content="Angebote anschauen"
          color="yellow"
          onClick={handleClick}
        />
        <div className="text-white text-2xl absolute m-0 p-0 top-8 start-20 animate-ping"><Icon name='hand point up'/></div>
        </div>
      </div>
      <div className="m-6">
        <h4>Probiere es jetzt aus!</h4>
        
      </div>

      <img src="src/assets/bb_GetStoredImage.jpeg" alt="Fendt tractor" />
      <img src="src/assets/bb_johndeer.jpeg" alt="" />
      <img src="src/assets/bb_farmer.jpeg" alt="Farmer with tractor" />
      <img src="src/assets/bb_field.jpeg" alt="Field" />
      <img src="src/assets/bb_harvest.jpeg" alt="harvest" />
      <img src="src/assets/bb_landscape.jpeg" alt="landscape" />
      <img src="src/assets/bb_nikola.jpeg" alt="nikola" />
    </div>
  );
}

export default Home;
