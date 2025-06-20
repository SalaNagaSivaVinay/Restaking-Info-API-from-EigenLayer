import { useEffect, useState } from "react";
import axios from "axios";

const ValidatorsList = () => {
  const [validators, setValidators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/validators")
      .then((res) => {
        setValidators(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching validators:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-gray-600">🔄 Loading validators...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Validators</h2>
      {validators.map((validator, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-lg shadow-md border border-gray-200"
        >
          <p><strong>Operator Address:</strong> {validator.operatorAddress}</p>
          <p><strong>Total Delegated Stake:</strong> {validator.totalDelegatedStake} stETH</p>
          <p><strong>Status:</strong> {validator.status}</p>
          {validator.slashHistory && validator.slashHistory.length > 0 ? (
            <div className="mt-2">
              <p className="font-medium">Slash History:</p>
              <ul className="list-disc pl-6 text-red-600">
                {validator.slashHistory.map((slash, i) => (
                  <li key={i}>
                    {slash.timestamp} — {slash.amount} stETH — {slash.reason}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-green-700 mt-2">No slash history ✅</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ValidatorsList;
