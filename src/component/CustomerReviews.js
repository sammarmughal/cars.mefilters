import React, { useState } from "react";
import bilal from "../images/HomepageAssets/bilal.png";
import { FaStar } from "react-icons/fa";
import banner from "../images/HomepageAssets/banner241.png";
import PageIndicator from "../component/pageindicator";

const CustomerReviews = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleDotClick = (newPage) => {
    setCurrentPage(newPage);
  };
  const ReviewCard = () => {
    return (
      <>
        <div className="bg-white max-w-[540px] rounded-3xl shadow-lg hover:shadow-inner ">
          <div className="flex justify-center p-6">
            <img className="rounded-b-2xl" src={bilal}></img>
          </div>
          <div className="p-4">
            <div className="flex pb-2 justify-center">
              <h1 className="text-blue-800 text-left mb-2 sm:text-center font-bold text-2xl">
                Muhammad Bilal
              </h1>
            </div>
            <div className="flex justify-center gap-2">
              <FaStar className="text-amber-500" />
              <FaStar className="text-amber-500" />
              <FaStar className="text-amber-500" />
              <FaStar className="text-amber-500" />
              <FaStar className="text-amber-500" />
            </div>
          </div>
          <div className="mb-2 p-4">
            <p className="text-center text-blue-800 md:py-2">
              {" "}
              I recently used this car-selling platform to list my vehicle, and
              the experience was outstanding. The user-friendly interface made
              listing my car a breeze, and the professional marketing tools
              ensured my car stood out.
            </p>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="w-11/12 mx-auto max-w-[1800px] my-10">
        {/* <div className="flex justify-center py-4 items-center">
          <h1 className="text-blue-800 border-l-4 border-blue-800 pl-4 lg:text-4xl sm:text-3xl text-xl text-center font-bold">
            Customer Reviews
          </h1>
        </div>
        <div className="md:grid grid-cols-3  hidden  my-6 gap-5">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
        <div className="block md:hidden">
          <div className="grid grid-cols-1 md:hidden my-6 gap-5">
            <div className={`${currentPage === 0 ? "block" : "hidden"}`}>
              <ReviewCard />
            </div>
            <div className={`${currentPage === 1 ? "block" : "hidden"}`}>
              <ReviewCard />
            </div>
            <div className={`${currentPage === 2 ? "block" : "hidden"}`}>
              <ReviewCard />
            </div>
          </div>
          <PageIndicator
            pagerState={{ currentPage, pageCount: 3 }}
            className="my-4"
            onClick={handleDotClick}
          />
        </div> */}
        <a href="https://spareparts.me/" className="flex justify-center py-5 my-5" target="_blank" rel="noopener noreferrer">
          <img src={banner} alt="banner" />
        </a>
      </div>
    </>
  );
};
export default CustomerReviews;
