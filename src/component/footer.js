import React from "react";
import Logo from "../images/HomepageAssets/logo.png";
import phone from "../images/HomepageAssets/phone.png";
import email from "../images/HomepageAssets/email.png";
import location from "../images/HomepageAssets/location.png";
import vector from "../images/HomepageAssets/Vector.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="h-8 w-full bg-gradient-to-b from-blue-700 to-cyan-500"></div>
      <div className="bg-sky-100">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 px-4 py-10 max-w-[1800px]  mx-auto justify-center">
          <div className="sm:ml-5 items-center lg:block lg:col-span-1 sm:col-span-3 flex">
            <div className="sm:ml-5">
              <Link to="/">
                <img
                  className="lg:p-4 sm:w-auto object-contain w-[80%]"
                  height={115}
                  width={155}
                  src={Logo}
                ></img>
              </Link>
            </div>
            <p className="lg:w-[100%] sm:ml-5 w-[65%] btn-text  items-center text-left">
              Your premier destination for listing your vehicles online - for
              free! Simplify your car selling process with{" "}
              <Link to="/">
                {" "}
                <span className="text-red-600">Cars. </span>
                <span className="text-blue-700">me</span>
              </Link>
              . No more unnecessary fees or complicated procedures. Our
              user-friendly interface allows you to effortlessly list your
              vehicles, reaching a broad audience of eager buyers. Experience
              the freedom of selling your cars without the hassle. Embrace
              efficiency and affordability by choosing{" "}
              <Link to="/">
                {" "}
                <span className="text-red-600">Cars. </span>
                <span className="text-blue-700">me</span>
              </Link>{" "}
              as your ultimate car listing partner. Join us today and watch
              your listings soar!
            </p>
          </div>
          <div className="mx-auto sm:mt-10 lg:w-[60%] w-[75%]">
            <h2 className="text-xl text-blue-800 sm:text-2xl  font-semibold py-5 mt-3  md:mt-0">
              Quick Links
            </h2>
            <div className="flex flex-col space-y-1 sm:space-y-1 my-6 text-sm text-left  no-underline sm:text-base">
              <Link to="/">
                <span className="hover:text-blue-600 hover:underline">
                  Home{" "}
                </span>
              </Link>
              <Link to="/cars">
                <span className="hover:text-blue-600 hover:underline">
                  Cars
                </span>
              </Link>
              <Link to="/NewCars">
                <span className="hover:text-blue-600 hover:underline">
                  New Cars
                </span>
              </Link>
              <Link to="/UsedCars">
                <span className="hover:text-blue-600 hover:underline">
                  Used cars
                </span>
              </Link>
              <Link to="/blog">
                <span className="hover:text-blue-600 hover:underline">
                  Blog
                </span>
              </Link>
              <Link to="/HowItWorks">
                <span className="hover:text-blue-600 hover:underline">
                  How It Works
                </span>
              </Link>
            </div>
          </div>
          <div className="mx-auto sm:mt-10 lg:mx-0 w-[75%] sm:w-full">
            <h2 className="text-xl text-left sm:ml-6  sm:text-2xl text-blue-800 font-semibold py-5 mt-3 md:mt-0">
              Get In Touch{" "}
            </h2>

            <div className="flex-1">
              <div className="block my-4 lg:ml-4 mx-auto">
                <div className="flex gap-3 items-center my-6">
                  <img src={location} className="object-contain w-7 h-8" />
                  <p className="mt-1 text-left flex sm:text-base text-sm">
                    Office 1707, Park Lane Tower, <br></br>
                    Business Bay, Dubai, UAE
                  </p>
                </div>

                <div className="flex gap-3 items-center my-6">
                  <img src={phone} className="object-contain w-7 h-7" />
                  <p className="text-base">
                    <Link to="#"> Phone: +971 4 333 1005</Link>
                  </p>
                </div>
                <div className="flex gap-3 items-center my-6">
                  <img src={email} className="object-contain w-7 h-7" />
                  <p className="text-base">
                    <Link to="#"> Email: info@imperial.me</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:mx-0 mx-auto sm:mt-10 w-[75%] sm:w-full">
            <h2 className="text-xl sm:text-2xl py-5 mt-3 text-left text-blue-800 font-semibold">
              Subscribe
            </h2>
            <div className="flex my-6 text-sm sm:text-base">
              <div>
                <p className="mb-5">Get The Latest Updates And Offers</p>
                <div className="flex mt-2">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control rounded-0 block w-full p-2 text-base font-normal bg-sky-200 leading-6 text-gray-800 focus:outline-none focus:ring hover:ring focus:ring-blue-300 ring-offset-0 rounded-none transition duration-150 ease-in-out"
                    style={{ border: "0px" }}
                  />
                  <button
                    aria-label="Subscribe"
                    className="rounded-none inline-block font-normal leading-6  select-none border-transparent py-2 px-4 text-base  transition duration-150 ease-in-out bg-gradient-to-b from-blue-700 to-cyan-500  font-semibold text-base  text-white"
                  >
                    <img src={vector} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-4">
          <p className="text-center">
            © Copyrights 2024{" "}
            <Link to="/">
              {" "}
              <span className="text-red-600">Cars. </span>
              <span className="text-blue-700">me</span>
            </Link>{" "}
            - All rights <br /> reserved.
          </p>
        </div>
      </div>
    </>
  );
}
export default Footer;
