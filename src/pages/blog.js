import React from "react";
import Nav from "../component/nav";
import Footer from "../component/footer";
import home from "../images/SellYourCar/home.png";
import circle from "../images/HowItWorks/Ellipse15.png";
import car1 from "../images/BlogPage/Self-DrivingVehicles.png";
import car2 from "../images/BlogPage/BuyingaCar.png";
import car3 from "../images/BlogPage/ElectricCars2024.png";
import car4 from "../images/BlogPage/ToyotaCarInDubai.png";
import car5 from "../images/BlogPage/RiseoFElectricVehicles.png";
import blogpost from "../images/BlogPage/blogpost.png";
import blogCar from "../images/BlogPage/blog_car.png";
import banner from "../images/BlogPage/banner.png";
import Banner from "../images/HomepageAssets/banner241.png";
import { IoSearchOutline } from "react-icons/io5";
import main_img from "../images/BlogPage/erik-mclean-ZRns2R5azu0-unsplash.png";
import { Link } from "react-router-dom";

function Blog() {
    const BlogPosts = () => {
        return (
            <>
                <div className="py-4 sm:flex gap-3 border-b border-blue-800">
                    <img src={blogpost} className="lg:w-auto sm:w-1/3" />
                    <div className="flex flex-col p-3 gap-6">
                        <h1 className="text-blue-800 text-lg">Tesla Cybertruck 2024 Review: The New Electric
                            Pickup Truck</h1>
                        <div className="flex gap-8 text-xs"> <p>05 Dec | 2023 </p> <p>  NEW CARS</p></div>
                        <p className="text-sm">A detailed review of the Tesla Cybertruck 2024. Know about Cybertruck release date, price, specs, and more. This electric pickup truck is not to be missed.</p>
                    </div>
                </div>
            </>
        )
    }
    const PopularPosts = () => {
        return (
            <>
                <div className="flex items-center gap-4 shadow-lg hover:shadow-inner">
                    <img src={blogCar} />
                    <p className="font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
            </>
        )
    }
    return (
        <>
            <Nav />
            <section className="flex relative justify-center">
                <div className="w-full h-full absolute inset-0 bg-black opacity-50"></div>
                <img
                    src={main_img}
                    alt="Banner"
                    className="w-full h-auto shadow mx-auto"
                    width="1500"
                />
                <div className="w-full absolute max-w-[1800px] mx-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-white text-center">
                    <h1 className="md:text-3xl  sm:text-2xl text-sm font-bold">
                        Driving Dreams, Defining Journeys         </h1>
                    <p className="md:text-sm text-xs md:font-bold font-normal py-2">
                        {" "}
                        Our platform is dedicated to empowering dreams, turning the desire for a perfect car into a tangible reality.                    </p>

                    <div className="flex mt-2 gap-2 items-center justify-center">
                        <div className="sm:pb-2">
                            <img src={home} alt="home" className="sm:w-8 w-6" width="40" height="35" />
                        </div>
                        <div className="flex gap-1 items-start text-start">
                            <Link to="/">
                                <p className="hover:text-cyan-600 text-white sm:text-sm text-xs">Home </p>
                            </Link>
                            <p className="text-cyan-600 font-semibold sm:text-sm text-xs">
                                / Blog
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="sm:hidden max-w-[1800px] mx-auto block sm:w-[90%] w-[95%] mx-auto my-6">
                <div className="flex gap-3 items-center">
                    <img src={circle} className="sm:w-6 sm:h-6 w-4 h-4" />
                    <h1 className="text-blue-800 lg:text-4xl sm:text-3xl text-xl font-medium"> Search </h1>
                </div>
                <div className="flex my-5 px-4 w-full">
                    <input
                        type="text"
                        placeholder="Search"
                        className="form-control rounded-l-sm block w-full p-2 text-base font-normal shadow-lg leading-6 text-gray-800 focus:outline-none focus:ring hover:ring focus:ring-blue-300 ring-offset-0 rounded-none transition duration-150 ease-in-out"
                        style={{ border: '0px' }}
                    />
                    <button aria-label="Search" className="rounded-r-sm inline-block font-normal leading-6  select-none border-transparent py-2 px-4 text-base  transition duration-150 ease-in-out bg-gradient-to-b from-blue-700 to-cyan-500  font-semibold text-base  text-white">
                        <IoSearchOutline className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </button>
                </div>
            </div>
            <section className="sm:w-[90%] max-w-[1800px] w-[95%] mx-auto my-10">
                <div className="flex gap-3 items-center">
                    <img src={circle} className="sm:w-6 sm:h-6 w-4 h-4" />
                    <h1 className="text-blue-800 lg:text-4xl sm:text-3xl text-xl font-semibold"> Trending </h1>
                </div>
                <div className="my-4">
                    <div className="grid grid-cols-3 gap-4">
                        <Link to="/blog-internal"> <img src={car1} className="w-full" /></Link>
                        <Link to="/blog-internal"><img src={car2} className="w-full" /></Link>
                        <Link to="/blog-internal"> <img src={car3} className="w-full" /></Link>
                    </div>
                    <div className="grid md:grid-cols-2 mt-4 gap-4">
                        <Link to="/blog-internal"> <img src={car4} className="w-full" /></Link>
                        <Link to="/blog-internal">  <img src={car5} className="w-full" /></Link>
                    </div>

                </div>
            </section>
            <section className="sm:w-[90%] max-w-[1800px] w-[95%] mx-auto flex lg:flex-row flex-col">
                <div className="lg:w-[70%]">
                    <div className="flex gap-3 items-center">
                        <img src={circle} className="sm:w-6 sm:h-6 w-4 h-4" />
                        <h1 className="text-blue-800 lg:text-4xl sm:text-3xl text-xl font-medium"> Recent Posts </h1>
                    </div>
                    <div className="flex flex-col pr-4">
                        <div><BlogPosts/></div>
                        <div><BlogPosts/></div>
                        <div><BlogPosts/></div>
                        <div><BlogPosts/></div>
                        <div><BlogPosts/></div>
                        <div><BlogPosts/></div>
                        <div><BlogPosts/></div>
                        <div><BlogPosts/></div>
                    </div>
                </div>
                <div className="lg:w-[30%]">
                    <div className="lg:block hidden">
                        <div className="flex gap-3 items-center">
                            <img src={circle} className="sm:w-6 sm:h-6 w-4 h-4" />
                            <h1 className="text-blue-800 lg:text-4xl sm:text-3xl text-xl font-medium"> Search </h1>
                        </div>
                        <div className="flex my-5 px-4 w-full">
                            <input
                                type="text"
                                placeholder="Search"
                                className="form-control rounded-l-sm block w-full p-2 text-base font-normal shadow-lg leading-6 text-gray-800 focus:outline-none focus:ring hover:ring focus:ring-blue-300 ring-offset-0 rounded-none transition duration-150 ease-in-out"
                                style={{ border: '0px' }}
                            />
                            <button aria-label="Subscribe" className="rounded-r-sm inline-block font-normal leading-6  select-none border-transparent py-2 px-4 text-base  transition duration-150 ease-in-out bg-gradient-to-b from-blue-700 to-cyan-500  font-semibold text-base  text-white">
                                <IoSearchOutline className="w-8 h-8 text-white" strokeWidth={2.5} />
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center my-4">
                        <img src={circle} className="sm:w-6 sm:h-6 w-4 h-4" />
                        <h1 className="text-blue-800 lg:text-4xl sm:text-3xl text-xl font-medium"> Popular Posts </h1>
                    </div>
                    <div className="flex flex-col my-10 gap-4">
                        <PopularPosts />
                        <PopularPosts />
                        <PopularPosts />
                        <PopularPosts />
                        <PopularPosts />
                        <PopularPosts />
                    </div>
                    <div className="my-8 flex justify-center">
                        <img src={banner} />
                    </div>
                    <div>
                        <div className="flex gap-3 items-center">
                            <img src={circle} className="sm:w-6 sm:h-6 w-4 h-4" />
                            <h1 className="text-blue-800 lg:text-4xl sm:text-3xl text-xl font-medium"> Popular Tags </h1>
                        </div>
                        <div className="grid lg:grid-cols-4 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 gap-x-3 gap-y-6 sm:mx-0 mx-4 my-10">
                            <a className="popular-btn">
                                Hybrid Cars
                            </a>
                            <a className="popular-btn">
                                Petrol Cars
                            </a>
                            <a className="popular-btn">
                                Diesel Cars
                            </a>
                            <a className="popular-btn">
                                Electric Cars
                            </a>
                            <a className="popular-btn">
                                Hybrid Cars
                            </a>
                            <a className="popular-btn">
                                Petrol Cars
                            </a>
                            <a className="popular-btn">
                                Diesel Cars
                            </a>
                            <a className="popular-btn">
                                Electric Cars
                            </a>
                            <a className="popular-btn">
                                Hybrid Cars
                            </a>
                            <a className="popular-btn">
                                Petrol Cars
                            </a>
                            <a className="popular-btn">
                                Diesel Cars
                            </a>
                            <a className="popular-btn">
                                Electric Cars
                            </a>
                            <a className="popular-btn">
                                Hybrid Cars
                            </a>
                            <a className="popular-btn">
                                Petrol Cars
                            </a>
                            <a className="popular-btn">
                                Diesel Cars
                            </a>
                            <a className="popular-btn">
                                Electric Cars
                            </a>
                            <a className="popular-btn">
                                Hybrid Cars
                            </a>
                            <a className="popular-btn">
                                Petrol Cars
                            </a>
                            <a className="popular-btn">
                                Diesel Cars
                            </a>
                            <a className="popular-btn">
                                Electric Cars
                            </a>
                            <a className="popular-btn">
                                Hybrid Cars
                            </a>
                            <a className="popular-btn">
                                Petrol Cars
                            </a>
                            <a className="popular-btn">
                                Diesel Cars
                            </a>
                            <a className="popular-btn">
                                Electric Cars
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-[90%] mx-auto flex justify-center py-5 my-5">
                <img src={Banner} />
            </div>
            <Footer />
        </>
    )
}
export default Blog;