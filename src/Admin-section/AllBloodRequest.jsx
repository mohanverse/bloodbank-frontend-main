import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AllBloodRequest() {
  const [bloodRequests, setBloodRequests] = useState([]);

  useEffect(() => {
    fetchBloodRequests();
  }, []);

  const fetchBloodRequests = async () => {
    try {
      const response = await axios.get('http://localhost:4000/bloodrequest');
      setBloodRequests(response.data);
    } catch (error) {
      console.error('Error fetching blood requests:', error);
    }
  };

  const handleApprove = async (id) => {
    try {
      await axios.patch(`http://localhost:4000/bloodrequest/${id}`, { status: 'approved' });
      // Update blood request locally
      setBloodRequests((prevRequests) =>
        prevRequests.map((request) =>
          request._id === id ? { ...request, status: 'approved' } : request
        )
      );
    } catch (error) {
      console.error('Error approving blood request:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.patch(`http://localhost:4000/bloodrequest/${id}`, { status: 'rejected' });
      // Update blood request locally
      setBloodRequests((prevRequests) =>
        prevRequests.map((request) =>
          request._id === id ? { ...request, status: 'rejected' } : request
        )
      );
    } catch (error) {
      console.error('Error rejecting blood request:', error);
    }
  };

  return (
    <div className="mt-2 md:mt-0">
      <div className="bg-red-600 text-white py-4">
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
              <th className="px-4 py-2">Actions</th>
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
                <td className="border px-4 py-2">
                  {request.status !== 'approved' && (
                    <button
                      className="bg-green-500 text-white px-2 py-1 mr-2"
                      onClick={() => handleApprove(request._id)}
                    >
                      Approve
                    </button>
                  )}
                  {request.status !== 'rejected' && (
                    <button
                      className="bg-red-500 text-white px-2 py-1"
                      onClick={() => handleReject(request._id)}
                    >
                      Reject
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllBloodRequest;
