import React from "react";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useCharts from "../../hooks/useCharts";

const MonthlyTinyLineChart = () => {
  const [charts, setcharts] = useCharts();
  return (
    <div style={{ width: "100%" }}>
      <h1 className="text-blue-700 font-bold text-center">MONTH WISE SELL</h1>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={600}
          height={400}
          data={charts}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <Line dataKey={"month"}></Line> */}
          <Line
            type="monotone"
            dataKey={"sell"}
            stroke="#8884d8"
            strokeWidth={2}
          ></Line>
          <XAxis dataKey={"month"}></XAxis>
          <Tooltip></Tooltip>
          <YAxis></YAxis>
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyTinyLineChart;
