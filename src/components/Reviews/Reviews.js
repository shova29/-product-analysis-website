import React from "react";
import useReviews from "../../hooks/useReviews";
import ReviewCard from "../ReviewCard/ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div>
      <h2 className="text-center text-4xl mt-6 mb-16 ">
        What our customers say!
      </h2>
      <section className="mb-32">
        <div className="review-container container mx-auto lg:columns-3 sm:columns-1">
          {reviews.map((reviewCard) => (
            <ReviewCard
              key={reviewCard.id}
              reviewCard={reviewCard}
            ></ReviewCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Reviews;
