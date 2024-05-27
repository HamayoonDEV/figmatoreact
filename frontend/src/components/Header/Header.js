import React from "react";
import arrowIcon from "../../assets/blue-button.svg";

const Header = () => {
  return (
    <div className="container mx-auto pt-4 lg:pt-10  ">
      <div className="flex flex-col justify-center items-center">
        <h1 className=" px-[20px]  text-center font-medium text-[32px] leading-[40px] lg:text-[64px] lg:leading-[72px] 2xl:w-1/2  ">
          Start monitoring your website like a pro
        </h1>
        <p className="px-[20px] text-center pt-4 text-[#36485c] lg:text-[18px] leading-7 md:px-0 xl:w-1/2">
          Get a bird's eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boost
          productivity and efficiency!
        </p>
        <div className="flex justify-center items-center w-full px-[20px] pt-4 gap-5 xl:w-1/2">
          <button className="py-4 px-8 w-1/2 bg-[#4328eb] text-white  rounded-[4px] font-medium hover:opacity-95 lg:w-1/3 ">
            Try for free
          </button>
          <button className=" py-4 px-8 rounded-[4px] w-1/2 text-[#4328eb] font-medium flex justify-center items-center gap-2 hover:bg-neutral-100 lg:w-1/3">
            View Pricing{" "}
            <span>
              <img src={arrowIcon} alt="arrowIcon" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
