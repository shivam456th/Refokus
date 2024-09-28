import React from "react";
import Button from "./Button";

function Product({value,mover,count}) {
  return (
    <>
   {/* {Laptop Section From Here} */}
    <div className="w-full py-20 h-[23rem] hidden md:flex  text-white">
      <div onMouseEnter={()=>{mover(count)}} className="max-w-screen-xl mx-auto flex items-center justify-between m-auto">
        <h1 className="text-[4vw] font-semibold capitalize">{value.title}</h1>
        <div className="w-1/3">
            <p className="mb-8">{value.descr}</p>
           <div className="flex items-center gap-4">
            {value.live && <Button/>}
            {value.case && <Button title="Visit Website"/>}
           </div>
        </div>
      </div>
    </div>

   {/* {mobile Section From Here} */}
   <div className="w-full  h-[23rem] flex md:hidden text-white">
      <div onMouseEnter={()=>{mover(count)}} className="max-w-screen-xl mx-auto flex items-center justify-between m-auto">
        <h1 className="text-[4vw] font-semibold bg-red-500 mx-5 capitalize">{value.title}</h1>
        <div className="w-2/3"> 
            <p className="mb-8">{value.descr}</p>
           <div className="flex flex-col gap-4">
            {value.live && <Button/>}
            {value.case && <Button title="Visit Website"/>}
           </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Product;
