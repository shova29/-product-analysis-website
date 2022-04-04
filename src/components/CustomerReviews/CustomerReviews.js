import React from "react";
import { useNavigate } from "react-router-dom";
import useReviews from "../../hooks/useReviews";

const CustomerReviews = () => {
  const [reviews, setReviews] = useReviews();

  return (
    <div>
      <h2 className="font-bold text-4xl text-center">Customer Reviews(3)</h2>
    </div>
  );
};

export default CustomerReviews;
