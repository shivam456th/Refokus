import React from "react";
import { IoMdReturnRight } from "react-icons/io";

function Button({title ="Get Started"}) {
  return (
    <>
    {/* For thee Laptop Divices */}
    <div className="w-40 items-center justify-between bg-zinc-100 text-black rounded-full px-4 py-2 hidden md:flex">
      <span className="text-sm">{title}</span>
      <IoMdReturnRight/>
    </div>

    {/* For thee Mobile Divices */}
    <div className=" items-center justify-between hover:bg-black hover:text-white hover:transition-transform hover:skew-x-1 bg-white text-black rounded-full px-4 py-2 flex md:hidden">
      <span className="text-sm">{title}</span>
      <IoMdReturnRight/>
    </div>
    </>
  );
}

export default Button;
