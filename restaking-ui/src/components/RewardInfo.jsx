import { useState } from "react";
import axios from "axios";

const RewardInfo = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [rewards, setRewards] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetchRewards = () => {
    if (!walletAddress) return;

    setLoading(true);
    axios
      .get(`http://localhost:5000/rewards/${walletAddress}`)
      .then((res) => {
        setRewards(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching rewards:", err);
        setLoading(false);
      });
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">Reward Info</h2>

      <div className="flex items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Enter Wallet Address"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm"
        />
        <button
          onClick={handleFetchRewards}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Fetch Rewards
        </button>
      </div>

      {loading && <p className="text-gray-600">Fetching rewards...</p>}

      {rewards && (
        <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
          <p><strong>Total Rewards:</strong> {rewards.totalRewards} stETH</p>

          <h3 className="mt-4 font-medium text-lg text-gray-700">Validator Breakdown:</h3>
          <ul className="list-disc pl-6 mt-2 text-gray-800">
            {rewards.breakdown.map((item, index) => (
              <li key={index}>
                {item.validator}: {item.amount} stETH
              </li>
            ))}
          </ul>

          {rewards.timestamps && rewards.timestamps.length > 0 && (
            <div className="mt-4">
              <h4 className="text-gray-600 font-medium">Reward Timestamps:</h4>
              <ul className="list-disc pl-6 text-sm text-gray-700">
                {rewards.timestamps.map((ts, idx) => (
                  <li key={idx}>{ts}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RewardInfo;
