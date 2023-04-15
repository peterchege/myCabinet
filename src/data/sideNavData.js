import React from "react";
import {
  AiOutlineCalendar,
  AiFillInfoCircle,
  AiFillSetting,
} from "react-icons/ai";
import { FiShoppingBag, FiEdit, FiPieChart } from "react-icons/fi";
import { BsKanban, BsBarChart } from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import {
  RiContactsLine,
  RiDashboardFill,
  RiFileListFill,
} from "react-icons/ri";
import { GiLouvrePyramid } from "react-icons/gi";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Quick Menu",
        icon: <RiDashboardFill />,
      },
      {
        name: "Meetings",
        icon: <RiFileListFill />,
      },
      {
        name: "Resources",
        icon: <FiShoppingBag />,
      },
      {
        name: "Directory",
        icon: <FiShoppingBag />,
      },
    ],
  },
  {
    title: "My Apps",
    links: [
      {
        name: "calendar",
        icon: <AiOutlineCalendar />,
      },
      {
        name: "Tasks",
        icon: <BsKanban />,
      },
      {
        name: "editor",
        icon: <FiEdit />,
      },
    ],
  },

  {
    title: "Admin",
    links: [
      {
        name: "Team",
        icon: <IoMdContacts />,
      },
      {
        name: "Settings",
        icon: <AiFillSetting />,
      },
      {
        name: "Help",
        icon: <AiFillInfoCircle />,
      },
    ],
  },
];
