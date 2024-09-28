import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="w-full">
      <div className="max-w-screen-lg flex gap-2 mx-auto   py-20">
        <Card width={"basis-1/4"} start={false} para={true} />
        <Card
          width={"basis-3/4"}
          start={true}
          hover={"true"}
          para={false}
        />
      </div>
    </div>
  );
}

export default Cards;
