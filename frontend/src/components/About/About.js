import React from "react";
import CheckIcon from "../../utils/CheckIcon/CheckIcon";
import arrowIcon from "../../assets/blue-button.svg";
import arrowIconGreen from "../../assets/green-button.svg";
import arrowIconPink from "../../assets/pink-button.svg";
import aboutimage1 from "../../assets/feature-1.svg";
import feature2 from "../../assets/feature-2.svg";
import feature3 from "../../assets/feature-3.svg";

const About = () => {
  return (
    <>
      <section className=" mt-10 flex flex-col w-full ">
        <div className=" container  mx-auto flex flex-col-reverse justify-center items-center  w-full md:flex-row px-[20px] ">
          <div className="w-full md:w-1/2">
            <p className="hidden sm:block mb-5 font-medium text-[#40a3ff]">
              Sales Monitoring
            </p>
            <h1 className="hidden sm:block text-3xl font-medium lg:w-1/2  lg:leading-[42px] mb-5 ">
              Simplify your sales monitoring
            </h1>
            <p className=" mt-5 sm:mt-0 text-[#36485c] md:w-1/2 mb-5">
              Stay on top of things and revamp your work process with our
              game-changing feature. Get a bird's eye view with our customizable
              dashboard.{" "}
            </p>
            <p className="flex">
              <CheckIcon />
              <span className="ml-5">Lorem ipsum dolor sit amet</span>
            </p>
            <p className="flex">
              <CheckIcon />
              <span className="ml-5">Consectetur adipiscing elit</span>
            </p>
            <p className="flex">
              <CheckIcon />
              <span className="ml-5">
                Sed do eiusmod tempor incididunt ut labore{" "}
              </span>
            </p>
            <p className="flex mt-5 text-[#40a3ff]">
              Learn More
              <span className="ml-5">
                <img src={arrowIcon} alt="arrowIcon" />
              </span>
            </p>
          </div>
          <div className="w-full mr-10 md:w-1/3">
            <p className=" pl-[20px] sm:hidden mb-5 font-medium text-[#40a3ff]">
              Sales Monitoring
            </p>
            <h1 className=" w-full  ml-[20px] sm:hidden text-2xl font-medium lg:w-1/2  lg:leading-[42px] mb-5 ">
              Simplify your sales monitoring
            </h1>
            <img src={aboutimage1} alt="feature one" className="ml-5" />
          </div>
        </div>
        {/* 2nd section */}
        <div className=" container  mx-auto mt-10 flex flex-col justify-center items-center  w-full md:flex-row px-[20px]  ">
          <div className="w-full mr-10 md:w-1/3">
            <p className=" pl-[20px] sm:hidden mb-5 font-medium text-[#08a72b]">
              Customer Support
            </p>
            <h1 className=" w-full  ml-[20px] sm:hidden text-2xl font-medium lg:w-1/2  lg:leading-[42px] mb-5 ">
              Get in touch with your customers
            </h1>
            <img src={feature2} alt="feature one" className="ml-[20px]" />
          </div>
          <div className="w-full md:w-1/2 md:pl-40">
            <p className="hidden sm:block mb-5 font-medium text-[#08a72b] ">
              Customer Support
            </p>
            <h1 className="hidden sm:block text-3xl font-medium   lg:leading-[42px] mb-5 ">
              Get in touch with your customers
            </h1>
            <p className=" mt-5 sm:mt-0 text-[#36485c] mb-5">
              Stay on top of things and revamp your work process with our
              game-changing feature. Get a bird's eye view with our customizable
              dashboard.{" "}
            </p>
            <p className="flex">
              <CheckIcon />
              <span className="ml-5">Lorem ipsum dolor sit amet</span>
            </p>
            <p className="flex">
              <CheckIcon />
              <span className="ml-5">Consectetur adipiscing elit</span>
            </p>
            <p className="flex">
              <CheckIcon />
              <span className="ml-5">
                Sed do eiusmod tempor incididunt ut labore{" "}
              </span>
            </p>
            <p className="flex mt-5 text-[#08a72b]">
              Learn More
              <span className="ml-5">
                <img src={arrowIconGreen} alt="arrowIcon" />
              </span>
            </p>
          </div>
        </div>
        {/* 3rd section */}
        <div className=" container mt-10 mx-auto flex flex-col-reverse justify-center items-center  w-full md:flex-row px-[20px] ">
          <div className="w-full md:w-1/2">
            <p className="hidden sm:block mb-5 font-medium text-[#ed439f]">
              Growth Monitoring
            </p>
            <h1 className="hidden sm:block text-3xl font-medium lg:w-1/2  lg:leading-[42px] mb-5 ">
              Monitor your site’s new subscribers
            </h1>
            <p className=" mt-5 sm:mt-0 text-[#36485c] md:w-1/2 mb-5">
              Stay on top of things and revamp your work process with our
              game-changing feature. Get a bird's eye view with our customizable
              dashboard.{" "}
            </p>
            <div className="flex justify-center items-center gap-10 ">
              <div className="flex flex-col justify-center items-center ">
                <span className="text-xl font-medium">100+</span>
                <p className="text-[#37485c]">Lorem ipsum dolor sit</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="text-xl font-medium">800+</span>
                <p className="text-[#37485c]">Conse adipiscing elit </p>
              </div>
            </div>
            <p className="flex mt-5 text-[#ed439f]">
              Learn More
              <span className="ml-5">
                <img src={arrowIconPink} alt="arrowIcon" />
              </span>
            </p>
          </div>
          <div className="w-full mr-10 md:w-1/3">
            <p className=" pl-[20px] sm:hidden mb-5 font-medium text-[#ed439f]">
              Growth Monitoring
            </p>
            <h1 className=" w-full  ml-[20px] sm:hidden text-2xl font-medium lg:w-1/2  lg:leading-[42px] mb-5 ">
              Monitor your site’s new subscribers
            </h1>
            <img src={feature3} alt="feature one" className="ml-5" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
