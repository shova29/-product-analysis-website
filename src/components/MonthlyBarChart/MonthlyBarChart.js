import React from "react";
import {
  Area,
  AreaChart,
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
    <div style={{ width: "100%" }}>
      <h1 className="text-blue-700 font-bold text-center">
        Investment VS Revenue
      </h1>
      <ResponsiveContainer width={500} height={300}>
        <BarChart
          width={300}
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
