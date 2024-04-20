import React, { useState, useEffect, } from "react";
import Nav from "../component/nav";
import Footer from "../component/footer";
import CarCard from "../component/usedCarCard";
import CustomerReviews from "../component/CustomerReviews";
import Logo from "../images/HomepageAssets/logo.png";
import banner from "../images/CarsDetailPageAssets/BANNER.png";
import mercedes from "../images/CarsDetailPageAssets/mercedes-small.png";
import calendar from "../images/HomepageAssets/calender-svgrepo-com.png";
import meter from "../images/HomepageAssets/meter-free-2-svgrepo-com.png";
import group from "../images/HomepageAssets/Group99.png";
import engine from "../images/HomepageAssets/engine-motor-svgrepo-com.png";
import gearLiver from "../images/HomepageAssets/GearLiver-1.png";
import fireSvgrepo from "../images/HomepageAssets/fire-svgrepo-com.png";
import bilal from "../images/HomepageAssets/bilal.png";
import phone from "../images/CarsDetailPageAssets/phone.png";
import email from "../images/CarsDetailPageAssets/email.png";
import car from "../images/HomepageAssets/car.png";
import whatsapp from "../images/CarsDetailPageAssets/whatsapp-svgrepo-com.png";
import stars from "../images/CarsDetailPageAssets/stars.png";
import ContentLoader from "react-content-loader";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const CarsDetail = () => {
  const { slug } = useParams();
  const [carDetail, setCarDetail] = useState(null);
  const [selectImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch(`https://sandbox.cars.me/api/used-cars/${slug}`)
      .then((response) => response.json())
      .then((car) => {
        setCarDetail(car);
        if (car && car.data && car.data.postAds && car.data.postAds.images && car.data.postAds.images.length > 0) {
          setSelectedImage(car.data.postAds.images[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching car detail:", error);
      });
  }, [slug]);

  if (!carDetail) {
    return <ContentLoader
      speed={2}
      width={350}
      height={475}
      viewBox="0 0 350 475"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="10" ry="10" width="350" height="200" />
      <rect x="20" y="220" rx="0" ry="0" width="200" height="20" />
      <rect x="20" y="250" rx="0" ry="0" width="120" height="20" />
      <rect x="20" y="290" rx="0" ry="0" width="80" height="20" />
      <rect x="20" y="330" rx="0" ry="0" width="80" height="20" />
      <rect x="20" y="370" rx="0" ry="0" width="80" height="20" />
      <rect x="20" y="410" rx="0" ry="0" width="80" height="20" />
      <rect x="20" y="450" rx="0" ry="0" width="80" height="20" />
    </ContentLoader>;
  }

  return (
    <>
      <section className="max-w-[1800px] mx-auto">

        <Nav></Nav>
        {/* <section className="bg-sky-100">
          <div className="flex justify-center opacity-50 pt-6">
            <img src={Logo} className="w-1/5" height={300} width={350} />
          </div>
          <h1 className="text-blue-800 py-5  lg:text-4xl sm:text-3xl text-xl  text-center font-bold">
            Discover the Perfect Ride for You
          </h1>
          <div className="flex justify-center mx-auto md:w-6/12 sm:w-3/4 w-10/12 py-8">
            <input
              type="text"
              placeholder="Search by Keyword (e.g. Toyota Cars)"
              className="form-control rounded-l-lg block w-full p-2 py-4 md:text-lg sm:text-sm text-xs font-normal px-4 bg-white leading-6 text-gray-800 focus:outline-none  focus:ring hover:ring focus:ring-blue-300 ring-offset-0  transition duration-150 ease-in-out"
              style={{ border: "0px" }}
            />
            <button
              aria-label="Subscribe"
              className="inline-block font-normal leading-6 ml-[-4px] select-none border-transparent py-2 px-4 text-lg  transition duration-150 ease-in-out bg-gradient-blue font-semibold text-base"
            >
              {""}
              Search
            </button>
          </div>
        </section> */}
        <a href="https://spareparts.me/" target="_blank" rel="noopener noreferrer" className="flex justify-center mx-auto w-2/3 py-5 my-5">
          <img src={banner} />
        </a>
        <>
          <section className="lg:w-[80%] sm:w-[90%] mx-auto">
            <div className="sm:block hidden">
              <h1 className="text-blue-800 font-medium text-2xl text-left py-2">
                {carDetail.data.postAds.make} {carDetail.data.postAds.make_model} {carDetail.data.postAds.year}
              </h1>
              <p className="text-blue-800 text-left pb-2">
                Posted {carDetail.data.postAds.created_at}
              </p>
            </div>
            <div className="flex gap-5 justify-between">
              <div className="flex flex-col gap-4">
                <div className="max-h-[415px] sm:w-[96%] mx-auto justify-center">
                  {selectImage && <img src={selectImage} className="rounded-xl max-h-[415px] w-full h-auto object-fit" />}
                </div>
                <div className="flex flex-wrap mx-auto justify-center gap-5">
                  {carDetail.data.postAds.images && carDetail.data.postAds.images.map((image, index) => (
                    <img key={index} src={image} className={`rounded-xl sm:w-28 sm:h-28 w-24 h-24 flex cursor-pointer ${selectImage === image ? 'border-2 border-blue-500 rounded-lg' : ''}`} onClick={() => setSelectedImage(image)} alt={`Car Image ${index}`} />
                  ))}
                </div>
                <div className="flex flex-col gap-4 ">
                  {/* You can render additional images here */}
                </div>
              </div>
              <div className="lg:flex hidden flex-col gap-5">
                <div className="bg-white hover:shadow-inner w-full rounded-xl  p-4 sm:flex hidden flex-col shadow-xl  ">
                  <h1 className="text-blue-800 text-left py-2 md:text-3xl text-xl font-normal">
                    {" "}
                    Price
                  </h1>
                  <h1 className="text-blue-800 text-left py-2 md:text-3xl text-xl font-bold cursor-pointer">
                    AED {carDetail.data.postAds.price}
                  </h1>
                </div>
                <div className="bg-white hover:shadow-inner w-full rounded-xl  p-3 hidden sm:flex flex-col shadow-xl  ">
                  <div className="flex md:flex-row flex-col gap-3">
                    <img src={bilal} className="" height={100} width={100} />
                    <div className="flex flex-col  py-3 gap-3">
                      <h2 className="text-blue-800 text-sm">
                        Posted By:
                        <span className="text-xs"> Bilal Motors LLC </span>
                      </h2>
                      <img src={stars} className="" height={100} width={100} />
                    </div>
                  </div>
                  <div className="flex  flex-col py-5 gap-4">
                    <div className="border-1 border lg:mx-4 border-blue-700 lg:px-8 px-3 py-2 text-blue-800 hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 flex justify-between rounded-xl ">
                      <div className="flex items-center p-2 cursor-pointer">
                        <img src={phone} width={35} height={35} className="h-8 object-contain" />
                        <p className="pl-4 text-sm font-medium md:text-nowrap">
                          {carDetail.data.postAds.mobile_no}
                        </p>
                      </div>
                    </div>
                    <div className="border-1 border lg:mx-4 border-blue-700 lg:px-8 px-3 py-2 text-blue-800 hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500  flex justify-between rounded-xl ">
                      <div className="flex items-center p-2 cursor-pointer">
                        <img
                          src={whatsapp}
                          width={35}
                          height={35}
                          className="h-8 object-contain"
                        />
                        <p className="pl-4 text-sm font-medium text-nowrap">
                          What's App
                        </p>
                      </div>
                    </div>
                    <div className="border-1 border lg:mx-4 border-blue-700 lg:px-8 px-3 py-2 text-blue-800 hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 flex justify-between rounded-xl ">
                      <div className="flex items-center p-2">
                        <img src={email} width={35} height={35} className="h-8 object-contain" />
                        <button className="pl-4 text-sm font-medium text-nowrap cursor-pointer">
                          Send Enquiry{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="w-[96%] mx-auto sm:hidden block">
            <div className="bg-white hover:shadow-inner rounded-xl w-full justify-around  my-10 p-2  flex flex-row shadow-xl ">
              <div className="block items-center">
                <h1 className="text-blue-800 font-medium text-2xl text-left py-2">
                  {carDetail.data.postAds.make} {carDetail.data.postAds.make_model} {carDetail.data.postAds.year}

                </h1>
                <p className="text-blue-800 text-left pb-2">
                  {carDetail.data.postAds.created_at}
                </p>
              </div>
              <div className="flex items-start">
                <h1 className="text-blue-800 text-left py-2 text-xl font-bold cursor-pointer">
                  AED {carDetail.data.postAds.price}
                </h1>
              </div>
            </div>
            <div className="bg-white hover:shadow-inner w-full rounded-xl  p-2  flex flex-row items-center gap-2 shadow-xl  ">
              <div className="flex  flex-row gap-2">
                <img src={bilal} className="p-1" height={100} width={100} />
                <div className="flex flex-col  py-3 gap-3">
                  <h2 className="text-blue-800 text-sm lg:text-nowrap">
                    Posted By:
                    <span className="text-xs"> Bilal Motors LLC </span>
                  </h2>
                  <img src={stars} className="" height={80} width={80} />
                </div>
              </div>
              <div className="flex  flex-row  py-5 gap-3">
                <div>
                  <div className="border-1 border  border-blue-700 py-1 px-2 text-blue-800 hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 flex justify-between rounded-xl ">
                    <div className="flex items-center">
                      <img src={phone} width={35} height={35} className="h-8 object-contain" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="border-1 border  border-blue-700 py-1 px-2 text-blue-800 hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500  flex justify-between rounded-xl ">
                    <div className="flex items-center">
                      <img src={whatsapp} width={35} height={35} className="h-8 object-contain" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="border-1 border  border-blue-700  px-2 py-1 text-blue-800 hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 flex justify-between rounded-xl ">
                    <div className="flex items-center">
                      <img src={email} width={35} height={35} className="h-8 object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="lg:w-[85%] sm:w-[96%] flex sm:flex-row flex-col gap-5 py-6 mx-auto">
            <div className="sm:w-[70%] w-[96%] mx-auto">
              <h1 className="text-blue-800 text-2xl text-left sm:block hidden font-bold">
                Item Overview
              </h1>
              <div className="sm:grid grid-cols-3 hidden lg:grid-cols-6 w-full py-6 gap-3">
                <div className="bg-white hover:shadow-inner rounded-xl w-full justify-center items-center p-2 flex flex-col shadow-xl  ">
                  <img src={calendar} />
                  <p className="text-red-600 py-2 text-lg">
                    {" "}
                    {carDetail.data.postAds.year}
                  </p>
                </div>
                <div className="bg-white hover:shadow-inner rounded-xl w-full justify-center items-center p-2 flex flex-col shadow-xl  ">
                  <img src={meter} />
                  <p className="text-red-600 py-2 text-lg text-center">
                    {" "}
                    {carDetail.data.postAds.mileage} Km
                  </p>
                </div>
                <div className="bg-white hover:shadow-inner rounded-xl w-full justify-center items-center p-2 flex flex-col shadow-xl  ">
                  <img src={group} />
                  <p className="text-red-600 py-2 text-lg text-center">
                    {" "}
                    4 People
                  </p>
                </div>
                <div className="bg-white hover:shadow-inner rounded-xl w-full justify-center items-center p-2 flex flex-col shadow-xl  ">
                  <img src={engine} />
                  <p className="text-red-600 py-2 text-lg">
                    {carDetail.data.postAds.engine_capacity}cc
                  </p>
                </div>
                <div className="bg-white hover:shadow-inner rounded-xl w-full justify-center items-center p-2 flex flex-col shadow-xl  ">
                  <img src={gearLiver} />
                  <p className="text-red-600 py-2 text-lg capitalize">
                    {" "}
                    {carDetail.data.postAds.transmission}
                  </p>
                </div>
                <div className="bg-white hover:shadow-inner rounded-xl w-full justify-center items-center p-2 flex flex-col shadow-xl  ">
                  <img src={fireSvgrepo} />
                  <p className="text-red-600 py-2 text-lg capitalize">
                    {" "}
                    {carDetail.data.postAds.engine_type}
                  </p>
                </div>
              </div>
              <section className="my-6">
                <div className="bg-white hover:shadow-inner w-full rounded-xl  p-4 flex flex-col shadow-xl  ">
                  <h1 className="text-blue-800 text-left py-2 text-2xl font-normal">
                    {" "}
                    Additional Details{" "}
                  </h1>
                  <div className="p-5 flex flex-col  gap-4">
                    <div className="flex justify-between text-slate-600  pb-2 border-b border-slate-800">
                      <p>Body Type</p>
                      <p className="capitalize"></p>
                    </div>
                    <div className="flex justify-between text-slate-600  pb-2 border-b border-slate-800">
                      <p>Fuel Type</p>
                      <p className="capitalize">{carDetail.data.postAds.engine_type}</p>
                    </div>
                    <div className="flex justify-between text-slate-600  pb-2 border-b border-slate-800">
                      <p>Seller Type</p>
                      <p className="capitalize">Dealer</p>
                    </div>
                    <div className="flex justify-between text-slate-600  pb-2 border-b border-slate-800">
                      <p>Seating Capacity</p>
                      <p className="capitalize">
                        4 People
                      </p>
                    </div>
                    <div className="flex justify-between text-slate-600  pb-2 border-b border-slate-800">
                      <p>Transmission Type</p>
                      <p className="capitalize"> {carDetail.data.postAds.transmission}</p>
                    </div>
                    <div className="flex justify-between text-slate-600  pb-2 border-b border-slate-800">
                      <p>Engine Capacity</p>
                      <p className="capitalize">
                        {carDetail.data.postAds.engine_capacity}cc
                      </p>
                    </div>
                    <div className="flex justify-between text-slate-600  pb-2 border-b border-slate-800">
                      <p>Technical Features</p>
                      <p className="capitalize">Cruise Control, Power Steering</p>
                    </div>
                    <div className="flex justify-between text-slate-600  pb-2 border-b border-slate-800">
                      <p> Horsepower</p>
                      <p className="capitalize">1500</p>
                    </div>
                    <div className="flex justify-between text-slate-600  pb-2 border-b border-slate-800">
                      <p>Number of Cylinders</p>
                      <p className="capitalize">
                        4
                      </p>
                    </div>
                    <div className="flex justify-between text-slate-600  pb-2 border-b border-slate-800">
                      <p>Exterior Color</p>
                      <p className="capitalize">{carDetail.data.postAds.exterior_color}</p>
                    </div>
                    <div className="flex justify-between text-slate-600  pb-2 border-b border-slate-800">
                      <p>Warrenty</p>
                      <p className="capitalize">No Warranty</p>
                    </div>
                    <div className="flex justify-between text-slate-600  pb-2 border-b border-slate-800">
                      <p>Target Market</p>
                      <p className="capitalize">UAE</p>
                    </div>
                  </div>
                  <div className="text-right text-slate-600 text-sm px-5">
                    <p>
                      {carDetail.data.postAds.features}
                    </p>
                  </div>
                  <div className="flex mx-5 pt-3 text-slate-600  pb-2 border-b border-slate-800">
                    <p>Extras</p>
                  </div>
                </div>
              </section>
              <section className="bg-white hover:shadow-inner w-full rounded-xl my-6  p-6 flex flex-col shadow-xl  ">
                <h1 className="text-blue-800 text-left py-2 text-2xl font-normal">
                  {" "}
                  Description{" "}
                </h1>
                <div className="text-left my-5 text-slate-600 text-sm">
                  <p>- &#160;{carDetail.data.postAds.description}</p>
                </div>
                <div className="flex items-end justify-end">
                  <div className="cursor-pointer bg-gradient-to-b from-blue-700 to-cyan-500 flex items-center py-1 px-5 shadow-lg   justify-center text-white rounded-2xl ">
                    <button className="text-center  flex items-center text-sm cursor-pointer">
                      See Full Description...{" "}
                    </button>
                  </div>
                </div>
              </section>
            </div>
            <div className="sm:w-[30%] w-[96%] mx-auto flex flex-col gap-5">
              <div className="bg-white hover:shadow-inner w-full rounded-xl  p-4 lg:hidden sm:flex hidden flex-col shadow-xl  ">
                <h1 className="text-blue-800 text-left py-2 md:text-3xl text-xl font-normal">
                  {" "}
                  Price
                </h1>
                <h1 className="text-blue-800 text-left py-2 md:text-3xl text-xl font-bold cursor-pointer">
                  AED {carDetail.data.postAds.price}
                </h1>
              </div>
              <div className="bg-white hover:shadow-inner w-full rounded-xl  p-3 hidden lg:hidden sm:flex flex-col shadow-xl  ">
                <div className="flex md:flex-row flex-col gap-3">
                  <img src={bilal} className="" height={100} width={100} />
                  <div className="flex flex-col  py-3 gap-3">
                    <h2 className="text-blue-800 text-sm lg:text-nowrap">
                      Posted By:
                      <span className="text-xs"> Bilal Motors LLC </span>
                    </h2>
                    <img src={stars} className="" height={100} width={100} />
                  </div>
                </div>
                <div className="flex  flex-col py-5 gap-4">
                  <div className="border-1 border lg:mx-4 border-blue-700 lg:px-8 px-3 py-2 text-blue-800 hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 flex justify-between rounded-xl ">
                    <div className="flex items-center p-2 cursor-pointer">
                      <img src={phone} width={35} height={35} className="h-8 object-contain" />
                      <p className="pl-4 text-sm font-medium md:text-nowrap">
                        {carDetail.data.postAds.mobile_no}
                      </p>
                    </div>
                  </div>
                  <div className="border-1 border lg:mx-4 border-blue-700 lg:px-8 px-3 py-2 text-blue-800 hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500  flex justify-between rounded-xl ">
                    <div className="flex items-center p-2 cursor-pointer">
                      <img
                        src={whatsapp}
                        width={35}
                        height={35}
                        className="h-8 object-contain"
                      />
                      <p className="pl-4 text-sm font-medium text-nowrap">
                        What's App
                      </p>
                    </div>
                  </div>
                  <div className="border-1 border lg:mx-4 border-blue-700 lg:px-8 px-3 py-2 text-blue-800 hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 flex justify-between rounded-xl ">
                    <div className="flex items-center p-2">
                      <img src={email} width={35} height={35} className="h-8 object-contain" />
                      <button className="pl-4 text-sm font-medium text-nowrap cursor-pointer">
                        Send Enquiry{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white hover:shadow-inner w-full rounded-xl  p-3 flex flex-col shadow-xl">
                <div className="flex flex-col gap-2 md:p-4 p-2">
                  <h1 className="text-blue-800 text-left py-2 md:text-3xl text-xl font-normal">
                    {" "}
                    Location
                  </h1>
                  <h2 className="text-blue-800 md:text-lg text-nowrap">
                    Al Murar, Dubai, UAE
                  </h2>
                </div>
                <div className="h-60">
                  <iframe
                    className="rounded-xl map md:px-4 md:p-4"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13603.897520700484!2d74.3641293!3d31.5248636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2996ebf1e1c519!2sX-EFFECTIVE!5e0!3m2!1sen!2s!4v1646999703464!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <div className="flex items-center py-3 shadow-lg   justify-center bg-gradient-blue">
                <button className="text-center flex items-center text-lg">
                  Report This Ad{" "}
                </button>
              </div>
            </div>
          </section>
        </>
        <section className="my-8 lg:w-[85%] w-[96%]  mx-auto">
          <h1 className="text-blue-800 text-2xl my-4 text-left  font-bold">
            Similar Ads
          </h1>
          <div className="grid justify-center mx-auto lg:grid-cols-3 md:grid-cols-2 gap-6">
            <CarCard />
            <CarCard />
            <CarCard />
          </div>
          <div className="flex justify-center pt-5 my-5">
            <Link to="/cars" className="px-4 py-2 rounded-lg bg-gradient-blue">
              View More
            </Link>
          </div>
        </section>
        <div className="bg-sky-100 my-4">
          <div className="w-11/12 flex justify-between mx-auto">
            <div>
              <Link to="/">
                <img className="p-4 sm:mt-5  w-[55%] object-contain" height={100} width={100} src={Logo}></img>
              </Link>
              <h1 className="text-blue-800 border-l-4 font-bold sm:pl-4 pl-2 border-blue-800 lg:text-4xl sm:text-2xl lg:mt-10 text-left">
                Sell Your Car In Best Price <br /> At Cars.Me
              </h1>
              <div className="flex lg:pt-5 my-5">
                <p className="px-4 py-2 bg-gradient-blue">Register Your Cars</p>
              </div>
            </div>
            <div className="sm:w-1/2 w-[60%] flex justify-end">
              <img
                src={car}
                className="ease-in-out object-scale-down duration-500"
              />
            </div>
          </div>
        </div>
        <CustomerReviews />
        <Footer />
      </section>
    </>
  );
};
export default CarsDetail;
