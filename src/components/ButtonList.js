import React from "react";

const ButtonList = () => {
  let BtnListMenu = [
    { isActive: false, ButtonName: "All" },
    { isActive: false, ButtonName: "Laptops" },
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
          className="bg-gray-100 text-black font-PoppinsFont font-normal text-[14px] py-[0.3rem] px-[.7rem] rounded-lg cursor-pointer"
        >
          {ele.ButtonName}
        </li>
      </ul>
    );
  });
  return (
    <div className="bg-white border flex gap-[12px] py-4 px-6 sticky top-[3.5rem]">{ButtonListContainer}</div>
  );
};

export default ButtonList;
