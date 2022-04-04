import React from "react";
import MonthlyAreaChart from "../MonthlyAreaChart/MonthlyAreaChart";
import MonthlyBarChart from "../MonthlyBarChart/MonthlyBarChart";
import MonthlyPieChart from "../MonthlyPieChart/MonthlyPieChart";
import MonthlyTinyLineChart from "../MonthlyTinyLineChart/MonthlyTinyLineChart";

const DashBoard = () => {
  return (
    <div className="container lg:columns-2 sm:columns-1 mt-8 mb-4">
      <MonthlyTinyLineChart></MonthlyTinyLineChart>
      <MonthlyBarChart></MonthlyBarChart>
      <MonthlyAreaChart></MonthlyAreaChart>
      <MonthlyPieChart></MonthlyPieChart>
    </div>
  );
};

export default DashBoard;
