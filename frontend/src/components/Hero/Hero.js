import React from "react";
import heroImage from "../../assets/Image.svg";
import google from "../../assets/Google.svg";
import trustpilot from "../../assets/Trustpilot.svg";
import slack from "../../assets/Slack.svg";
import cluth from "../../assets/Clutch.svg";
import cnn from "../../assets/CNN.svg";

const Hero = () => {
  return (
    <div>
      {" "}
      <div className="  mt-6  flex flex-col w-full bg-gradient-to-b  from-white via-orange-400  via-pink-600 to-purple-600  ">
        <div className="  container mx-auto flex flex-col items-center bottom-5 w-full pt-0">
          <img src={heroImage} alt="heroImage" className="mr-10" />
        </div>
        <div className=" flex flex-col justify-center items-center gap-10 lg:flex-row text-center">
          <p className="text-white text-[18px]">Trusted by these companies</p>

          <div className=" mb-5 mx-10 grid grid-cols-3 gap-5 md:flex md:justify-center md:items-center md:gap-10">
            <img src={google} alt="google logo" />
            <img src={trustpilot} alt="trustPilot logo" />
            <img src={slack} alt="slack logo" />
            <img src={cluth} alt="cluth logo" />
            <img src={cnn} alt="cnn logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
