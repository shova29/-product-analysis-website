import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderImage from "../../Assets/Images/header-img.png";
import useReviews from "../../hooks/useReviews";
import ReviewCard from "../ReviewCard/ReviewCard";

const Home = () => {
  const [reviews, setReviews] = useReviews();
  const navigate = useNavigate();
  // const x = reviews.slice(0, 3);
  return (
    <div className="bg-white md:container md:mx-auto lg:container">
      <section className="mt-16 flex bg-white">
        <div className="mr-64">
          <h1 className="text-5xl font-bold">
            Your next SunGlass <br></br>
            <span className="text-teal-500">Your best SunGlass</span>
          </h1>
          <p className="mt-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa vero
            earum eos cupiditate recusandae quo quod atque vitae! Enim, tempore!
          </p>
          <button
            type="button"
            class="mt-8 text-teal-700 hover:text-white border border-teal-500 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-teal-400 dark:text-teal-400 dark:hover:text-white dark:hover:bg-teal-500 dark:focus:ring-teal-900"
          >
            Live Demo
          </button>
        </div>
        <div className="ml-12">
          <img className="w-full h-full" src={HeaderImage} alt="" />
        </div>
      </section>
      <section className="mt-20">
        <h2 className="mt-8 font-bold text-4xl text-center">
          Customer Reviews(3)
        </h2>
        <div className="mt-8 review-container container mx-auto lg:columns-3 sm:columns-1">
          {reviews.slice(0, 3).map((reviewCard) => (
            <ReviewCard
              key={reviewCard.id}
              reviewCard={reviewCard}
            ></ReviewCard>
          ))}
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
      </section>
    </div>
  );
};

export default Home;
