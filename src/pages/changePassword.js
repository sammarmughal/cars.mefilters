import React, { useState, useEffect } from "react";
import Nav from "../component/nav";
import Footer from "../component/footer";
import Register from "../component/register";
import banner from "../images/HomepageAssets/banner241.png";
import { LoginPopup } from "../component/nav";
import { TailSpin } from "react-loader-spinner";

function ChangePassword() {
    const [password, setPassword] = useState('');
    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const [password_confirmation, setPassword_confirmation] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({
        password: '',
        password_confirmation: '',
    });
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log(errors);
    }, [errors]);

    const handleChangePassword = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});
        let token = localStorage.getItem('access_token');
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        const formdata = new FormData();
        formdata.append("password", password);
        formdata.append("password_confirmation", password_confirmation);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow"
        };

        try {
            const response = await fetch("https://sandbox.cars.me/api/change-password", requestOptions);

            if (!response.ok) {
                if (response.status === 422) {
                    // Form field validation error
                    const result = await response.json();
                    setErrors(result.errors);
                } else if (response.status === 401) {
                    setShowLoginPopup(true);
                    // Unauthorized user
                    throw new Error("Unauthorized user");
                } else if (response.status === 500) {
                    // Server code error
                    throw new Error("Server code error");
                } else if (response.status === 404) {
                    // Not found
                    throw new Error("Not found");
                } else if (response.status === 403) {
                    // Forbidden
                    throw new Error("Forbidden");
                } else {
                    // Other errors
                    throw new Error('Network response was not ok');
                }
            }


            const result = await response.json();
            console.warn("result", result);

            if (result.errors) {
                setLoading(false);
                setErrors(result.errors);
            } else {
                setMessage(result.message);
                setPassword("");
                setSubmitted(true);
                setPassword_confirmation("");
                setLoading(false);
            }
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
            setLoading(false);
            if (
                error.response &&
                error.response.errors
            ) {
                const serverErrors = error.response.errors;
                setErrors(serverErrors);
            }
        }
    };

    return (
        <>
            <Nav />
            <div className="sm:max-w-[600px] max-h-[700px] my-10 w-full h-full py-5 sm:px-8 px-4 bg-white shadow mx-auto" >
                <div className="md:w-[85%] w-[95%] mx-auto">
                    <h1 className="text-blue-800 tracking-wider my-4 text-left mb-2 text-center font-bold md:text-3xl text-lg">
                        Change Account Password
                    </h1>
                    <div className="block gap-4 my-4">

                        <input
                            type="password"
                            placeholder="Enter New Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control focus:shodow-inner rounded-lg block w-full my-5 border  p-4 text-base font-normal leading-6 text-gray-800  focus:outline-none transition duration-150 ease-in-out"
                        />
                        {errors.password && <span className="error text-red-500">{errors.password}</span>}

                        <input
                            type="password"
                            placeholder="Re-type New Password"
                            value={password_confirmation}
                            onChange={(e) => setPassword_confirmation(e.target.value)}
                            className="form-control focus:shodow-inner rounded-lg block w-full my-5 border  p-4 text-base font-normal leading-6 text-gray-800  focus:outline-none transition duration-150 ease-in-out"
                        />
                        {errors.password_confirmation && <span className="error text-red-500">{errors.password_confirmation}</span>}

                        <button
                            className={`form-control  text-lg text-white font-semibold rounded-lg block w-full my-5 border p-4 text-base leading-6  ${submitted ? "bg-gray-400" : "bg-gradient-to-b from-blue-700 to-cyan-500 hover:bg-gradient-to-b hover:from-cyan-500 hover:to-blue-700"
                                }`}
                            disabled={submitted}
                            onClick={handleChangePassword}
                        >
                            {loading ? (
                                <div className="inset-0 flex items-center justify-center">
                                    <TailSpin
                                        visible={true}
                                        height="40"
                                        width="40"
                                        color="#e5e7eb"
                                        ariaLabel="tail-spin-loading"
                                        radius="1"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                    />
                                </div>
                            ) : (
                                submitted ? "Password Changed" : "Change Password"
                            )}
                        </button>
                        {message && (
                            <div className="absolute message mx-auto" onClick={() => setMessage('')}>
                                <div className="container mx-auto">
                                    <div className={`rounded-md  w-full bg-red-300 p-4`}>
                                        <p className="flex items-center text-sm font-medium text-[#004434]">
                                            <span className="pr-3">
                                                <svg
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 12 12"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_961_15656)">
                                                        <path
                                                            d="M6 0.337494C2.86875 0.337494 0.3375 2.86874 0.3375 5.99999C0.3375 9.13124 2.86875 11.6812 6 11.6812C9.13125 11.6812 11.6813 9.13124 11.6813 5.99999C11.6813 2.86874 9.13125 0.337494 6 0.337494ZM6 10.8375C3.3375 10.8375 1.18125 8.66249 1.18125 5.99999C1.18125 3.33749 3.3375 1.18124 6 1.18124C8.6625 1.18124 10.8375 3.35624 10.8375 6.01874C10.8375 8.66249 8.6625 10.8375 6 10.8375Z"
                                                            fill="white"
                                                        />
                                                        <path
                                                            d="M7.725 4.25625C7.55625 4.0875 7.29375 4.0875 7.125 4.25625L6 5.4L4.85625 4.25625C4.6875 4.0875 4.425 4.0875 4.25625 4.25625C4.0875 4.425 4.0875 4.6875 4.25625 4.85625L5.4 6L4.25625 7.14375C4.0875 7.3125 4.0875 7.575 4.25625 7.74375C4.33125 7.81875 4.44375 7.875 4.55625 7.875C4.66875 7.875 4.78125 7.8375 4.85625 7.74375L6 6.6L7.14375 7.74375C7.21875 7.81875 7.33125 7.875 7.44375 7.875C7.55625 7.875 7.66875 7.8375 7.74375 7.74375C7.9125 7.575 7.9125 7.3125 7.74375 7.14375L6.6 6L7.74375 4.85625C7.89375 4.6875 7.89375 4.425 7.725 4.25625Z"
                                                            fill="white"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_961_15656">
                                                            <rect width="12" height="12" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                            {message}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        <a className="text-blue-800 underline flex justify-end cursor-pointer">Forget Password</a>
                    </div>
                </div>
            </div>
            <Register />
            <LoginPopup open={showLoginPopup} onClose={() => setShowLoginPopup(false)} />
            <div className="flex w-[90%] mx-auto justify-center py-5 my-5">
                <img src={banner} />
            </div>
            <Footer />
        </>
    )
}
export default ChangePassword;