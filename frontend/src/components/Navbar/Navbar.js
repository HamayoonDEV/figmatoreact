import React, { useState } from "react";
import logo from "../../assets/Logo.svg";
import userImg from "../../assets/User.svg";
import MenuIcon from "../../utils/menu/MenuIcon";
import MenuXIcon from "../../utils/MenuXicon/MenuXIcon";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className=" container px-[20px] py-[16px] mx-auto flex justify-between items-center  bg-white">
      <div className="flex justify-center gap-5 items-center">
        <img src={logo} alt="logo" />
        <ul
          className={`${
            menu ? "duration-300 hidden" : "   duration-500"
          } flex flex-col gap-4 absolute z-40 bg-white left-0 right-0 top-16 text-[#36485c] shadow-xl items-center text-center text-lg p-6  lg:flex lg:flex-row lg:static lg:shadow-none lg:justify-between lg:w-full`}
        >
          <li className="lg:pl-[74px]">
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">EnterPrise</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center gap-5 font-medium">
        <a href="" className="hidden lg:block pr-[56px]">
          Open an account
        </a>
        <img src={userImg} alt="userimage" />
        <button className="lg:hidden" onClick={handleMenu}>
          {" "}
          {menu ? <MenuIcon /> : <MenuXIcon />}
        </button>
        <a href="" className=" hidden lg:block">
          Sign in
        </a>
      </div>
    </div>
  );
};

export default Navbar;
