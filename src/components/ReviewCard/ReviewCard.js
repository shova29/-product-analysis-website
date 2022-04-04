import React from "react";

const ReviewCard = ({ reviewCard }) => {
  const { name, image, review, rating } = reviewCard;
  return (
    <div className="mb-4">
      <div class="max-w-sm max-h-2xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="flex flex-col items-center pb-10 mt-6">
          <img
            class="mb-3 w-32 h-32 rounded-full shadow-lg"
            src={image}
            alt={image}
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="font-bold">
            Review:{" "}
            <span>
              {review.length > 20 ? review.slice(0, 20) + "..." : review}
            </span>
          </p>
          <p>
            <span class="text-sm text-gray-400 text-lg font-bold dark:text-gray-400">
              Rating: {rating}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
