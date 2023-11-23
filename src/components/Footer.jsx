import React from 'react';
import { Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

function Footer() {
  const handleInsta = ()=> window.alert("Hier geht's zum Portal mit süßen, süßen Fotos");
  const handleTube = ()=> window.alert("Hier geht's zur unendlichen Werbung, die mit Videos unterbrochen wird");
  const handleX = ()=> window.alert("Hier geht's zum Elon's Sandbox");
  const handleLegal = () => window.alert("Die Website do iss bloß fer Bildungszwecke zamgebaut worre, dass de Leit e bissje Spaß hawwe unn a Lächeln uff de Lippe krije, wann se rumklicke. Alles, wat nach echte Leit, Firma oder so aussieht, iss gloof ich eh ned so gemeint gewese, des iss alles Zufall unn unbeabsichtigt.\n\nVersion für Juristen:\nDiese Website wurde ausschließlich zu Bildungszwecken erstellt, mit dem Ziel, Unterhaltung zu bieten und durch Klicken ein Lächeln zu erzeugen. Jegliche Ähnlichkeiten mit realen Personen, Unternehmen oder Artefakten der Popkultur sind rein zufällig und unbeabsichtigt.");
  return (
    <div className='w-full h-36 large:h-48 flex items-center justify-between border-t-4 border-[#FBBD08] bg-white'>
       <div className='ml-6'>
     
    <Icon size='big'  name='instagram' color = 'yellow' onClick={handleInsta} className='hover:scale-125 hover:cursor-pointer'/>
    <Icon size ='big' name='youtube' color = 'yellow' onClick={handleTube} className='hover:scale-125 hover:cursor-pointer'/>
    <Icon size ='big' name='twitter' color = 'yellow'onClick={handleX} className='hover:scale-125 hover:cursor-pointer'/>
    </div>
      
      <span>Made with <Icon size='large' name='heart' color='red'/> in KA by P.GR <Link to='https://github.com/p10trGRBL' target='_blank'><Icon size='big' name='github' color ='yellow' className='hover:scale-125 hover:animate-pulse'/></Link>

      </span>
      <p className='mr-6 text-black hover:cursor-pointer hover:text-yellow-500 hover:scale-125' onClick={handleLegal}>Rechtliches</p>
      
    </div>
  )
}

export default Footer;