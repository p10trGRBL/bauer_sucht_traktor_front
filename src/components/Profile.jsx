import {useAuth} from '../context/AuthProvider.jsx';
import { format } from 'date-fns';

function Profile() {
    const {userData}=useAuth();
const formattedDate= userData.date ? format(new Date(userData.date), 'MMM dd, yyyy HH:mm'):"";

  return (
    <div>
        <h2>Hallo {userData.username}</h2> 
        <p>Email: {userData.email}</p>
        {formattedDate && <p>Auf Bauer such Traktor seit: {formattedDate}</p>}

        </div>
  )
}

export default Profile;