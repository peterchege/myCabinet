import React from "react";

const MeetingTickets = () => {
  const meetingsPayload = [
    {
      date: "09",
      month: "OCT",
      title: "Implementing solar power distribution to Rural and Urban Farmers",
      duration: "11.00 am To 12:00 am EAT",
      location: "KICC",
      invitees: 12,
    },
    {
      date: "15",
      month: "NOV",
      title: "Implementing solar power distribution to Rural and Urban Farmers",
      duration: "11.00 am To 12:00 am EAT",
      location: "State House",
      invitees: 43,
    },
    {
      date: "15",
      month: "NOV",
      title: "Implementing solar power distribution to Rural and Urban Farmers",
      duration: "11.00 am To 12:00 am EAT",
      location: "Westlands",
      invitees: 43,
    },
  ];
  return (
    <div>
      {meetingsPayload.map((items, key) => (
        <div className="w-3/4 bg-white rounded-lg shadow-md mx-auto my-10">
          <div className="grid grid-cols-2 ">
            <div className="w-64 bg-primary rounded-lg shadow-md lg:max-w-sm mx-auto my-4">
              <div className=" text-white font-bold text-center text-4xl pt-14">
                <h1>{items.date}</h1>
                <h1>{items.month}</h1>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl pt-4">{items.title}</h1>
              <div className="flex flex-cols-2 pt-4">
                <h1 className="font-bold text-xl ">
                  <span className="text-green">From : </span> {items.duration}
                </h1>
                <h1 className="font-bold text-xl pl-4">
                  <span className="text-green">Location: </span>{" "}
                  {items.location}
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
                  <span className="text-green">
                    Invitees: {items.invitees}{" "}
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MeetingTickets;
