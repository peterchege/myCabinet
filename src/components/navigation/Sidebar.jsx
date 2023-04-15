import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../../data/sideNavData";
import { images } from "../../constants";

const Sidebar = () => {
  const activeMenu = true;

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pd-2.5 rounded-lg text-green text-lg m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-white dark:text-gray-200 dark:hover:text-black hover:bg-ligh-gray m-2";
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pd-10">
      {activeMenu && (
        <>
          <div className="flex justify-between item-center">
            <Link
              to="/"
              onClick={() => {}}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-white  "
            >
              {/* <SiShopware /> <span>Shoppy</span> */}
              <div className="">
                <img src={images.logoUrl} width={100} alt="Logo" />
                <h1 className="text-2xl	pt-5 font-semibold">eCabinet</h1>
              </div>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => {}}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 blockmd:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`${link.name}`}
                    key={link.name}
                    onClick={() => {}}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
