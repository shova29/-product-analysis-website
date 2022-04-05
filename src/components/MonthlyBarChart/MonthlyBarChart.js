import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useCharts from "../../hooks/useCharts";
const MonthlyBarChart = () => {
  const [charts, setcharts] = useCharts();

  return (
    <div style={{ width: "100%" }} className="mt-6">
      <h1 className="text-blue-700 font-bold text-center mb-6">
        Investment VS Revenue
      </h1>
      <ResponsiveContainer width={500} height={300}>
        {/*  <BarChart
          width={300}
          height={200}
          data={charts}
          margin={{
            left: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart> */}
        <BarChart
          width={500}
          height={300}
          data={charts}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" stackId="a" fill="#8884d8" />
          <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyBarChart;
