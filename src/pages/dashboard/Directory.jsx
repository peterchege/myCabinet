import React from 'react'

import {  NavbarTitle } from "../../components";


const Directory = () => {
  return (
    <div>
      <NavbarTitle headTitle={"Directory"} />
       <div className=" flex py-5 w-3/4 mt-10 mx-auto bg-tertiary rounded-lg justify-between">
        <h1 className="pt-5 font-semibold pl-5">Member List</h1>
        <button className=" h-12 mt-3 mr-4 text-sm text-white bg-green rounded-lg px-7  font-bold">
         Add Member
        </button>
      </div>
    </div>
  )
}

export default Directory