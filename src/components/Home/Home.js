import React from "react";
import HeaderImage from "../../Assets/Images/header-image.png";

const Home = () => {
  return (
    <div className="bg-white md:container md:mx-auto lg:container">
      <section className="mt-16 flex bg-white">
        <div className="mr-64">
          <h1 className="text-5xl">
            Your next Sun-Glass <br></br>
            <span className="text-teal-500 font-bold">Your best SunGlass</span>
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
    </div>
  );
};

export default Home;
