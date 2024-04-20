import React from "react";
import Nav from "../component/nav";
import Footer from "../component/nav";
import CustomerReviews from "../component/CustomerReviews";
import CarCard from "../component/usedCarCard";
import Main_img from "../images/NewCars/peter-broomfield-m3m-lnR90uM-unsplash.png";
import Changan from "../images/NewCars/"
import banner from "../images/CarsDetailPageAssets/BANNER.png";
import { MdOutlineFindReplace } from "react-icons/md";
import { Link } from "react-router-dom";
function NewCar() {
  return (
    <>
      <Nav />
      <section className="flex w-full relative justify-center">
        <img
          src={Main_img}
          alt="Banner"
          className="w-full h-auto"
          style={{ maxWidth: "1800px" }}
        />
        <div className="w-[90%] mx-auto absolute top-1/2  transform -translate-y-1/2 z-30 text-white text-left">
          <div className="flex flex-col">
            <h1 className="md:text-4xl  sm:text-2xl text-sm font-bold">
              Explore the <br />
              <span className="md:text-4xl sm:text-3xl text-lg">
                Future of Driving
              </span>
            </h1>
          </div>
          <p className="md:text-sm text-xs md:font-bold font-normal py-2">
            {" "}
            Wide Range of New Vehicles
          </p>
          <div className="flex flex-row mt-6">
            <button className="save-btn flex items-center rounded-xl">
              Discover Now <MdOutlineFindReplace className="w-6 h-6 ml-2" />
            </button>
          </div>
        </div>
      </section>
      <section className="bg-sky-100">
        <div className="flex justify-center mx-auto w-2/3 py-5">
          <img src={banner} />
        </div>
        <div className="flex justify-center py-4 items-center">
          <h1 className="text-blue-800 border-l-4 border-blue-800 pl-4 text-4xl text-center font-bold">
            New Featured Car{" "}
          </h1>
        </div>
        <div className="py-6 grid lg:grid-cols-3 md:grid-cols-2 gap-4 w-[90%] mx-auto">
          <CarCard />
          <CarCard />
        </div>
        <div className="flex justify-center  py-5">
          <Link to="/cars" className="px-4 py-2 rounded-lg bg-gradient-blue">
            View All Featured Cars
          </Link>
        </div>
      </section>
      <section className="w-[90%] my-6 mx-auto">
        <div className="flex justify-center py-4 items-center">
          <h1 className="text-blue-800 border-l-4 border-blue-800 pl-4 text-4xl text-center font-bold">
            Browse New Cars By Brands
          </h1>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-6 sm:grid-col-4">
          <div className="bg-white flex items-center justify-center w-full rounded-xl  p-3 shadow-xl  hover:shadow-inner shadow-blue-500/50 " >
          <img src={} className="object-contain"/>
          </div>
        </div>
      </section>
      <section></section>
      <section></section>
      <CustomerReviews />
      <Footer />
    </>
  );
}
export default NewCar;
