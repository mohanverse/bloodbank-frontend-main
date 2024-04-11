import React,{ useState } from "react";
import axios from 'axios';
import { Link, Navigate } from "react-router-dom";
import loginimg from "../assets/loginimg2.jpg";

function BloodRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function registerUser(e){
    e.preventDefault();
    try{
      await axios.post('/register', {
        name,
        email,
        password,
      });
      alert('Registration successfully you can log in now');
      setRedirect(true)
    }
    catch (e) {
      alert('Registrasion failed. try again latter')
    }
  }

  if(redirect){
    return <Navigate to={'/login'} />
  }
  return (
    <div className="mt-4 grow flex items-center justify-around mb-4">
      <div className="border-2 rounded-md shadow-xl">
      <div className="max-w-xl mx-auto bg-red-600 p-2 rounded-md ">
          <h1 className="text-md font-bold text-center text-white">GIVE THE GIFT OF BLOOD AND SAVE THE LIFE REGISTER NOW DONATE BLOOD</h1>
          </div>
        <div className="flex justify-center">
          <img src={loginimg} className="w-[400px]" />
        </div>
        <h1 className="text-2xl font-bold text-center mt-10">Register Page</h1>
        <form className="max-w-md mx-auto " onSubmit={registerUser}>
          <input type="text" placeholder="Full Name"  value={name} onChange={e => setName(e.target.value)}  />
          <input type="email" placeholder="your@gmail.com"  value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
          <div className="">
            <button className="bg-red-600 text-white w-full py-2 rounded-full">
              Register
            </button>
          </div>
          <div className="text-center py-4 text-black ">
            Allready have a account yet?{" "}
            <Link to={"/login"} className=" text-sky-500">
              Login now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BloodRegister;
