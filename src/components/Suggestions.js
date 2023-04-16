import React from "react";
import { CiSearch } from "react-icons/ci";

const Suggestions = () => {
  let suggsLst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14];
  let suggstData = suggsLst.map((ele, indx) => {
    return (
      <div
        className="flex items-center py-1 px-4  font-PoppinsFont font-normal hover:bg-[#00000021] cursor-default"
        key={indx}
      >
        <CiSearch size={"1.5em"} className="cursor-pointer text-gray-900" />
        <span className="ml-7 text-gray-800 w-fit  ss:leading-[19px] text-[.9rem] ss:text-[1rem]">
          Search on YouTube Search on YouTube {indx}
        </span>
      </div>
    );
  });
  return (
    // <div className="w-full py-1 max-h-screen overflow-auto">{suggstData}</div>
    <>{suggstData}</>
  );
};

export default Suggestions;
