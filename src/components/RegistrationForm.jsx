import { useState } from "react";
import api from "../api/api";
import { Link, useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await api.post('/auth/register',
        {firstName, lastName, username, email, password},
        {withCredentials: true}
        );

        if(response.status===201) {
            toast.success('Registrierung erfolgreich. Herzlich willkommen!');
            navigate('/login');
        }
    } catch (error) {
        toast.error(error.response.data.error || 'Registrierung schiefgelaufen :(');
    }
  };

  return (
  <div>
    <form onSubmit={handleSubmit}>
        <div>
            <label className="">Name:</label>
            <input type="text" 
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                    className=""
                    required/>
        </div>
        <div>
            <label className="">Nachname:</label>
            <input type="text"
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)} 
                className=""
                required/>
        </div>
        <div>
            <label className="">Benutzername:</label>
            <input type="text" 
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                className=""
                required/>
        </div>
        <div>
            <label className="">Email:</label>
            <input type="text"
            value={email}
            onChange={(e)=>setEmail(e.target.value)} 
            className=""
            required/>
        </div>
        <div>
            <label className="">Password</label>
            <input type="password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className=""
            required
            />
        </div>
        <button
            type='submit'
            className=""
        >Registrieren</button>
    </form>
    <p>Schon registriert? Melde dich an:</p>
    <Link to='/login'>Anmelden</Link>{' '}
  </div>
  );
}

export default RegistrationForm;
