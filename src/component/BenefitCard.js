import React from "react";
const BenefitCard = (props) => {
    return (
      <>
        <div className="bg-white max-w-[550px] hover:shadow-lg border border-slate-400 rounded-xl p-4">
          <div className="flex justify-center mt-[-28px] h-20">
            <img
              src={props.src}
              className="flex object-contain justify-center w-[24%] h-auto"
              height={100}
              style={{ marginTop: "-4rem" }}
            ></img>
          </div>
          <h1 className="text-xl text-blue-800 mt-4 py-2 text-center font-bold">
            {props.title}
          </h1>
          <p className="text-center text-blue-800 py-2">{props.description}</p>
        </div>
      </>
    );
  };
  export default BenefitCard;