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
    <div style={{ width: "100%" }} className="mt-6">
      <h1 className="text-blue-700 font-bold text-center mb-6">
        Month Wise Sell
      </h1>
      <ResponsiveContainer width={500} height={300}>
        <LineChart
          width={300}
          height={200}
          data={charts}
          margin={{
            left: 20,
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
