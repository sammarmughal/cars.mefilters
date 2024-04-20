import React, { Fragment, useState, useRef, useEffect } from "react";
import { MdOutlineLogin } from "react-icons/md";
import { RxPerson, RxCross2 } from "react-icons/rx";
import Logo from "../images/HomepageAssets/logo.png";
import { NavLink, Navigate } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { Menu, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu } from 'react-icons/fi';
import navUserLogo from "../images/UserPanel/nav-logo.png";
import { TailSpin } from "react-loader-spinner";
import { Modal, Ripple, initTWE, } from "tw-elements";
// import google from "../images/HomepageAssets/google.png";
// import facebook from "../images/HomepageAssets/facebook.png";
// import E_mail from "../images/HomepageAssets/email-icon.png";


export const LoginPopup = ({ open, onClickLogin, onClickSignup, }) => {
  const [show, setShow] = useState(false);
  initTWE({ Modal, Ripple });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    console.log(errors);
  }, [errors, message]);
  async function loginUser(e) {
    e.preventDefault();
    setLoading(true);
    setErrors({ email: "", password: "" });
    let data = { email, password };
    try {
      const response = await fetch("https://sandbox.cars.me/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        if (response.status === 422) {
          // Form field validation error
          const result = await response.json();
          setErrors(result.errors);
        } else if (response.status === 401) {
          // Unauthorized user
          setMessage("Unauthorized user");
        } else if (response.status === 500) {
          // Server code error
          setMessage("Server code error");
        } else if (response.status === 404) {
          // Not found
          setMessage("Not found");
        } else if (response.status === 403) {
          // Forbidden
          setMessage("Forbidden");
        } else {
          setMessage("An unexpected error occurred");
        }
        throw new Error('Network response was not ok');
      }

      const result = await response.json();

      if (result.data && result.data.access_token && result.data.user) {
        localStorage.setItem('user', JSON.stringify(result.data.user));
        localStorage.setItem('access_token', result.data.access_token);
        navigate("/my-profile");
      } else if (result.errors) {
        setErrors(result.errors);
      }

      if (result.message) {
        setMessage(result.message);
      }

      setEmail("");
      setPassword("");
      setSubmitted(false);
      setLoading(false);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setLoading(false);
    }
  }

  return (
    <>
      <div>
        <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </div>
      <div className={`flex absolute scroll z-50 popup p-3 ${open ? "open" : ""}`}
      >
        <div className="overlay blue-sm" ></div>

        <div className="popup-content p-6 z-50 bg-white rounded-xl">
          <div className="w-full p-2  flex justify-end"
            aria-label="Close">
            <RxCross2
              className="text-white cursor-pointer bg-gradient-to-b from-blue-700 to-cyan-500 h-7 w-7 cursor-pointer"
              onClick={onClickLogin}
            />
          </div>
          <div className="flex justify-center">
            <img className="" height={100} width={100} src={Logo}></img>
          </div>
          <div className="w-full sm:p-6 p-2">
            <h1 className="text-blue-800 text-lg pt-6 font-medium">
              Enter Your Phone Number Or E-mail
            </h1>
            <div className="block my-4 gap-4">
              <input
                type="email"
                value={email}
                placeholder="Phone Number Or E-mail"
                name="email"
                className="form-control focus:shodow-inner rounded-lg block w-full my-3 box-shadow p-4 text-base font-normal leading-6 text-gray-800  focus:outline-none transition duration-150 ease-in-out"
                style={{ border: "0px" }}
                onChange={(e) => {
                  setEmail(e.target.value);
                }} />
              {errors.email && (
                <span className="error text-red-500">{errors.email}</span>
              )}
              <div className="form-control flex justify-between p-4 my-4 form-control rounded-lg block w-full box-shadow text-base font-normal leading-6 text-gray-800 transition duration-150 ease-in-out">
                <input
                  type={show ? 'text' : 'password'}
                  placeholder="Password"
                  name="password"
                  value={password}
                  className="w-full focus:outline-none"
                  style={{ border: "0px" }}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

                <button className="block" onClick={() => setShow(!show)}>
                  {show ? (
                    <div><i className="fas fa-eye text-lg"></i></div>
                  ) : (
                    <div><i className="fas fa-eye-slash text-lg"></i></div>
                  )}
                </button>

              </div>
              {errors.password && (
                <span className="error text-red-500">{errors.password}</span>
              )}
            </div>
            <Link
              to="/"
              className="text-left justify-start underline text-lg font-medium text-blue-800"
            >
              Forgotten Password?
            </Link>
            <button
              className="form-control relative rounded-lg block w-full p-4  my-4 text-white text-lg font-black leading-6 bg-blue-600  transition duration-150 ease-in-out"
              style={{ border: "0px" }}
              onClick={loginUser}
              disabled={submitted || loading}
            >
              {loading ? (
                <div className="inset-0 flex items-center justify-center bg-blue-600">
                  <TailSpin
                    visible={true}
                    height="40"
                    width="40"
                    color="#e5e7eb"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                  /></div>) : (
                "Log In"
              )}
            </button>
            <p className="text-left justify-start flex text-lg font-normal text-blue-800">
              You Have An Account yet?{" "}
              <span
                className="font-medium cursor-pointer"
                onClick={onClickSignup}
              >
                {" "}
                Sign Up Here
              </span>
            </p>
          </div>
        </div>
        {message && (
          <div className="absolute message mx-auto" onClick={() => setMessage('')}>
            <div className="container mx-auto">
              <div className={`rounded-md  w-full ${message === "Login Successfully" ? ' bg-[#C4F9E2]' : 'bg-red-300'} p-4`}>
                <p className="flex items-center text-sm font-medium text-[#004434]">
                  <span className="pr-3">
                    {message === "Login Successfully" ?
                      (<svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx={10} cy={10} r={10} fill="#00B078" />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.1203 6.78954C14.3865 7.05581 14.3865 7.48751 14.1203 7.75378L9.12026 12.7538C8.85399 13.02 8.42229 13.02 8.15602 12.7538L5.88329 10.4811C5.61703 10.2148 5.61703 9.78308 5.88329 9.51682C6.14956 9.25055 6.58126 9.25055 6.84753 9.51682L8.63814 11.3074L13.156 6.78954C13.4223 6.52328 13.854 6.52328 14.1203 6.78954Z"
                          fill="white"
                        />
                      </svg>
                      ) : (
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
                        </svg>)}
                  </span>
                  {message}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export const SignupPopup = ({ open, onClickSignup, onClickLogin }) => {
  initTWE({ Modal, Ripple });
  const [loginOpen, setLoginOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [showPC, setShowPC] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState('');
  const [otp, setOtp] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',

  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleResendOtp = () => {
    // Logic to resend OTP
  };
  useEffect(() => {
    console.log(errors);
  }, [errors, message]);
  async function saveUser(e) {
    e.preventDefault();
    setLoading(true);
    setErrors({ name: "", email: "", password: "", password_confirmation: "" });
    let data = { name, email, password, password_confirmation };

    try {
      const response = await fetch("https://sandbox.cars.me/api/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        if (response.status === 422) {
          // Form field validation error
          const result = await response.json();
          setErrors(result.errors);
        } else if (response.status === 401) {
          setLoginOpen(!loginOpen);
          setMessage("Unauthorized user");
        } else if (response.status === 500) {
          // Server code error
          setMessage("Server code error");
        } else if (response.status === 404) {
          // Not found
          setMessage("Not found");
        } else if (response.status === 403) {
          // Forbidden
          setMessage("Forbidden");
        } else {
          setMessage("An unexpected error occurred");
        }
        throw new Error('Network response was not ok');
        Navigate("/");
      }

      const result = await response.json();
      if (result.errors) {
        setErrors(result.errors);
      }

      if (result.message) {
        setMessage(result.message);
        navigate("/");

      }
      setName("");
      setEmail("");
      setPassword("");
      setPassword_confirmation("");
      setSubmitted(false);
      setLoading(false);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setLoading(false);
    }
  }

  return (
    <div className={`flex absolute scroll z-50 popup p-3 ${open ? "open" : ""}`}
    >
      <div className="overlay blue-sm" ></div>

      <div className="popup-content-signup p-6 z-50 bg-white rounded-xl" >
        <div className="w-full p-2  flex justify-end">
          <RxCross2
            className="text-white cursor-pointer bg-gradient-to-b from-blue-700 to-cyan-500 h-7 w-7"
            onClick={onClickSignup}

          />
        </div>
        <div className="flex justify-center">
          <img className="object-contain" height={100} width={100} src={Logo}></img>
        </div>
        <div className="w-full my-4 sm:p-4 p-2">
          {/* <div className="text-slate-500 flex w-full items-center text-left text-lg  border-0 border-b-2 border-slate-400 px-3 h-10 text-lg ">
            <p className="border-r-2 border-0 pr-3 border-slate-400"> +971</p>

            <input
              type="tel"
              placeholder="Phone Number"
              className="pl-3 focus:outline-none"
            />
          </div> */}
          <div className="block my-4 gap-4">
            <input
              type="name"
              value={name}
              placeholder="Please Enter Your Name"
              name="name"
              className="form-control focus:shodow-inner rounded-lg block w-full my-4 box-shadow p-4 text-base font-normal leading-6 text-gray-800  focus:outline-none transition duration-150 ease-in-out"
              style={{ border: "0px" }}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            {errors.name && (
              <span className="error text-red-500">{errors.name}</span>
            )}
            <input
              type="email"
              value={email}
              placeholder="Please Enter Your E-mail"
              name="email"
              className="form-control focus:shodow-inner rounded-lg block w-full my-4 box-shadow p-4 text-base font-normal leading-6 text-gray-800  focus:outline-none transition duration-150 ease-in-out"
              style={{ border: "0px" }}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {errors.email && (
              <span className="error text-red-500">{errors.email}</span>
            )}
            <div className="form-control flex justify-between p-4 my-4 form-control rounded-lg block w-full box-shadow text-base font-normal leading-6 text-gray-800 transition duration-150 ease-in-out">
              <input
                type={show ? 'text' : 'password'}
                placeholder="Password"
                name="password"
                value={password}
                className="w-full focus:outline-none"
                style={{ border: "0px" }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <button className="block" onClick={() => setShow(!show)}>
                {show ? (
                  <div><i className="fas fa-eye text-lg"></i></div>
                ) : (
                  <div><i className="fas fa-eye-slash text-lg"></i></div>
                )}
              </button>

            </div>
            {errors.password && (
              <span className="error text-red-500">{errors.password}</span>
            )}
            <div className="form-control flex justify-between p-4 my-4 form-control rounded-lg block w-full box-shadow text-base font-normal leading-6 text-gray-800 transition duration-150 ease-in-out">
              <input
                type={showPC ? 'text' : 'password'}
                placeholder="Confirm Password"
                name="password"
                value={password_confirmation}
                className="w-full focus:outline-none"
                style={{ border: "0px" }}
                onChange={(e) => {
                  setPassword_confirmation(e.target.value);
                }}
              />

              <button className="block" onClick={() => setShowPC(!showPC)}>
                {showPC ? (
                  <div><i className="fas fa-eye text-lg"></i></div>
                ) : (
                  <div><i className="fas fa-eye-slash text-lg"></i></div>
                )}
              </button>

            </div>
            {errors.password_confirmation && (
              <span className="error text-red-500">{errors.password_confirmation}</span>
            )}
            <div className="flex justify-between mb-4">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
                inputStyle={{
                  width: '40px',
                  height: '40px',
                  fontSize: '16px',
                  margin: '0 5px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  textAlign: 'center'
                }}
              />
              <div className="flex">
                <button onClick={handleResendOtp} className="bg-blue-500 text-white px-4 py-1.5 rounded-md focus:outline-none hover:bg-blue-600">Resend OTP</button>
              </div>
            </div>
          </div>
          <button
            className="form-control rounded-lg block w-full p-4 my-4 text-white text-lg font-black leading-6 bg-blue-600  transition duration-150 ease-in-out"
            style={{ border: "0px" }}
            onClick={saveUser}
            disabled={submitted || loading}
          >
            {loading ? (
              <div className="inset-0 flex items-center justify-center bg-blue-600">
                <TailSpin
                  visible={true}
                  height="40"
                  width="40"
                  color="#e5e7eb"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                /></div>) : (
              "Register"
            )}

          </button>
          {message && (
            <div className="absolute message mx-auto" onClick={() => setMessage('')}>
              <div className="container mx-auto">
                <div className={`rounded-md  w-full ${message === "Register Successfully" ? ' bg-[#C4F9E2]' : 'bg-red-300'} p-4`}>
                  <p className="flex items-center text-sm font-medium text-[#004434]">
                    <span className="pr-3">
                      {message === "Register Successfully" ?
                        (<svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx={10} cy={10} r={10} fill="#00B078" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.1203 6.78954C14.3865 7.05581 14.3865 7.48751 14.1203 7.75378L9.12026 12.7538C8.85399 13.02 8.42229 13.02 8.15602 12.7538L5.88329 10.4811C5.61703 10.2148 5.61703 9.78308 5.88329 9.51682C6.14956 9.25055 6.58126 9.25055 6.84753 9.51682L8.63814 11.3074L13.156 6.78954C13.4223 6.52328 13.854 6.52328 14.1203 6.78954Z"
                            fill="white"
                          />
                        </svg>
                        ) : (
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
                          </svg>)}
                    </span>
                    {message}
                  </p>
                </div>
              </div>
            </div>
          )}
          {/* <div className="text-slate-500 flex items-center">
            <hr className="w-1/2 border-t border-gray-400 inline-block" />
            <span className="font-semibold mx-2">or</span>
            <hr className="w-1/2 border-t border-gray-400 inline-block" />
          </div>
          <div>
            <Link
              to="/"
              className="flex gap-8  sm:justify-center form-control rounded-lg block w-full my-3 p-4 text-base font-normal leading-6 text-gray-800  border border-blue-800  transition duration-150 ease-in-out"
            >
              <div className="sm:w-1/2 w-full flex  items-center">
                <img src={google} className="h-8 w-8 " />
                <p className="text-blue-800 font-semibold text-nowrap text-lg sm:ml-10 ml-6">
                  Continue With Google
                </p>
              </div>
            </Link>
            <Link
              to="/"
              className="flex sm:justify-center form-control rounded-lg block w-full my-3 p-4 text-base font-normal leading-6 text-gray-800  border border-blue-800  transition duration-150 ease-in-out"
            >
              <div className="sm:w-1/2 w-full flex items-center">
                <img src={facebook} className="h-8 w-8 " />
                <p className="text-blue-800 font-semibold text-nowrap text-lg sm:ml-10 ml-6">
                  Continue With Facebook
                </p>
              </div>
            </Link>
            <Link
              to="/"
              className="flex sm:justify-center form-control rounded-lg block w-full my-3 p-4 text-base font-normal leading-6 text-gray-800  border border-blue-800  transition duration-150 ease-in-out"
            >
              <div className="sm:w-1/2 w-full flex items-center">
                <img src={E_mail} className="h-6 w-8 " />
                <p className="text-blue-800 font-semibold text-nowrap text-lg sm:ml-10 ml-6">
                  Continue With E-mail
                </p>
              </div>
            </Link>
          </div> */}
          <div className="text-left items-center flex justify-start text-lg font-normal text-blue-800">
            You Have An Account yet?{" "}
            <span
              onClick={onClickLogin} open={loginOpen} className="cursor-pointer text-lg underline font-medium">
              {" "}
              Login Here
            </span>
          </div>
          <p>
            By creating an account, you agree to cars.me, Conditions of
            Use and Privacy Notice.
          </p>
        </div>
      </div>
    </div>
  );
};
function Nav() {
  initTWE({ Modal, Ripple });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);
  useEffect(() => {
    const userInfo = localStorage.getItem('user');
    if (userInfo) {
      const user = JSON.parse(userInfo);
      setUserName(user.name);    }

  }, []);

  async function LogOut() {
    let token = localStorage.getItem('access_token');
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');

    try {
      const response = await fetch("https://sandbox.cars.me/api/logout", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        if (response.status === 422) {
          // Form field validation error
          const result = await response.json();
          setErrors(result.errors);
        } else if (response.status === 401) {
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
      navigate('/');
      setIsLoggedIn(false);
      setUserName("");
    } catch (error) {
      setErrors(error);
    }
  }
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const handleLoginClick = () => {
    setLoginOpen(!loginOpen);
    setSignupOpen(false);
  };

  const handleSignupClick = () => {
    setSignupOpen(!signupOpen);
    setLoginOpen(false);
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const [isCarMenuOpen, setIsCarMenuOpen] = useState(false);

  const handleCarMenuToggle = () => {
    setIsCarMenuOpen(!isCarMenuOpen);
  };


  const [activeNavItem, setActiveNavItem] = useState('');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  const handleUloginEnter = () => {
    setIsUserMenuOpen(true);
  }
  const handleUloginLeave = () => {
    setIsUserMenuOpen(false);
  }
  useEffect(() => {
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    function handleCarsClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleCarsClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleCarsClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="">
        <section className="justify-center flex h-14 bg-gradient-to-b from-blue-700 to-cyan-500">
          <div className="flex max-w-[1800px] mx-auto flex justify-end w-full items-center  items-center gap-2 lg:mx-16 mx-6">
            <p className="text-white text-sm font-normal cursor-pointer">ENG</p>
            {isLoggedIn ? (
              <>
                <Menu as="div" className="relative ">
                  <Menu.Button className="cursor-pointer h-14 flex items-center hover:bg-gradient-to-b hover:from-cyan-600 hover:to-blue-400 pr-10" onMouseEnter={handleUloginEnter}>
                    <div className="gap-3 px-4 flex items-center border-l border-1 cursor-pointer">
                      <img src={navUserLogo} alt="nav-logo" className="w-6 h-6" />
                      <p className="text-white text-lg font-normal ">It's {userName}</p>
                    </div>
                  </Menu.Button>
                  {isUserMenuOpen && (
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-500"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95">
                      <Menu.Items
                        className="menuItems absolute block bg-white inset-x-0 z-40 sm:py-3 rounded-sm w-full"
                        ref={userMenuRef}
                        onMouseLeave={handleUloginLeave}
                      >
                        <Menu.Item className="text-blue-800 px-2 py-1 border-b border-white pb-1 hover:bg-sky-100 cursor-pointer">
                          <Link to="/my-profile" onClick={(e) => { e.stopPropagation(); }}>
                            My Profile
                          </Link>
                        </Menu.Item>
                        <Menu.Item className="text-blue-800 px-2 py-1 border-b border-white pb-1   hover:bg-sky-100 cursor-pointer">
                          <Link to="/my-dashboard" onClick={(e) => { e.stopPropagation(); }}>
                            My Dashboard
                          </Link>
                        </Menu.Item>
                        <Menu.Item className="text-blue-800 px-2 py-1 whitespace-nowrap border-b border-white  pb-1   hover:bg-sky-100 cursor-pointer">
                          <Link to="/my-dashboard" onClick={(e) => { e.stopPropagation(); }}>
                            My Ads
                          </Link>
                        </Menu.Item>
                        <Menu.Item className="text-blue-800 px-2 py-1 whitespace-nowrap border-b border-white  pb-1   hover:bg-sky-100 cursor-pointer">
                          <Link to="/my-dashboard" onClick={(e) => { e.stopPropagation(); }}>
                            My Favourite Ads
                          </Link>
                        </Menu.Item>
                        <Menu.Item className="text-blue-800 px-2 py-1 whitespace-nowrap border-b border-white  pb-1   hover:bg-sky-100 cursor-pointer">
                          <Link to="/my-dashboard" onClick={(e) => { e.stopPropagation(); }}>
                            My Notificatons
                          </Link>
                        </Menu.Item>
                        <Menu.Item className="text-blue-800 px-2 py-1 whitespace-nowrap border-b border-white  pb-1   hover:bg-sky-100 cursor-pointer">
                          <Link to="/my-dashboard" onClick={(e) => { e.stopPropagation(); }}>
                            My Messgaes <span className="text-red-600"> (99+)</span>
                          </Link>
                        </Menu.Item>
                        <Menu.Item className="text-blue-800 px-2 py-1 whitespace-nowrap border-b border-white  pb-1   hover:bg-sky-100 cursor-pointer">
                          <Link to="/change-password" onClick={(e) => { e.stopPropagation(); }}>
                            Change Password
                          </Link>
                        </Menu.Item>
                        <li className="list-none hover:translate-y-0.5 duration-300 text-blue-800 px-2 py-1 whitespace-nowrap border-b border-white  pb-1   hover:bg-sky-100 cursor-pointer" >
                          <button onClick={LogOut}>
                            Sign Out
                          </button>
                        </li>
                      </Menu.Items>
                    </Transition>
                  )}
                </Menu>
              </>
            ) : (
              <>
                <div className="border-l flex items-center border-1 cursor-pointer" onClick={handleLoginClick}>
                  <MdOutlineLogin className="w-7 h-7 text-white mx-2" stroke="2" />
                  <p className="text-white text-sm font-normal">Login</p>
                </div>
                <div className="border-l flex items-center border-1 cursor-pointer" onClick={handleSignupClick}>
                  <RxPerson className="w-7 h-7 text-white mx-2" stroke="2" />
                  <p className="text-white text-sm font-normal">Register</p>
                </div>
              </>
            )}
          </div>
        </section>
        <section className="bg-white py-3 sm:block hidden">
          <div className="max-w-[1800px] mx-auto h-14 w-full flex justify-between items-center">
            <div className="lg:ml-20 md:ml-10 sm:ml-3 py-2 flex justify-start w-auto">
              <Link to="/" className="text-blue-800  lg:text-4xl text-3xl text-center font-bold"> <span className="text-red-600">CARS.</span><span className="text-blue-700">ME</span></Link> </div>
            <ul className="p-3 lg:gap-8 gap-4 flex flex-row">
              <li className={`px-2 py-1 rounded-xl text-black cursor-pointer text-${activeNavItem === 'home' ? 'white' : 'black'} ${activeNavItem === 'home' ? 'bg-gradient-to-b from-blue-700 to-cyan-500' : 'bg-none'}  hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:rounded-xl`} onClick={() => setActiveNavItem('home')}>
                <NavLink exact={true.toString()} to="/" activeclassname="active">
                  Home
                </NavLink>
              </li>
              <Menu as="div" className="relative">
                <div className="flex justify-between items-center">

                  <li className={`px-2 py-1  rounded-xl text-black text-${activeNavItem === 'cars' ? 'black' : 'white'}${activeNavItem === 'cars' ? 'bg-gradient-to-b from-blue-700 to-cyan-500' : 'bg-none'} cursor-pointer  hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:rounded-xl`} onClick={() => { setActiveNavItem('cars') }}>
                    <NavLink to="/usedcars">Cars</NavLink>
                  </li>
                  {" "} <Menu.Button onMouseEnter={handleMouseEnter}> <MdOutlineArrowDropDownCircle className="text-white sm:text-gray-600 sm:w-5 sm:h-5 w-6 h-6 ml-2" /></Menu.Button>
                </div>
                {isOpen && (
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-500"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items
                      className={`menuItems sm:absolute sm:block sm:bg-[#61cafbf1] origin-center   sm:inset-x-0 sm:z-40 sm:rounded-xl sm:py-3 sm:ml-[-6px] sm:mt-[-px] sm:w-32 w-full`}
                      ref={dropdownRef}
                      onMouseLeave={handleMouseLeave}
                      onMouseEnter={handleMouseEnter}
                    >
                      <Menu.Item className="text-white px-2 py-1 border-b border-white pb-1 hover:bg-sky-500 cursor-pointer">
                        <Link to="/NewCars" onClick={(e) => { e.stopPropagation(); }}>
                          New Cars
                        </Link>
                      </Menu.Item>
                      <Menu.Item className="text-white px-2 py-1 border-b border-white pb-1   hover:bg-sky-500 cursor-pointer">
                        <Link to="/UsedCars" onClick={(e) => { e.stopPropagation(); }}>
                          Used Cars
                        </Link>
                      </Menu.Item>
                      <Menu.Item className="text-white px-2 py-1 whitespace-nowrap border-b border-white  pb-1   hover:bg-sky-500 cursor-pointer">
                        <Link to="/ClassicCars" onClick={(e) => { e.stopPropagation(); }}>
                          Classic Cars
                        </Link>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                )}
              </Menu>
              {/* <li className={`px-2 py-1 text-black rounded-xl cursor-pointer text-${activeNavItem === '' ? 'white' : 'black'} ${activeNavItem === '' ? 'bg-gradient-to-b from-blue-700 to-cyan-500' : 'bg-none'}  hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:rounded-xl`} onClick={() => setActiveNavItem('')}>
                <NavLink to="/">Contact Us
                </NavLink>
              </li> */}

              <li className={`px-2 py-1 text-black rounded-xl whitespace-nowrap cursor-pointer text-${activeNavItem === 'HowItWorks' ? 'white' : 'black'} ${activeNavItem === 'HowItWorks' ? 'bg-gradient-to-b from-blue-700 to-cyan-500' : 'bg-none'}  hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:rounded-xl`} onClick={() => setActiveNavItem('HowItWorks')}>    <NavLink to="/HowItWorks">  How It Works
              </NavLink>
              </li>
              {/* <li className={`px-2 py-1 text-black rounded-xl cursor-pointer text-${activeNavItem === '' ? 'white' : 'black'} ${activeNavItem === '' ? 'bg-gradient-to-b from-blue-700 to-cyan-500' : 'bg-none'}  hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:rounded-xl`} onClick={() => setActiveNavItem('')}>
                <NavLink to="/">
                  About Us
                </NavLink>
              </li> */}
            </ul>
            <div className="lg:mr-20 md:mr-6 mr-5 sm:block hidden">
              <NavLink
                to="/sellYourCar"
                className="px-3 py-2 rounded-xl whitespace-nowrap text-white cursor-pointer bg-gradient-to-b from-red-700 to-orange-400 hover:from-orange-700 hover:to-red-400"
              >
                Sell Your Car
              </NavLink>
            </div>
          </div>
        </section>
        <section className="bg-white block sm:hidden">
          <div className="mx-auto  w-full flex justify-between items-center">
            <div className="flex pl-6 py-2 justify-between w-full">
              <Link to="/" className="text-blue-800  lg:text-4xl text-3xl text-center font-bold"> <span className="text-red-600">CARS.</span><span className="text-blue-700">ME</span></Link>  <div className="flex items-center">
                <FiMenu className="text-2xl  block relative w-[100%] mr-10 w-8 h-8 text-blue-800" onClick={handleMobileMenuToggle} fill="black" />
              </div>
            </div>
            <ul className={`p-3 lg:gap-8 gap-4 nav-mobile flex-col ${isMobileMenuOpen ? '' : 'hidden'}`}>
              <div onClick={handleMobileMenuToggle} className="w-full flex items-end justify-end"> <RxCross2 className="text-white w-7 h-7" /></div>
              <li className={`px-2 py-1 rounded-xl sm:text-black text-white cursor-pointer text-${activeNavItem === 'home' ? 'white' : 'white'} ${activeNavItem === 'home' ? 'bg-gradient-to-b from-blue-700 to-cyan-500' : 'bg-none'}  hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:rounded-xl`} onClick={() => setActiveNavItem('home')}>
                <NavLink exact={true.toString()} to="/" activeclassname="active">
                  Home
                </NavLink>
              </li>
              <Menu as="div" className="relative">
                <div className="flex justify-between items-center">

                  <li className={`px-2 py-1  rounded-xl sm:text-black text-white text-${activeNavItem === 'cars' ? 'black' : 'white'}${activeNavItem === 'cars' ? 'bg-gradient-to-b from-blue-700 to-cyan-500' : 'bg-none'} cursor-pointer  hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:rounded-xl`} onClick={() => { setActiveNavItem('cars') }}>
                    <NavLink to="/usedcars">Cars</NavLink>
                  </li>
                  {" "} <Menu.Button onClick={handleCarMenuToggle}> <MdOutlineArrowDropDownCircle className="text-white sm:text-gray-600 sm:w-5 sm:h-5 w-6 h-6 ml-2" /></Menu.Button>
                </div>
                {isCarMenuOpen && (
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-500"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items
                      className={`menuItems origin-center w-full`}
                    >
                      <Menu.Item className="text-white px-2 py-1 border-b border-white pb-1 hover:bg-sky-500 cursor-pointer">
                        <Link to="/NewCars" onClick={(e) => { e.stopPropagation(); }}>
                          New Cars
                        </Link>
                      </Menu.Item>
                      <Menu.Item className="text-white px-2 py-1 border-b border-white pb-1   hover:bg-sky-500 cursor-pointer">
                        <Link to="/UsedCars" onClick={(e) => { e.stopPropagation(); }}>
                          Used Cars
                        </Link>
                      </Menu.Item>
                      <Menu.Item className="text-white px-2 py-1 whitespace-nowrap border-b border-white  pb-1   hover:bg-sky-500 cursor-pointer">
                        <Link to="/ClassicCars" onClick={(e) => { e.stopPropagation(); }}>
                          Classic Cars
                        </Link>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                )}
              </Menu>
              {/* <li className={`px-2 py-1 sm:text-black text-white rounded-xl cursor-pointer text-${activeNavItem === '' ? 'white' : 'black'} ${activeNavItem === '' ? 'bg-gradient-to-b from-blue-700 to-cyan-500' : 'bg-none'}  hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:rounded-xl`} onClick={() => setActiveNavItem('')}>
                <NavLink to="/">Contact Us
                </NavLink>
              </li> */}

              <li className={`px-2 py-1 sm:text-black text-white rounded-xl whitespace-nowrap cursor-pointer text-${activeNavItem === 'HowItWorks' ? 'white' : 'black'} ${activeNavItem === 'HowItWorks' ? 'bg-gradient-to-b from-blue-700 to-cyan-500' : 'bg-none'}  hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:rounded-xl`} onClick={() => setActiveNavItem('HowItWorks')}>    <NavLink to="/HowItWorks">  How It Works
              </NavLink>
              </li>
              {/* <li className={`px-2 py-1 sm:text-black text-white rounded-xl cursor-pointer text-${activeNavItem === '' ? 'white' : 'black'} ${activeNavItem === '' ? 'bg-gradient-to-b from-blue-700 to-cyan-500' : 'bg-none'}  hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:rounded-xl`} onClick={() => setActiveNavItem('')}>
                <NavLink to="/">
                  About Us
                </NavLink>
              </li> */}
              <div className="h-auto mt-3 block">
                <NavLink
                  to="/sellYourCar"
                  className="px-3 py-2  rounded-xl text-white bg-gradient-to-b from-red-700 to-orange-400 cursor-pointer"
                >
                  Sell Your Car
                </NavLink>
              </div>
            </ul>
          </div>
        </section>
        <div className="absolute z-50">
          <LoginPopup open={loginOpen} onClickLogin={handleLoginClick} onClickSignup={handleSignupClick} />
          <SignupPopup open={signupOpen} onClickSignup={handleSignupClick} onClickLogin={handleLoginClick} />
        </div>
      </nav>
    </>
  );
}
export default Nav;
