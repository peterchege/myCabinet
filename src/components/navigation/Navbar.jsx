import React from "react";

import { images } from "../../constants";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex-col">
          <img src={images.govUrl} width={250} height={250} alt="Logo" />
          <h1 className="text-5xl pt-10 justify-center font-bold">Dashboard</h1>
        </div>
      </div>
      <div className="flex flex-row justify-between px-40 pt-10 ">
        <h2 className="text-xl font-semibold">Upcoming Meetings</h2>
        <h2 className="text-xl font-semibold">Cabinet Announcement</h2>
      </div>

      <div className=" flex justify-center mt-7">
        <img src={images.lineUrl} width={"80%"} alt="line" />
      </div>
    </div>
  );
};

export default Navbar;
