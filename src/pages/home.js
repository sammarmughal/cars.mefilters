import React, { useState, useEffect } from "react";
import Nav from "../component/nav";
import Footer from "../component/footer";
import Mainimg from "../images/HomepageAssets/header.png";
import fromIcon from "../images/HomepageAssets/Aed.png";
import mapIcon from "../images/HomepageAssets/Page-1.png";
import wheelIcon from "../images/HomepageAssets/primary.png";
import TrnsmissionIcon from "../images/HomepageAssets/GearLiver.png";
import aboutCar from "../images/HomepageAssets/bmw.png";
import Logo from "../images/HomepageAssets/logo.png";
import sparePartsBanner from "../images/HomepageAssets/spare-banner.png";
import cardCar from "../images/HomepageAssets/honda.png";
import cardCar2 from "../images/HomepageAssets/toyota.png";
import Register from "../component/register";
import { IoIosArrowDown } from "react-icons/io";
import { FaStar, FaRegStar } from "react-icons/fa";
import Select from "react-select";
import CustomerReviews from "../component/CustomerReviews";
import SellerBenefits from "../component/sellerBenefits";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Home() {
  const Card = (props) => {
    const [isFilled, setIsFilled] = useState(false);

    useEffect(() => {
      const storedState = localStorage.getItem("isHeartFilled");
      if (storedState !== null) {
        setIsFilled(JSON.parse(storedState));
      }
    }, []);

    const handleClick = () => {
      const newState = !isFilled;
      setIsFilled(newState);
      localStorage.setItem("isHeartFilled", JSON.stringify(newState));
    };
    return (
      <>
        <div className="bg-white hover:shadow-inner justify-between rounded-2xl shadow-lg">
          <img className="rounded-2xl w-full" src={props.src}></img>
          <div className="sm:p-4 p-2">
            <h1 className="text-blue-800 text-left mb-2 font-bold sm:text-xl">
              {props.title}
            </h1>
            <div className="flex gap-2">
              <FaStar className="text-amber-500" />
              <FaStar className="text-amber-500" />
              <FaStar className="text-amber-500" />
              <FaStar className="text-amber-500" />
              <FaRegStar className="text-slate-500" />
            </div>
          </div>
          <div className="mb-2 sm:p-4 p-2 flex justify-between items-center">
            <Link className="px-4 py-1 flex btn-text justify-center items-center bg-gradient-blue">
              Shop Now
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isFilled ? "currentColor" : "none"}
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className={
                isFilled
                  ? "active:fill-blue-800 text-blue-800 w-7 h-7"
                  : "text-blue-800 w-7 h-7"
              }
              onClick={handleClick}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>
        </div>
      </>
    );
  };
  const [isDropdownCountryOpen, setIsDropdownCountryOpen] = useState(false);
  const [isDropdownBrandOpen, setIsDropdownBrandOpen] = useState(false);
  const [isDropdownTransmissionOpen, setIsDropdownTransmissionOpen] =
    useState(false);
  const handleToggleCountry = () => {
    setIsDropdownCountryOpen(!isDropdownCountryOpen);
  };
  const handleToggleBrand = () => {
    setIsDropdownBrandOpen(!isDropdownBrandOpen);
  };
  const handleToggleTransmission = () => {
    setIsDropdownTransmissionOpen(!isDropdownTransmissionOpen);
  };

  const [make, setMake] = useState([]);
  const [state, setState] = useState([]);
  const [transmissions, setTransmissions] = useState([]);
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://sandbox.cars.me/api/ad-fields");
        if (!response.ok) {
          throw new Error("Failed to fetch ad fields");
        }
        const data = await response.json();
        setMake(data.makes);
        setState(data.states);
        setTransmissions(data.transmissions);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      padding: "4px",
      borderRadius: "0.375rem",
      backgroundColor: state.isSelected ? "rgb(186 230 253)" : "white",
      borderWidth: "1px",
      borderColor: state.isSelected ? "rgb(186 230 253)" : "",
      color: "black",
      "&:hover": {
        borderColor: "rgb(186 230 253)",
        color: "black",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "rgb(186 230 253)"
        : state.isFocused
        ? "rgb(186 230 253)"
        : null,
      color: "rgb(30 64 175)",
    }),
  };
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedTransmission, setSelectedTransmission] = useState("");
  let stateOptions = [];
  if (state) {
    stateOptions = state.map((states) => ({
      value: states.id,
      label: states.name,
    }));
  }
  const makeOptions = make.map((makes) => ({
    value: makes.id,
    label: makes.name,
  }));
  const transmissionsOptions = Object.entries(transmissions).map(
    ([key, value]) => ({ value: key, label: value })
  );

  const handlePriceFromChange = (e) => {
    setPriceFrom(e.target.value);
  };
  const handlePriceToChange = (e) => {
    setPriceTo(e.target.value);
  };
  const handleMakeChange = (selectedOption) => {
    setSelectedMake(selectedOption.value);
  };
  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption.map((option) => option.value));
  };
  const handleTransmissionChange = (selectedOption) => {
    setSelectedTransmission((prevState) => {
      if (prevState.includes(selectedOption.value)) {
        return prevState.filter((value) => value !== selectedOption.value);
      } else {
        return [...prevState, selectedOption.value];
      }
    });
  };
  const filters = {
    makes: selectedMake,
    states: selectedState,
    transmissions: selectedTransmission,
    price_from: priceFrom,
    price_to: priceTo,
    // ... add all other filters here
  };
  const handleFindCar = () => {
    const queryParams = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value) {
          queryParams.set(key, value);
        }
      });
    }
    const queryString = queryParams.toString();
    navigate(`/usedcars?${queryString}`);
  };
  return (
    <>
      <Nav />
      <div className="relative d-flex justify-center items-center">
        <div className="relative">
          <img className=" w-full h-full" src={Mainimg} />
          <div className="absolute z-10 top-1/2 left-1/2 max-w-[1800px] mx-auto  transform -translate-x-1/2 -translate-y-1/2  text-center text-white">
            <h1 className="text-white text-center lg:text-lg sm:text-sm text-xs">
              Maximize Your Car's Value with Minimal Effort
            </h1>
            <h1 className="text-white text-center font-bold lg:text-4xl sm:text-2xl text-sm">
              Buy and Sell Cars For Free
            </h1>
            <div className="lg:mt-8 mt-3 w-max justify-center mx-auto">
              <Link
                to="/sellYourCar"
                className="lg:px-10 sm:px-6 btn-text px-3 lg:py-3 py-1 sm:py-2 save-btn"
              >
                Sell Your Car
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute z-0 inset-0 bg-black bg-opacity-50 "></div>
      </div>
      <div className="bg-sky-100	lg:px-20 md:px-10 sm:px-4">
        <div className="lg:w-[60%] shadow-xl  bg-white z-20 rounded-xl mx-auto relative find-sec">
          <div className="pt-8 flex justify-center gap-2">
            <Link to="/NewCars" className="ct-btn rounded-full">
              New
            </Link>
            <Link to="/UsedCars" className="ct-btn rounded-full">
              Used
            </Link>
          </div>
          <h1 className="text-blue-800 py-3 lg:text-3xl text-xl text-center font-bold">
            Discover the Perfect Ride for You
          </h1>
          <div className="p-3 lg:mx-8 mx-4 grid  lg:grid-cols-3 grid-cols-2 gap-3">
            <div className="border-1 border border-cyan-500 css-dc7k1j-control formInput text-xs font-medium flex flex-nowrap justify-between rounded-xl ">
              <div className="flex items-center p-1 sm:p-2">
                <img src={fromIcon} className="object-contain" />
                <input
                  placeholder="Price From"
                  onChange={handlePriceFromChange}
                  styles={customStyles}
                  className="w-full focus:outline-none px-2  placeholder:text-[hsl(0, 0%, 50%)]"
                />
                {/* <div className="flex items-center p-1 sm:p-2">
                  <IoIosArrowDown className="h-6 w-6 text-blue-800" />
                </div> */}
              </div>
            </div>
            <div className="border-1 border css-dc7k1j-control formInput text-xs font-medium border-cyan-500  flex justify-between rounded-xl">
              <div className="flex items-center p-1 sm:p-2">
                <img src={fromIcon} className="" />
                <input
                  onChange={handlePriceToChange}
                  placeholder="Price To"
                  styles={customStyles}
                  className="w-full focus:outline-none px-2  placeholder:text-[hsl(0, 0%, 50%)]"
                />
                {/* <div className="flex items-center p-1 sm:p-2">
                <IoIosArrowDown className="h-6 w-6 text-blue-800" />
              </div> */}
              </div>
            </div>
            <div className="relative">
              <div className="border-1 border  css-dc7k1j-control formInput text-xs font-medium border-cyan-500  flex justify-between rounded-xl ">
                <div className="flex items-center p-1 sm:p-2">
                  <img src={mapIcon} className="" />
                  <p className="pl-2  text-slate-700">Select Country</p>
                </div>
                <div className="flex items-center p-1 sm:p-2">
                  <IoIosArrowDown
                    onClick={handleToggleCountry}
                    className={`h-6 w-6 transition-transform duration-400 text-blue-800 ${
                      isDropdownCountryOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
              {isDropdownCountryOpen && (
                <div className="bg-white">
                  <Select
                    onChange={handleStateChange}
                    options={stateOptions}
                    styles={customStyles}
                    isSearchable
                    isMulti
                  />
                </div>
              )}
            </div>
            <div className="relative">
              <div className="border-1 border css-dc7k1j-control formInput text-xs font-medium border-cyan-500  flex justify-between rounded-xl ">
                <div className="flex items-center p-1 sm:p-2">
                  <img src={wheelIcon} className="" />
                  <p className="pl-2 text-slate-700">Select Brand</p>
                </div>
                <div className="flex items-center p-1 sm:p-2">
                  <IoIosArrowDown
                    onClick={handleToggleBrand}
                    className={`h-6 w-6 text-blue-800 transition-transform duration-400 ${
                      isDropdownBrandOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
              <div className="w-full absolute py-2">
                {isDropdownBrandOpen && (
                  <div className="bg-white">
                    <Select
                      onChange={handleMakeChange}
                      options={makeOptions}
                      styles={customStyles}
                      isSearchable
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="relative">
              <div className="border-1 border css-dc7k1j-control formInput text-xs font-medium border-cyan-500  flex justify-between rounded-xl ">
                <div className="flex items-center p-1 sm:p-2">
                  <img
                    src={TrnsmissionIcon}
                    width={35}
                    height={35}
                    className="h-8"
                  />
                  <p className="pl-2 text-slate-700 text-wrap sm:text-nowrap">
                    Transmission Type
                  </p>
                </div>
                <div className="flex items-center p-1 sm:p-2">
                  <IoIosArrowDown
                    onClick={handleToggleTransmission}
                    className={`h-6 w-6 transition-transform duration-400 text-blue-800 ${
                      isDropdownTransmissionOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
              <div className="w-full absolute py-2">
                {isDropdownTransmissionOpen && (
                  <div className="bg-white rounded-lg p-4">
                    {transmissionsOptions.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center space-x-2 gap-4"
                      >
                        <input
                          type="checkbox"
                          value={option.value}
                          checked={selectedTransmission.includes(option.value)}
                          onChange={() => handleTransmissionChange(option)}
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={handleFindCar}
              className="text-xs font-medium flex items-center justify-center bg-gradient-blue"
            >
              <p className="text-center flex items-center sm:text-lg text-sm">
                Find Car
              </p>
            </button>
          </div>
        </div>
        <div className="mx-4  max-w-[1800px] sm:mx-auto ">
          <h1 className="text-blue-800 border-l-4 font-bold pl-4 border-blue-800 sm:text-3xl text-xl mt-10 text-left">
            List Your Car for Free!
          </h1>
          <div className="flex sm:flex-row flex-col-reverse gap-6">
            <div className="sm:w-[60%]">
              <h2 className="sm:text-2xl text-blue-800 font-bold text-xl pt-8">
                Searching for the Best Free Car Listing Website? Look No
                Further!
              </h2>
              <p className="lg:text-lg  text-sm  text-left pt-5">
                Welcome to Cars.me, your ultimate destination for{" "}
                <strong>Free car listing online.</strong> As the{" "}
                <strong>best free car listing website</strong>, we offer
                unparalleled convenience and efficiency in showcasing your
                vehicles to potential buyers.
              </p>
              <p className="lg:text-lg  text-sm  text-left pt-5">
                With our user-friendly platform, you can effortlessly{" "}
                <strong>list your cars for free</strong>, reaching a wide
                audience of eager buyers. Whether you're a private seller or a
                dealership, Cars.me provides the perfect space to showcase your
                inventory.
              </p>
              <p className="lg:text-lg  text-sm  text-left pt-5">
                Say goodbye to burdensome processes and fees – our commitment to
                being the <strong>best car listing website</strong> means you can list your
                vehicles quickly and easily, without breaking the bank.
                Experience the freedom of selling your cars with Cars.me today.
              </p>
            </div>
            <div className="pt-5 sm:w-[50%] max-w-[750px] relative">
              <img src={aboutCar} className="w-full" />
              <div className="absolute z-10 top-0 flex justify-center mx-auto w-full">
                <Link to="/">
                  <img
                    src={Logo}
                    className="w-20   pt-8"
                    style={{ transform: "translateX(-50%)" }}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="max-w-[1800px] mx-auto pt-6 flex justify-center">
            <img src={sparePartsBanner} className="w-full max-w-[1700px]" />
          </div>
        </div>
      </div>
      <div className="my-6 w-11/12  max-w-[1800px] mx-auto">
        <div className="flex justify-center items-center">
          <h1 className="text-blue-800 border-l-4 border-blue-800 pl-4 lg:text-4xl sm:text-3xl text-xl text-center font-bold">
            Popular Categories of Vehicles
          </h1>
        </div>
        <div className="flex flex-wrap sm:text-base text-xs sm:mx-auto lg:gap-8 gap-4 lg:justify-start justify-center w-full my-8">
          <p className="ct-btn rounded-xl">Sedan</p>
          <p className="ct-btn rounded-xl">Coupe</p>
          <p className="ct-btn rounded-xl">SUV</p>
          <p className="ct-btn rounded-xl">Wagon</p>
          <p className="ct-btn rounded-xl">Convertible</p>
          <p className="ct-btn rounded-xl">Hatchback</p>
          <p className="ct-btn rounded-xl">Crossover</p>
          <p className="ct-btn rounded-xl">Minivan</p>
          <p className="ct-btn rounded-xl">Pickup Truck</p>
          <p className="ct-btn rounded-xl">Electric</p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
          <Card src={cardCar} title="Honda Civic 2024" />
          <Card src={cardCar2} title="Toyota Camry 2023" />
          <Card src={cardCar} title="Honda Civic 2024" />
          <Card src={cardCar2} title="Toyota Camry 2023" />
          <Card src={cardCar} title="Honda Civic 2024" />
          <Card src={cardCar2} title="Toyota Camry 2023" />
          <Card src={cardCar} title="Honda Civic 2024" />
          <Card src={cardCar2} title="Toyota Camry 2023" />
        </div>
        <div className="flex justify-center my-10">
          <p className="px-4 py-2 btn-text rounded-lg bg-gradient-blue">
            View More Sedan Cars
          </p>
        </div>
      </div>
      <Register />
      {/* <div className="lg:w-[90%] w-[95%] max-w-[1800px]  mx-auto  my-6">
        <div className="flex py-5 justify-center items-center">
          <h1 className="text-blue-800 border-l-4 border-blue-800 pl-4 lg:text-4xl sm:text-3xl text-xl text-center font-bold">
            Featured Used Cars
          </h1>
        </div>
        <div className="grid mx-auto justify-center items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-6 lg:gap-x-5 gap-x-3 gap-y-5">
          <div className="mx-auto"><CarCard /></div>
          <div className="mx-auto"><CarCard /></div>
          <div className="mx-auto"><CarCard /></div>
          <div className="mx-auto"><CarCard /></div>
        </div>

        <div className="flex justify-center pt-5 my-5">
          <Link to="/cars" className="px-4 py-2 rounded-lg bg-gradient-blue">
            View All Featured Cars
          </Link>
        </div>
      </div> */}
      <SellerBenefits />

      <CustomerReviews />

      <Footer />
    </>
  );
}
export default Home;
