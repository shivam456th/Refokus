import React from "react";
import Button from "./Button";
import { TiThMenu } from "react-icons/ti";

function Nav() {
  return (
   <>
   {/* {Phone Section From Here} */}
    <div className="max-w-screen-xl items-center justify-between mx-auto p-6 border-b-[2px] border-zinc-700 flex md:hidden">
      <div className="flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        {/* <div className="flex gap-14 ml-20 ">
          {["Home", "Work", "Culture", "", "News"].map((elem, id) =>
            elem.length === 0 ? (
              <span key={id} className="h-5 w-[2px] bg-zinc-700"></span>
            ) : (
              <a
                className="text-sm flex items-center justify-center gap-2"
                key={id}
              >
                {id === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.25em #00FF19" }}
                    className="w-1 h-1 inline-block bg-[#00FF19] rounded-full"
                  ></span>
                )}

                {elem}
              </a>
            )
          )}
        </div> */}
      </div>
      <TiThMenu />

    </div>
   
    {/* {Laptop Section From Here} */}
    <div className="max-w-screen-xl items-center justify-between mx-auto p-6 border-b-[2px] border-zinc-700 hidden md:flex">
      <div className="flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="flex gap-14 ml-20 ">
          {["Home", "Work", "Culture", "", "News"].map((elem, id) =>
            elem.length === 0 ? (
              <span key={id} className="h-5 w-[2px] bg-zinc-700"></span>
            ) : (
              <a
                className="text-sm flex items-center justify-center gap-2"
                key={id}
              >
                {id === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.25em #00FF19" }}
                    className="w-1 h-1 inline-block bg-[#00FF19] rounded-full"
                  ></span>
                )}

                {elem}
              </a>
            )
          )}
        </div>
      </div>

      <Button />
    </div>
   </>
  );
}

export default Nav;
