import React from "react";

const Navbar = () => {
  return (
    <div className="container flex justify-between mx-auto navbar bg-lime-700 p-4 rounded-md">
  <div className="flex gap-10">
    <a className="btn btn-ghost text-xl text-white">BD Environment</a>
    <div className="form-control flex">
      <input type="text" placeholder="Office type" className="input input-bordered w-24 p-1 rounded-md md:w-auto" />
    </div>
  </div>
  
  <div className="flex gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 p-1 rounded-md md:w-auto" />
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
  </div>
</div>
  );
};

export default Navbar;
