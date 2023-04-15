/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

import { images } from "../../constants";

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
      <div>
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
        <div className="w-3/4 bg-white rounded-lg shadow-md mx-auto my-10">
          <div className="grid grid-cols-2 ">
            <div className="w-64 bg-primary rounded-lg shadow-md lg:max-w-sm mx-auto my-4">
              <div className=" text-white font-bold text-center text-4xl pt-14">
                <h1>09</h1>
                <h1>OCT</h1>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl pt-4">
                Implementing solar power distribution to Rural and Urban Farmers
              </h1>
              <div className="flex flex-cols-2 pt-4">
                <h1 className="font-bold text-xl ">
                  <span className="text-green">From : </span> 11.00 am To 12:00
                  am EAT
                </h1>
                <h1 className="font-bold text-xl pl-4">
                  <span className="text-green">Location: </span> KICC
                </h1>
              </div>

              <div className="flex flex-row my-5 pt-4 pr-5">
                <button className="w-32 px-4 py-2 text-sm text-white bg-accent rounded-full mx-auto  font-bold">
                  Join
                </button>
                <button className="w-32 px-4 py-2 text-sm text-white bg-green rounded-full mx-auto  font-bold">
                  Open Book
                </button>
                <h1 className="font-bold text-xl pl-4">
                  <span className="text-green">Invitees: 12 </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickMenu;
