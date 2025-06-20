// RestakersList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RestakersList = () => {
  const [restakers, setRestakers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestakers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/restakers');
        setRestakers(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching restakers:", error);
        setLoading(false);
      }
    };

    fetchRestakers();
  }, []);

  if (loading) return <p>Loading restakers...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">EigenLayer Restakers</h1>
      <ul className="space-y-2">
        {restakers.map((r) => (
          <li key={r._id} className="border rounded p-4 shadow-sm">
            <p><strong>Name:</strong> {r.name}</p>
            <p><strong>Stake Amount:</strong> {r.stakeAmount}</p>
            <p><strong>Operator:</strong> {r.operator}</p>
            <p><strong>Status:</strong> {r.restakeStatus}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestakersList;
