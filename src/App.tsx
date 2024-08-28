import React from "react";
import IBCSChart from "./IBCSChart";
import { DataPoint } from "./types";

const App: React.FC = () => {
  const data: DataPoint[] = [
    { period: "Jan", actual: 1000, budget: 1200 },
    { period: "Feb", actual: 1500, budget: 1400 },
    { period: "Mar", actual: 1300, budget: 1300 },
  ];

  return (
    <div className="App">
      <IBCSChart
        data={data}
        title="Monthly Sales Performance"
        subtitle="Actual vs Budget (in $1000s)"
      />
    </div>
  );
};

export default App;
