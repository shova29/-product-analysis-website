import React from "react";
import PageNotFoundImg from "../../Assets/Images/page-not-found.png";

const PageNotFound = () => {
  return (
    <div className="">
      <img
        className="mt-12 mx-auto lg:w-2/4 md:w-1/3 sm:w-1/5"
        src={PageNotFoundImg}
        alt="PageNotFoundImg"
      />
      <div className="pl-10 mt-12"> </div>
    </div>
  );
};

export default PageNotFound;
