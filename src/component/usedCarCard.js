import React, { useEffect, useState } from "react";
import redCar from "../images/HomepageAssets/MaskGroup13.png";
import calendar from "../images/HomepageAssets/calender-svgrepo-com.png";
import meter from "../images/HomepageAssets/meter-free-2-svgrepo-com.png";
import group from "../images/HomepageAssets/Group99.png";
import engine from "../images/HomepageAssets/engine-motor-svgrepo-com.png";
import gearLiver from "../images/HomepageAssets/GearLiver-1.png";
import fireSvgrepo from "../images/HomepageAssets/fire-svgrepo-com.png";
import { Link } from "react-router-dom";

const CarCard = () => {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   fetch("http://127.0.0.1:8000/api/car/").then((response) =>{
  //       return response.json()
  //   }).then((cars)=>{
  //       setData(cars)
  //   })
  //   .catch((error) => {
  //       console.error('Error fetching data:', error);
  //   });
  //   }; 

  // console.log(data);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    const storedState = localStorage.getItem('isHeartFilled');
    if (storedState !== null) {
      setIsFilled(JSON.parse(storedState));
    }
  }, []);

  const handleClick = () => {
    const newState = !isFilled;
    setIsFilled(newState);
    localStorage.setItem('isHeartFilled', JSON.stringify(newState));
  };
  return (
    //   <>
    //     {data && data.length> 0 && data.map((car, index) => (
    //   <Link key={car.id} to={{ pathname: `/carDetail/${car.car_name}/${car.id}`, state: { carData: car } }}>
    //   <div key={index} className="bg-white hover:shadow-inner sm:rounded-3xl rounded-xl shadow-lg shadow-blue-500/50">
    //     <img className="rounded-b-2xl w-full" src={redCar}></img>
    //     <div className="sm:p-4 p-3">
    //       <div className="flex pb-2 justify-between">
    //         <h1 className="text-blue-800 text-left mb-2 font-bold sm:text-2xl text-lg">
    //           {car.car_name}
    //         </h1>
    //         <p className="sm:px-6 px-2 rounded-xl text-red-600 bg-transparent flex items-center  border-1 border border-blue-500 ">
    //          {car.car_rating}/10
    //         </p>
    //       </div>
    //       <p className="text-left mb-3 text-red-600 text-lg"> Dubai</p>
    //       <div className="grid sm:grid-cols-3 grid-cols-2  gap-x-2 gap-y-5">
    //         <div className="flex justify-between sm:justify-around items-center">
    //           <img src={calendar} className="sm:w-8 sm:h-8 w-6 h-6"/>
    //           <p className="text-red-600 text-xs sm:text-sm">{car.car_make}</p>
    //         </div>
    //         <div className="flex justify-between sm:justify-around items-center">
    //           <img src={meter}  className="sm:w-8 sm:h-8 w-6 h-6"/>
    //           <p className="text-red-600 text-xs sm:text-sm">{car.car_mileage}</p>
    //         </div>
    //         <div className="flex justify-between sm:justify-around items-center">
    //           <img src={group}  className="sm:w-8 sm:h-8 w-6 h-6"/>
    //           <p className="text-red-600 text-xs sm:text-sm text-nowrap"> {car.car_seating_capacity} People</p>
    //         </div>
    //         <div className="flex justify-between sm:justify-around items-center">
    //           <img src={engine}  className="sm:w-8 sm:h-8 w-6 h-6"/>
    //           <p className="text-red-600 text-xs sm:text-sm"> {car.car_engine_capacity}cc</p>
    //         </div>
    //         <div className="flex justify-between sm:justify-around items-center">
    //           <img src={gearLiver}  className="w-7 h-7"/>
    //           <p className="text-red-600 text-xs sm:text-sm capitalize">{car.car_transmission} </p>
    //         </div>
    //         <div className="flex justify-between sm:justify-around items-center">
    //           <img src={fireSvgrepo}  className="sm:w-8 sm:h-8 w-6 h-6"/>
    //           <p className="text-red-600 text-xs sm:text-sm capitalize"> {car.car_engine_type}</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="mb-2 p-4 flex justify-between">
    //       <h1 className="text-blue-800 text-left mb-2 font-bold sm:text-2xl text-sm">
    //         AED 1,95,000
    //       </h1>
    //       <FaRegHeart className="text-blue-800 sm:w-8 sm:h-8 w-5 h-5" />
    //     </div>
    //   </div>

    //   </Link>
    //   ))}
    // </>
    <>
      <div className="bg-white hover:shadow-inner car-card max-w-[350px] sm:rounded-3xl rounded-xl shadow-xl">
        <Link to='/carDetail'>
          <img className="rounded-2xl w-full" src={redCar}></img>
        </Link>
        <div className="p-3">
          <div className="flex flex-row  pb-2 justify-between">
            <h1 className="text-blue-800 text-left mb-2 font-bold md:text-xl text-lg">
              Volkswagen ID.5 2023
            </h1>
            <div className="mt-1">
              <p className="sm:px-4 px-2 cursor-pointer rounded-xl text-red-600 bg-transparent whitespace-nowrap flex items-center btn-text border-1 border border-blue-500">
                9/10
              </p>
            </div>
          </div>
          <p className="text-left mb-3 text-red-600 md:text-lg text-sm"> Dubai</p>
          <div className="grid grid-cols-3   gap-x-2  gap-y-5">
            <div className="flex items-center px-2">
              <img src={calendar} className="object-contain sm:w-5 sm:h-5 w-6 h-6" />
              <p className="text-red-600 lg:ml-2 sm:ml-1 ml-2 text-xs ">2023</p>
            </div>
            <div className="flex items-center px-2">
              <img src={meter} className="object-contain sm:w-5 sm:h-5 w-6 h-6" />
              <p className="text-red-600 text-nowrap lg:ml-2 sm:ml-1 ml-2 text-xs ">1500Km</p>
            </div>
            <div className="flex items-center px-2">
              <img src={group} className="object-contain sm:w-5 sm:h-5 w-6 h-6" />
              <p className="text-red-600 lg:ml-2 sm:ml-1 ml-2 text-xs  text-nowrap"> 4 People</p>
            </div>
            <div className="flex items-center px-2">
              <img src={engine} className="object-contain sm:w-5 sm:h-5 w-6 h-6" />
              <p className="text-red-600 lg:ml-2 sm:ml-1 ml-2 text-xs ">1500cc</p>
            </div>
            <div className="flex items-center px-2">
              <img src={gearLiver} className="object-containsm:w-5 sm:h-5 w-6 h-6" />
              <p className="text-red-600 lg:ml-2 sm:ml-1 ml-2 text-xs  capitalize">Automatic </p>
            </div>
            <div className="flex items-center px-2">
              <img src={fireSvgrepo} className="object-contain sm:w-5 sm:h-5 w-6 h-6" />
              <p className="text-red-600 lg:ml-2 sm:ml-1 ml-2 text-xs  capitalize"> Petrol</p>
            </div>
          </div>
        </div>
        <div className="pb-3 pt-1 px-4 flex justify-between">
          <h1 className="text-blue-800 text-left mb-2 font-bold sm:text-xl text-lg cursor-pointer">
            AED 1,95,000
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isFilled ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className={isFilled ? "active:fill-blue-800 text-blue-800 w-6 h-6" : "text-blue-800 w-6 h-6"}
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
export default CarCard;
