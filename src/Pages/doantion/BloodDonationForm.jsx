import React, { useState } from "react";
import { Link, Navigate  } from "react-router-dom";
import axios from 'axios';
import donateimg from "../../assets/Blood-Donation.png";

function BloodDonationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [bloodg, setBloodg] = useState('');
  const [hospital, setHospital] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [diseases, setDeseases] = useState('');
  const [birth, setBirth] = useState('');

  async function donationform(e) {
    e.preventDefault();
    try{
      await axios.post('/donation', {name,email,number,bloodg,hospital,city,state,diseases,birth});
      alert('from succesfully submited')
    }
    catch (e){
      alert('from submition failed')
    }

  }


  return (
    <div>
      <div className="bg-red-600 text-white py-4 mt-4">
        <div className="container mx-auto md:text-center p-1">
          <p className="md:text-xl font-semibold">Thank you for your willingness to donate blood. Your contribution can make a significant difference in someone's life.</p>
          <p className="md:text-xl font-semibold">Please fill out the following information to donate blood.</p>
        </div>
      </div>
      <div className="mt-4 grow flex items-center justify-around mb-4">
        <div className="border-2 border-red-600 rounded-md shadow-2xl">
          <div className="md:flex justify-center p-2">
          <div className="flex justify-center p-2">
            <img src={donateimg} className="md:w-[500px]" />
          </div>
          <form className="max-w-md mx-auto mb-4 " onSubmit={donationform}>
            <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />
            <input type="email" placeholder="your@gmail.com" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="text" placeholder="mobile number" value={number} onChange={e => setNumber(e.target.value)} />
            <div className="">
              <select
                id="blood-group"
                name="blood-group"
                className="w-full px-4 py-2 border rounded-2xl"
                value={bloodg} onChange={e => setBloodg(e.target.value)}
              >
                <option value="" disabled selected>
                  Blood Group
                </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
            <div className="">
              <select
                id="blood-group"
                name="blood-group"
                className="w-full px-4 py-2 border rounded-2xl"
                value={hospital} onChange={e => setHospital(e.target.value)}
              >
                <option value="" disabled selected>
                  Hospital Name
                </option>
                <option value="Apollo Hospitals, Chennai">Apollo Hospitals, Chennai</option>
                <option value="Fortis Memorial Research Institute">Fortis Memorial Research Institute</option>
                <option value="Manipal Hospitals, Bangalore">Manipal Hospitals, Bangalore</option>
                <option value="Medanta - The Medicity, Gurgaon">Medanta - The Medicity, Gurgaon</option>
              </select>
            </div>
            <input type="text" placeholder="City" value={city} onChange={e => setCity(e.target.value)} />
            <input type="text" placeholder="State" value={state} onChange={e => setState(e.target.value)} />
            <input type="text" placeholder="Diseases" value={diseases} onChange={e => setDeseases(e.target.value)} />
            <input type="text" placeholder="Date Birth" value={birth} onChange={e => setBirth(e.target.value)} />
            <div className="">
              <button className="bg-red-600 text-white w-full py-2 rounded-full">
                Submit
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BloodDonationForm;
