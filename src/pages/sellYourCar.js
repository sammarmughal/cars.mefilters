import React, { useState, useEffect, useRef } from "react";
import Nav from "../component/nav";
import Footer from "../component/footer";
import CustomerReviews from "../component/CustomerReviews";
import sellCar from "../images/SellYourCar/sellCar.png";
import home from "../images/SellYourCar/home.png";
import CarCard from "../component/usedCarCard";
import { TailSpin } from "react-loader-spinner";
import { PhoneInput, defaultCountries, parseCountry, } from 'react-international-phone';
import 'react-international-phone/style.css';
import { Link } from "react-router-dom";
import Select from 'react-select';
import { LoginPopup } from "../component/nav";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function SellYourCar() {
  const countries = defaultCountries.filter((country) => {
    const { iso2 } = parseCountry(country);
    return ['ae'].includes(iso2);
  });
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [transmissions, setTransmissions] = useState({});
  const [selectedTransmission, setSelectedTransmission] = useState("");
  const [assembly, setAssembly] = useState({});
  const [selectedAssembly, setSelectedAssembly] = useState("");
  const [conditions, setConditions] = useState({});
  const [engineTypes, setEngineTypes] = useState({});
  const [selectedEngine_type, setSelectedEngine_types] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");
  const [engine_capacity, setEngine_capacity] = useState({});
  const [features, setFeatures] = useState([]);
  const [make, setMake] = useState([]);
  const [state, setState] = useState([]);
  const [selectedStateId, setSelectedStateId] = useState('');
  const [city, setCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedMakeId, setSelectedMakeId] = useState('');
  const [make_model, setMake_model] = useState([]);
  const [selectedModelId, setSelectedModelId] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [images, setImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [area, setArea] = useState("");
  const [mileage, setMileage] = useState("");
  const [variant, setVariant] = useState("");
  const [exterior_color, setExterior_color] = useState("");
  const [price, setPrice] = useState("");
  const [mobile_no, setMobile_no] = useState("");
  const [description, setDescription] = useState("");
  const [selectedYear, setSelectedYear] = useState(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [errors, setErrors] = useState({
    transmission: null,
    state: null,
    mobile_no: null,
    condition: null,
    engine_type: null,
    features: null,
    make: null,
    city: null,
    make_model: null,
    images: null,
    area: null,
    assembly: null,
    variant: null,
    price: null,
    mileage: null,
    exterior_color: null,
    description: null,
    engine_capacity: null,
    year: null,
  });

  const navigate = useNavigate();
  const handleFeatureChange = (feature) => {
    setSelectedFeatures(prevFeatures =>
      prevFeatures.includes(feature)
        ? prevFeatures.filter(f => f !== feature)
        : [...prevFeatures, feature]
    );
  };
  const handleMakeChange = selectedOption => {
    setSelectedMakeId(selectedOption.value);
    setMake_model(null);
  };
  const handleMake_ModelChange = selectedOption => {
    setSelectedModelId(selectedOption.value);
  };
  const handleStateChange = selectedOption => {
    setSelectedStateId(selectedOption.value);
    setCity(null);
  };
  const handleCityChange = selectedOption => {
    setSelectedCity(selectedOption.value);
  };
  const handleTransmissionChange = selectedOption => {
    setSelectedTransmission(selectedOption.value);
  };
  const handleAssemblyChange = selectedOption => {
    setSelectedAssembly(selectedOption.value)
  };
  const handleConditionChange = selectedOption => {
    setSelectedCondition(selectedOption.value);
  };
  const handleEngineTypeChange = selectedOption => {
    setSelectedEngine_types(selectedOption.value);
  };
  const handleYearChange = selectedOption => {
    setSelectedYear(selectedOption.value);
  };
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: currentYear - 1700 + 1 }, (_, i) => ({ value: currentYear - i, label: `${currentYear - i}` }));
  const transmissionsOptions = Object.entries(transmissions).map(([key, value]) => ({ value: key, label: value }));
  const engineTypeOptions = Object.entries(engineTypes).map(([key, value]) => ({ value: key, label: value }));
  let stateOptions = [];
  if (state) {
    stateOptions = state.map(states => ({ value: states.id, label: states.name }));
  }
  let conditionsOptions = [];
  if (conditions) {
    conditionsOptions = Object.entries(conditions).map(([type, name]) => ({ value: type, label: name }));
  }
  const cityOptions = city ? city.map((item) => ({ value: item.id, label: item.name })) : [];
  const assemblyOptions = Object.entries(assembly).map(([key, value]) => ({ value: key, label: value }));
  const makeOptions = make.map(makes => ({ value: makes.id, label: makes.name }));
  const modelOptions = make_model ? make_model.map(model => ({ value: model.id, label: model.name })) : [];
  const fileInput = useRef();
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      padding: '4px',
      borderRadius: '0.375rem',
      backgroundColor: state.isSelected ? 'rgb(186 230 253)' : 'white',
      borderWidth: '1px',
      borderColor: state.isSelected ? 'rgb(186 230 253)' : '',
      color: 'black',
      '&:hover': {
        borderColor: 'rgb(186 230 253)',
        color: 'black'
      }
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'rgb(186 230 253)' : state.isFocused ? 'rgb(186 230 253)' : null,
      color: 'rgb(30 64 175)'
    })
  }

  const handleUpload = event => {
    if (event.target.files.length >= 10) {
      alert("You can only upload a maximum of 10 images");
    }
    const files = Array.from(event.target.files);
    const remainingSlots = 10 - images.length;
    const filesToUpload = files.slice(0, remainingSlots);
    setImageFiles((prevImages) => [...prevImages, ...filesToUpload]);
    const imageUrls = filesToUpload.map(file => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...imageUrls]);
  };
  const handleSelectAll = (e) => {
    setSelectedFeatures(e.target.checked ? features : []);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://sandbox.cars.me/api/ad-fields");
        if (!response.ok) {
          if (response.status === 422) {
            // const result = await response.json();
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
            throw new Error('Network response was not ok');
          }
        }
        const data = await response.json();
        setState(data.states);
        setTransmissions(data.transmissions);
        setAssembly(data.assembly);
        setConditions(data.conditions);
        setEngineTypes(data.engineTypes);
        setFeatures(data.features);
        setMake(data.makes);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedStateId) {
      fetch(`https://sandbox.cars.me/api/get-cities?state_id=${selectedStateId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        }).then(data => {
          setCity(data);
        })
        .catch(error => console.error('Error:', error));
    }
  }, [selectedStateId]);

  useEffect(() => {
    if (selectedMakeId) {
      fetch(`https://sandbox.cars.me/api/get-make-models?make_id=${selectedMakeId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        }).then(data => {
          setMake_model(data);
        })
        .catch(error => console.error('Error:', error));
    }
  }, [selectedMakeId]);
  const refs = {
    make: React.createRef(),
    make_model: React.createRef(),
    state: React.createRef(),
    city: React.createRef(),
    area: React.createRef(),
    variant: React.createRef(),
    mileage: React.createRef(),
    exterior_color: React.createRef(),
    price: React.createRef(),
    transmission: React.createRef(),
    assembly: React.createRef(),
    condition: React.createRef(),
    engine_type: React.createRef(),
    engine_capacity: React.createRef(),
    year: React.createRef(),
    description: React.createRef(),
    images: React.createRef(),
    mobile_no: React.createRef(),
    features: React.createRef(),
  };
  useEffect(() => {
    if (!hasScrolled) {
      let scrollToError = false; // Track if scrolling to error is needed
      for (let field in errors) {
        if (errors[field]) {
          const errorField = refs[field]?.current;
          if (errorField) {
            errorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
            scrollToError = true; // Set flag to indicate scrolling is needed
            break; // Stop after scrolling to the first error field
          }
        }
      }
      if (scrollToError) {
        setHasScrolled(true); // Set flag to true only after scrolling is done
      }
    }
  }, [errors, refs, hasScrolled]);
   
    const handlePostAd = async (e) => {
      e.preventDefault();
      setLoading(true);
      setErrors({});
      setHasScrolled(false);
      let token = localStorage.getItem('access_token');
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      const formdata = new FormData();
      formdata.append("mobile_no", mobile_no);
      formdata.append("state", selectedStateId);
      formdata.append("city", selectedCity);
      formdata.append("area", area);
      formdata.append("year", selectedYear);
      formdata.append("make", selectedMakeId);
      formdata.append("make_model", selectedModelId);
      formdata.append("variant", variant);
      formdata.append("mileage", mileage);
      formdata.append("price", price);
      formdata.append("condition", selectedCondition);
      formdata.append("engine_type", selectedEngine_type);
      formdata.append("engine_capacity", engine_capacity);
      formdata.append("transmission", selectedTransmission);
      formdata.append("exterior_color", exterior_color);
      formdata.append("assembly", selectedAssembly);
      selectedFeatures.forEach((feature, index) => {
        formdata.append(`features[${index}]`, feature);
      });
      formdata.append("description", description);
      formdata.append("thumbnail", fileInput.current.files[0]);
      imageFiles.forEach((image, index) => {
        formdata.append(`images[${index}]`, image, `image${index}.jpg`); // Add a filename
      });
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow"
      };

      fetch("https://sandbox.cars.me/api/post-ad", requestOptions)
        .then(async (response) => {
          if (!response.ok) {
            if (response.status === 422) {
              const result = await response.json();
              setErrors(result.errors);              
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
              throw new Error('Network response was not ok');
            }
          } else {
            const result = await response.json();
            setSubmitted(true);
            setLoading(false);
            navigate(`/carDetail/${result.data.postAd.slug}`); 
            setMessage(result.message);
            setHasScrolled(false);
          }
        })
        .then((result) => {
          setLoading(false);
        })
        .catch((error) => {
          setErrors({ api: error.message });
          setLoading(false);

        });
    };
  return (
    <>
      <Nav />
      <section className="flex relative justify-center">
        <div className="w-full h-full absolute inset-0 bg-black opacity-50"></div>
        <img
          src={sellCar}
          alt="Banner"
          className="w-full h-auto shadow mx-auto"
          width="1500"
        />
        <div className="w-full absolute max-w-[1800px] mx-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-white text-center">
          <h1 className="md:text-3xl  sm:text-2xl text-sm font-bold">
            Sell Your Car With Ease in Dubai
          </h1>
          <p className="md:text-sm text-xs md:font-bold font-normal py-2">
            {" "}
            Introduce the user-friendly process and benefits of selling their
            car through your platform
          </p>

          <div className="flex gap-2 items-center justify-center">
            <div className="sm:pb-2">
              <img src={home} alt="home" className="sm:w-full w-6" width="40" height="35" />
            </div>
            <div className="flex gap-1 items-start text-start">
              <Link to="/">
                <p className="hover:text-cyan-600 text-white sm:text-sm text-xs">Home </p>
              </Link>
              <p className="text-cyan-600 font-semibold sm:text-sm text-xs">
                / Sell Your Car
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="max-w-[1800px] mx-auto md:px-10 px-4">
          <h1 className="lg:text-3xl sm:text-2xl text-lg pt-4 text-blue-800 text-center font-bold">
            List Your Car With Ease
          </h1>
          <p className="text-blue-800 text-center sm:text-normal text-sm">
            {" "}
            Experience a hassle-free journey to sell your car with our dedicated
            approach.
          </p>
          <div>
            <div className="bg-gradient-to-b rounded-full w-fit px-1 flex justify-center  from-blue-700 to-cyan-500">
              <p className="text-white text-lg w-5 text-center  font-semibold">
                1
              </p>
            </div>
            <div className="border-b-8 border-sky-600 pb-4 sm:w-[30%] w-[60%]">
              <h2 className="text-blue-800 uppercase text-lg pt-2">
                Vehicle Information
              </h2>
              <p className="text-blue-800">Add Your Vehicle Details </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-2 gap-5 py-8">
            <div ref={refs.make} className="flex flex-col gap-2 ">
              <label className="text-blue-800 text-sm">Make</label>
              <Select
                id="make"
                onFocus={() => console.log('Element received focus')}

                onChange={handleMakeChange}
                options={makeOptions}
                styles={customStyles}
                isSearchable
              />
              {errors.make && <span className="error text-red-500">{errors.make}</span>}
            </div>
            <div ref={refs.make_model} className="flex flex-col gap-2 ">
              <label className="text-blue-800 text-sm">Make_Model</label>
              <Select
                id="make_model"
                onFocus={() => console.log('Element received focus')}

                onChange={handleMake_ModelChange}
                options={modelOptions}
                styles={customStyles}
                isSearchable
              />
              {errors.make_model && <span className="error text-red-500">{errors.make_model}</span>}
            </div>
            <div ref={refs.state} className="flex flex-col gap-2 ">
              <label className="text-blue-800 text-sm">State/Emirate</label>
              <Select
                id="state"
                onFocus={() => console.log('Element received focus')}

                onChange={handleStateChange}
                options={stateOptions}
                styles={customStyles}
                isSearchable
              />
              {errors.state && <span className="error text-red-500">{errors.state}</span>}
            </div>
            <div ref={refs.city} className="flex flex-col gap-2 ">
              <label className="text-blue-800 text-sm">City</label>
              <Select
                id="city"
                onFocus={() => console.log('Element received focus')}

                onChange={handleCityChange}
                options={cityOptions}
                styles={customStyles}
                isSearchable={false}
              />
              {errors.city && <span className="error text-red-500">{errors.city}</span>}
            </div>
            <div ref={refs.area} className="flex flex-col gap-2 ">
              <label className="text-blue-800 text-sm">Area</label>
              <div className="css-dc7k1j-control formInput">
                <input
                  id="area"
                  onFocus={() => console.log('Element received focus')}

                  placeholder="Type"
                  styles={customStyles}
                  value={area}
                  onChange={(e) => {
                    setArea(e.target.value);
                  }}
                  className="w-full focus:outline-none px-4 py-1.5  placeholder:text-[hsl(0, 0%, 50%)]"
                />
              </div>
              {errors.area && <span className="error text-red-500">{errors.area}</span>}
            </div>
            <div ref={refs.variant} className="flex flex-col gap-2 ">
              <label className="text-blue-800 text-sm">Variants</label>
              <div className="css-dc7k1j-control formInput">
                <input
                  id="variant"
                  onFocus={() => console.log('Element received focus')}

                  placeholder="Type"
                  styles={customStyles}
                  value={variant}
                  onChange={(e) => {
                    setVariant(e.target.value);
                  }}
                  className="w-full focus:outline-none px-4 py-1.5 placeholder:text-[hsl(0, 0%, 50%)]"
                />
              </div>
              {errors.variant && <span className="error text-red-500">{errors.variant}</span>}
            </div>
            <div ref={refs.mileage} className="flex flex-col gap-2 ">
              <label className="text-blue-800 text-sm">Mileage</label>
              <div className="formInput css-dc7k1j-control">
                <input
                  id="mileage"
                  placeholder="Type"
                  onFocus={() => console.log('Element received focus')}

                  styles={customStyles}
                  value={mileage}
                  onChange={(e) => {
                    setMileage(e.target.value);
                  }}
                  className="w-full focus:outline-none px-4 py-1.5"
                />
              </div>
              {errors.mileage && <span className="error text-red-500">{errors.mileage}</span>}
            </div>
            <div ref={refs.exterior_color} className="flex flex-col gap-2 ">
              <label className="text-blue-800 text-sm">Exterior Color</label>
              <div className="formInput css-dc7k1j-control">
                <input
                  id="exterior_color"
                  placeholder="Type"
                  onFocus={() => console.log('Element received focus')}

                  styles={customStyles}
                  value={exterior_color}
                  onChange={(e) => {
                    setExterior_color(e.target.value);
                  }}
                  className="w-full focus:outline-none px-4 py-1.5"
                />
              </div>
              {errors.exterior_color && <span className="error text-red-500">{errors.exterior_color}</span>}
            </div>
            <div ref={refs.price} className="flex flex-col gap-2 ">
              <label className="text-blue-800 text-sm">Price</label>
              <div className="css-dc7k1j-control formInput">
                <input
                  id="price"
                  placeholder="Type"
                  type="number"
                  onFocus={() => console.log('Element received focus')}

                  styles={customStyles}
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  className="w-full focus:outline-none px-4 py-1.5  placeholder:text-[hsl(0, 0%, 50%)]"
                />
              </div>
              {errors.price && <span className="error text-red-500">{errors.price}</span>}
            </div>
            <div ref={refs.transmission} className="flex flex-col gap-2 ">
              <label className="text-blue-800 text-sm">Transmission</label>
              <Select
                id="transmission"
                onFocus={() => console.log('Element received focus')}

                onChange={handleTransmissionChange}
                options={transmissionsOptions}
                styles={customStyles}
                isSearchable={false}
              />
              {errors.transmission && <span className="error text-red-500">{errors.transmission}</span>}
            </div>
            <div ref={refs.assembly} className="flex flex-col gap-2 ">
              <label className="text-blue-800 text-sm">Assembly</label>
              <Select
                id="assembly"
                onFocus={() => console.log('Element received focus')}

                onChange={handleAssemblyChange}
                options={assemblyOptions}
                styles={customStyles}
                isSearchable={false}
              />
              {errors.assembly && <span className="error text-red-500">{errors.assembly}</span>}
            </div>
            <div ref={refs.condition} className="flex flex-col gap-2 ">
              <label className="text-blue-800 text-sm">Conditions</label>
              <Select
                id="condition"
                onFocus={() => console.log('Element received focus')}

                onChange={handleConditionChange}
                options={conditionsOptions}
                styles={customStyles}
                isSearchable={false}
              />
              {errors.condition && <span className="error text-red-500">{errors.condition}</span>}
            </div>
            <div ref={refs.engine_type} className="flex flex-col gap-2 ">
              <label className="text-blue-800 text-sm">Engine Types</label>
              <Select
                id="engine_type"
                onFocus={() => console.log('Element received focus')}

                onChange={handleEngineTypeChange}
                options={engineTypeOptions}
                styles={customStyles}
                isSearchable={false}
              />
              {errors.engine_type && <span className="error text-red-500">{errors.engine_type}</span>}
            </div>
            <div ref={refs.engine_capacity} className="flex flex-col gap-2 ">
              <label className="text-blue-800 text-sm">Engine Capacity</label>
              <div className="css-dc7k1j-control formInput">
                <input
                  id="engine_capacity"
                  placeholder="Type"
                  onFocus={() => console.log('Element received focus')}

                  type="number"
                  styles={customStyles}
                  value={engine_capacity}
                  onChange={(e) => {
                    setEngine_capacity(e.target.value);
                  }}
                  className="w-full focus:outline-none px-4 py-1.5  placeholder:text-[hsl(0, 0%, 50%)]"
                />
              </div>
              {errors.engine_capacity && <span className="error text-red-500">{errors.engine_capacity}</span>}
            </div>
            <div ref={refs.year} className="flex flex-col gap-2 ">
              <label className="text-blue-800 text-sm">Year</label>
              <Select
                id="year"
                onFocus={() => console.log('Element received focus')}
                onChange={handleYearChange}
                options={yearOptions}
                styles={customStyles}
                isSearchable
              />
              {errors.year && <span className="error text-red-500">{errors.year}</span>}
            </div>
          </div>
          <div ref={refs.description} className="flex flex-col my-4  gap-2 ">
            <label className="text-blue-800 text-sm">Description* </label>
            <div className="relative">
              <textarea
                onFocus={() => console.log('Element received focus')}

                id="description"
                placeholder="Message"
                rows="8"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                name="message"
                className="formInput css-dc7k1j-control w-full rounded-md px-4 py-4 focus:outline-none focus:shadow-lg text-sm pt-2.5 outline-[#007bff]"
              ></textarea>
            </div>
            {errors.description && <span className="error text-red-500">{errors.description}</span>}
          </div>
          <div className="py-5">
            <div className="bg-gradient-to-b rounded-full w-fit px-1 flex justify-center  from-blue-700 to-cyan-500">
              <p className="text-white text-lg w-5 text-center  font-semibold">
                2
              </p>
            </div>
            <div className="border-b-8 border-sky-600 pb-4 sm:w-[30%] w-[60%]">
              <h2 className="text-blue-800 uppercase text-lg pt-2">
                Upload Images                </h2>
              <p className="text-blue-800">Add Your Images</p>
            </div>
          </div>
          <div ref={refs.images} className="max-w-[1000px] mx-auto">
            <div className="flex items-center justify-center w-full">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 wax-w-[1000px]">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" onChange={handleUpload} multiple ref={fileInput} />
              </label>
            </div>
            <div onFocus={() => console.log('Element received focus')}
              className="flex flex-wrap w-full gap-6 mt-6">
              {images.map((image, index) => (
                <div key={index} className="relative w-24 h-24">
                  <img src={image} id="image" className="w-full h-full rounded-lg" alt={`Uploaded ${index}`} onClick={() => setSelectedImage(image)} />
                  <RxCross2
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-bl-lg"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering setSelectedImage
                      setImages((prevImages) => prevImages.filter((img) => img !== image));
                    }}
                  />

                </div>
              ))}
            </div>
            {errors.images && <span className="error text-red-500">{errors.images}</span>}
          </div>
          {selectedImage && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center z-40 justify-center bg-black bg-opacity-50">
              <div className="bg-white rounded-lg p-4">
                <div className="flex justify-end items-end w-full mb-2">
                  <RxCross2 onClick={() => setSelectedImage(null)} className="w-6 h-6" />
                </div>
                <img src={selectedImage} alt="Selected" className="w-full md:max-w-[700px] md:max-h-[500px]  h-auto" />
              </div>
            </div>
          )}
          <div ref={refs.features} className="pb-5">
            <div className="py-5">
              <div className="bg-gradient-to-b rounded-full w-fit px-1 flex justify-center  from-blue-700 to-cyan-500">
                <p className="text-white text-lg w-5 text-center  font-semibold">
                  3
                </p>
              </div>
              <div className="border-b-8 border-sky-600 pb-4 sm:w-[30%] w-[60%]">
                <h2 className="text-blue-800 uppercase text-lg pt-2">
                  Features*
                </h2>
                <p className="text-blue-800">Select Your Car Features</p>
              </div>
            </div>
            <form>
              <div className="flex flex-col  gap-2">
                <label className="text-blue-800 text-sm">Features</label>
                <div className="grid grid-cols-3 gap-4">
                  <label className="flex items-center space-x-2 gap-4">
                    <input
                      id="feature"
                      onFocus={() => console.log('Element received focus')}
                      type="checkbox"
                      className="px-4 rounded-md bg-blue-100 py-2 border border-blue-700 focus:outline-none focus:shadow-lg"
                      checked={selectedFeatures.length === features.length}
                      onChange={handleSelectAll}
                    />
                    All
                  </label>
                  {features.map((feature, index) => (
                    <div key={index} className="">
                      <label className="flex items-center space-x-2 gap-4">
                        <input
                          type="checkbox"
                          onFocus={() => console.log('Element received focus')}
                          value={feature}
                          checked={selectedFeatures.includes(feature)}
                          onChange={() => handleFeatureChange(feature)}
                        />
                        {feature}
                      </label>
                    </div>
                  ))}
                </div>
                {errors.features && <span className="error text-red-500">{errors.features}</span>}
              </div>
            </form>
          </div>
          <div ref={refs.mobile_no} className="pb-5">
            <div className="py-5">
              <div className="bg-gradient-to-b rounded-full w-fit px-1 flex justify-center  from-blue-700 to-cyan-500">
                <p className="text-white text-lg w-5 text-center  font-semibold">
                  4
                </p>
              </div>
              <div className="border-b-8 border-sky-600 pb-4 sm:w-[30%] w-[60%]">
                <h2 className="text-blue-800 uppercase text-lg pt-2">
                  Contact Information{" "}
                </h2>
                <p className="text-blue-800">Add Your Contact Detail</p>
              </div>
            </div>
            <form>
              <div className="grid grid-cols-3 gap-5 py-8">

                <div className="flex flex-col md:col-span-1 col-span-2 gap-2 ">
                  <label className="text-blue-800 text-sm">
                    Phone Number*{" "}
                  </label>
                  <div className="css-dc7k1j-control formInput py-1.5 w-full">
                    <PhoneInput
                      id="mobile_no"
                      onFocus={() => console.log('Element received focus')}
                      type="mobile_no"
                      name="phoneNumber"
                      value={mobile_no}
                      style={{ width: '100%' }}
                      onChange={(value) => { setMobile_no(value); }}
                      className="focus:outline-none appearance-none border-none  py-1.5 px-5 w-full"
                      countries={countries}
                      defaultCountry="ae"
                    />
                  </div>
                  {errors.mobile_no && (
                    <span className="error text-red-500 py-4">{errors.mobile_no}</span>
                  )}
                </div>
              </div>
            </form>
          </div>
          <div className="flex relative pb-5 justify-end">
            <div className="flex gap-4 flex-col">
              <button
                type="submit"
                className={`rounded-sm px-6 py-2 font-bold text-white ${submitted
                  ? "bg-gray-400"
                  : "bg-gradient-to-b from-blue-700 to-cyan-500"
                  }`}
                onClick={(e) => {
                  setLoading(true);
                  handlePostAd(e);
                }}
                disabled={submitted}
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
                  submitted ? "Submitted" : "Save And List Your Car"
                )}
              </button>
              {message && (
                <span className="error text-green-500">{message}</span>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="md:w-[90%] max-w-[1800px] w-[96%] mx-auto my-6">
        <div className="flex justify-center py-4 items-center">
          <h1 className="text-blue-800 border-l-4 border-blue-800 pl-4 lg:text-4xl sm:text-3xl text-xl text-center font-bold">
            Popular Listings
          </h1>
        </div>
        <div className="grid mx-auto justify-center items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-6 lg:gap-x-5 gap-x-3 gap-y-5">
          <div className="mx-auto"><CarCard /></div>
          <div className="mx-auto"><CarCard /></div>
          <div className="mx-auto"><CarCard /></div>
          <div className="mx-auto"><CarCard /></div>
          <div className="mx-auto"><CarCard /></div>
          <div className="mx-auto"><CarCard /></div>
          <div className="mx-auto"><CarCard /></div>
          <div className="mx-auto"><CarCard /></div>
        </div>
        <div className="flex justify-center pt-5 my-5">
          <Link to="/cars" className="px-4 py-2 rounded-lg bg-gradient-blue">
            View More
          </Link>
        </div>
      </section>
      <CustomerReviews />
      <LoginPopup open={showLoginPopup} onClose={() => setShowLoginPopup(false)} />
      <Footer />
    </>
  );
}
export default SellYourCar;
