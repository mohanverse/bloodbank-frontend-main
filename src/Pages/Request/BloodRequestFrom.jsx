import React, { useState } from "react";
import { Link, Navigate  } from "react-router-dom";
import axios from 'axios';
import requestimg from "../../assets/request-blood.png";

function BloodRequestFrom() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [birth, setBirth] = useState('');
  const [bloodg, setBloodg] = useState('');
  const [bloodunit, setBloodunit] = useState('');
  const [hospital, setHospital] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [purpose, setPurpose] = useState('');

  async function requstform(e) {
    e.preventDefault();
    console.log("Submitting form...");
    try {
      await axios.post('/bloodrequests', { name, email, number, bloodg, bloodunit, hospital, city, state, purpose, birth });
      alert('Form successfully submitted');
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Form submission failed');
    }
  }
  


  return (
    <div>
      <div className="bg-red-600 text-white py-4 mt-4">
        <div className="container mx-auto md:text-center px-10">
          <p className="md:text-xl font-semibold">We are reaching out to you with an urgent request for blood donation. The need for blood is constant, and your contribution can save lives. Whether it's for medical emergencies, surgeries, or ongoing treatments, your donation can make a significant difference.</p>
        </div>
      </div>
      <div className="mt-4 grow flex items-center justify-around mb-4">
        <div className="border-2 border-red-600 rounded-md shadow-2xl">
          <div className="md:flex justify-center p-2">
          <div className="flex justify-cente p-2">
            <img src={requestimg} className="md:w-[500px]" />
          </div>
          <form className="max-w-md mx-auto mb-4 " onSubmit={requstform}>
            <input type="text" placeholder="Patient Name" value={name} onChange={e => setName(e.target.value)} />
            <input type="email" placeholder="Patient@gmail.com" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="text" placeholder="Patient Number" value={number} onChange={e => setNumber(e.target.value)} />
            <input type="text" placeholder="Date Birth" value={birth} onChange={e => setBirth(e.target.value)} />
            <div className="">
              <select
                id="blood-group"
                name="blood-group"
                className="w-full px-4 py-2 border rounded-2xl"
                value={bloodg} onChange={e => setBloodg(e.target.value)}
              >
                <option value="" disabled selected>
                Patient Blood Group
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
            <input type="text" placeholder="Blood Unit / Bag (S)"  value={bloodunit} onChange={e => setBloodunit(e.target.value)}/>
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
                <option value="A+">Apollo Hospitals, Chennai</option>
                <option value="A-">Fortis Memorial Research Institute</option>
                <option value="B+">Manipal Hospitals, Bangalore</option>
                <option value="B-">Medanta - The Medicity, Gurgaon</option>
              </select>
            </div>
            <input type="text" placeholder="City" value={city} onChange={e => setCity(e.target.value)} />
            <input type="text" placeholder="State" value={state} onChange={e => setState(e.target.value)} />
            <input type="text" placeholder="Purpose" value={purpose} onChange={e => setPurpose(e.target.value)} />
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

export default BloodRequestFrom;
