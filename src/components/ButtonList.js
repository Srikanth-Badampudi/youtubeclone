import React from "react";

const ButtonList = () => {
  let BtnListMenu = [
    { isActive: false, ButtonName: "All" },
    { isActive: false, ButtonName: "Mixes" },
    { isActive: false, ButtonName: "CSS" },
    { isActive: false, ButtonName: "Gaming" },
    { isActive: false, ButtonName: "Music" },
    { isActive: false, ButtonName: "Tamil Cinema" },
    { isActive: false, ButtonName: "Scales" },
    { isActive: false, ButtonName: "Computers" },
    { isActive: false, ButtonName: "Gadgets" },
    { isActive: false, ButtonName: "Pop Music" },
  ];

  let ButtonListContainer = BtnListMenu.map((ele, indx) => {
    return (
      <ul>
        <li
          key={indx}
          className="bg-black text-white font-PoppinsFont text-[.8rem] py-[0.4rem] px-[.6rem] rounded-md cursor-pointer"
        >
          {ele.ButtonName}
        </li>
      </ul>
    );
  });
  return (
    <div className="bg-white flex gap-4 py-4 px-4 sticky top-[3.5rem]">{ButtonListContainer}</div>
  );
};

export default ButtonList;
