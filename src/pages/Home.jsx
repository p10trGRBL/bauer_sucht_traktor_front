import {Button} from  'semantic-ui-react';
import { useNavigate } from 'react-router-dom';


function Home() {

  let navigate = useNavigate();
  const handleClick = () =>  navigate('/tractors')

  return (
    <div className=' border-2 border-black m-6'>
  
    <h1>AirBnB für Landmaschinen</h1>
    <br />

    <h2>Unsere Scheune ist voll! </h2>
    <h4>Check it out jetzt!</h4>
    <Button className='hover:scale-125' content='Angebote anschauen'   color="olive" onClick={handleClick}/>
    <br />

  
    </div>
  )
}

export default Home;