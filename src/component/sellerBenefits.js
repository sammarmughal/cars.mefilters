import React, {useState} from "react";
import PageIndicator from "./pageindicator";
import blueCar from "../images/HomepageAssets/wide-rear-wheel-car-svgrepo-com.png";
import effortless from "../images/HomepageAssets/real-estate-property-svgrepo-com.png";
import speaker from "../images/HomepageAssets//marketing-mail-svgrepo-com.png";
import box from "../images/HomepageAssets/Page-2.png";
import support from "../images/HomepageAssets/support-svgrepo-com.png";
import insights from "../images/HomepageAssets/brand-buzzfeed-svgrepo-com.png";
import BenefitCard from "./BenefitCard";
function SellerBenefits() {
  const [currentPage, setCurrentPage] = useState(0);

  const handleDotClick = (newPage) => {
    setCurrentPage(newPage);
  };
 
  return (
    <>
      <div className="bg-sky-100 py-4">
        <div className="w-11/12 max-w-[1800px]  flex-col  mx-auto">
          <div className="flex mt-6 py-8  justify-center items-center">
            <h1 className="text-blue-800 border-l-4 border-blue-800 pl-4  lg:text-4xl sm:text-3xl text-xl  text-center font-bold">
              Benefits for Sellers
            </h1>
          </div>
          <div className="sm:grid hidden lg:grid-cols-3 sm:grid-cols-2 justify-center  py-20 mx-8 my-6 gap-x-5 gap-y-28">
            <BenefitCard
              src={blueCar}
              height={123}
              width={349}
              title="Wider Exposure"
              description="Sellers benefit from increased visibility on 
                        our platform, reaching a diverse audience of potential buyers and enhancing their chances of a quick sale."
            />
            <BenefitCard
              src={effortless}
              height={147}
              width={157}
              title="Effortless Listing"
              description="Our user-friendly platform streamlines the listing process, allowing sellers to easily and efficiently input detailed information about their cars, facilitating a seamless experience."
            />
            <BenefitCard
              src={speaker}
              title="Professional Marketing"
              description="Sellers enjoy the advantages of professional marketing tools, presenting their cars in an appealing manner with high-quality images and engaging descriptions, attracting serious buyers."
            />
            <BenefitCard
              src={box}
              title="Secure Transactions"
              description="The platform prioritizes secure transactions, providing sellers and buyers with a safe environment to conduct business, fostering trust and confidence in the selling process."
            />
            <BenefitCard
              src={support}
              title="Guidance and Support"
              description="Our user-friendly platform streamlines the listing process, allowing sellers to easily and efficiently input detailed information about their cars, facilitating a seamless experience."
            />
            <BenefitCard
              src={insights}
              title="Market Insights"
              description="Sellers have access to real-time market insights, empowering them with pricing guidance and trends, allowing for informed decisions and maximizing the chances of a successful and profitable sale."
            />
          </div>
          <div className="block  py-20 mx-8 my-6 sm:hidden">
            <div className={`${currentPage === 0 ? "block" : "hidden"}`}>
              <BenefitCard
                src={blueCar}
                height={123}
                width={349}
                title="Wider Exposure"
                description="Sellers benefit from increased visibility on 
                        our platform, reaching a diverse audience of potential buyers and enhancing their chances of a quick sale."
              />
            </div>
            <div className={`${currentPage === 1 ? "block" : "hidden"}`}>
              <BenefitCard
                src={effortless}
                height={147}
                width={157}
                title="Effortless Listing"
                description="Our user-friendly platform streamlines the listing process, allowing sellers to easily and efficiently input detailed information about their cars, facilitating a seamless experience."
              />
            </div>
            <div className={`${currentPage === 2 ? "block" : "hidden"}`}>
              <BenefitCard
                src={speaker}
                title="Professional Marketing"
                description="Sellers enjoy the advantages of professional marketing tools, presenting their cars in an appealing manner with high-quality images and engaging descriptions, attracting serious buyers."
              />
            </div>
            <div className={`${currentPage === 3 ? "block" : "hidden"}`}>
              <BenefitCard
                src={box}
                title="Secure Transactions"
                description="The platform prioritizes secure transactions, providing sellers and buyers with a safe environment to conduct business, fostering trust and confidence in the selling process."
              />
            </div>
            <div className={`${currentPage === 4 ? "block" : "hidden"}`}>
              <BenefitCard
                src={support}
                title="Guidance and Support"
                description="Our user-friendly platform streamlines the listing process, allowing sellers to easily and efficiently input detailed information about their cars, facilitating a seamless experience."
              />
            </div>
            <div className={`${currentPage === 5 ? "block" : "hidden"}`}>
              {" "}
              <BenefitCard
                src={insights}
                title="Market Insights"
                description="Sellers have access to real-time market insights, empowering them with pricing guidance and trends, allowing for informed decisions and maximizing the chances of a successful and profitable sale."
              />
            </div>
            <div className="mt-6">
            <PageIndicator
              pagerState={{ currentPage, pageCount: 6 }}
              className=""
              onClick={handleDotClick}
            />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SellerBenefits;
