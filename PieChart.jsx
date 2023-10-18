import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Hardware", 5],
  ["Software", 8],
  ["Other", 7], // CSS-style declaration
];

export const options = {
  title: "Customers",
  
  pieHole: 0.4,
  is3D: false,
};

export default function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
