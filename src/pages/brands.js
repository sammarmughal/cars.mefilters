import React from "react";
import Nav from "../component/nav";
import Footer from "../component/footer";
import main_img from "../images/BrandPage/mainimg.png";
import home from "../images/SellYourCar/home.png";
import banner from "../images/CarsDetailPageAssets/BANNER.png";
import Banner from "../images/HomepageAssets/banner241.png";
import Changan from "../images/NewCars/Changan-Symbol.png";
import Fiat from "../images/BrandPage/fiat.png";
import Toyota from "../images/NewCars/toyota-logo-png-20191.png";
import china_flag from "../images/BrandPage/china-flag.png";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineFindReplace } from "react-icons/md";
import { Link } from "react-router-dom";
function Brands() {
    const BlogCard = (props) => {
        return (
            <>
                <section className="bg-white hover:shadow-inner max-w-[550px] sm:rounded-3xl flex flex-col justify-around rounded-xl shadow-xl box-shadow">
                    <div className="flex flex-col justify-center items-center my-5">
                        <img src={props.src} className="p-2 objeact-contain" />
                        <p className="text-blue-800 flex gap-2 text-lg"> (1892 <img src={china_flag} className="object-contain w-8 h-8" />) </p>
                    </div>
                    <p className="text-blue-800 text-center my-5 mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat </p>
                    <div className="flex flex-row my-6 flex justify-center">
                        <Link to="/brands-internal">
                            <button className="save-btn text-sm flex items-center rounded-xl">
                                Discover Now <MdOutlineFindReplace className="sm:w-6 sm:h-6 h-5 w-5 ml-2" />
                            </button>
                        </Link>
                    </div>
                </section>
            </>
        )
    }
    return (
        <>

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
                            Unveiling Excellence, Brand by Brand        </h1>
                        <p className="md:text-sm text-xs md:font-bold font-normal py-2">
                            {" "}
                            Explore the distinctive brilliance and unique features that set each car brand apart. </p>
                        <div className="flex mt-2 gap-2 items-center justify-center">
                            <div className="sm:pb-2">
                                <img src={home} alt="home" className="sm:w-8 w-6" width="40" height="35" />
                            </div>
                            <div className="flex gap-1 items-start text-start">
                                <Link to="/">
                                    <p className="hover:text-cyan-600 text-white sm:text-sm text-xs">Home </p>
                                </Link>
                                <p className="text-cyan-600 font-semibold sm:text-sm text-xs">
                                    / Brands
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="flex justify-center max-w-[1800px] mx-auto sm:w-2/3 w-11/12 py-5">
                    <img src={banner} />
                </div>
                <section className="lg:w-[90%] max-w-[1800px] mx-auto w-[95%]">
                    <h1 className="text-blue-800 py-5  lg:text-3xl sm:text-2xl text-xl  text-center font-medium">
                        Explore a variety of car brands and their notable models                </h1>
                    <div className="flex justify-center shadow-lg mx-auto md:w-6/12 sm:w-3/4 w-10/12 sm:my-8">
                        <input
                            type="text"
                            placeholder="Search Brands"
                            className="form-control rounded-l-lg block w-full p-2 sm:py-4 py-2 md:text-lg sm:text-sm text-xs font-normal px-4 bg-white leading-6 text-gray-800 focus:outline-none focus:ring hover:ring focus:ring-blue-300 ring-offset-0 transition duration-150 ease-in-out"
                            style={{ border: "0px" }}
                        />
                        <button aria-label="Search" className="rounded-r-lg inline-block font-normal leading-6 select-none border-transparent py-2 px-4 text-base transition duration-150 ease-in-out bg-gradient-to-b from-blue-700 to-cyan-500 font-semibold text-base text-white">
                            <IoSearchOutline className="sm:w-8 sm:h-8 w-6 h-6 text-white" strokeWidth={2.5} />
                        </button>
                    </div>
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 my-10">
                        <BlogCard src={Changan} />
                        <BlogCard src={Fiat} />
                        <BlogCard src={Toyota} />
                        <BlogCard src={Changan} />
                        <BlogCard src={Fiat} />
                        <BlogCard src={Toyota} />
                        <BlogCard src={Changan} />
                        <BlogCard src={Fiat} />
                        <BlogCard src={Toyota} />
                        <BlogCard src={Changan} />
                        <BlogCard src={Fiat} />
                        <BlogCard src={Toyota} />
                        <BlogCard src={Changan} />
                        <BlogCard src={Fiat} />
                        <BlogCard src={Toyota} />
                        <BlogCard src={Changan} />
                        <BlogCard src={Fiat} />
                        <BlogCard src={Toyota} />
                    </div>
                </section>
                <div className="w-[90%] max-w-[1800px] mx-auto flex justify-center py-5 my-5">
                    <img src={Banner} />
                </div>
                <Footer />
        </>
    )
}
export default Brands;