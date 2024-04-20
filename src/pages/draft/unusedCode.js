{/* import exterior from "../images/SellYourCar/car-svgrepo-com.png";
import interior from "../images/SellYourCar/safety-seat-car-svgrepo-com.png";
import Accident from "../images/SellYourCar/accident.png";
 <div className="border-b-2 border-blue-700 pb-4">
              <div className="flex items-center gap-6">
                <img src={exterior} className="" />
                <h1 className="sm:text-2xl text-xl font-bold text-blue-800">
                  Exterior Condition
                </h1>
              </div>
              <p className="text-blue-800">What is the Exterior Condition?</p>
              <div className="flex flex-wrap gap-x-4">
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-sky-100 rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2 text-blue-800">Extra Clean</label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-sky-100 rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2 text-blue-800">Clean</label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-sky-100 rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2 text-blue-800">Average </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-sky-100 rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2 text-blue-800">Average Below</label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-sky-100 rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2 text-blue-800">I don't know </label>
                </div>
              </div>
            </div>
            <div className="my-4 border-b-2 border-blue-700 pb-4">
              <div className="flex items-center gap-6">
                <img src={interior} className="" />
                <h1 className="sm:text-2xl text-xl font-bold text-blue-800">
                  Interior Condition
                </h1>
              </div>
              <p className="text-blue-800 pt-4">
                What is the Interior Condition?
              </p>
              <div className="flex flex-wrap gap-x-4">
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-sky-100 rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2 text-blue-800">Extra Clean</label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-sky-100 rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2 text-blue-800">Clean</label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-sky-100 rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2 text-blue-800">Average </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-sky-100 rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2 text-blue-800">Average Below</label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-sky-100 rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2 text-blue-800">I don't know </label>
                </div>
              </div>
            </div>
            <div className="my-4   pb-4">
              <div className="flex items-center gap-6">
                <img src={Accident} className="" />
                <h1 className="sm:text-2xl text-xl font-bold text-blue-800">Accident</h1>
              </div>
              <p className="text-blue-800 pt-4">Has the car Had An Accident?</p>
              <div className="flex gap-10">
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-sky-100 rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2 text-blue-800">Yes</label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-sky-100 rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2 text-blue-800">No</label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-sky-100 rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2 text-blue-800">I don't know </label>
                </div>
              </div>
              {/* <div className="flex justify-end">
                <p className="save-btn"> Save</p>
              </div> 
            
             <div className="flex flex-col gap-2 ">
                    <label className="text-blue-800 text-sm">First name* </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      className="px-4 rounded-md bg-blue-100 py-2 border border-blue-700 focus:outline-none focus:shadow-lg  outline-[#007bff]"
                    />
                    {errors.name && (
                      <span className="error text-red-500">{errors.name}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 ">
                    <label className="text-blue-800 text-sm">Last Name* </label>
                    <input
                      type="text"
                      className="px-4 rounded-md bg-blue-100 py-2 border border-blue-700 focus:outline-none focus:shadow-lg outline-[#007bff]"
                    />
                  </div>
            <div className="flex flex-col gap-2 ">
                    <label className="text-blue-800 text-sm">E-mail*</label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className="px-4 rounded-md bg-blue-100 py-2 border border-blue-700 focus:outline-none focus:shadow-lg  outline-[#007bff]"
                    />
                    {errors.email && (
                      <span className="error text-red-500">{errors.email}</span>
                    )}
                  </div>
            
            //Api saveUser  // function saveUser(e) {
  //   e.preventDefault();
  //   setLoading(true);
  //   setErrors({});

  //   let data = { name, email, phone };
  //   fetch("https://spareparts.me/api/test", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then((result) => {
  //       console.warn("result", result);
  //       if (result.errors) {
  //         setLoading(false);

  //         if (result.errors.name) {
  //           console.log(result.errors.name[0]);
  //           setErrors((prevErrors) => ({
  //             ...prevErrors,
  //             name: result.errors.name[0],
  //           }));
  //         }
  //         if (result.errors.email) {
  //           console.log(result.errors.email[0]);
  //           setErrors((prevErrors) => ({
  //             ...prevErrors,
  //             email: result.errors.email[0],
  //           }));
  //         }
  //         if (result.errors.phone) {
  //           console.log(result.errors.phone[0]);
  //           setErrors((prevErrors) => ({
  //             ...prevErrors,
  //             phone: result.errors.phone[0],
  //           }));
  //         }
  //       } else {
  //         setMessage(result.message);
  //         setName("");
  //         setEmail("");
  //         setPhone("");
  //         setSubmitted(true);
  //         setLoading(false);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("There was a problem with the fetch operation:", error);
  //       setLoading(false);
  //       if (
  //         error.response &&
  //         error.response.data &&
  //         error.response.data.errors
  //       ) {
  //         const serverErrors = error.response.data.errors;
  //         console.log("Server Errors:", serverErrors);
  //         setErrors(serverErrors);
  //       }
  //     });
  // }
            */}
            