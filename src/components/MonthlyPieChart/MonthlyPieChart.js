import React from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";
import useCharts from "../../hooks/useCharts";

const MonthlyPieChart = () => {
  const [charts, setcharts] = useCharts();

  return (
    <div style={{ width: "100%" }} className="mt-12">
      <h1 className="text-blue-700 font-bold text-center mb-4">
        Investment VS Revenue
      </h1>
      <ResponsiveContainer width={500} height={300}>
        <PieChart
          width={300}
          height={200}
          margin={{
            left: 30,
          }}
        >
          <Pie
            data={charts}
            dataKey="investment"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
            label
          />
          <Pie
            data={charts}
            dataKey="revenue"
            isAnimationActive={false}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyPieChart;
