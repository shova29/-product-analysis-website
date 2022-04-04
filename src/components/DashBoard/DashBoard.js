import React from "react";
import MonthlyAreaChart from "../MonthlyAreaChart/MonthlyAreaChart";
import MonthlyTinyLineChart from "../MonthlyTinyLineChart/MonthlyTinyLineChart";

const DashBoard = () => {
  return (
    <div className="columns-2">
      <MonthlyTinyLineChart></MonthlyTinyLineChart>
      <MonthlyAreaChart></MonthlyAreaChart>
    </div>
  );
};

export default DashBoard;
