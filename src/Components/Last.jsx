import React from "react";

function Last() {
  return (
    <div className="max-w-screen-xl mx-auto">
      {["Privacy Policy", "Cookie", "Impressum", "Terms"].map((elem, idx) => (
        <h3 key={idx} className="inline-block mr-4 py-4 text-zinc-500">{elem}</h3>
      ))}
    </div>
  );
}

export default Last;
