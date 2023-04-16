import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { GrApps } from "react-icons/gr";
import { TbVideo } from "react-icons/tb";
import { RiSearch2Fill } from "react-icons/ri";
import Logo from "../assets/Images/Logo.png";
import ProfileImg from "../assets/Images/ProfileImg.jpg";
import FullPageSearch from "./FullPageSearch";
import Suggestions from "./Suggestions";

const Head = () => {
  const [focused, setFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeHandler = (e) => setSearchQuery(e.target.value);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  console.log(searchQuery);
  return (
    <nav className="bg-white grid sm:gap-0 gap-2 grid-flow-col items-center justify-between px-4 ss:px-7 py-[2px] h-[3.5rem] sticky top-0">
      <div className="flex  ss:gap-5 items-center h-[3rem]">
        <AiOutlineMenu size={"1.3em"} className="cursor-pointer" />
        <img className="h-[53px]  cursor-pointer" src={Logo} alt="Logo" />
      </div>

      <div className="flex h-8 md:h-10 items-center sm:col-span-2 relative ">
        <div
          className={` pl-4 py-[0.6rem] flex items-center h-full rounded-tl-full rounded-bl-full border border-r-0 focus:border border-blue-500 hidden sm:block ${
            focused ? "visible" : "invisible"
          }`}
        >
          <CiSearch size={"1.4em"} className="text-gray-600" />
        </div>

        <div className="h-full relative w-full">
          <input
            type="text"
            className={`w-full h-full border  border-gray-300 font-PoppinsFont font-normal text-[.9rem] md:text-[1rem] px-4 ${
              focused ? "focus:border-l-0" : "rounded-l-full"
            } py-1 outline-none placeholder:text-gray-400 focus:border flex-1 focus:border-blue-500 align-middle`}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChangeHandler}
            value={searchQuery}
            placeholder="What do You want to watch?"
          />
          {searchQuery && (
            <AiOutlineClose
              size={"1.4em"}
              className="absolute right-2 top-[0.6rem]  cursor-pointer text-gray-600"
            />
          )}
        </div>

        {focused && searchQuery && (
          <div className="absolute left-0 top-11 py-4 w-[88%] rounded-2xl shadow-shadowBasic">
            <Suggestions />
          </div>
        )}

        <button className="bg-gray-100 h-full border border-gray-300 border-l-0 px-5 py-1 rounded-tr-full rounded-br-full shadow-inner">
          <AiOutlineSearch size={"1.5em"} className="text-gray-700" />
        </button>
      </div>

      <div className="flex gap-4 ss:gap-6 justify-center items-center">
        <TbVideo size={"1.3em"} className="text-red-500 cursor-pointer" />
        <GrApps size={"1em"} className="text-gray-700 cursor-pointer" />
        <RiSearch2Fill
          size={"1.3em"}
          className="text-gray-600 cursor-pointer"
        />
        <img
          src={ProfileImg}
          alt="Profile-Img"
          className=" h-[1.6rem] md:h-8 cursor-pointer rounded-full border-purple-800 shadow-md"
        />
      </div>

      {/*If ScreenSize is less than 425Px - For Mobiles */}
      {/* <FullPageSearch/> */}
    </nav>
  );
};

export default Head;
