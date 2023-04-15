/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

import { images } from "../../constants";
import { MeetingTickets, NavbarTitle } from "../../components";

const QuickMenu = () => {
  const posts = [
    {
      title: "Create new Meeting",
      //   img: "images.tasks",
    },
    {
      title: "Past Meetings",
      //   img: `public/assets/images/resources.png `,
    },
    {
      title: "Upcoming Meetings",
      //   img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
    },
    {
      title: "Directory",
      //   img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
    },
    {
      title: "Resources",
      img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
    },
    {
      title: "Tasks",
      //   img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
    },
  ];
  return (
    <div>
      <NavbarTitle headTitle={"Dashboard"} />
      <div className="w-4/5 mx-auto grid gap-4 lg:grid-cols-3 mt-10">
        {posts.map((items, key) => (
          <div
            className="w-full bg-white rounded-lg shadow-md lg:max-w-sm mx-auto my-2"
            key={key}
          >
            <img
              className="object-contain mt-5 w-full h-48"
              src={images.pastMeetings}
              alt="image"
            />
            <div className="p-4">
              <h4 className="text-3xl py-4 text-center  font-bold text-primary">
                {items.title}
              </h4>
              <div className="flex justify-center mb-2">
                <button className="px-4 py-2 text-sm text-white bg-accent rounded-full mx-auto  font-bold">
                  Read more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <MeetingTickets />
    </div>
  );
};

export default QuickMenu;
