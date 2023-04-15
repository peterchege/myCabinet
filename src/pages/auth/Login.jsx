import React from "react";
import { useNavigate } from "react-router-dom";

import { images } from "../../constants";

const Login = () => {
  let navigate = useNavigate();

  return (
    <div className="grid  text-white">
      <div className=" bg-primary">
        <div className="flex w-full justify-between mt-20">
          <div className="ml-20">
            <img src={images.logoUrl} alt="Logo" />
            <h1 className="text-5xl	pt-5 font-semibold">eCabinet</h1>
          </div>
          <div className="mr-20">
            <img src={images.govUrl} width={250} height={250} alt="Logo" />
          </div>
        </div>
        <div className="grid md:grid-cols-3  sm:grid-cols-1 gap-4 mt-20 mb-40 ">
          <div className="ml-20">
            <form>
              <div className="grid grid-rows ">
                <label className="tx-2xl font-semibold pb-3">Email</label>
                <input
                  class="shadow appearance-none border rounded w-82 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                />
                <label className="tx-2xl font-semibold mt-10  pb-3">
                  Password
                </label>
                <input
                  class="shadow appearance-none border rounded w-82 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                />
                <button
                  onClick={() => navigate("/dashboard/ecommerce")}
                  class="bg-green hover:bg-secondary text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline mt-10 w-82"
                  type="button"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
          <div className=" relative left-1/2  w-0.5 bg-gray-600"></div>
          <div>
            <p className="font-bold text-4xl text-right leading-loose mr-20">
              Welcome to our virtual cabinet meeting. Connect and Collaborate
              from anywhere.
            </p>
          </div>
        </div>
      </div>
      <div className=" flex justify-center">
        <img src={images.lineUrl} alt="line" />
      </div>
    </div>
  );
};

export default Login;
