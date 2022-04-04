import React from "react";
import { useNavigate } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import ReviewCard from "../ReviewCard/ReviewCard";
import Reviews from "../Reviews/Reviews";

const CustomerReviews = () => {
  const [reviews, setReviews] = useReviews();

  const navigate = useNavigate();
  return (
    <div>
      <h2 className="font-bold text-4xl text-center">Customer Reviews(3)</h2>
      <div>
        <Reviews>
          {reviews.slice(0, 2).map((review) => (
            <ReviewCard></ReviewCard>
          ))}
        </Reviews>
      </div>
      <div className="text-center">
        {" "}
        <button
          onClick={() => navigate("/reviews")}
          type="button"
          class="text-center text-xl px-16 py-2 focus:outline-none text-white bg-teal-500 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-900"
        >
          See All Reviews
        </button>
      </div>
    </div>
  );
};

export default CustomerReviews;
