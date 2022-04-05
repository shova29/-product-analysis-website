import React from "react";
import about from "../../Assets/Images/about.png";

const About = () => {
  return (
    <div
      className="grid lg:grid-cols-2 sm:grid-cols-1 justify-items-center
    items-center
    text-center mt-12
    mb-12"
    >
      <div className="flex flex-col">
        {" "}
        <img src={about} alt="About" />
      </div>
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          LET’S KEEP IN TOUCH
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          We’re very active on our social media platforms. Like and follow to
          stay updated with us.
        </p>
      </div>
    </div>
  );
};

export default About;
