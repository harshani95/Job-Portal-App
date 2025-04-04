import React from "react";
import { assets } from "../assets/assets";

const JobCard = ({ job }) => {
  return (
    <div
      className="border p-6 shadow rounded
     "
    >
      <div
        className="flex items-center
      justify-between mb-4"
      >
        <img className="h-8" src={assets.company_icon} alt="" />
      </div>
      <h4 className="font-medium text-xl mt-2">{job.title}</h4>
      <div className="flex items-center gap-3 mt-2 text-sm text-gray-600">
        <span className="bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">
          {job.location}
        </span>
        <span className="bg-red-50 border border-red-200 px-4 py-1.5 rounded">
          {job.level}
        </span>
      </div>
      <p
        className="text-gray-600 mt-4 text-sm"
        dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) }}
      ></p>
      <div className="flex gap-4 text-sm mt-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Apply now
        </button>
        <button className="text-gray-500 border border-gray-500 px-4 py-2 rounded">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default JobCard;
