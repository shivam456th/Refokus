import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  const products = [
    {
      title: "arqitel",
      descr:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates. ",
      live: true,
      case: false,
    },
    {
      title: "ttr",
      descr:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: true,
    },
    {
      title: "yir 2022",
      descr:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow",
      live: true,
      case: false,
    },
    {
      title: "yahoo!",
      descr:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design. ",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-20 relative ">
      {products.map((val, idx) => (
        <Product count={idx} key={idx} value={val} mover={mover} />
      ))}
      <div className="w-full absolute top-0 pointer-events-none  h-full ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="w-[32rem] window h-[23rem] absolute left-[42%] overflow-hidden  bg-white"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full   h-full  "
          >
            <video loop muted autoPlay src="https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full   h-full  "
          >
            <video loop muted autoPlay src="https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full   h-full  "
          >
            <video loop muted autoPlay src="https://cdn.refokus.com/refokus-promo/webflow-education-promo.mp4"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full   h-full "
          >
            <video loop muted autoPlay src="https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm"></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
