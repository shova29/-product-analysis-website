import { useEffect, useState } from "react";

const useCharts = () => {
  const [charts, setCharts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setCharts(data));
  });
  return [charts, setCharts];
};

export default useCharts;
