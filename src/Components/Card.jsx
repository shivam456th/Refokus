import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

function Card({ width, start, para, hover = "false" }) {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover === "true" && "#7443ff",
        padding: "25px",
      }}
      className={`${width} flex flex-col h-[28rem] justify-between  p-5 bg-zinc-800 rounded-xl`}
    >
      <div className="w-full">
        <div className="flex justify-between items-center ">
          <h1>one heading</h1>
          <FaArrowRightLong />
        </div>
        <h1 className="text-3xl mt-5"> Whatever heading</h1>
      </div>
      <div className="w-full">
        {start && (
          <>
            <h1 className="text-5xl font-bold tracking-tight leading-none">
              Start Project
            </h1>
            <button className="rounded-full py-2 px-4 border-2 border-zinc-50 mt-5">
              Contact Us
            </button>
          </>
        )}

        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
