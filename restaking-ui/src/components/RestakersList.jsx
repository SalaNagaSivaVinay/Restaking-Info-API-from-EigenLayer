import { useEffect, useState } from "react";
import axios from "axios";

const RestakersList = () => {
  const [restakers, setRestakers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/restakers")
      .then((res) => {
        setRestakers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-gray-600 text-lg">🔄 Loading restakers...</p>;
  }

  return (
    <ul className="space-y-4 max-w-2xl mx-auto">
      {restakers.map((r) => (
        <li key={r._id} className="bg-white shadow-md p-4 rounded-md">
          <strong className="text-lg text-indigo-600">{r.name}</strong> staked ₹
          {r.stakeAmount} on <em className="text-gray-600">{r.operator}</em> —{" "}
          <span className="ml-2 text-sm text-green-700 font-semibold">
            {r.restakeStatus}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default RestakersList;
