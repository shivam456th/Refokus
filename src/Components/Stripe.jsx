import React from "react";

function Stripe({ val }) {
  return (
    <>
    {/* mobile section  */}
    <div className=" w-[16.6%] border-b-[1.2px] border-t-[1.2px]  border-l-[1.2px]  justify-between items-center py-4 border-zinc-700 px-4 flex md:hidden">
      <img  src={val.url} alt="" />
      <h2 className="text-xs">{val.number}</h2>
    </div>

    {/* laptop section  */}
    <div className=" w-[16.6%] border-b-[1.2px] border-t-[1.2px]  border-l-[1.2px]  justify-between items-center py-5 border-zinc-700 px-10 hidden md:flex">
      <img  src={val.url} alt="" />
      <h2 className="font-semibold">{val.number}</h2>
    </div>
    </>
  );
}

export default Stripe;
