import React, { useState, useEffect } from "react";
import Nav from "../component/nav";
import Footer from "../component/footer";
import BlogCard from "../component/blogcard";
import circle from "../images/HowItWorks/Ellipse15.png";
import car1 from "../images/BlogInternal/ElectricVehicles.png";
import car5 from "../images/BlogPage/RiseoFElectricVehicles.png";
import blogCar from "../images/BlogPage/blog_car.png";
import { IoHome } from "react-icons/io5";
import banner from "../images/BlogPage/banner.png";
import Banner from "../images/HomepageAssets/banner241.png";
import PageIndicator from "../component/pageindicator";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdShare } from "react-icons/io";
import { RxCountdownTimer } from "react-icons/rx";
import { Link } from "react-router-dom";
// import { SocialIcon } from 'react-social-icons'

function BlogInternal() {
    const [SocialIcons, setSocialIcons] = useState(null);
    const [networks, setNetworks] = useState([
        'facebook',
        'twitter',
        'linkedin',
        'pinterest',
        'whatsapp'
    ]);

    useEffect(() => {
        const loadSocialIcons = async () => {
            const module = await import('react-social-icons');
            setSocialIcons(module);
        };
        loadSocialIcons();
    }, []);

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
    const [currentPage, setCurrentPage] = useState(0);

    const handleDotClick = (newPage) => {
        setCurrentPage(newPage);
    };
    return (
        <>
        <section className="">

            <Nav />
            <section className="flex relative w-[90%] max-w-[1800px] mx-auto">
                <div className="flex mt-4 gap-2 items-center justify-center">
                    <div className="">
                        <IoHome className="sm:w-8 sm:h-8 w-6 h-6  text-blue-800" width="40" height="40" />
                    </div>
                    <div className="flex gap-1  items-start text-start">
                        <Link to="/">
                            <p className="hover:text-cyan-600 font-normal sm:text-lg text-xs">Home </p>
                        </Link>
                        <Link to="/blog" className="hover:text-cyan-600 font-normal sm:text-lg text-xs">
                            / Blog
                        </Link>
                        <p className="text-cyan-600 font-semibold sm:text-lg text-xs">
                            / Trending
                        </p>
                    </div>
                </div>
            </section>
            <div className="sm:hidden max-w-[1800px] block sm:w-[90%] w-[95%] mx-auto my-6">
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
                <div className="my-4">
                    <img src={car1} className="w-full" />
                </div>
            </section>
            <section className="sm:w-[90%] max-w-[1800px] w-[95%] mx-auto pr-4 flex lg:flex-row flex-col">
                <div className="lg:w-[70%]">
                    <div className="flex flex-col gap-4">
                        <h1 className="lg:text-4xl sm:text-3xl text-xl font-medium">Exploring the Future of Electric Vehicles</h1>
                        <p className="text-slate-400 flex gap-2 items-center"><RxCountdownTimer className="w-5 h-5 text-black" /> 1 month ago</p>
                    </div>
                    <div className="w-full flex mt-4">
                        <div className="flex  bg-white gap-1 md:gap-4 rounded-full ">
                            <div className='flex px-2 text-black py-2 rounded-xl items-center gap-2'>
                                <div className='flex gap-2 items-center border border-slate-400 px-4 py-1 rounded-full cursor-pointer'>
                                    <IoMdShare />
                                    <p>Share</p>
                                </div>
                                <div className="flex gap-2">
                            {SocialIcons && networks.map((network, index) => (
                                <SocialIcons.SocialIcon key={index} network={network} style={{ height: '35px', width: '35px' }} url="www.example.com" />
                            ))}
                        </div>
                            </div>

                        </div>
                    </div>
                    <div className="">
                        <h1 className="sm:text-3xl text-xl font-normal my-5">Introduction</h1>
                        <p className="my-2 lg:pr-6 sm:text-base text-xs">As the automotive industry continues to embrace sustainable solutions, electric vehicles (EVs) have emerged as a frontrunner in the quest for eco-friendly transportation. In this blog post, I, John Smith, delve into the evolution of EV technology, its environmental benefits, and the promising innovations shaping the future of electric mobility.
                        </p>
                    </div>
                    <div className="sm:block hidden">
                        <img src={car5} className="w-full my-4 lg:pr-6" />
                    </div>
                    <div className="">
                        <h1 className="sm:text-3xl text-xl font-normal my-5">The Rise of Electric Mobility
                        </h1>
                        <p className="my-2 lg:pr-6 sm:text-base text-xs">The transition to electric mobility has gained significant momentum in recent years, driven by advancements in battery technology, government incentives, and growing environmental awareness. According to industry reports, global sales of electric vehicles surpassed 5 million units in 2023, marking a 50% increase from the previous year.
                        </p>
                    </div>
                    <div className="">
                        <h1 className="sm:text-3xl text-xl font-normal my-5">Environmental Benefits of EVs
                        </h1>
                        <p className="my-2 lg:pr-6 sm:text-base text-xs">One of the key advantages of electric vehicles is their minimal environmental impact compared to traditional internal combustion engine vehicles. With zero tailpipe emissions, EVs contribute to improved air quality and reduced greenhouse gas emissions, mitigating the adverse effects of climate change. Studies have shown that widespread adoption of electric vehicles could lead to a substantial reduction in CO2 emissions by 30% by 2030.
                        </p>
                    </div>
                    <div className="">
                        <h1 className="sm:text-3xl text-xl font-normal my-5">Innovations Driving Electric Mobility</h1>
                        <p className="my-2 lg:pr-6 sm:text-base text-xs">The electric vehicle landscape is continually evolving, with automakers and tech companies investing heavily in research and development to enhance performance, extend range, and reduce costs. Recent innovations such as solid-state batteries, wireless charging technology, and autonomous driving features are poised to revolutionize the electric mobility sector, making EVs more accessible and appealing to consumers worldwide.
                        </p>
                    </div>
                    <div className="">
                        <h1 className="sm:text-3xl text-xl font-normal my-5">Conclusion:</h1>
                        <p className="my-2 lg:pr-6 sm:text-base text-xs">In conclusion, the future of electric vehicles is bright, with the potential to revolutionize the way we think about transportation and sustainability. As technology continues to advance and infrastructure improves, electric mobility will play an increasingly vital role in shaping a cleaner, greener future for generations to come.
                        </p>
                    </div>
                    <div className="">
                        <h1 className="sm:text-3xl text-xl font-normal my-5">About the Author:</h1>
                        <p className="my-2 lg:pr-6 sm:text-base text-xs">John Smith is an automotive enthusiast with a passion for sustainable transportation solutions. With years of experience in the industry, John is dedicated to exploring the latest trends and innovations in electric mobility and sharing his insights with readers. Follow John on Twitter [@JohnSmithAuto] for more updates on the future of automotive technology.
                        </p>
                    </div>
                    <div className="my-5">
                        <p className="">The Rise of Electric Mobility:
                        </p>
                        <p className="my-2 lg:pr-6 sm:text-base text-xs">The transition to electric mobility has gained significant momentum in recent years, driven by advancements in battery technology, government incentives, and growing environmental awareness. According to industry reports, global sales of electric vehicles surpassed 5 million units in 2023, marking a 50% increase from the previous year.
                        </p>
                    </div>
                    <div className="my-5">
                        <p className="">Environmental Benefits of EVs:
                        </p>
                        <p className="my-2 lg:pr-6 sm:text-base text-xs">One of the key advantages of electric vehicles is their minimal environmental impact compared to traditional internal combustion engine vehicles. With zero tailpipe emissions, EVs contribute to improved air quality and reduced greenhouse gas emissions, mitigating the adverse effects of climate change. Studies have shown that widespread adoption of electric vehicles could lead to a substantial reduction in CO2 emissions by 30% by 2030.
                        </p>
                    </div>
                    <div className="my-5">
                        <p className="">Innovations Driving Electric Mobility:
                        </p>
                        <p className="my-2 lg:pr-6 sm:text-base text-xs">The electric vehicle landscape is continually evolving, with automakers and tech companies investing heavily in research and development to enhance performance, extend range, and reduce costs. Recent innovations such as solid-state batteries, wireless charging technology, and autonomous driving features are poised to revolutionize the electric mobility sector, making EVs more accessible and appealing to consumers worldwide.

                        </p>
                    </div>
                    <div className="my-5">
                        <p className="">Conclusion:
                        </p>
                        <p className="my-2 lg:pr-6 sm:text-base text-xs">In conclusion, the future of electric vehicles is bright, with the potential to revolutionize the way we think about transportation and sustainability. As technology continues to advance and infrastructure improves, electric mobility will play an increasingly vital role in shaping a cleaner, greener future for generations to come.
                        </p>
                    </div>
                    <div className="my-5">
                        <p className="">About the Author:
                        </p>
                        <p className="my-2 lg:pr-6 sm:text-base text-xs">John Smith is an automotive enthusiast with a passion for sustainable transportation solutions. With years of experience in the industry, John is dedicated to exploring the latest trends and innovations in electric mobility and sharing his insights with readers. Follow John on Twitter [@JohnSmithAuto] for more updates on the future of automotive technology.
                        </p>
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
                        <div className="grid lg:grid-cols-4 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 gap-x-3 gap-y-6 mx-4 sm:mx-0 my-10">
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
            <section className="sm:w-[90%] max-w-[1800px] mx-auto w-[95%]">
                <div className="flex gap-3 items-center">
                    <img src={circle} className="sm:w-6 sm:h-6 w-4 h-4" />
                    <h1 className="text-blue-800 lg:text-4xl sm:text-3xl text-xl font-medium"> Related Blogs </h1>
                </div>
                <div className="lg:grid grid-cols-3 hidden my-6 gap-5">
                    <div> <BlogCard /></div>
                    <div><BlogCard /></div>
                    <div> <BlogCard /></div>
                </div>
                <div className="lg:hidden block">
                    <div className="flex justify-center mx-auto my-6 gap-6">
                        <div className={`${currentPage === 0 ? "block" : "hidden"}`}> <BlogCard /></div>
                        <div className={`${currentPage === 1 ? "block" : "hidden"}`}> <BlogCard /></div>
                        <div className={`${currentPage === 2 ? "block" : "hidden"}`}> <BlogCard /></div>
                    </div>

                    <PageIndicator
                        pagerState={{ currentPage, pageCount: 3 }}
                        className="my-4"
                        onClick={handleDotClick}
                    />
                </div>
            </section>
            <div className="w-[90%] mx-auto max-w-[1800px] flex justify-center py-5 my-5">
                <img src={Banner} />
            </div>
            <Footer />

            </section> 
 </>
    )
}
export default BlogInternal;