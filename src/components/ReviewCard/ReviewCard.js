import React from "react";

const ReviewCard = ({ reviewCard }) => {
  const { name, image, review, rating } = reviewCard;
  return (
    <div className="mb-4">
      <div class="max-w-sm max-h-2xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="flex flex-col items-center pb-10 mt-6">
          <img
            class="mb-3 w-24 h-24 rounded-full shadow-lg"
            src={image}
            alt={image}
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {name}
          </h5>
          <p>
            Review:{" "}
            {review.length > 100 ? review.slice(0, 100) + "..." : review}
          </p>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            Rating: {rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
