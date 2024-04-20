import React, { useState, useRef, useEffect } from "react";
import Nav from "../component/nav";
import Footer from "../component/footer";
import ContentLoader from "react-content-loader";
import CustomerReviews from "../component/CustomerReviews";
import { IoIosArrowDown } from "react-icons/io";
import banner from "../images/CarsDetailPageAssets/BANNER.png";
import Select from "react-select";
import calendar from "../images/HomepageAssets/calender-svgrepo-com.png";
import meter from "../images/HomepageAssets/meter-free-2-svgrepo-com.png";
import group from "../images/HomepageAssets/Group99.png";
import engine from "../images/HomepageAssets/engine-motor-svgrepo-com.png";
import gearLiver from "../images/HomepageAssets/GearLiver-1.png";
import fireSvgrepo from "../images/HomepageAssets/fire-svgrepo-com.png";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { LoginPopup } from "../component/nav";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Register from "../component/register";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";

const Cars = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const params = new URLSearchParams(window.location.search);
  const [priceFrom, setPriceFrom] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("price_from") || "";
  });

  const [priceTo, setPriceTo] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("price_to") || "";
  });
  const [mileageFrom, setMileageFrom] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("mileage_from") || "";
  });
  const [mileageTo, setMileageTo] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("mileage_to") || "";
  });
  const [yearFrom, setYearFrom] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("year_from") || "";
  });
  const [yearTo, setYearTo] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("year_to") || "";
  });
  const [transmissions, setTransmissions] = useState({});
  const [selectedTransmission, setSelectedTransmission] = useState("");
  // useState(() => {
  //   const params = new URLSearchParams(window.location.search);
  //   return params.get("transmissions") || "";
  // });
  const [assembly, setAssembly] = useState({});
  const [selectedAssembly, setSelectedAssembly] = useState("");
  const [engineTypes, setEngineTypes] = useState({});
  const [selectedEngine_type, setSelectedEngine_types] = useState("");
  const [make, setMake] = useState([]);
  const [selectedMakeId, setSelectedMakeId] = useState("");
  const [state, setState] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("states") || "";
  });

  const [selectedStateId, setSelectedStateId] = useState(
    JSON.parse(sessionStorage.getItem("selectedStateId")) || []
  );
  const [city, setCity] = useState([]);
  const [selectedCityId, setSelectedCityId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [variant, setVariant] = useState("");
  const [isFilled, setIsFilled] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(1);
  const filters = useSelector((state) => state.filters);
  const [isDropdownCountryOpen, setIsDropdownCountryOpen] = useState(true);
  const [isDropdownCityOpen, setIsDropdownCityOpen] = useState(true);
  const [isDropdownMakeOpen, setIsDropdownMakeOpen] = useState(true);
  const [isDropdownTransmissionOpen, setIsDropdownTransmissionOpen] =
    useState(true);
  const [isDropdownEngineTypeOpen, setIsDropdownEngineTypeOpen] =
    useState(false);
  const [isDropdownAssemblyOpen, setIsDropdownAssemblyOpen] = useState(false);
  const [isDropdownYearOpen, setIsDropdownYearOpen] = useState(false);
  const [isDropdownPriceOpen, setIsDropdownPriceOpen] = useState(false);
  const [isDropdownMileageOpen, setIsDropdownMileageOpen] = useState(false);
  const [isDropdownVariantOpen, setIsDropdownVariantOpen] = useState(false);
  const handleToggleVariant = () =>
    setIsDropdownVariantOpen(!isDropdownVariantOpen);
  const handleToggleMileage = () =>
    setIsDropdownMileageOpen(!isDropdownMileageOpen);
  const handleTogglePrice = () => setIsDropdownPriceOpen(!isDropdownPriceOpen);
  const handleToggleAssembly = () =>
    setIsDropdownAssemblyOpen(!isDropdownAssemblyOpen);
  const handleToggleYear = () => setIsDropdownYearOpen(!isDropdownYearOpen);
  const handleToggleCity = () => setIsDropdownCityOpen(!isDropdownCityOpen);
  const handleToggleMake = () => setIsDropdownMakeOpen(!isDropdownMakeOpen);
  const handleToggleTransmission = () =>
    setIsDropdownTransmissionOpen(!isDropdownTransmissionOpen);
  const handleToggleEngineType = () =>
    setIsDropdownEngineTypeOpen(!isDropdownEngineTypeOpen);
  const handleToggleCountry = () => {
    setIsDropdownCountryOpen((prevState) => !prevState);
  };
  useEffect(() => {
    setPriceFrom(params.get("price_from") || "");
    setPriceTo(params.get("price_to") || "");
    // setTransmissions(params.get("transmissions") || "");
    setState(params.get("states") || "");
    setMileageFrom(params.get("mileage_from" || ""));
    setMileageTo(params.get("mileage_to" || ""));
    setYearFrom(params.get("year_from" || ""));
    setYearTo(params.get("year_to" || ""));
  }, [params]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchObject, setSearchObject] = useState({
    makes: searchParams.get("makes"),
    states: searchParams.get("states"),
    transmissions: searchParams.get("transmissions"),
    price_from: searchParams.get("price_from"),
    price_to: searchParams.get("price_to"),
    page: searchParams.get("page"),
    cities: searchParams.get("cities"),
    assembly: searchParams.get("assembly"),
    engineTypes: searchParams.get("engineTypes"),
  });

  // let initialSelectedState = localStorage.getItem("selectedState");
  // initialSelectedState = initialSelectedState
  //   ? JSON.parse(initialSelectedState)
  //   : [];

  const [selectedState, setSelectedState] = useState([]);
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

  const [open, setOpen] = useState(false);

  const dialogRef = useRef(null);

  const handleClick = () => {
    setOpen(!open);
  };
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
  const handlePriceFromChange = (event) => {
    setPriceFrom(event.target.value);
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set("price_from", event.target.value);
    window.history.pushState({}, "", "?" + queryParams.toString());
    
  };

  const handlePriceToChange = (event) => {
    setPriceTo(event.target.value);
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set("price_to", event.target.value);
    window.history.pushState({}, '', "?" + queryParams.toString());
  
  };

  const handleMileageFromChange = (event) => {
    setMileageFrom(event.target.value);
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set("mileage_from", event.target.value);
    window.history.pushState({}, "", "?" + queryParams.toString());
  };

  const handleMileageToChange = (event) => {
    setMileageTo(event.target.value);
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set("mileage_to", event.target.value);
    window.history.pushState({}, "", "?" + queryParams.toString());
  };

  const handleYearFromChange = (event) => {
    setYearFrom(event.target.value);
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set("year_from", event.target.value);
    window.history.pushState({}, "", "?" + queryParams.toString());
  };

  const handleYearToChange = (event) => {
    setYearTo(event.target.value);
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set("year_to", event.target.value);
    window.history.pushState({}, "", "?" + queryParams.toString());
  };
  const handleMakeChange = (selectedOption) => {
    setSelectedMakeId(selectedOption.value);
    // sessionStorage.setItem("selectedMakeId", selectedOption.value);
  };

  const handleCityChange = (selectedOptions) => {
    selectedOptions = Array.isArray(selectedOptions)
      ? selectedOptions
      : [selectedOptions];
    const selectedCityValues = selectedOptions.map((option) => option.value);
    setSelectedCityId(selectedCityValues);
    // sessionStorage.setItem(
    //   "selectedCityId",
    //   JSON.stringify(selectedCityValues)
    // );
    const selectedCityNames = selectedOptions.map((option) => option.label);
    setSearchTerm(selectedCityNames.join(" "));
  };
  const handleTransmissionChange = (selectedOption) => {
    setSelectedTransmission((prevState) => {
      let newSelectedTransmission;
      if (prevState.includes(selectedOption.value)) {
        newSelectedTransmission = prevState.filter(
          (value) => value !== selectedOption.value
        );
      } else {
        newSelectedTransmission = [...prevState, selectedOption.value];
      }
      sessionStorage.setItem(
        "selectedTransmission",
        JSON.stringify(newSelectedTransmission)
      );
      return newSelectedTransmission;
    });
  };
  const handleAssemblyChange = (selectedOption) => {
    setSelectedAssembly((prevState) => {
      let newSelectedAssembly;
      if (prevState.includes(selectedOption.value)) {
        newSelectedAssembly = prevState.filter(
          (value) => value !== selectedOption.value
        );
      } else {
        newSelectedAssembly = [...prevState, selectedOption.value];
      }
      sessionStorage.setItem(
        "selectedAssembly",
        JSON.stringify(newSelectedAssembly)
      );
      return newSelectedAssembly;
    });
  };

  const handleEngineTypeChange = (selectedOption) => {
    setSelectedEngine_types((prevState) => {
      let newSelectedEnginetypes;
      if (prevState.includes(selectedOption.value)) {
        newSelectedEnginetypes = prevState.filter(
          (value) => value !== selectedOption.value
        );
      } else {
        newSelectedEnginetypes = [...prevState, selectedOption.value];
      }
      sessionStorage.setItem(
        "selectedEnginetypes",
        JSON.stringify(newSelectedEnginetypes)
      );
      return newSelectedEnginetypes;
    });
  };
  // const updateUrlParams = (paramsToUpdate) => {
  //   const queryParams = new URLSearchParams(window.location.search);
  //   Object.entries(paramsToUpdate).forEach(([key, value]) => {
  //     if (value) {
  //       queryParams.set(key, value);
  //     } else {
  //       queryParams.delete(key);
  //     }
  //   });
  // };
  const [stateOptions, setStateOptions] = useState([]);
  useEffect(() => {
    let options;
    if (Array.isArray(state)) {
      options = state.map((states) => ({
        value: states.id,
        label: states.name,
      }));
      setStateOptions(options);
    }

    if (Array.isArray(options) && Array.isArray(searchObject.states)) {
      const newSelect = options.filter((st) =>
        searchObject.states.includes(st.value)
      );
      // setSelectedState(newSelect);
      // localStorage.setItem("selectedState", JSON.stringify(newSelect));
    }
  }, [state]);

  const handleStateChange = (selectedOption) => {
    console.log(selectedOption)
     if(selectedOption.length > 0 ){
      setSelectedState(selectedOption);
      setSearchObject((prevState) => ({
        ...prevState,
        states: selectedOption.map((option) => option.value),
      }));
      const searchParams = new URLSearchParams(location.search);
      searchParams.delete('states');
      selectedOption.forEach((element)=>{
        console.log(element.value)
        console.log(searchParams)
        searchParams.append('states', element.value);
        const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
      })
    }else{
      setSelectedState([]);
    }
  };
  const cityOptions = city
    ? city.map((item) => ({ value: item.id, label: item.name }))
    : [];
  const engineTypeOptions = Object.entries(engineTypes).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  const transmissionsOptions = Object.entries(transmissions).map(
    ([key, value]) => ({ value: key, label: value })
  );
  const assemblyOptions = Object.entries(assembly).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  const makeOptions = make.map((makes) => ({
    value: makes.id,
    label: makes.name,
  }));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://sandbox.cars.me/api/ad-fields");
        if (!response.ok) {
          if (response.status === 422) {
            const result = await response.json();
          } else if (response.status === 401) {
            setShowLoginPopup(true);
            throw new Error("Unauthorized user");
          } else if (response.status === 500) {
            throw new Error("Server code error");
          } else if (response.status === 404) {
            throw new Error("Not found");
          } else if (response.status === 403) {
            throw new Error("Forbidden");
          } else {
            throw new Error("Network response was not ok");
          }
        }
        const data = await response.json();
        setState(data.states);
        setTransmissions(data.transmissions);
        setAssembly(data.assembly);
        setEngineTypes(data.engineTypes);
        setMake(data.makes);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  // useEffect(() => {
  //   const loadSavedFilters = () => {
  //     const savedFilters = JSON.parse(sessionStorage.getItem("filters")) || {};
  //     setSelectedMakeId(savedFilters.selectedMakeId || "");
  //     setSelectedStateId(savedFilters.selectedStateId || "");
  //     setSelectedTransmission(savedFilters.selectedTransmission || "");
  //     setPriceFrom(savedFilters.priceFrom || "");
  //     setPriceTo(savedFilters.priceTo || "");
  //     // Repeat for other filters
  //   };
  //   loadSavedFilters(); // Load saved filters when the component mounts
  // }, []);

  useEffect(() => {
    const fetchData = async (signal) => {
      try {
        const requestOptions = {
          method: "GET",
          signal: signal,
        };
        const response = await fetch(
          `https://sandbox.cars.me/api/get-cities?name=${searchTerm}`,
          requestOptions
        );
        if (!response.ok) {
          if (response.status === 422) {
            const result = await response.json();
          } else if (response.status === 401) {
            setShowLoginPopup(true);
            throw new Error("Unauthorized user");
          } else if (response.status === 500) {
            throw new Error("Server code error");
          } else if (response.status === 404) {
            throw new Error("Not found");
          } else if (response.status === 403) {
            throw new Error("Forbidden");
          } else {
            throw new Error("Network response was not ok");
          }
        }
        const data = await response.json();
        const filteredCities = data.filter((city) =>
          city.name.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
        setCity(filteredCities);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch request has been cancelled");
        } else {
          console.error("There was an error!", error);
        }
      }
    };
    if (searchTerm.trim() !== "") {
      fetchData();
    }
    const controller = new AbortController();
    fetchData(controller.signal);

    return () => {
      controller.abort();
    };
  }, [searchTerm]);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const fetchData = async (signal) => {
      try {
        const queryParams = new URLSearchParams(location.search);
        queryParams.set("page", currentPage);
        // queryParams.set('limit', 3);
        if (filters) {
          Object.entries(filters).forEach(([key, value]) => {
            if (value) {
              queryParams.set(key, value);
            }
          });
        }
        if (selectedStateId) {
          queryParams.set("states", selectedStateId);
        }
        if (selectedMakeId) {
          queryParams.set("makes", selectedMakeId);
        }
        if (selectedCityId) {
          queryParams.set("cities", selectedCityId);
        }
        if (priceFrom) {
          queryParams.set("price_from", priceFrom);
        }
        if (priceTo) {
          queryParams.set("price_to", priceTo);
        }
        if (mileageFrom) {
          queryParams.set("mileage_from", mileageFrom);
        }
        if (mileageTo) {
          queryParams.set("mileage_to", mileageTo);
        }
        if (yearFrom) {
          queryParams.set("year_from", yearFrom);
        }
        if (yearTo) {
          queryParams.set("year_to", yearTo);
        }
        if (selectedAssembly) {
          queryParams.set("assembly", selectedAssembly);
        }
        if (selectedTransmission) {
          queryParams.set("transmissions", selectedTransmission);
        }
        if (selectedEngine_type) {
          queryParams.set("engineTypes", selectedEngine_type);
        }
        const queryString = queryParams.toString();
        const apiUrl = `https://sandbox.cars.me/api/used-cars${
          queryString ? `?${queryString}` : ""
        }`;

        const myHeaders = new Headers();
        myHeaders.append(
          "Cookie",
          "laravel_session=eyJpdiI6IlpublhGeDBoejVCanU5M0ZHRStkY1E9PSIsInZhbHVlIjoiZ0RCTitCOTVQUDZUNjhNNEZzWUgrb1FsaXJqc1Y4SnpoV3lsYlJtdk9RLzlPVFo0RnZSemNtMXJCOUhqSVpHQjJ3YzQ3bUl2dGdRamR1WVAxS2JEVEdxVFZtaExmSHFHa3BDajVTRi9wUjVGamtLNVdyQ2ZKRVp6VE1oSkVwLzEiLCJtYWMiOiJlN2M0NzFjYThlODBiY2RhZDAyMTFmYmI5NTdhY2EzNDVmNGFmZWM4ZWJlNGEyZmQ5NGNkM2MxYjE3MWZmMTJjIiwidGFnIjoiIn0%3D"
        );

        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
          signal: signal,
        };
        console.log("Making fetch request", apiUrl, requestOptions);

        const response = await fetch(apiUrl, requestOptions);
        console.log("Received response", response);
        if (!response.ok) {
          if (response.status === 422) {
            // Handle 422 error
          } else if (response.status === 401) {
            setShowLoginPopup(true);
            throw new Error("Unauthorized user");
          } else if (response.status === 500) {
            throw new Error("Server code error");
          } else if (response.status === 404) {
            throw new Error("Not found");
          } else if (response.status === 403) {
            throw new Error("Forbidden");
          } else {
            throw new Error("Network response was not ok");
          }
        }

        const result = await response.json();
        console.log("Received data", result);
        setData(result.data.postAds);
        setTotalPages(result.data.meta.totalPages);
        setTotalRecords(result.data.meta.totalRecords);
        navigate(`${location.pathname}?${queryParams.toString()}`, {
          replace: true,
        });
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch request has been cancelled");
        } else {
          console.error("There was an error!", error);
        }
      }
    };
    const controller = new AbortController();
    fetchData(controller.signal);

    return () => {
      controller.abort();
    };
  }, [
    currentPage,
    selectedStateId,
    selectedMakeId,
    selectedCityId,
    selectedTransmission,
    priceFrom,
    priceTo,
    mileageFrom,
    mileageTo,
    yearFrom,
    yearTo,
    selectedAssembly,
    selectedEngine_type,
    filters,
    location.search,
  ]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <Nav />
      {/* <section className="bg-sky-100">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex justify-center opacity-50 pt-6">
            <img src={Logo} className="w-1/5" height={300} width={350} />
          </div>
          <h1 className="text-blue-800 py-5  lg:text-4xl sm:text-3xl text-xl  text-center font-bold">
            Discover the Perfect Ride for You
          </h1>
          <div className="flex justify-center mx-auto md:w-6/12 sm:w-3/4 w-10/12 py-8">
            <input
              type="text"
              placeholder="Search by Keyword (e.g. Toyota Cars)"
              className="form-control rounded-l-lg block w-full p-2 sm:py-4 py-2 md:text-lg sm:text-sm text-xs font-normal px-4 bg-white leading-6 text-gray-800 focus:outline-none  focus:ring hover:ring focus:ring-blue-300 ring-offset-0  transition duration-150 ease-in-out"
              style={{ border: "0px" }}
            />
            <button
              aria-label="Subscribe"
              className="inline-block font-normal leading-6 ml-[-4px] select-none border-transparent py-2 px-4 sm:text-lg text-sm  transition duration-150 ease-in-out bg-gradient-blue font-semibold text-base"
            >
              {""}
              Search
            </button>
          </div>
        </div>
      </section> */}
      <a
        href="https://spareparts.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center mx-auto sm:w-2/3 w-11/12 py-5 my-5"
      >
        <img src={banner} />
      </a>
      <div className="flex lg:w-[90%] w-[95%] max-w-[1800px] mx-auto">
        <div
          className="top-0 lg:block hidden rounded-2xl mb-7 text-blue-800 justify-center mx-3 shadow-xl  bg-sky-100 2xl:w-full xl:w-[334px]"
          style={{ maxHeight: "2500px", maxWidth: "320px" }}
        >
          <div className="bg-white border-b border-sky-200 p-4 flex items-center ">
            <p className="font-semibold text-sm">Search by Filters</p>
          </div>
          <div>
            <div className="bg-white sm:w-auto w-full">
              <div className="p-4 flex  sm:w-auto w-full border-b border-sky-200 items-center justify-between">
                <p className="font-semibold text-sm">State</p>
                <IoIosArrowDown
                  onClick={handleToggleCountry}
                  className={`dropdownBtn cursor-pointer w-6 h-6 transition-transform duration-400 ${
                    isDropdownCountryOpen ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`flex bg-white transition-all duration-300 ease-in-out delay-100 ${
                  isDropdownCountryOpen
                    ? "opacity-100 max-h-full p-4"
                    : "opacity-0 max-h-0"
                }`}
              >
                <div className="w-[90%]">
                  <Select
                    onChange={handleStateChange} // Assuming this function is defined somewhere
                    options={stateOptions} // Assuming this is your options list
                    styles={customStyles} // Assuming customStyles is defined somewhere
                    isSearchable
                    // value={state}
                    isMulti
                    // value={stateOptions.filter(option => selectedStateId.includes(option.value))}
                    value= {selectedState}
                    // value={stateOptions.filter(option => selectedStateId.includes(searchObject.states))}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white sm:w-auto w-full">
              <div className="p-4 flex sm:w-auto w-full border-b border-sky-200 items-center justify-between">
                <p className="font-semibold text-sm">Select Your City</p>
                <IoIosArrowDown
                  onClick={handleToggleCity}
                  className={`w-6 h-6 cursor-pointer transition-transform duration-400 ${
                    isDropdownCityOpen ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`flex bg-white transition-all duration-300 ease-in-out delay-100 ${
                  isDropdownCityOpen
                    ? "opacity-100 max-h-full p-4"
                    : "opacity-0 max-h-0"
                }`}
              >
                <div className="bg-white w-[90%]">
                  <Select
                    onChange={handleCityChange}
                    onInputChange={setSearchTerm}
                    options={cityOptions}
                    styles={customStyles}
                    isMulti
                    className="js-example-responsive"
                    isSearchable
                    value={cityOptions.filter((option) =>
                      selectedCityId.includes(option.value)
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="bg-white sm:w-auto w-full">
              <div className="p-4 flex sm:w-auto w-full border-b border-sky-200 items-center justify-between">
                <p className="font-semibold text-sm">Make</p>
                <IoIosArrowDown
                  onClick={handleToggleMake}
                  className={`w-6 h-6 cursor-pointer transition-transform duration-400 ${
                    isDropdownMakeOpen ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`flex bg-white transition-all duration-300 ease-in-out delay-100 ${
                  isDropdownMakeOpen
                    ? "opacity-100 max-h-full p-4"
                    : "opacity-0 max-h-0"
                }`}
              >
                {" "}
                <div className="bg-white w-[90%]">
                  <Select
                    onChange={handleMakeChange}
                    options={makeOptions}
                    styles={customStyles}
                    isSearchable
                    value={makeOptions.find(
                      (option) => option.value === selectedMakeId
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="bg-white sm:w-auto w-full">
              <div className="p-4 flex sm:w-auto w-full border-b border-sky-200 items-center justify-between">
                <p className="font-semibold text-sm">Transmissions</p>
                <IoIosArrowDown
                  onClick={handleToggleTransmission}
                  className={`w-6 h-6 cursor-pointer transition-transform duration-400 ${
                    isDropdownTransmissionOpen ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`flex bg-white transition-all duration-300 ease-in-out delay-100 ${
                  isDropdownTransmissionOpen
                    ? "opacity-100 max-h-full"
                    : "opacity-0 max-h-0"
                }`}
              >
                <div className="bg-white p-4">
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
              </div>
            </div>
            <div className="bg-white sm:w-auto w-full">
              <div className="p-4 flex sm:w-auto w-full border-b border-sky-200 items-center justify-between">
                <p className="font-semibold text-sm">Engine Types</p>
                <IoIosArrowDown
                  onClick={handleToggleEngineType}
                  className={`w-6 h-6 cursor-pointer transition-transform duration-400 ${
                    isDropdownEngineTypeOpen ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`flex bg-white transition-all duration-300 ease-in-out delay-100 ${
                  isDropdownEngineTypeOpen
                    ? "opacity-100 max-h-full"
                    : "opacity-0 max-h-0"
                }`}
              >
                <div className="bg-white p-4">
                  {engineTypeOptions.map((option) => (
                    <div key={option.value} className="flex flex-col gap-4">
                      <label className="flex items-center space-x-2 gap-4">
                        <input
                          type="checkbox"
                          value={option.value}
                          checked={selectedEngine_type.includes(option.value)}
                          onChange={() => handleEngineTypeChange(option)}
                        />
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white sm:w-auto w-full">
              <div className="p-4 flex sm:w-auto w-full border-b border-sky-200 items-center justify-between">
                <p className="font-semibold text-sm">Assembly</p>
                <IoIosArrowDown
                  onClick={handleToggleAssembly}
                  className={`w-6 h-6 cursor-pointer transition-transform duration-400 ${
                    isDropdownAssemblyOpen ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`flex bg-white transition-all duration-300 ease-in-out delay-100 ${
                  isDropdownAssemblyOpen
                    ? "opacity-100 max-h-full"
                    : "opacity-0 max-h-0"
                }`}
              >
                {" "}
                <div className="bg-white p-4">
                  {assemblyOptions.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center space-x-2 gap-4"
                    >
                      <input
                        type="checkbox"
                        value={option.value}
                        checked={selectedAssembly.includes(option.value)}
                        onChange={() => handleAssemblyChange(option)}
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white sm:w-auto w-full">
              <div className="p-4 flex sm:w-auto w-full border-b border-sky-200 items-center justify-between">
                <p className="font-semibold text-sm">Year</p>
                <IoIosArrowDown
                  onClick={handleToggleYear}
                  className={`w-6 h-6 cursor-pointer transition-transform duration-400 ${
                    isDropdownYearOpen ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`flex justify-start bg-white transition-all duration-300 ease-in-out delay-100 ${
                  isDropdownYearOpen
                    ? "opacity-100 max-h-full p-4"
                    : "opacity-0 max-h-0"
                }`}
              >
                {" "}
                <div className="flex w-[85%] justify-start bg-white">
                  <div className="css-dc7k1j-control formInput">
                    <input
                      placeholder="From"
                      styles={customStyles}
                      value={yearFrom}
                      onChange={handleYearFromChange}
                      className="w-full focus:outline-none px-2 py-1.5  placeholder:text-[hsl(0, 0%, 50%)]"
                    />
                  </div>
                  <div className="css-dc7k1j-control formInput">
                    <input
                      placeholder="To"
                      styles={customStyles}
                      value={yearTo}
                      onChange={handleYearToChange}
                      className="w-full focus:outline-none px-2 py-1.5  placeholder:text-[hsl(0, 0%, 50%)]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white sm:w-auto w-full">
              <div className="p-4 flex sm:w-auto w-full z-20 border-b border-sky-200 items-center justify-between">
                <p className="font-semibold text-sm">Price</p>
                <IoIosArrowDown
                  onClick={handleTogglePrice}
                  className={`w-6 h-6 cursor-pointer transition-transform duration-400 ${
                    isDropdownPriceOpen ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`flex justify-start bg-white transition-all duration-300 ease-in-out delay-100 ${
                  isDropdownPriceOpen
                    ? "opacity-100 max-h-full p-4"
                    : "opacity-0 max-h-0"
                }`}
              >
                <div className="justify-start bg-white w-[85%] flex">
                  <div className="css-dc7k1j-control formInput">
                    <input
                      placeholder="From"
                      onChange={handlePriceFromChange}
                      styles={customStyles}
                      value={priceFrom}
                      className="w-full focus:outline-none px-2 py-1.5  placeholder:text-[hsl(0, 0%, 50%)]"
                    />
                  </div>
                  <div className="css-dc7k1j-control formInput">
                    <input
                      onChange={handlePriceToChange}
                      placeholder="To"
                      styles={customStyles}
                      value={priceTo}
                      className="w-full focus:outline-none px-2 py-1.5  placeholder:text-[hsl(0, 0%, 50%)]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white sm:w-auto w-full z-20">
              <div className="p-4 flex sm:w-auto w-full border-b border-sky-200 items-center justify-between">
                <p className="font-semibold text-sm">Mileage</p>
                <IoIosArrowDown
                  onClick={handleToggleMileage}
                  className={`w-6 h-6 cursor-pointer transition-transform duration-300 ${
                    isDropdownMileageOpen ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`flex bg-white transition-all duration-300 ease-in-out delay-100 ${
                  isDropdownMileageOpen
                    ? "opacity-100 max-h-full p-4"
                    : "opacity-0 max-h-0"
                }`}
              >
                <div className="w-[85%] flex">
                  <div className="css-dc7k1j-control formInput">
                    <input
                      placeholder="From"
                      onChange={handleMileageFromChange}
                      styles={customStyles}
                      value={mileageFrom}
                      className="w-full focus:outline-none px-2 py-1.5  placeholder:text-[hsl(0, 0%, 50%)]"
                    />
                  </div>
                  <div className="css-dc7k1j-control formInput">
                    <input
                      onChange={handleMileageToChange}
                      placeholder="To"
                      styles={customStyles}
                      value={mileageTo}
                      className="w-full focus:outline-none px-2 py-1.5  placeholder:text-[hsl(0, 0%, 50%)]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white sm:w-auto w-full border-b border-sky-200 z-20">
              <div className="p-4 flex sm:w-auto w-full items-center justify-between">
                <p className="font-semibold text-sm">Variant</p>
                <IoIosArrowDown
                  onClick={handleToggleVariant}
                  className={`w-6 h-6 cursor-pointer transition-transform duration-400 ${
                    isDropdownVariantOpen ? "transform rotate-180" : ""
                  }`}
                />
              </div>
            </div>
            {isDropdownVariantOpen && (
              <div className="bg-white p-4">
                <Select styles={customStyles} isSearchable />
              </div>
            )}
          </div>
        </div>
        <div className="w-full lg:ml-3">
          <div className="flex text-blue-800 w-full  justify-between  rounded-xl items-center shadow-xl  bg-sky-100 p-2">
            <div className="flex items-center" onClick={handleClick}>
              <p className="px-3 text-xs lg:text-base">Sort by:</p>
              <div className="bg-white p-1 rounded-xl">
                {" "}
                <label className="text-left whitespace-nowrap p-2  text-justify text-xs lg:text-base">
                  Recently added
                </label>
                <select
                  id="selectInput"
                  className="bg-transparent focus:outline-none h-7 w-7"
                  type="hidden"
                  name="date"
                ></select>
              </div>
            </div>
            <div>
              <p className="text-blue-800">
                {" "}
                {currentPage} - {totalPages} 0f {totalRecords}
              </p>
            </div>
          </div>
          {data && data.length > 0 ? (
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 py-6 gap-6">
              {data.map((car, index) => (
                <div
                  key={index}
                  className="bg-white hover:shadow-inner car-card max-w-[350px] sm:rounded-3xl rounded-xl shadow-xl"
                >
                  <Link to={`/carDetail/${car.slug}`}>
                    <img
                      className="rounded-2xl w-full h-60 object-fit"
                      src={car.thumbnail}
                      alt={car.make_model}
                    ></img>
                  </Link>
                  <div className="p-3">
                    <div className="flex flex-row pb-2 justify-between">
                      <h1 className="text-blue-800 text-left mb-2 font-bold md:text-xl text-lg">
                        {car.make} {car.make_model} {car.year}
                      </h1>
                    </div>
                    <p className="text-left mb-3 text-red-600 md:text-lg text-sm">
                      {" "}
                      {car.state}
                    </p>
                    <div className="grid grid-cols-3 gap-x-2 gap-y-5">
                      <div className="flex items-center px-2">
                        <img
                          src={calendar}
                          className="object-contain sm:w-5 sm:h-5 w-6 h-6"
                          alt="Year"
                        />
                        <p className="text-red-600 lg:ml-2 sm:ml-1 ml-2 text-xs ">
                          {car.year}
                        </p>
                      </div>
                      <div className="flex items-center px-2">
                        <img
                          src={meter}
                          className="object-contain sm:w-5 sm:h-5 w-6 h-6"
                          alt="Mileage"
                        />
                        <p className="text-red-600 text-nowrap lg:ml-2 sm:ml-1 ml-2 text-xs ">
                          {car.mileage} Km
                        </p>
                      </div>
                      <div className="flex items-center px-2">
                        <img
                          src={group}
                          className="object-contain sm:w-5 sm:h-5 w-6 h-6"
                        />
                        <p className="text-red-600 lg:ml-2 sm:ml-1 ml-2 text-xs  text-nowrap">
                          {" "}
                          4 People
                        </p>
                      </div>
                      <div className="flex items-center px-2">
                        <img
                          src={engine}
                          className="object-contain sm:w-5 sm:h-5 w-6 h-6"
                        />
                        <p className="text-red-600 lg:ml-2 sm:ml-1 ml-2 text-xs ">
                          {car.engine_capacity}cc
                        </p>
                      </div>
                      <div className="flex items-center px-2">
                        <img
                          src={gearLiver}
                          className="object-contain sm:w-5 sm:h-5 w-6 h-6"
                        />
                        <p className="text-red-600 lg:ml-2 sm:ml-1 ml-2 text-xs  capitalize">
                          {car.transmission}{" "}
                        </p>
                      </div>
                      <div className="flex items-center px-2">
                        <img
                          src={fireSvgrepo}
                          className="object-contain sm:w-5 sm:h-5 w-6 h-6"
                        />
                        <p className="text-red-600 lg:ml-2 sm:ml-1 ml-2 text-xs  capitalize">
                          {" "}
                          {car.engine_type}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pb-3 pt-1 px-4 flex justify-between">
                    <h1 className="text-blue-800 text-left mb-2 font-bold sm:text-xl text-lg cursor-pointer">
                      AED {car.price}
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
              ))}
            </div>
          ) : (
            <div className="py-6">
              <ContentLoader
                speed={2}
                width={350}
                height={475}
                viewBox="0 0 350 475"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="0" y="0" rx="10" ry="10" width="350" height="200" />
                <rect x="20" y="220" rx="0" ry="0" width="200" height="20" />
                <rect x="20" y="250" rx="0" ry="0" width="120" height="20" />
                <rect x="20" y="290" rx="0" ry="0" width="80" height="20" />
                <rect x="20" y="330" rx="0" ry="0" width="80" height="20" />
                <rect x="20" y="370" rx="0" ry="0" width="80" height="20" />
                <rect x="20" y="410" rx="0" ry="0" width="80" height="20" />
                <rect x="20" y="450" rx="0" ry="0" width="80" height="20" />
              </ContentLoader>
            </div>
          )}
          <div className="flex justify-center">
            {totalPages > 1 && (
              <div className="flex">
                <ReactPaginate
                  previousLabel={
                    <div className="p-2 rounded-full bg-white border border-slate-700 text-black">
                      <IoIosArrowBack className="flex p-0" />
                    </div>
                  }
                  nextLabel={
                    <div className="p-2 rounded-full bg-white border border-slate-700 text-black">
                      <IoIosArrowForward className="flex p-0" />
                    </div>
                  }
                  breakLabel={"..."}
                  breakClassName={"mx-2"}
                  pageCount={totalPages}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={({ selected }) =>
                    handlePageChange(selected + 1)
                  }
                  containerClassName={
                    "flex gap-4 justify-center py-5 items-center space-x-2.5"
                  }
                  subContainerClassName={
                    "flex justify-center py-5 items-center space-x-2.5"
                  }
                  activeClassName={"active"}
                  activeLinkClassName={
                    "border-solid border-gray-600 px-4 py-2 rounded-full no-underline text-white bg-gradient-to-b from-blue-700 to-cyan-500"
                  }
                  pageClassName={
                    "mx-2 border border-slate-700 rounded-full cursor-pointer transition-all duration-300"
                  }
                  pageLinkClassName={
                    "border-solid border-gray-600 px-4 py-2 rounded-full no-underline text-black flex hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500"
                  }
                />
              </div>
            )}
          </div>
        </div>
        <div className="lg:hidden block ">
          <div
            ref={dialogRef}
            className={`popup top-0 rounded-2xl mb-7 text-blue-800 justify-center mx-auto shadow-xl  bg-sky-100  sm:w-[400px] w-[300px] ${
              open ? "open" : ""
            }`}
            style={{ maxHeight: "2500px" }}
            aria-modal="true"
            onKeyDown={() => setOpen(false)}
          >
            <div
              className="overlay"
              aria-hidden="true"
              onClick={handleClick}
            ></div>
            <div className="popup-content scroll overflow-y-auto lg:hidden block mx-auto justify-center w-full">
              <div className="bg-white w-full justify-around p-4 flex items-center ">
                <p className="font-semibold text-sm">Search by Filters</p>
              </div>
              <div className="bg-white w-full p-4 items-center">
                <div className="bg-white sm:w-auto w-full border-b border-sky-200">
                  <div className="p-4 flex  sm:w-auto w-full items-center justify-between">
                    <p className="font-semibold text-sm">State</p>
                    <IoIosArrowDown
                      onClick={handleToggleCountry}
                      className={`w-6 h-6 transition-transform duration-400 ${
                        isDropdownCountryOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
                {isDropdownCountryOpen && (
                  <div className="bg-white p-4">
                    <Select
                      onChange={handleStateChange} // Assuming this function is defined somewhere
                      options={stateOptions} // Assuming this is your options list
                      styles={customStyles} // Assuming customStyles is defined somewhere
                      isSearchable
                      isMulti
                      value={stateOptions.filter((option) =>
                        selectedStateId.includes(option.value)
                      )}
                    />
                  </div>
                )}
                <div className="bg-white sm:w-auto w-full border-b border-sky-200">
                  <div className="p-4 flex sm:w-auto w-full items-center justify-between">
                    <p className="font-semibold text-sm">Select Your City</p>
                    <IoIosArrowDown
                      onClick={handleToggleCity}
                      className={`w-6 h-6 transition-transform duration-400 ${
                        isDropdownCityOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
                {isDropdownCityOpen && (
                  <div className="bg-white p-4">
                    <Select
                      onChange={handleCityChange}
                      onInputChange={setSearchTerm}
                      options={cityOptions}
                      styles={customStyles}
                      isMulti
                      className="js-example-responsive"
                      isSearchable
                      value={cityOptions.filter((option) =>
                        selectedCityId.includes(option.value)
                      )}
                    />
                  </div>
                )}
                <div className="bg-white sm:w-auto w-full border-b border-sky-200">
                  <div className="p-4 flex sm:w-auto w-full items-center justify-between">
                    <p className="font-semibold text-sm">Make</p>
                    <IoIosArrowDown
                      onClick={handleToggleMake}
                      className={`w-6 h-6 transition-transform duration-400 ${
                        isDropdownMakeOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
                {isDropdownMakeOpen && (
                  <div className="bg-white p-4">
                    <Select
                      onChange={handleMakeChange}
                      options={makeOptions}
                      isSearchable
                      value={makeOptions.find(
                        (option) => option.value === selectedMakeId
                      )}
                    />
                  </div>
                )}
                <div className="bg-white sm:w-auto w-full border-b border-sky-200">
                  <div className="p-4 flex sm:w-auto w-full items-center justify-between">
                    <p className="font-semibold text-sm">Transmissions</p>
                    <IoIosArrowDown
                      onClick={handleToggleTransmission}
                      className={`w-6 h-6 transition-transform duration-400 ${
                        isDropdownTransmissionOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
                {isDropdownTransmissionOpen && (
                  <div className="bg-white p-4">
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
                <div className="bg-white sm:w-auto w-full border-b border-sky-200">
                  <div className="p-4 flex sm:w-auto w-full items-center justify-between">
                    <p className="font-semibold text-sm">Engine Types</p>
                    <IoIosArrowDown
                      onClick={handleToggleEngineType}
                      className={`w-6 h-6 transition-transform duration-400 ${
                        isDropdownEngineTypeOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
                {isDropdownEngineTypeOpen && (
                  <div className="bg-white p-4">
                    {engineTypeOptions.map((option) => (
                      <div key={option.value} className="flex flex-col gap-4">
                        <label className="flex items-center space-x-2 gap-4">
                          <input
                            type="checkbox"
                            value={option.value}
                            checked={selectedEngine_type.includes(option.value)}
                            onChange={() => handleEngineTypeChange(option)}
                          />
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
                <div className="bg-white sm:w-auto w-full border-b border-sky-200">
                  <div className="p-4 flex sm:w-auto w-full items-center justify-between">
                    <p className="font-semibold text-sm">Assembly</p>
                    <IoIosArrowDown
                      onClick={handleToggleAssembly}
                      className={`w-6 h-6 transition-transform duration-400 ${
                        isDropdownAssemblyOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
                {isDropdownAssemblyOpen && (
                  <div className="bg-white p-4">
                    {assemblyOptions.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center space-x-2 gap-4"
                      >
                        <input
                          type="checkbox"
                          value={option.value}
                          checked={selectedAssembly.includes(option.value)}
                          onChange={() => handleAssemblyChange(option)}
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                )}
                <div className="bg-white sm:w-auto w-full border-b border-sky-200">
                  <div className="p-4 flex sm:w-auto w-full items-center justify-between">
                    <p className="font-semibold text-sm">Year</p>
                    <IoIosArrowDown
                      onClick={handleToggleYear}
                      className={`w-6 h-6 transition-transform duration-400 ${
                        isDropdownYearOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
                {isDropdownYearOpen && (
                  <div className="flex justify-around bg-white p-4">
                    <div className="css-dc7k1j-control formInput">
                      <input
                        placeholder="From"
                        styles={customStyles}
                        onChange={handleYearFromChange}
                        className="w-full focus:outline-none px-2 py-1.5  placeholder:text-[hsl(0, 0%, 50%)]"
                      />
                    </div>
                    <div className="css-dc7k1j-control formInput">
                      <input
                        placeholder="To"
                        styles={customStyles}
                        onChange={handleYearToChange}
                        className="w-full focus:outline-none px-2 py-1.5  placeholder:text-[hsl(0, 0%, 50%)]"
                      />
                    </div>
                  </div>
                )}
                <div className="bg-white sm:w-auto w-full border-b border-sky-200">
                  <div className="p-4 flex sm:w-auto w-full items-center justify-between">
                    <p className="font-semibold text-sm">Price</p>
                    <IoIosArrowDown
                      onClick={handleTogglePrice}
                      className={`w-6 h-6 transition-transform duration-400 ${
                        isDropdownPriceOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
                {isDropdownPriceOpen && (
                  <div className="flex justify-around bg-white p-4">
                    <div className="css-dc7k1j-control formInput">
                      <input
                        placeholder="From"
                        onChange={handlePriceFromChange}
                        styles={customStyles}
                        className="w-full focus:outline-none px-2 py-1.5  placeholder:text-[hsl(0, 0%, 50%)]"
                      />
                    </div>
                    <div className="css-dc7k1j-control formInput">
                      <input
                        onChange={handlePriceToChange}
                        placeholder="To"
                        styles={customStyles}
                        className="w-full focus:outline-none px-2 py-1.5  placeholder:text-[hsl(0, 0%, 50%)]"
                      />
                    </div>
                  </div>
                )}
                <div className="bg-white sm:w-auto w-full border-b border-sky-200">
                  <div className="p-4 flex sm:w-auto w-full items-center justify-between">
                    <p className="font-semibold text-sm">Mileage</p>
                    <IoIosArrowDown
                      onClick={handleToggleMileage}
                      className={`w-6 h-6 transition-transform duration-400 ${
                        isDropdownMileageOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
                {isDropdownMileageOpen && (
                  <div className="flex justify-around bg-white p-4">
                    <div className="css-dc7k1j-control formInput">
                      <input
                        placeholder="From"
                        onChange={handleMileageFromChange}
                        styles={customStyles}
                        className="w-full focus:outline-none px-2 py-1.5  placeholder:text-[hsl(0, 0%, 50%)]"
                      />
                    </div>
                    <div className="css-dc7k1j-control formInput">
                      <input
                        onChange={handleMileageToChange}
                        placeholder="To"
                        styles={customStyles}
                        className="w-full focus:outline-none px-2 py-1.5  placeholder:text-[hsl(0, 0%, 50%)]"
                      />
                    </div>
                  </div>
                )}
                <div className="bg-white sm:w-auto w-full border-b border-sky-200">
                  <div className="p-4 flex sm:w-auto w-full items-center justify-between">
                    <p className="font-semibold text-sm">Variant</p>
                    <IoIosArrowDown
                      onClick={handleToggleVariant}
                      className={`w-6 h-6 transition-transform duration-400 ${
                        isDropdownVariantOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
                {isDropdownVariantOpen && (
                  <div className="bg-white p-4">
                    <Select styles={customStyles} isSearchable />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Register />
      <CustomerReviews />
      <LoginPopup
        open={showLoginPopup}
        onClose={() => setShowLoginPopup(false)}
      />
      <Footer />
    </>
  );
};
export default Cars;
