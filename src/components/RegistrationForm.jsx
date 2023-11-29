import { useState } from "react";
import api from "../api/api";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {Button} from 'semantic-ui-react';

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
      const response = await api.post(
        "/auth/register",
        { firstName, lastName, username, email, password },
        { withCredentials: true }
      );

      if (response.status===200) {
        toast.success("Registrierung erfolgreich. Herzlich willkommen!");
        navigate("/login");
      }
    } catch (error) {
      toast.error(
        error.response.data.error || "Registrierung schiefgelaufen :("
      );
    }
  };

  return (
    <div className="relative">
      <div className="bg-[url('/bb_road.jpeg')] min-h-[75vh] bg-cover bg-center relative sepia"></div>
      <div className="absolute m-auto left-0 right-0 bottom-0 top-0  border-[1px] border-gray-300 w-2/3 h-100 md:w-1/3 md:h-5/6 lg:w-1/4 lg:h-2/3 backdrop-blur-md flex flex-col justify-center text-white rounded-md">
        <h1 className="text-center m-0 pt-10">Registriere Dich:</h1>
        <form onSubmit={handleSubmit} className="text-center p-10">
          <div className="mb-1">
            <label className="mr-[54px]">Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Dein Name"
              className="bg-transparent border-[1px] mx-3 p-1"
              required
            />
          </div>
          <div className="mb-1">
            <label className="mr-[25px]">Nachname:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Dein Nachname"
              className="bg-transparent border-[1px] mx-3 p-1"
              required
            />
          </div>
          <div className="mb-1">
            <label className="">Benutzername:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Dein Benutzername"
              className="bg-transparent border-[1px] mx-3 p-1"
              required
            />
          </div>
          <div className="mb-1">
            <label className="mr-[57px]">Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-[1px] mx-3 p-1"
              placeholder="Deine Email Addresse"
              required
            />
          </div>
          <div className="mb-2">
            <label className="mr-[34px]">Passwort:</label>
            <input
              type="password"
              value={password}
              placeholder="Dein Passwort"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent border-[1px] mx-3 p-1"
              required
            />
          </div>
          <div className="pt-10">
          <Button
            className="hover:scale-125"
            content="Registrieren"
            color="olive"
            type="submit"
          />
          </div>
        
        </form>
        <div className="flex justify-end mt-10 pt-10">
        <p className="text-black">Schon registriert? Melde dich an:</p>
        <Link to="/login" className="mx-5">Anmelden</Link>{" "}
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
