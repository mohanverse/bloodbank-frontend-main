import React,  { useState } from "react";
import { Link, Navigate  } from "react-router-dom";
import axios from 'axios';
import loginimg from "../assets/loginimg2.jpg";

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function handleLoginSubmit(e){
    e.preventDefault();
    try{
      await axios.post('/login', {email, password});
      alert('Admin login succesfully')
      setRedirect(true);
    }
    catch (e){
      alert('Admin login failed')
    }
  }

  if(redirect){
    return <Navigate to={'/all-blooddonation'} />
  }
  return (
    <div className="mt-4 grow flex items-center justify-around mb-4">
      <div className="border-2 rounded-md shadow-xl p-4">
        <div className="max-w-xl mx-auto bg-red-600 p-2 rounded-md">
          <h1 className="text-md font-bold text-center text-white">
            Admin Login Page
          </h1>
        </div>
        <div className="flex justify-center">
          <img src={loginimg} className="w-[400px]" />
        </div>
        <form className="max-w-md mx-auto " onSubmit={handleLoginSubmit}>
          <input type="email" placeholder="your@gmail.com" value={email} onChange={e => setEmail(e.target.value)}  />
          <input type="password" placeholder="password"  value={password} onChange={e => setPassword(e.target.value)} />
          <div className="">
            <button className="bg-red-600 text-white w-full py-2 rounded-full">
              Login
            </button>
          </div>
          <div className="text-center py-4 text-black ">
            Don't have a account yet?{" "}
            <Link to={"/register"} className=" text-sky-500">
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
