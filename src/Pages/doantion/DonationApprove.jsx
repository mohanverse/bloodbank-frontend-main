import React, { useState, useEffect } from 'react';

function DonationApprove() {
  // State to store donation data
  const [donations, setDonations] = useState([]);

  // Function to fetch donation data
  const fetchDonations = async () => {
    try {
      const response = await fetch('http://localhost:4000/donation');
      if (!response.ok) {
        throw new Error('Failed to fetch donations');
      }
      const data = await response.json();
      setDonations(data);
    } catch (error) {
      console.error('Error fetching donations:', error);
    }
  };

  // Fetch donation data when component mounts
  useEffect(() => {
    fetchDonations();
  }, []);

  return (
    <div className="mb-32">
      <div className="bg-red-600 text-white py-4 mt-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-semibold">Blood Donation Request</h1>
        </div>
      </div>
      <div className='md:flex md:justify-center overflow-x-auto'>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Number</th>
              <th className="px-4 py-2">Blood Group</th>
              <th className="px-4 py-2">Hospital</th>
              <th className="px-4 py-2">City</th>
              <th className="px-4 py-2">State</th>
              <th className="px-4 py-2">Disease</th>
              <th className="px-4 py-2">Date Birth</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr key={donation._id}>
                <td className="border px-4 py-2">{donation._id}</td>
                <td className="border px-4 py-2">{donation.name}</td>
                <td className="border px-4 py-2">{donation.email}</td>
                <td className="border px-4 py-2">{donation.number}</td>
                <td className="border px-4 py-2">{donation.bloodg}</td>
                <td className="border px-4 py-2">{donation.hospital}</td>
                <td className="border px-4 py-2">{donation.city}</td>
                <td className="border px-4 py-2 ">{donation.state}</td>
                <td className="border px-4 py-2">{donation.diseases}</td>
                <td className="border px-4 py-2">{donation.birth}</td>
                <td className={`border px-4 py-2 ${donation.status === 'approved' ? 'bg-green-600' : 'bg-red-600'}`}>
                  {donation.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DonationApprove;
