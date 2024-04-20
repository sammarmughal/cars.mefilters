import React from "react";
import Nav from "../component/nav";
import Footer from "../component/footer";
import CustomerReviews from "../component/CustomerReviews";
import home from "../images/SellYourCar/home.png";
import main_img from "../images/HowItWorks/MaskGroup15.png";
import circle from "../images/HowItWorks/Ellipse15.png";
import registration from "../images/HowItWorks/registration-svgrepo-com.png";
import calender from "../images/HowItWorks/real-estate-property-svgrepo-com (1).png";
import card from "../images/HowItWorks/credit-card-2-svgrepo-com.png";
import hand from "../images/HowItWorks/XMLID_308_.png";
import money from "../images/HowItWorks/payment-euro-svgrepo-com (1).png";
import keys from "../images/HowItWorks/keys-svgrepo-com.png";
import banner from "../images/CarsDetailPageAssets/BANNER.png";
import { Link } from "react-router-dom";

function HowItWorks() {
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
                <div className="w-full max-w-[1800px] mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-white text-center">
                    <h1 className="md:text-3xl  sm:text-2xl text-sm font-bold">
                        How To Buy And Sell New And Used Cars ?          </h1>
                    <p className="md:text-sm text-xs md:font-bold font-normal py-2">
                        {" "}
                        By Exploring these following step makes you understand  the whole website procedure
                    </p>

                    <div className="flex mt-2 gap-2 items-center justify-center">
                        <div className="sm:pb-2">
                            <img src={home} alt="home" className="sm:w-8 w-6" width="40" height="35" />
                        </div>
                        <div className="flex gap-1 items-start text-start">
                            <Link to="/">
                                <p className="hover:text-cyan-600 text-white sm:text-sm text-xs">Home </p>
                            </Link>
                            <p className="text-cyan-600 font-semibold sm:text-sm text-xs">
                                / How It Works
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-[1800px] mx-auto">
                <a href="https://spareparts.me/" className="flex justify-center cursor-pointer mx-auto sm:w-2/3 w-11/12 py-5"  target="_blank" rel="noopener noreferrer">
                    <img src={banner} />
                </a>
                <div>
                    <h1 className="text-blue-800 lg:text-4xl sm:text-3xl text-xl text-center font-bold">How To Sell Your Car On <Link to="/"> <span className="text-red-600">Cars.  </span><span className="text-blue-700">me</span></Link> ?</h1>
                    <p className="text-blue-800 text-center pt-3">Sell Your Car by following our 6 easy Steps:</p>
                </div>
                <div className="my-10">
                    <div className="w-fit flex flex-col w-full mx-auto items-center">


                        {/* <img className="object-contain w-min h-auto 2xl:max-h-[1000px] ml-line  mx-auto flex justify-center items-center " src={middleLine} /> */}
                        <div className="relative mt-10">
                            <div className="items-center flex mx-auto justify-center">
                                <img src={circle} className="w-8 h-8 object-contain" />
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="flex sm:flex-row flex-col md:justify-end gap-4 justify-center w-[85%] items-center">
                                    <h1 className="text-blue-800 lg:text-4xl sm:text-3xl text-2xl flex items-center text-center font-bold">Step 1</h1>
                                    <img src={registration} className="object-contain flex items-center sm:w-20 sm:h-20 lg:w-28 lg:h-28" />
                                </div>
                                <div className="lg:w-[55%] md:w-[90%] sm:w-[95%] bg-white hover:shadow-lg border-y border-r border-slate-400 p-4">
                                    <h1 className="text-xl text-blue-800 mt-4 py-2 font-bold">Create an Account:</h1>
                                    <p className="text-blue-800">By creating an account on our platform, you gain access to exclusive features and personalized services tailored to your preferences. Sign up today to unlock benefits </p>

                                </div>
                                <div className="flex justify-end">
                                    <div className="lg:w-[55%] md:w-[90%] sm:w-[95%] bg-white hover:shadow-lg border border-slate-400 p-4">
                                        <h1 className="text-xl text-blue-800 mt-4 py-2 font-bold">List Your Car for Sale:</h1>
                                        <p className="text-blue-800">Ready to sell your car? Start by listing it on our platform. Provide detailed information, including make, model, year, mileage, condition, and pricing, to attract potential buyers.</p>

                                    </div>
                                </div>
                                <div className="flex sm:flex-row flex-col gap-4 justify-center lg:w-[50%] sm:w-[80%] items-center">
                                    <h1 className="text-blue-800 lg:text-4xl sm:text-3xl text-xl flex items-center text-center font-bold">Step 2</h1>
                                    <img src={calender} className="object-contain flex items-center sm:w-20 sm:h-20 lg:w-28 lg:h-28" />
                                </div>
                                <div className="flex sm:flex-row flex-col  md:justify-end gap-4 justify-center w-[85%] items-center">
                                    <h1 className="text-blue-800 lg:text-4xl sm:text-3xl text-2xl flex items-center text-center font-bold">Step 3</h1>
                                    <img src={card} className="object-contain flex items-center sm:w-20 sm:h-20 lg:w-28 lg:h-28" />
                                </div>
                                <div className="lg:w-[55%] md:w-[90%] sm:w-[95%] bg-white hover:shadow-lg border border-slate-400 p-4">
                                    <h1 className="text-xl text-blue-800 mt-4 py-2 font-bold">Receive Offers and Inquiries:</h1>
                                    <p className="text-blue-800">Sit back and relax as interested buyers browse your listing. Receive offers and inquiries directly through our platform, and keep track of all communication in one convenient location. </p>

                                </div>
                                <div className="flex justify-center mx-auto inset-x-0 py-10 bg-gradient-to-b from-blue-700 to-cyan-500 w-2 absolute h-full items-center"></div>

                                <div className="flex justify-end">
                                    <div className="lg:w-[55%] md:w-[90%] sm:w-[95%] bg-white hover:shadow-lg border border-slate-400 p-4">
                                        <h1 className="text-xl text-blue-800 mt-4 py-2 font-bold">Negotiate and Close the Deal:</h1>
                                        <p className="text-blue-800">Communicate with potential buyers, negotiate offers, and work towards a mutually agreeable price. Once you've reached a deal, finalize the sale details and prepare for the next steps.</p>

                                    </div>
                                </div>
                                <div className="flex sm:flex-row flex-col gap-4 justify-center lg:w-[50%] sm:w-[80%] items-center">
                                    <h1 className="text-blue-800 lg:text-4xl sm:text-3xl text-2xl flex items-center text-center font-bold">Step 4</h1>
                                    <img src={hand} className="object-contain ml-5 flex items-center w-28 h-28" />
                                </div>
                                <div className="flex sm:flex-row flex-col gap-4  md:justify-end gap-4 justify-center w-[85%] items-center">
                                    <h1 className="text-blue-800 lg:text-4xl sm:text-3xl text-2xl flex items-center text-center font-bold">Step 5</h1>
                                    <img src={money} className="object-contain flex items-center w-28 h-28" />
                                </div>
                                <div className="lg:w-[55%] md:w-[90%] sm:w-[95%] bg-white hover:shadow-lg border border-slate-400 p-4">
                                    <h1 className="text-xl text-blue-800 mt-4 py-2 font-bold">Complete the Transaction:</h1>
                                    <p className="text-blue-800">With the terms agreed upon, it's time to complete the transaction. We'll assist you with the necessary paperwork and guide you through the payment process to ensure a smooth and secure sale.</p>

                                </div>
                                <div className="flex justify-end">
                                    <div className="lg:w-[55%] md:w-[90%] sm:w-[95%] bg-white hover:shadow-lg border border-slate-400 p-4">
                                        <h1 className="text-xl text-blue-800 mt-4 py-2 font-bold">Hand Over the Keys:</h1>
                                        <p className="text-blue-800">Congratulations on selling your car! Hand over the keys to the new owner, knowing that you've successfully completed the sale through our trusted platform. Thank you for choosing us as your partner in the selling process.
                                        </p>

                                    </div>
                                </div>
                                <div className="flex sm:flex-row flex-col gap-4 justify-center lg:w-[50%] sm:w-[80%] items-center">
                                    <h1 className="text-blue-800 lg:text-4xl sm:text-3xl text-2xl flex items-center text-center font-bold">Step 6</h1>
                                    <img src={keys} className="object-contain flex items-center w-28 h-28" />
                                </div>

                            </div>
                        </div>
                        <div className="items-center mt-2 relative z-30 flex mx-auto justify-center">
                            <img src={circle} className="w-8 h-8 object-contain" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-sky-100 relative mt-32">
                <div className="max-w-[1800px] mx-auto pb-10">
                    <div className="pt-10 pb-6">
                        <h1 className="text-blue-800 lg:text-4xl sm:text-3xl text-xl text-center font-bold">How To Buy a New and Used Car On <Link to="/"> <span className="text-red-600">Cars.  </span><span className="text-blue-700">me</span></Link>?</h1>
                        <p className="text-blue-800 text-center pt-3">Sell Your Car by following our 6 easy Steps:</p>
                    </div>
                    <div className="w-fit flex flex-col w-full mx-auto items-center">
                        <div className="relative mt-10">
                            <div className="items-center flex mx-auto justify-center">
                                <img src={circle} className="w-8 h-8 object-contain" />
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="flex sm:flex-row flex-col md:justify-end gap-4 justify-center w-[85%] items-center">
                                    <h1 className="text-blue-800 lg:text-4xl sm:text-3xl text-2xl flex items-center text-center font-bold">Step 1</h1>
                                    <img src={registration} className="object-contain flex items-center sm:w-20 sm:h-20 lg:w-28 lg:h-28" />
                                </div>
                                <div className="lg:w-[55%] md:w-[90%] sm:w-[95%] bg-white hover:shadow-lg border-y border-r border-slate-400 p-4">
                                    <h1 className="text-xl text-blue-800 mt-4 py-2 font-bold">Create an Account:</h1>
                                    <p className="text-blue-800">By creating an account on our platform, you gain access to exclusive features and personalized services tailored to your preferences. Sign up today to unlock benefits </p>

                                </div>
                                <div className="flex justify-end">
                                    <div className="lg:w-[55%] md:w-[90%] sm:w-[95%] bg-white hover:shadow-lg border border-slate-400 p-4">
                                        <h1 className="text-xl text-blue-800 mt-4 py-2 font-bold">List Your Car for Sale:</h1>
                                        <p className="text-blue-800">Ready to sell your car? Start by listing it on our platform. Provide detailed information, including make, model, year, mileage, condition, and pricing, to attract potential buyers.</p>

                                    </div>
                                </div>
                                <div className="flex sm:flex-row flex-col gap-4 justify-center lg:w-[50%] sm:w-[80%] items-center">
                                    <h1 className="text-blue-800 lg:text-4xl sm:text-3xl text-xl flex items-center text-center font-bold">Step 2</h1>
                                    <img src={calender} className="object-contain flex items-center sm:w-20 sm:h-20 lg:w-28 lg:h-28" />
                                </div>
                                <div className="flex sm:flex-row flex-col  md:justify-end gap-4 justify-center w-[85%] items-center">
                                    <h1 className="text-blue-800 lg:text-4xl sm:text-3xl text-2xl flex items-center text-center font-bold">Step 3</h1>
                                    <img src={card} className="object-contain flex items-center sm:w-20 sm:h-20 lg:w-28 lg:h-28" />
                                </div>
                                <div className="lg:w-[55%] md:w-[90%] sm:w-[95%] bg-white hover:shadow-lg border border-slate-400 p-4">
                                    <h1 className="text-xl text-blue-800 mt-4 py-2 font-bold">Receive Offers and Inquiries:</h1>
                                    <p className="text-blue-800">Sit back and relax as interested buyers browse your listing. Receive offers and inquiries directly through our platform, and keep track of all communication in one convenient location. </p>

                                </div>
                                <div className="flex justify-center mx-auto inset-x-0 bg-gradient-to-b from-blue-700 to-cyan-500 w-2 absolute h-full items-center"></div>

                                <div className="flex justify-end">
                                    <div className="lg:w-[55%] md:w-[90%] sm:w-[95%] bg-white hover:shadow-lg border border-slate-400 p-4">
                                        <h1 className="text-xl text-blue-800 mt-4 py-2 font-bold">Negotiate and Close the Deal:</h1>
                                        <p className="text-blue-800">Communicate with potential buyers, negotiate offers, and work towards a mutually agreeable price. Once you've reached a deal, finalize the sale details and prepare for the next steps.</p>

                                    </div>
                                </div>
                                <div className="flex sm:flex-row flex-col gap-4 justify-center lg:w-[50%] sm:w-[80%] items-center">
                                    <h1 className="text-blue-800 lg:text-4xl sm:text-3xl text-2xl flex items-center text-center font-bold">Step 4</h1>
                                    <img src={hand} className="object-contain ml-5 flex items-center w-28 h-28" />
                                </div>
                                <div className="flex sm:flex-row flex-col gap-4  md:justify-end gap-4 justify-center w-[85%] items-center">
                                    <h1 className="text-blue-800 lg:text-4xl sm:text-3xl text-2xl flex items-center text-center font-bold">Step 5</h1>
                                    <img src={money} className="object-contain flex items-center w-28 h-28" />
                                </div>
                                <div className="lg:w-[55%] md:w-[90%] sm:w-[95%] bg-white hover:shadow-lg border border-slate-400 p-4">
                                    <h1 className="text-xl text-blue-800 mt-4 py-2 font-bold">Complete the Transaction:</h1>
                                    <p className="text-blue-800">With the terms agreed upon, it's time to complete the transaction. We'll assist you with the necessary paperwork and guide you through the payment process to ensure a smooth and secure sale.</p>

                                </div>
                                <div className="flex justify-end">
                                    <div className="lg:w-[55%] md:w-[90%] sm:w-[95%] bg-white hover:shadow-lg border border-slate-400 p-4">
                                        <h1 className="text-xl text-blue-800 mt-4 py-2 font-bold">Hand Over the Keys:</h1>
                                        <p className="text-blue-800">Congratulations on selling your car! Hand over the keys to the new owner, knowing that you've successfully completed the sale through our trusted platform. Thank you for choosing us as your partner in the selling process.
                                        </p>

                                    </div>
                                </div>
                                <div className="flex sm:flex-row flex-col gap-4 justify-center lg:w-[50%] sm:w-[80%] items-center">
                                    <h1 className="text-blue-800 lg:text-4xl sm:text-3xl text-2xl flex items-center text-center font-bold">Step 6</h1>
                                    <img src={keys} className="object-contain flex items-center w-28 h-28" />
                                </div>

                            </div>
                        </div>
                            <div className="items-center mt-2 relative z-20 flex mx-auto justify-center">
                                <img src={circle} className="w-8 h-8 object-contain" />
                            </div>
                    </div>
                </div>
            </div>

            <CustomerReviews />
            <Footer />
        </>
    )
}
export default HowItWorks;