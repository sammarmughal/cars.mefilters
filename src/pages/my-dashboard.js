import React, { useState, useEffect } from "react";
import Nav from "../component/nav";
import Footer from "../component/footer";
import Register from "../component/register";
import bilal from "../images/HomepageAssets/bilal.png";
import banner from "../images/HomepageAssets/banner241.png";
import calendar from "../images/HomepageAssets/calender-svgrepo-com.png";
import meter from "../images/HomepageAssets/meter-free-2-svgrepo-com.png";
import group from "../images/HomepageAssets/Group99.png";
import engine from "../images/HomepageAssets/engine-motor-svgrepo-com.png";
import Swal from "sweetalert2";
import { RxCross2 } from "react-icons/rx";
import gearLiver from "../images/HomepageAssets/GearLiver-1.png";
import { ReactComponent as FireSvg } from "../images/HomepageAssets/fire-svgrepo-com.png";
import ContentLoader from "react-content-loader";
import { ImBullhorn, ImMail2 } from "react-icons/im";
import { FaHeart } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Edit_form } from "../component/editForm";
function UserPanel() {
  const [activePanel, setActivePanel] = useState("No active Ads");
  const [userAds, setUserAds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFilled, setIsFilled] = useState(false);
  const [error, setError] = useState(null);
  const [deletedPostIds, setDeletedPostIds] = useState([]);
  const [editForm, setEditForm] = useState(false);
  const [slug, setSlug] = useState("");
  const [serial_no, setSerial_no] = useState("");
  const handleEditForm = (serial_no , slug) => {
    setSlug(slug);
    setSerial_no(serial_no); // Set the serial number in state
    setEditForm(true); // Open the edit form popup
  };
  useEffect(() => {
    const storedState = localStorage.getItem("isHeartFilled");
    if (storedState !== null) {
      setIsFilled(JSON.parse(storedState));
    }
  }, []);

  const handleClickHeart = () => {
    const newState = !isFilled;
    setIsFilled(newState);
    localStorage.setItem("isHeartFilled", JSON.stringify(newState));
  };
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://sandbox.cars.me/api/my-ads", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user ads");
        }
        return response.json();
      })
      .then((result) => {
        const userAdsData = result.data;
        const deletedPostIds = JSON.parse(
          localStorage.getItem("deletedPostIds") || "[]"
        );
        const filteredUserAds = userAdsData.postAds.filter(
          (ad) => !deletedPostIds.includes(ad.serial_no)
        );
        setUserAds(filteredUserAds);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);
  const handleDelete = (adId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // If the user confirms the deletion
      if (result.isConfirmed) {
        setIsLoading(true);
        const token = localStorage.getItem("access_token");
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        const requestOptions = {
          method: "DELETE",
          headers: myHeaders,
          redirect: "follow",
        };

        fetch(`https://sandbox.cars.me/api/post-ad/${adId}`, requestOptions)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to delete the post");
            }
            setUserAds((prevUserAds) =>
              prevUserAds.filter((ad) => ad.serial_no !== adId)
            );
            const deletedPostIds = JSON.parse(
              localStorage.getItem("deletedPostIds") || "[]"
            );
            deletedPostIds.push(adId);
            localStorage.setItem(
              "deletedPostIds",
              JSON.stringify(deletedPostIds)
            );
            return response.text();
          })
          .then((result) => {
            console.log(result);
            // Update state after successful deletion
            // For example, fetch updated userAds
          })
          .catch((error) => {
            console.error(error);
            setError(error.message);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    });
  };

  return (
    <>
      <Nav />
      <div className="md:w-[80%] w-[95%]  max-w-[1800px] mx-auto">
        <div className="flex flex-col gap-4 mt-10">
          <h1 className="text-blue-800 font-black lg:text-5xl sm:text-3xl text-xl tracking-wider">
            My Dashboard
          </h1>
          <h2 className="sm:text-xl text-sm">
            Welcome Muhammad Bilal at Cars.me!
          </h2>
        </div>
        <div className="flex flex-row my-8">
          <div>
            <img src={bilal} alt="avatar" />
          </div>
          <div className="ml-8 flex flex-col justify-evenly h-full mt-3">
            <h1 className="text-blue-800 text-left mb-2 font-bold md:text-2xl text-lg">
              Muhammad Bilal
            </h1>
            <p className="mt-2">Member Since 24 May 2024</p>
            <div className="flex gap-2 mt-2">
              <Link
                to="/my-profile"
                className="text-blue-800 hover:underline sm:text-base text-xs"
              >
                Profile Details
              </Link>
              <Link
                to="/change-password"
                className="border-l border-blue-800 pl-2 text-blue-800 hover:underline sm:text-base text-xs"
              >
                Change Passwords
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:flex max-h-330px h-full  mb-28">
          <div className="text-blue-800 justify-center md:w-full sm:block flex sm:max-w-[300px]">
            <div className="panel-btn" onClick={() => setActivePanel("My Ads")}>
              <div className="md:flex  items-center justify-center">
                <div className="md:w-auto w-full flex justify-center">
                  <ImBullhorn className="md:w-7 md:h-7 sm:w-6 sm:h-6 w-5 h-5" />
                </div>
                <p className="font-semibold w-full md:text-left text-center text-nowrap md:text-xl sm:text-lg text-xs md:ml-6">
                  My Ads
                </p>
              </div>
            </div>
            <div
              className="panel-btn"
              onClick={() => setActivePanel("My Favourite Ads")}
            >
              <div className="md:flex  items-center justify-center">
                <div className="md:w-auto w-full flex justify-center">
                  <FaHeart className="md:w-7 md:h-7 sm:w-6 sm:h-6 w-5 h-5" />
                </div>
                <p className="font-semibold w-full md:text-left text-center text-nowrap md:text-xl sm:text-lg text-xs md:ml-6">
                  My Favourite Ads
                </p>
              </div>
            </div>
            <div
              className="panel-btn"
              onClick={() => setActivePanel("My Notifications")}
            >
              <div className="md:flex  items-center justify-center">
                <div className="md:w-auto w-full flex justify-center">
                  <IoNotifications className="md:w-7 md:h-7 sm:w-6 sm:h-6 w-5 h-5" />
                </div>
                <p className="font-semibold w-full md:text-left text-center text-nowrap md:text-xl sm:text-lg text-xs md:ml-6">
                  My Notifications
                </p>
              </div>
            </div>
            <div
              className="panel-btn"
              onClick={() => setActivePanel("My Messages")}
            >
              <div className="w-[90%] md:flex  items-center justify-center">
                <div className="md:w-auto w-full flex justify-center">
                  <ImMail2 className="md:w-7 md:h-7 sm:w-6 sm:h-6 w-5 h-5" />
                </div>
                <p className="font-semibold w-full md:text-left text-center text-nowrap md:text-xl sm:text-lg text-xs md:ml-6">
                  My Messeges
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-full border border-cyan-600 relative min-h-[300px]">
              {activePanel === "My Ads" && (
                <div>
                  <div className="grid grid-cols-3">
                    <div className="border border-cyan-600 p-4 text-blue-800 hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:text-white">
                      <div
                        className="flex items-center justify-center"
                        style={{ maxWidth: "300px" }}
                      >
                        <p className="font-normal md:text-xl text-lg flex items-center sm:text-base text-xs">
                          Active{" "}
                          <span className="text-red-600">
                            ({userAds.length})
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="border border-cyan-600 p-4 text-blue-800 hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:text-white">
                      <div
                        className="flex items-center justify-center"
                        style={{ maxWidth: "300px" }}
                      >
                        <p className="font-normal md:text-xl text-lg flex items-center sm:text-base text-xs">
                          Pending <span className="text-red-600">(0)</span>
                        </p>
                      </div>
                    </div>
                    <div className="border border-cyan-600 p-4 text-blue-800 hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:text-white">
                      <div
                        className="flex items-center justify-center"
                        style={{ maxWidth: "300px" }}
                      >
                        <p className="font-normal md:text-xl text-lg flex items-center sm:text-base text-xs">
                          Removed <span className="text-red-600">(0)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {isLoading && (
                    <ContentLoader
                      speed={2}
                      width={350}
                      height={475}
                      viewBox="0 0 350 475"
                      backgroundColor="#f3f3f3"
                      foregroundColor="#ecebeb"
                    >
                      <rect
                        x="0"
                        y="0"
                        rx="10"
                        ry="10"
                        width="350"
                        height="200"
                      />
                      <rect
                        x="20"
                        y="220"
                        rx="0"
                        ry="0"
                        width="200"
                        height="20"
                      />
                      <rect
                        x="20"
                        y="250"
                        rx="0"
                        ry="0"
                        width="120"
                        height="20"
                      />
                      <rect
                        x="20"
                        y="290"
                        rx="0"
                        ry="0"
                        width="80"
                        height="20"
                      />
                      <rect
                        x="20"
                        y="330"
                        rx="0"
                        ry="0"
                        width="80"
                        height="20"
                      />
                      <rect
                        x="20"
                        y="370"
                        rx="0"
                        ry="0"
                        width="80"
                        height="20"
                      />
                      <rect
                        x="20"
                        y="410"
                        rx="0"
                        ry="0"
                        width="80"
                        height="20"
                      />
                      <rect
                        x="20"
                        y="450"
                        rx="0"
                        ry="0"
                        width="80"
                        height="20"
                      />
                    </ContentLoader>
                  )}
                  {!isLoading && userAds.length === 0 && (
                    <div className="text-blue-800 text-center w-full h-full flex justify-center inset-0 absolute items-center">
                      No active Ads
                    </div>
                  )}
                  {!isLoading && userAds.length > 0 && (
                    <div className="flex flex-col gap-4 sm:p-4 p-2">
                      {userAds.map((ad) => (
                        <div
                          key={ad.serial_no}
                          className=" bg-white sm:flex gap-6 hover:shadow-inner car-card w-full sm:rounded-3xl rounded-xl shadow-xl"
                        >
                          <div>
                            <img
                              className="rounded-2xl w-full h-36 object-fit sm:min-w-[192px]"
                              src={ad.thumbnail}
                              alt={ad.make_model}
                            />
                          </div>
                          <div className="p-3 flex flex-col justify-between">
                            <div className="flex flex-row px-4 pb-2 justify-between">
                              <h1 className="text-blue-800 text-left mb-2 font-bold md:text-xl text-lg">
                                {ad.make} {ad.make_model} {ad.year}
                              </h1>
                            </div>
                            <div className="grid grid-cols-3 gap-x-2 px-4 gap-y-5">
                              <div className="flex items-center px-2">
                                <img
                                  src={calendar}
                                  className="object-contain sm:w-5 sm:h-5 w-6 h-6"
                                  alt="Year"
                                />
                                <p className="text-red-600 lg:ml-2 sm:ml-1 ml-2 text-xs ">
                                  {ad.year}
                                </p>
                              </div>
                              <div className="flex items-center px-2">
                                <img
                                  src={meter}
                                  className="object-contain sm:w-5 sm:h-5 w-6 h-6"
                                  alt="Mileage"
                                />
                                <p className="text-red-600 text-nowrap lg:ml-2 sm:ml-1 ml-2 text-xs ">
                                  {ad.mileage} Km
                                </p>
                              </div>
                              <div className="flex items-center px-2">
                                <img
                                  src={engine}
                                  className="object-contain sm:w-5 sm:h-5 w-6 h-6"
                                />
                                <p className="text-red-600 lg:ml-2 sm:ml-1 ml-2 text-xs ">
                                  {ad.engine_capacity}cc
                                </p>
                              </div>
                            </div>
                            <div className="pt-1 px-4 flex justify-between">
                              <h1 className="text-blue-800 text-left mb-2 font-bold sm:text-xl text-lg cursor-pointer">
                                AED {ad.price}
                              </h1>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill={isFilled ? "currentColor" : "none"}
                                viewBox="0 0 24 24"
                                strokeWidth="2.5"
                                stroke="currentColor"
                                className={
                                  isFilled
                                    ? "active:fill-blue-800 text-blue-800 w-6 h-6"
                                    : "text-blue-800 w-6 h-6"
                                }
                                onClick={handleClickHeart}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="flex flex-row p-2 gap-4 justify-end items-center">
                            <Link to={`/editpostad/${ad.slug}/${ad.serial_no}`}
                            // onClick={() => handleEditForm(ad.serial_no , ad.slug)}
                            >
                              <button className="save-btn px-6 font-medium">
                                Edit
                              </button>
                            </Link>
                            <div>
                              <button
                                onClick={() => handleDelete(ad.serial_no)}
                                className="px-6 font-medium py-2 rounded-xl whitespace-nowrap text-white cursor-pointer bg-gradient-to-b from-red-700 to-orange-400 hover:from-orange-700 hover:to-red-400"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activePanel === "My Favourite Ads" && (
                <div className="text-blue-800 text-center w-full h-full flex justify-center inset-0 absolute items-center">
                  No favorite Ads
                </div>
              )}
              {activePanel === "My Notifications" && (
                <div className="text-blue-800 text-center w-full h-full flex justify-center inset-0 absolute items-center">
                  No notifications
                </div>
              )}
              {activePanel === "My Messages" && (
                <div className="text-blue-800 text-center w-full h-full flex justify-center inset-0 absolute items-center">
                  No messages
                </div>
              )}
            </div>
            {/* <div
              className={`flex absolute overflow-y-auto h-full scroll z-50 popup p-3 ${
                editForm ? "open" : ""
              }`}
            >
              <div className="overlay blue-sm">
                <div className="w-full py-10 h-full overflow-y-auto p-6 z-50 bg-white rounded-xl">
                <div className="w-full p-2  flex justify-end">
                  <RxCross2
                    className="text-white cursor-pointer bg-gradient-to-b from-blue-700 to-cyan-500 h-7 w-7"
                    onClick={() =>setEditForm(false)}
                  />
                  </div>
                  <Edit_form serial_no={serial_no} slug={slug}/>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Register />
      <div className="flex w-[90%] mx-auto justify-center py-5 my-5">
        <img src={banner} />
      </div>
      <Footer />
    </>
  );
}
export default UserPanel;
