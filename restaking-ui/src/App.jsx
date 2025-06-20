import React from "react";
import RestakersList from "./components/RestakersList";
import ValidatorsList from "./components/ValidatorsList";
import RewardInfo from "./components/RewardInfo";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans space-y-10">
      <h1 className="text-3xl font-bold text-center text-blue-700">
        EigenLayer Restaking Info Dashboard
      </h1>

      <section>
        <RestakersList />
      </section>

      <section>
        <ValidatorsList />
      </section>

      <section>
        <RewardInfo />
      </section>
    </div>
  );
}

export default App;
