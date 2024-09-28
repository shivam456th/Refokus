import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="w-1/2">
          <h1 className="capitalize text-[9rem] tracking-tight leading-none ">
            refokus.
          </h1>
        </div>
        <div className="w-1/2 flex">
          <div className="w-1/3">
            <h4 className="mb-8">Socials</h4>
            {["instagram", "twitter (x?)", "linkedIn"].map((elem, idx) => (
              <a key={idx} className="block mt-3 text-zinc-500 capitalize">{elem}</a>
            ))}
          </div>
          <div className="w-1/3">
            <h4 className="mb-8">Socials</h4>
            {["instagram", "twitter (x?)", "linkedIn"].map((elem, idx) => (
              <a key={idx} className="block mt-3 text-zinc-500 capitalize">{elem}</a>
            ))}
          </div>
          <div className="w-1/2 flex flex-col items-end gap-3">
            <p className="text-right">
              Refokus is a new breed of digital agency that combines design
              forward-thinking to help brands create better experiences.
            </p>
            <img className="w-28"
              src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
