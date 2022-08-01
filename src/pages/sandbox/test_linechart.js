import { useState, useEffect } from "react";

import LineChart from "../../components/charts/line_chart";

const TestLineChart = () => {
  return (
    <div>
      <LineChart
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 4 },
          { x: 3, y: 9 },
          { x: 4, y: 16 },
          { x: 5, y: 25 },
          { x: 6, y: 36 },
          { x: 7, y: 49 },
          { x: 8, y: 64 },
          { x: 9, y: 81 },
          { x: 10, y: 100 },
          { x: 11, y: 121 },
          { x: 12, y: 144 },
          { x: 13, y: 169 },
          { x: 14, y: 196 },
          { x: 15, y: 225 },
          { x: 16, y: 256 },
          { x: 17, y: 289 },
          { x: 18, y: 324 },
          { x: 19, y: 361 },
          { x: 20, y: 400 },
          { x: 21, y: 441 },
          { x: 22, y: 484 },
          { x: 23, y: 529 },
          { x: 24, y: 576 },
          { x: 25, y: 625 }
        ]}
      />
    </div>
  );
};

export default TestLineChart;
