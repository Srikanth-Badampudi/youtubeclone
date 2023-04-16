import React from "react";
import { TfiArrowLeft } from "react-icons/tfi";
import { MdOutlineMic } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import Suggestions from "./Suggestions";

const FullPageSearch = () => {
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 bg-white px-3 py-3">
      <div className="flex gap-5 justify-between items-center">
        <TfiArrowLeft size={"1.2em"} className="cursor-pointer" />
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search YouTube"
            className="mr-3 w-full bg-gray-100 outline-none font-PoppinsFont font-normal text-[1rem] placeholder:text-gray-400 rounded-full px-3 py-2"
          />
          {/* <AiOutlineClose
            size={"1.4em"}
            className="absolute right-5 top-[1.3rem]  cursor-pointer text-gray-600"
          /> */}
        </div>

        <div className="bg-gray-100 px-2 py-2 rounded-full">
          <MdOutlineMic size={20} className="cursor-pointer" />
        </div>
      </div>
      <Suggestions />
    </div>
  );
};

export default FullPageSearch;
