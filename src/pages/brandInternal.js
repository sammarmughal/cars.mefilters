import React from "react";
import Nav from "../component/nav";
import Footer from "../component/footer";
import home from "../images/SellYourCar/home.png";
import main_img from "../images/BrandInternalPage/mainimg.png";
import Changan from "../images/NewCars/Changan-Symbol.png";
import CarCard from "../component/usedCarCard";
import china_flag from "../images/BrandPage/china-flag.png";
import CustomerReviews from "../component/CustomerReviews";
import { Link } from "react-router-dom";
import Register from "../component/register";
function BrandInternal() {
    return (
        <>
            <section className="">
                <Nav />
                <section className="flex relative  bg-no-repeat justify-center">
                    <div className="w-full h-full  absolute inset-0 bg-black opacity-50"></div>
                    <img
                        src={main_img}
                        alt="Banner"
                        className="w-full overflow-hidden h-auto shadow mx-auto"
                        width="1200"
                    />
                    <div className="w-full absolute max-w-[1800px] mx-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-white text-center">
                        <h1 className="md:text-3xl  sm:text-2xl text-sm font-bold">
                            Changan - Driving Innovation and Excellence     </h1>
                        <p className="md:text-sm text-xs md:font-bold font-normal py-2">
                            {" "}
                            Welcome to the world of Changan, where innovation, reliability, and style converge to redefine </p>
                        <div className="flex mt-2 gap-2 items-center justify-center">
                            <div className="sm:pb-2">
                                <img src={home} alt="home" className="sm:w-8 w-6" width="40" height="35" />
                            </div>
                            <div className="flex gap-1 items-start text-start">
                                <Link to="/">
                                    <p className="hover:text-cyan-600 text-white sm:text-sm text-xs">Home </p>
                                </Link>
                                <Link to="/brands">
                                    <p className="hover:text-cyan-600  sm:text-sm text-xs">
                                        / Brands
                                    </p>
                                </Link>
                                <p className="text-cyan-600 font-semibold sm:text-sm text-xs">
                                    / Brands internal
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="find-sec max-w-[1800px] relative mx-auto z-40">
                    <div className="bg-white flex flex-col items-center justify-center mx-auto max-w-[140px] sm:max-w-[180px] w-fit rounded-xl md:p-3 shadow-xl hover:shadow-inner">
                        <img src={Changan} className="object-contain md:w-full mt-2" />
                        <div className="flex  justify-center items-center my-5">
                            <p className="text-blue-800 flex gap-2 text-lg"> (1892 <img src={china_flag} className="object-contain w-8 h-8" />) </p>
                        </div>
                    </div>
                </section>
                <section className="my-10 lg:w-[90%] max-w-[1800px] w-[95%] mx-auto">

                    <div className="flex flex-col justify-center py-4 items-center">
                        <h1 className="text-blue-800 lg:text-4xl sm:text-2xl text-xl text-center font-bold">
                            Welcome to the World of Changan
                        </h1>
                        <p className="text-blue-800 my-4">Discover the innovation, reliability, and style that define Changan – a leading name in the automotive industry.</p>
                    </div>
                    <div className="grid mx-auto justify-center items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-6 lg:gap-x-5 gap-x-3 gap-y-5">
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
                        <Link to="/cars" className="px-4 py-2 rounded-lg bg-gradient-blue">
                            View More
                        </Link>
                    </div>
                </section>
                <section className="lg:w-[90%] max-w-[1800px] w-[95%] mb-10 mx-auto">
                    <h1 className="text-blue-800 lg:text-3xl sm:text-2xl text-xl font-bold py-4">
                        Certainly! Here are some key points to consider when buying a Changan car:
                    </h1>
                    <div className="flex flex-col gap-2 my-4">
                        <h1 className="text-blue-800 sm:text-2xl text-xl font-semibold">Innovative Design:</h1>
                        <p className="text-blue-800">Changan cars are known for their innovative and modern designs, incorporating stylish elements that set them apart in the automotive market.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 my-4">
                        <h1 className="text-blue-800 sm:text-2xl text-xl font-semibold">Advanced Safety Features:
                        </h1>
                        <p className="text-blue-800">Changan prioritizes safety with the integration of advanced safety features, including airbags, ABS brakes, and intelligent safety systems to enhance driver and passenger protection.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 my-4">
                        <h1 className="text-blue-800 sm:text-2xl text-xl font-semibold">Efficient Fuel Economy:</h1>
                        <p className="text-blue-800">Changan vehicles often boast efficient fuel economy, making them a cost-effective and environmentally friendly choice for daily commuting and long drives.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 my-4">
                        <h1 className="text-blue-800 sm:text-2xl text-xl font-semibold">Smart Technology Integration:</h1>
                        <p className="text-blue-800">Changan embraces smart technologies, offering features like touchscreen infotainment systems, connectivity options, and advanced driver assistance systems to enhance the overall driving experience.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 my-4">
                        <h1 className="text-blue-800 sm:text-2xl text-xl font-semibold">Versatile Model Range:</h1>
                        <p className="text-blue-800">Changan provides a versatile range of models, from compact sedans to SUVs, catering to various preferences and lifestyle needs.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 my-4">
                        <h1 className="text-blue-800 sm:text-2xl text-xl font-semibold">Reliability and Durability:</h1>
                        <p className="text-blue-800">Changan is recognized for the reliability and durability of its vehicles, ensuring that owners can trust their cars for daily use and long-term ownership.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 my-4">
                        <h1 className="text-blue-800 sm:text-2xl text-xl font-semibold">Affordable Pricing:</h1>
                        <p className="text-blue-800">Changan cars are often competitively priced, providing value for money without compromising on quality or features.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 my-4">
                        <h1 className="text-blue-800 sm:text-2xl text-xl font-semibold">Warranty Coverage:</h1>
                        <p className="text-blue-800">Changan typically offers warranty coverage, providing peace of mind to customers by addressing potential issues during the specified warranty period.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 my-4">
                        <h1 className="text-blue-800 sm:text-2xl text-xl font-semibold">Comfortable Interior:</h1>
                        <p className="text-blue-800">Changan pays attention to interior comfort, offering well-designed and spacious cabins with ergonomic features for an enjoyable driving experience.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 my-4">
                        <h1 className="text-blue-800 sm:text-2xl text-xl font-semibold">Strong Resale Value:</h1>
                        <p className="text-blue-800">Changan cars often maintain a strong resale value, making them a wise investment for those considering the long-term ownership or potential resale of the vehicle.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 my-4">
                        <h1 className="text-blue-800 sm:text-2xl text-xl font-semibold">Environmentally Friendly Options:</h1>
                        <p className="text-blue-800">Changan is committed to sustainability, and some models may feature environmentally friendly technologies or alternative fuel options.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 my-4">
                        <h1 className="text-blue-800 sm:text-2xl text-xl font-semibold">Comprehensive After-Sales Service:</h1>
                        <p className="text-blue-800">Changan dealerships typically offer comprehensive after-sales services, including maintenance, repairs, and genuine spare parts availability.
                        </p>
                    </div>
                </section>
                <Register />
                <CustomerReviews />
                <Footer />
            </section>
        </>
    )
}
export default BrandInternal;