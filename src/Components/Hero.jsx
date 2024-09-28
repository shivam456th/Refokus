import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";

function Hero() {
  const [data, setData] = useState([
    {
      img: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01-p-500.webp",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cd6ec7666ac6009cfcb7db_11-p-500.jpg",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b413200259aa2289224594_Frame%204-p-500.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b415e16156819899272250_Frame%202-p-500.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc29f66c6594c072ba1a38_02.jpg",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      img: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cd6ecc885579ba1b4ffc97_10.jpg",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);
  const { scrollYProgress } = useScroll();
  scrollYProgress.onChange((val) => {
    const progressPercentage = Math.floor(val * 100);
    const imagesToShow = [];

    switch (progressPercentage) {
      case 0:
        imagesToShow.push(0);
        break;
      case 1:
        imagesToShow.push(0, 1);
        break;
      case 2:
        imagesToShow.push(0, 1, 2);
        break;
      case 3:
        imagesToShow.push(0, 1, 2, 3);
        break;
      case 4:
        imagesToShow.push(0, 1, 2, 3, 4);
        break;
      case 6:
        imagesToShow.push(0, 1, 2, 3, 4, 5);
        break;
      case 8:
        imagesToShow.push(0, 1, 2, 3, 4, 5);
        break;
      default:
        break;
    }

    setData((prevData) =>
      prevData.map((item, index) => ({
        ...item,
        isActive: imagesToShow.includes(index),
      }))
    );
  });
  

  return (
    <div className="max-w-screen-xl m-auto mt-4">
      <div className="relative">
        <h1 className="text-[30vw] font-normal leading-none text-center">
          work
        </h1>
        <div className=" h-full w-full absolute top-0 left-0">
          {data.map(
            (elem, idx) =>
              elem.isActive && (
                <img
                  key={idx}
                  src={elem.img}
                  className="w-60 rounded-lg -translate-x-[50%]  -translate-y-[30%]  object-cover absolute"
                  style={{ top: elem.top, left: elem.left }}
                ></img>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
