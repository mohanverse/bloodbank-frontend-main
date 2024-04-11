import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BloodRequstApprove() {
  const [bloodRequests, setBloodRequests] = useState([]);


  const fetchBloodRequests = async () => {
    try {
      const response = await axios.get('http://localhost:4000/bloodrequest');
      setBloodRequests(response.data);
    } catch (error) {
      console.error('Error fetching blood requests:', error);
    }
  };
  
  useEffect(() => {
    fetchBloodRequests();
  }, []);
  

  return (
    <div className="mb-32">
      <div className="bg-red-600 text-white py-4 mt-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-semibold">Blood Request Approval</h1>
        </div>
      </div>
      <div className="md:flex md:justify-center overflow-x-auto">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Number</th>
              <th className="px-4 py-2">Blood Group</th>
              <th className="px-4 py-2">Blood Bags</th>
              <th className="px-4 py-2">Hospital</th>
              <th className="px-4 py-2">City</th>
              <th className="px-4 py-2">State</th>
              <th className="px-4 py-2">Purpose</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {bloodRequests.map((request) => (
              <tr key={request._id}>
                <td className="border px-4 py-2">{request._id}</td>
                <td className="border px-4 py-2">{request.name}</td>
                <td className="border px-4 py-2">{request.email}</td>
                <td className="border px-4 py-2">{request.number}</td>
                <td className="border px-4 py-2">{request.bloodg}</td>
                <td className="border px-4 py-2">{request.bloodunit}</td>
                <td className="border px-4 py-2">{request.hospital}</td>
                <td className="border px-4 py-2">{request.city}</td>
                <td className="border px-4 py-2">{request.state}</td>
                <td className="border px-4 py-2">{request.purpose}</td>
                <td className={`border px-4 py-2 ${request.status === 'approved' ? 'bg-green-600' : 'bg-red-600'}`}>
                  {request.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BloodRequstApprove;
