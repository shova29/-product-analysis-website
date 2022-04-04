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
  Label,
  LabelList,
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
        <BarChart
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

          {/* <Bar dataKey="investment" fill="#dd7876" stackId="a">
            <LabelList dataKey="investment" position="center" />
          </Bar>
          <Bar dataKey="revenue" fill="#dd7876" stackId="a">
            <LabelList dataKey="revenue" position="center" />
          </Bar> */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyBarChart;
