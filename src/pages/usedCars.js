import React, { useState } from "react";
import Nav from "../component/nav";
import Footer from "../component/footer";
import CustomerReviews from "../component/CustomerReviews";
import CarCard from "../component/usedCarCard";
import Main_img from "../images/UsedCars/arvid-skywalker-ZvVNJOnV3ho-unsplash.png";
import Changan from "../images/NewCars/Changan-Symbol.png";
import Chery from "../images/NewCars/Chery-Logo-1997.png";
import Chevrolet from "../images/NewCars/Chevrolet-Logo.png";
import Daewoo from "../images/NewCars/Daewoo_logo_PNG3.png";
import Daihatsu from "../images/NewCars/Daihatsu-Logo.png";
import Dodge from "../images/NewCars/Dodge-Logo.png";
import FAW from "../images/NewCars/FAW-logo.png";
import Fiat from "../images/NewCars/FIAT.png";
import Add from "../images/NewCars/add.png";
import ford from "../images/NewCars/ford.png";
import Haval from "../images/NewCars/Haval_logo_PNG_(7).png";
import Toyota from "../images/NewCars/toyota-logo-png-20191.png";
import banner from "../images/CarsDetailPageAssets/BANNER.png";
import technology from "../images/NewCars/self-driving-car.png";
import warranty from "../images/NewCars/warranty-term-svgrepo-com.png";
import secure from "../images/NewCars/secure-svgrepo-com.png";
import fuel from "../images/UsedCars/tesla-model-x-svgrepo-com.png";
import wheel from "../images/UsedCars/alloy-wheel-wheel-svgrepo-com.png";
import customize from "../images/UsedCars/history-round-svgrepo-com.png";
import shield from "../images/NewCars/shield.png";
import Layer2 from "../images/NewCars/Layer2.png";
import chooseus_car from "../images/UsedCars/redcar.png";
import permissions from "../images/NewCars/permissions-svgrepo-com.png";
import double_arrow from "../images/NewCars/double-arrow-outline-svgrepo-com.png";
import support from "../images/HomepageAssets/support-svgrepo-com.png";
import chat from "../images/NewCars/fc-chat-feature2-svgrepo-com.png";
import speaker from "../images/HomepageAssets//marketing-mail-svgrepo-com.png";
import box from "../images/HomepageAssets/Page-2.png";
import PageIndicator from "../component/pageindicator";
import BenefitCard from "../component/BenefitCard";
import { MdOutlineFindReplace } from "react-icons/md";
import { Link } from "react-router-dom";
function UsedCars() {
  const [currentPage, setCurrentPage] = useState(0);

  const handleDotClick = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
        <Nav />
        <section className="flex w-full relative justify-center">
          <div className="w-full h-full absolute inset-0 bg-black opacity-50"></div>
          <img
            src={Main_img}
            alt="Banner"
            className="w-full h-auto"
            style={{ maxWidth: "2800px" }}
          />
          <div className="w-[90%] mx-auto max-w-[1800px] absolute top-1/2  transform -translate-y-1/2 z-30 text-white text-left">
            <div className="flex flex-col">
              <h1 className="md:text-4xl  sm:text-2xl text-sm font-bold">
                Explore Our <br />
                <span className="md:text-4xl sm:text-3xl text-sm">
                  Quality Used Cars Collection
                </span>
              </h1>
            </div>
            <p className="md:text-sm text-xs md:font-bold font-normal py-2">
              {" "}
              Welcome users and highlight the variety and quality of used cars available for sale</p>
            <div className="flex flex-row sm:mt-6">
              <button className="save-btn btn-text flex items-center sm:rounded-xl">
                Discover Now <MdOutlineFindReplace className="sm:w-6 sm:h-6 h-5 w-5 ml-2" />
              </button>
            </div>
          </div>
        </section>
        <section className="bg-sky-100">
          <div className="max-w-[1800px] mx-auto">
          <a href="https://spareparts.me/" className="flex justify-center mx-auto w-2/3 py-5 cursor-pointer" target="_blank" rel="noopener noreferrer">
            <img src={banner} />
          </a>
            <div className="flex justify-center py-4 items-center">
              <h1 className="text-blue-800 border-l-4 border-blue-800 pl-4 lg:text-4xl sm:text-3xl text-xl text-center font-bold">
                New Featured Car{" "}
              </h1>
            </div>
            <div className="lg:w-[90%] w-[95%] mx-auto grid mx-auto justify-center items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-6 lg:gap-x-5 gap-x-3 gap-y-5">
              <div className="mx-auto"><CarCard /></div>
              <div className="mx-auto"><CarCard /></div>
              <div className="mx-auto"><CarCard /></div>
              <div className="mx-auto"><CarCard /></div>
              <div className="mx-auto"><CarCard /></div>
              <div className="mx-auto"><CarCard /></div>
              <div className="mx-auto"><CarCard /></div>
              <div className="mx-auto"><CarCard /></div>
            </div>
            <div className="flex justify-center  py-5">
              <Link to="/cars" className="px-4 py-2 btn-text rounded-lg bg-gradient-blue">
                View More
              </Link>
            </div>
          </div>
        </section>
        <section className="w-[90%] max-w-[1800px] my-6 mx-auto">
          <div className="flex justify-center py-4 items-center">
            <h1 className="text-blue-800 border-l-4 border-blue-800 pl-4 lg:text-4xl sm:text-3xl text-xl text-center font-bold">
              Browse New Cars By Brands
            </h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 my-6 sm:grid-col-4">
            <div className="bg-white flex items-center justify-center w-full rounded-xl p-3 shadow-xl hover:shadow-inner">
              <Link to="/brands-internal"> <img src={Changan} className="object-contain" /></Link>
            </div>
            <div className="bg-white flex items-center justify-center w-full rounded-xl p-3 shadow-xl hover:shadow-inner">
              <Link to="/brands-internal">
                <img src={Fiat} className="object-contain" />
              </Link>
            </div>
            <div className="bg-white flex items-center justify-center w-full rounded-xl p-3 shadow-xl hover:shadow-inner">
              <Link to="/brands-internal">
                <img src={ford} className="object-contain" />
              </Link>
            </div>
            <div className="bg-white flex items-center justify-center w-full rounded-xl p-3 shadow-xl hover:shadow-inner">
              <Link to="/brands-internal">
                <img src={Toyota} className="object-contain" />
              </Link>
            </div>
            <div className="bg-white flex items-center justify-center w-full rounded-xl p-3 shadow-xl hover:shadow-inner">
              <Link to="/brands-internal">
                <img src={Haval} className="object-contain" />
              </Link>
            </div>
            <div className="bg-white flex items-center justify-center w-full rounded-xl p-3 shadow-xl hover:shadow-inner">
              <Link to="/brands-internal">
                <img src={Dodge} className="object-contain" />
              </Link>
            </div>
            <div className="bg-white flex items-center justify-center w-full rounded-xl p-3 shadow-xl hover:shadow-inner">
              <Link to="/brands-internal">
                <img src={Chery} className="object-contain" />
              </Link>
            </div>
            <div className="bg-white flex items-center justify-center w-full rounded-xl p-5 shadow-xl hover:shadow-inner">
              <Link to="/brands-internal">
                <img src={FAW} className="object-contain" /></Link>
            </div>
            <div className="bg-white flex items-center justify-center w-full rounded-xl p-3 shadow-xl hover:shadow-inner">
              <Link to="/brands-internal">
                <img src={Chevrolet} className="object-contain" /></Link>
            </div>
            <div className="bg-white flex items-center justify-center w-full rounded-xl p-3 shadow-xl hover:shadow-inner">
              <Link to="/brands-internal">
                <img src={Daewoo} className="object-contain" /></Link>
            </div>
            <div className="bg-white flex items-center justify-center w-full rounded-xl p-3 shadow-xl hover:shadow-inner">
              <Link to="/brands-internal">
                <img src={Daihatsu} className="object-contain" /></Link>
            </div>
            <div className="bg-white flex items-center justify-center w-full rounded-xl p-3 shadow-xl hover:shadow-inner">
              <Link to="/brands-internal">
                <img src={Add} className="object-contain" /></Link>
            </div>
          </div>
        </section>
        <section className="pt-6">
          <div className="bg-sky-100  my-6">
            <div className="w-11/12  max-w-[1800px] flex-col  mx-auto">
              <div className="flex mt-6 py-8  justify-center items-center">
                <h1 className="text-blue-800 border-l-4 border-blue-800 pl-4 lg:text-4xl sm:text-3xl text-xl text-center font-bold">
                  Benefits for Sellers
                </h1>
              </div>
              <div className="sm:grid hidden lg:grid-cols-4 sm:grid-cols-3  py-20 mx-8 my-6 gap-x-5 gap-y-28">
                <BenefitCard
                  src={Layer2}
                  height={123}
                  width={349}
                  title="Cost Savings"
                  description="Used cars have already undergone the steepest part of their depreciation curve, allowing buyers to avoid the significant initial depreciation that new cars experience."
                />
                <BenefitCard
                  src={shield}
                  height={147}
                  width={157}
                  title="Lower Insurance Costs"
                  description="Insurance premiums for used cars are typically lower than those for new cars, leading to potential cost savings over time."
                />
                <BenefitCard
                  src={warranty}
                  title="Reduced Registration"
                  description=" In many regions, registration fees are based on the vehicle's value, meaning that buyers of used cars often pay lower registration fees than those buying new cars."
                />
                <BenefitCard
                  src={fuel}
                  title="Model Variety"
                  description="Buying used opens up a wide range of models, allowing buyers to choose from various makes, models, and features that may be more affordable than their new counterparts."
                />
                <BenefitCard
                  src={customize}
                  title="Access to History"
                  description="Buyers can access vehicle history reports, providing insights into the car's past, including accidents, service records, and odometer readings."
                />
                <BenefitCard
                  src={technology}
                  title="Manufacturer Guarantee"
                  description="Many manufacturers offer certified pre-owned (CPO) programs, ensuring that certain used cars undergo thorough inspections and come with extended warranties."
                />
                <BenefitCard
                  src={wheel}
                  title="Known Reliability"
                  description="Many used cars have established reputations for reliability, making it easier for buyers to assess the vehicle's long-term performance based on historical data."
                />
                <BenefitCard
                  src={secure}
                  title="Stable Insurance Rates"
                  description=" Insurance rates for used cars tend to remain stable over time, providing more predictable costs for budget-conscious buyers."
                />
              </div>
              <div className="block  py-20 mx-8 my-6 sm:hidden">
                <div className={`${currentPage === 0 ? "block" : "hidden"}`}>
                  <BenefitCard
                    src={technology}
                    height={123}
                    width={349}
                    title="Latest Technology"
                    description="New cars often come equipped with the latest technology features, including advanced safety systems, infotainment systems, and connectivity options."
                  />
                </div>
                <div className={`${currentPage === 1 ? "block" : "hidden"}`}>
                  <BenefitCard
                    src={warranty}
                    height={147}
                    width={157}
                    title="Warranty Coverage"
                    description="Purchasing a new car usually comes with a manufacturer's warranty, providing peace of mind and financial protection for a specified period or mileage."
                  />
                </div>
                <div className={`${currentPage === 2 ? "block" : "hidden"}`}>
                  <BenefitCard
                    src={secure}
                    title="Reliability and Longevity"
                    description="New cars are less likely to experience breakdowns and issues compared to older models. They often come with modern engineering and are built to last."
                  />
                </div>
                <div className={`${currentPage === 3 ? "block" : "hidden"}`}>
                  <BenefitCard
                    src={fuel}
                    title="Fuel Efficiency"
                    description="Newer models often feature improved fuel efficiency and eco-friendly technologies, helping you save money on fuel costs and reduce your environmental impact."
                  />
                </div>
                <div className={`${currentPage === 4 ? "block" : "hidden"}`}>
                  <BenefitCard
                    src={customize}
                    title="Customization Options"
                    description="Buyers can often personalize their new cars, choosing colors, trims, and optional features to suit their preferences and lifestyle."
                  />
                </div>
                <div className={`${currentPage === 5 ? "block" : "hidden"}`}>
                  {" "}
                  <BenefitCard
                    src={shield}
                    title="Safety Features"
                    description="New cars are equipped with advanced safety features such as  adaptive cruise control, and advanced airbag systems, enhancing overall safety for drivers ."
                  />
                </div>
                <div className={`${currentPage === 6 ? "block" : "hidden"}`}>
                  <BenefitCard
                    src={Layer2}
                    title="Financal Options"
                    description="Dealerships and manufacturers often provide attractive financing options for new car buyers, including low-interest rates and special promotions."
                  />
                </div>
                <div className={`${currentPage === 7 ? "block" : "hidden"}`}>
                  {" "}
                  <BenefitCard
                    src={permissions}
                    title="Enjoyment of Ownership"
                    description="There's a unique joy in being the first owner of a vehicle, enjoying that new car smell, and experiencing the pride of ownership from day one."
                  />
                </div>
                <div className="mt-6">
                  <PageIndicator
                    pagerState={{ currentPage, pageCount: 8 }}
                    className=""
                    onClick={handleDotClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-[90%] mx-auto max-w-[1800px] mx-auto">
          <div className="flex justify-center py-4 items-center">
            <h1 className="text-blue-800 border-l-4 border-blue-800 pl-4 lg:text-4xl sm:text-3xl text-xl text-center font-bold">
              Why Choose <Link to="/"> <span className="text-red-600">Cars.  </span><span className="text-blue-700">me</span></Link> ?
            </h1>
          </div>
          <div className="flex sm:flex-row flex-col gap-5">
            <div className="flex flex-col 2xl:mt-20 mt-4 gap-6 lg:w-[60%]">
              <div className="flex flex-col justify-center items-center mx-auto">
                <div className="bg-white flex items-center justify-center w-[165px] h-[130px] rounded-xl p-2 shadow-xl hover:shadow-inner">
                  <img src={double_arrow} className="object-contain w-[50%]" />
                </div>
                <h1 className="lg:text-3xl sm:text-xl text-lg text-blue-800 mt-3 py-2 text-center font-bold">
                  Extensive Selection
                </h1>
                <p className="text-center text-blue-800 py-2 w-1/2">Buyers can often personalize their new cars, choosing colors, trims, and optional features to suit their preferences and lifestyle.</p>
              </div>
              <div className="flex flex-col justify-center items-center mx-auto">
                <div className="bg-white flex items-center justify-center w-[165px] h-[130px] rounded-xl p-2 shadow-xl hover:shadow-inner">
                  <img src={speaker} className="object-contain  w-[60%]" />
                </div>
                <h1 className="lg:text-3xl sm:text-xl text-lg text-blue-800 mt-3 py-2 text-center font-bold">
                  Professional Marketing
                </h1>
                <p className="text-center text-blue-800 py-2 w-1/2">Sellers on cars.me benefit from professional marketing tools, presenting their vehicles in the best light with high-quality images, detailed descriptions.</p>
              </div>
              <div className="flex flex-col justify-center items-center mx-auto">
                <div className="bg-white flex items-center justify-center w-[165px] h-[130px] rounded-xl p-2 shadow-xl hover:shadow-inner">
                  <img src={support} className="object-contain w-[80%]" />
                </div>
                <h1 className="lg:text-3xl sm:text-xl text-lg text-blue-800 mt-3 py-2 text-center font-bold">
                  Guidance and Support</h1>
                <p className="text-center text-blue-800 py-2 w-1/2">Customers receive dedicated guidance and support throughout their car-buying journey. Our team is committed to assisting with inquiries, providing expert advice, and ensuring a seamless experience.</p>
              </div>
            </div>
            <div className="mt-20 w-full  lg:block hidden w-[60%]">
              <img src={chooseus_car} className="w-full flex-justify-center mx-auto object-contain" style={{ maxHeight: "1394px", maxWidth: "870px" }} />
            </div>
            <div className="flex flex-col 2xl:mt-20 mt-4 gap-6 lg:w-[60%]">
              <div className="flex flex-col justify-center items-center mx-auto">
                <div className="bg-white flex items-center justify-center w-[165px] h-[130px] rounded-xl p-3  shadow-xl hover:shadow-inner">
                  <img src={box} className="object-contain  w-[70%]" />
                </div>
                <h1 className="lg:text-3xl sm:text-xl text-lg text-blue-800 mt-3 py-2 text-center font-bold">
                  Guidance and Support</h1>
                <p className="text-center text-blue-800 py-2 w-1/2">Customers receive dedicated guidance and support throughout their car-buying journey. Our team is committed to assisting with inquiries, providing expert advice, and ensuring a seamless experience.</p>
              </div>
              <div className="flex flex-col justify-center items-center mx-auto">
                <div className="bg-white flex items-center justify-center w-[165px] h-[130px] rounded-xl p-4  shadow-xl hover:shadow-inner">
                  <img src={shield} className="object-contain  w-[70%]" />
                </div>
                <h1 className="lg:text-3xl sm:text-xl text-lg text-blue-800 mt-3 py-2 text-center font-bold">
                  Trustworthy Platform</h1>
                <p className="text-center text-blue-800 py-2 w-1/2">Security is a top priority at cars.me. Our platform employs robust security measures to ensure a safe and trustworthy environment for both buyers and sellers.</p>
              </div>
              <div className="flex flex-col justify-center items-center mx-auto">
                <div className="bg-white flex items-center justify-center w-[165px] h-[130px] rounded-xl p-4 shadow-xl hover:shadow-inner">
                  <img src={chat} className="object-contain w-[70%]" />
                </div>
                <h1 className="lg:text-3xl sm:text-xl text-lg text-blue-800 mt-3 py-2 text-center font-bold">
                  Innovative Features</h1>
                <p className="text-center text-blue-800 py-2 w-1/2">Cars.me incorporates innovative features, such as advanced search options, real-time market insights, and user-friendly interfaces, enhancing the overall experience for both buyers and sellers.</p>
              </div>
            </div>
          </div>
        </section>
        <CustomerReviews />
        <Footer />
    </>
  );
}
export default UsedCars;
