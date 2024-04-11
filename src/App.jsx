import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Layout from "./Layout/Layout";
import Bloodlogin from "./Pages/Bloodlogin";
import BloodRegister from "./Pages/BloodRegister";
import axios from "axios";
import HomePagein from "./Pages/HomePagein";
import LayoutSec from "./Layout/LayoutSec";
import BloodDonationForm from "./Pages/doantion/BloodDonationForm";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUs from "./Pages/ContactUs";
import DonationApprove from "./Pages/doantion/DonationApprove";
import BloodRequestFrom from "./Pages/Request/BloodRequestFrom";
import AdminLogin from "./Admin-section/AdminLogin";
import AdminLayout from "./Admin-section/AdminLayout/AdminLayout";
import AllBloodDoantion from "./Admin-section/AllBloodDoantion";
import AllBloodRequest from "./Admin-section/AllBloodRequest";
import BloodRequstApprove from "./Pages/Request/BloodRequstApprove";
import Adminpage from "./Admin-section/Adminpage";

// axios.defaults.baseURL ='http://127.0.0.1:4000';
axios.defaults.baseURL = 'https://bloodbank-backend-main.onrender.com';
axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Bloodlogin />} />
        <Route path="/register" element={<BloodRegister />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
      <Route element={<LayoutSec />}>
        <Route path="/homepagein" element={<HomePagein />} />
        <Route path="/donationform" element={<BloodDonationForm />} />
        <Route path="/donation" element={<DonationApprove />} />
        <Route path="/bloodrequest" element={<BloodRequestFrom />} />
        <Route path="/allbloodrequest" element={<BloodRequstApprove />} />
      </Route>
      <Route element={<AdminLayout />}>
        
        <Route path="/all-blooddonation" element={<AllBloodDoantion />} />
        <Route path="/adminpage" element={<Adminpage />} />
        <Route path="/all-bloodrequets" element={<AllBloodRequest />} />
      </Route>
    </Routes>
  );
}

export default App;
