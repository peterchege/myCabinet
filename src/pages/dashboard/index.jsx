import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "../../components";
import {
  QuickMenu,
  Meetings,
  Directory,
  Calendar,
  Employees,
  Resources,
  Pyramid,
  Customers,
  Tasks,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  Stacked,
} from "..";
import "../../App.css";

const Dashboard = () => {
  const activeMenu = true;
  return (
    <div>
      <div className="flex relative dark:bg-main-dark-bg">
        {/* <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="Button"
              className="text-3xl p-3 hover:drop-shadow-x1 hover:bg-light-gray text-white"
              style={{ background: "blue", borderRadius: "50%" }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div> */}
        {activeMenu ? (
          <div
            className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white"
            style={{ background: "#12202F" }}
          >
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          style={{ background: "#f2ecdecf" }}
          className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
            activeMenu ? "md:ml-72" : "flex-2"
          }`}
        >
          <div
            style={{ background: "#f2ecdecf" }}
            className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full"
          >
            <Navbar />
          </div>

          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<QuickMenu />} />
              <Route path="/quick-menu" element={<QuickMenu />} />
              <Route path="/meetings" element={<Meetings />} />
              <Route path="resources" element={<Resources />} />
              <Route path="directory" element={<Directory />} />

              {/* Pages */}

              <Route path="employees" element={<Employees />} />
              <Route path="customer" element={<Customers />} />

              {/* Apps */}
              <Route path="tasks" element={<Tasks />} />
              <Route path="editor" element={<Editor />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="color-picker" element={<ColorPicker />} />

              {/* Charts */}
              <Route path="line" element={<Line />} />
              <Route path="area" element={<Area />} />
              <Route path="bar" element={<Bar />} />
              <Route path="pie" element={<Pie />} />
              <Route path="financial" element={<Financial />} />
              <Route path="color-mapping" element={<ColorMapping />} />
              <Route path="pyramid" element={<Pyramid />} />
              <Route path="stacked" element={<Stacked />} />
            </Routes>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
