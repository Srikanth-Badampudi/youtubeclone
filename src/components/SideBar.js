import { useState } from "react";
import { AiOutlineMenu, AiFillHome } from "react-icons/ai";
import {
  BsFilePlay,
  BsCollectionPlay,
  BsFire,
  BsMusicNote,
  BsTrophy,
} from "react-icons/bs";
import { BiLike, BiMoviePlay } from "react-icons/bi";
import { RiVideoLine, RiHistoryLine, RiGamepadLine } from "react-icons/ri";
import {
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
  MdOutlineShoppingBag,
  MdDryCleaning,
  MdOutlineFeedback,
} from "react-icons/md";
import { IoNewspaperOutline, IoSettingsOutline } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { CiStreamOn } from "react-icons/ci";
import { GiBlackBook } from "react-icons/gi";
import { TbReport } from "react-icons/tb";
import Logo from "../assets/Images/Logo.png";

const SideBar = () => {
  let [isAsideHover, setIsAsideHover] = useState(false);
  console.log("isAside", isAsideHover);
  return (
    <aside
      className={`flex flex-col px-3 py-1 w-[270px] h-[calc(100vh-3.5rem)] sticky top-[3.5rem] overflow-hidden scrollbar hover:overflow-y-scroll
        `}
    >
      <div
        onMouseEnter={() => setIsAsideHover(!isAsideHover)}
        onMouseLeave={() => setIsAsideHover(!isAsideHover)}
      >
        <div className="flex  ss:gap-5 items-center px-3 hidden">
          <AiOutlineMenu size={"1.3em"} className="cursor-pointer" />
          <img className="h-[3.2rem]  cursor-pointer" src={Logo} alt="Logo" />
        </div>

        <div>
          <ul className="border-0 border-b-[1px] border-gray-300 py-3">
            <li className="flex gap-5 items-center px-3 py-[9px] rounded-xl bg-gray-100 cursor-pointer">
              <AiFillHome size={22} />
              <span className="font-PoppinsFont font-medium text-[14px]">
                Home
              </span>
            </li>
            <li className="flex gap-5 items-center  px-3 py-[9px] rounded-xl hover:bg-green-50 cursor-pointer">
              <BsFilePlay size={22} />
              <span className="font-PoppinsFont font-normal text-[14px]">
                Shorts
              </span>
            </li>
            <li className="flex gap-5 items-center px-3 py-[9px] rounded-xl hover:bg-green-50 cursor-pointer">
              <BsCollectionPlay size={22} />
              <span className="font-PoppinsFont  font-normal text-[14px]">
                Subscriptions
              </span>
            </li>
          </ul>
        </div>

        <div>
          <ul className="border-0 border-b-[1px] border-gray-300 py-3">
            <li className="flex gap-5 items-center px-3 py-[9px] rounded-xl hover:bg-green-50 cursor-pointer">
              <MdOutlineVideoLibrary size={22} />
              <span className="font-PoppinsFont font-normal text-[14px]">
                Library
              </span>
            </li>
            <li className="flex gap-5 items-center  px-3 py-[9px] rounded-xl hover:bg-green-50 cursor-pointer">
              <RiHistoryLine size={22} />
              <span className="font-PoppinsFont font-normal text-[14px]">
                History
              </span>
            </li>
            <li className="flex gap-5 items-center px-3 py-[9px] rounded-xl hover:bg-green-50 cursor-pointer">
              <RiVideoLine size={22} />
              <span className="font-PoppinsFont  font-normal text-[14px]">
                Your videos
              </span>
            </li>
            <li className="flex gap-5 items-center px-3 py-[9px] rounded-xl hover:bg-green-50 cursor-pointer">
              <MdOutlineWatchLater size={22} />
              <span className="font-PoppinsFont  font-normal text-[14px]">
                Watch later
              </span>
            </li>
            <li className="flex gap-5 items-center px-3 py-[9px] rounded-xl hover:bg-green-50 cursor-pointer">
              <BiLike size={22} />
              <span className="font-PoppinsFont  font-normal text-[14px]">
                Liked videos
              </span>
            </li>
          </ul>
        </div>

        <div>
          <ul className="border-0 border-b-[1px] border-gray-300 py-3">
            <li className="flex gap-5 items-center px-3 py-[9px] rounded-xl hover:bg-green-50 cursor-pointer">
              <BsFire size={22} />
              <span className="font-PoppinsFont font-normal text-[14px]">
                Trending
              </span>
            </li>
            <li className="flex gap-5 items-center  px-3 py-[9px] rounded-xl hover:bg-green-50 cursor-pointer">
              <MdOutlineShoppingBag size={22} />
              <span className="font-PoppinsFont font-normal text-[14px]">
                Shopping
              </span>
            </li>
            <li className="flex gap-5 items-center px-3 py-[9px] rounded-xl hover:bg-green-50 cursor-pointer">
              <BsMusicNote size={22} />
              <span className="font-PoppinsFont  font-normal text-[14px]">
                Music
              </span>
            </li>
            <li className="flex gap-5 items-center px-3 py-[9px] rounded-xl hover:bg-green-50 cursor-pointer">
              <BiMoviePlay size={22} />
              <span className="font-PoppinsFont  font-normal text-[14px]">
                Movies
              </span>
            </li>
            <li className="flex gap-5 items-center px-3 py-[9px] rounded-xl hover:bg-green-50 cursor-pointer">
              <CiStreamOn size={22} />
              <span className="font-PoppinsFont  font-normal text-[14px]">
                Live
              </span>
            </li>
            <li className="flex gap-5 items-center px-3 py-[9px] rounded-xl hover:bg-green-50 cursor-pointer">
              <RiGamepadLine size={22} />
              <span className="font-PoppinsFont font-normal text-[14px]">
                Gaming
              </span>
            </li>
            <li className="flex gap-5 items-center px-3 py-[9px] rounded-xl hover:bg-green-50 cursor-pointer">
              <IoNewspaperOutline size={22} />
              <span className="font-PoppinsFont  font-normal text-[14px]">
                News
              </span>
            </li>
            <li className="flex gap-5 items-center px-3 py-[9px] rounded-xl hover:bg-green-50 cursor-pointer">
              <BsTrophy size={22} />
              <span className="font-PoppinsFont  font-normal text-[14px]">
                Sports
              </span>
            </li>
            <li className="flex gap-5 items-center px-3 py-[9px] rounded-xl hover:bg-green-50 cursor-pointer">
              <GiBlackBook size={22} />
              <span className="font-PoppinsFont font-normal text-[14px]">
                Learning
              </span>
            </li>
            <li className="flex gap-5 items-center px-3 py-[9px] rounded-xl hover:bg-green-50 cursor-pointer">
              <MdDryCleaning size={22} />
              <span className="font-PoppinsFont  font-normal text-[14px]">
                Fashion & Beauty
              </span>
            </li>
          </ul>
        </div>

        <div>
          <ul className="border-0 border-b-[1px] border-gray-300 py-3">
            <li className="flex gap-5 items-center px-3 py-[9px] rounded-xl hover:bg-green-50 cursor-pointer">
              <IoSettingsOutline size={22} />
              <span className="font-PoppinsFont font-normal text-[14px]">
                Settings
              </span>
            </li>
            <li className="flex gap-5 items-center  px-3 py-[9px] rounded-xl hover:bg-green-50 cursor-pointer">
              <TbReport size={22} />
              <span className="font-PoppinsFont font-normal text-[14px]">
                Report history
              </span>
            </li>
            <li className="flex gap-5 items-center px-3 py-[9px] rounded-xl hover:bg-green-50 cursor-pointer">
              <IoMdHelpCircleOutline size={22} />
              <span className="font-PoppinsFont  font-normal text-[14px]">
                Help
              </span>
            </li>
            <li className="flex gap-5 items-center px-3 py-[9px] rounded-xl hover:bg-green-50 cursor-pointer">
              <MdOutlineFeedback size={22} />
              <span className="font-PoppinsFont font-normal text-[14px]">
                Send feedback
              </span>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
