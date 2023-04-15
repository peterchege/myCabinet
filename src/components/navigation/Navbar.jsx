import React from "react";

import { images } from "../../constants";

const Navbar = ({ headTitle }) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex-col">
          <img src={images.govUrl} width={200} height={200} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
