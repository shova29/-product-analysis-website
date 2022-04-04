import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useCharts from "../../hooks/useCharts";
const MonthlyAreaChart = () => {
  const [charts, setcharts] = useCharts();
  return (
    <div style={{ width: "100%" }}>
      <h1 className="text-blue-700 font-bold text-center mb-4">
        Investment VS Revenue
      </h1>
      <ResponsiveContainer width={500} height={300}>
        <AreaChart
          width={400}
          height={300}
          data={charts}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="investment"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyAreaChart;
