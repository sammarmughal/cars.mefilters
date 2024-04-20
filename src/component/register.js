import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/HomepageAssets/logo.png";
import car from "../images/HomepageAssets/car.png";

function Register() {
    return (
        <>
            <div className="bg-sky-100 py-4">
                <div className="w-11/12 max-w-[1800px]  flex justify-between mx-auto">
                    <div>
                        <Link to="/">
                            <img className="p-4 sm:mt-5  w-[55%] object-contain" height={100} width={100} src={Logo}></img>
                        </Link>
                        <h1 className="text-blue-800 border-l-4 font-bold sm:pl-4 pl-2 border-blue-800 lg:text-4xl sm:text-2xl  lg:mt-10 text-left">
                            Sell Your Car In Best Price <br className="sm:block hidden" /> At<Link to="/"> <span className="text-red-600">Cars.  </span><span className="text-blue-700">me</span></Link>
                        </h1>
                        <div className="flex lg:pt-5 my-5">
                            <Link to="/sellYourCar" className="px-4 py-2 btn-text bg-gradient-blue">Register Your Cars</Link>
                        </div>
                    </div>
                    <div className="sm:w-1/2 w-[60%] flex justify-end">
                        <img src={car} className="ease-in-out object-scale-down duration-500" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;