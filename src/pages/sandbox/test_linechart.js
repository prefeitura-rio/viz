import { useState, useEffect } from "react";

import LineChart from "../../components/charts/line_chart";

const TestLineChart = () => {
  return (
    <div>
      <LineChart
        data={[
          [
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
          ],
          [
            { x: 1, y: 625 },
            { x: 2, y: 576 },
            { x: 3, y: 529 },
            { x: 4, y: 484 },
            { x: 5, y: 441 },
            { x: 6, y: 400 },
            { x: 7, y: 361 },
            { x: 8, y: 324 },
            { x: 9, y: 289 },
            { x: 10, y: 256 },
            { x: 11, y: 225 },
            { x: 12, y: 196 },
            { x: 13, y: 169 },
            { x: 14, y: 144 },
            { x: 15, y: 121 },
            { x: 16, y: 100 },
            { x: 17, y: 81 },
            { x: 18, y: 64 },
            { x: 19, y: 49 },
            { x: 20, y: 36 },
            { x: 21, y: 25 },
            { x: 22, y: 16 },
            { x: 23, y: 9 },
            { x: 24, y: 4 },
            { x: 25, y: 1 }
          ]
        ]}
        style={{
          margin: {
            top: 20,
            right: 20,
            bottom: 50,
            left: 70
          },
          width: 960,
          height: 500,
          lineColor: ["steelblue", "red"],
          lineWidth: [1.5, 5],
          axisColor: "black",
          axisFontSize: "15px"
        }}
        animation={{
          delay: [0, 2000],
          duration: [2000, 2000]
        }}
        legend={{
          style: {
            fontSize: "15px",
            fontFamily: "sans-serif",
            fontColor: "#000",
            verticalOffset: 30,
            horizontalOffset: 20,
            iconSize: 6
          },
          position: {
            top: 0.45,
            left: 0.9
          },
          type: "circle",
          text: ["Line 1", "Line 2"]
        }}
      />
    </div>
  );
};

export default TestLineChart;
