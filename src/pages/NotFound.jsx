import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <div>
        <h1>Nicht gefunden</h1>
        <p className='text-red-500 text-2xl'>404</p>
        <Link to="/tractors">
        <button>Lust Traktore anzuschauen?</button>
        </Link>
        
    </div>
  )
}

export default NotFound