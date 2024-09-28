import React from "react";
import { motion } from "framer-motion";

function Marquee({ elem,direction }) {
  return (
    <div className="w-full flex  overflow-hidden ">
      <motion.div
        initial={{ x: direction=="left" ? "0" : "-100%"}}
        animate={{ x: direction=="left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat:Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {elem.map((url, idx) => (
          <img key={idx} src={url} />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction=="left" ? "0" : "-100%"}}
        animate={{ x: direction=="left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat:Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {elem.map((url, idx) => (
          <img key={idx} src={url}  />
        ))}
      </motion.div>
      
      
    
    </div>
  );
}

export default Marquee;
