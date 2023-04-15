import React from "react";

import { MeetingTickets } from "../../components";

const Meetings = () => {
  return (
    <div>
      <div className=" flex py-5 w-3/4 mt-10 mx-auto bg-tertiary rounded-lg justify-between">
        <h1 className="pt-5 font-semibold pl-5">No Meetings on April 10, 2023</h1>
        <button className=" h-12 mt-3 mr-4 text-sm text-white bg-green rounded-lg px-7  font-bold">
          Create Meeting
        </button>
      </div>
      <MeetingTickets />
    </div>
  );
};

export default Meetings;
