import React from "react";
import { HiArrowDown } from "react-icons/hi2";
import { IoIosArrowDown, IoMdSearch } from "react-icons/io";

const TopNav = ({ name }) => {
    return (
        <div className="flex justify-between gap-4 items-center px-8 w-full">
            <div className="flex justify-center items-center">
                <span className="font-bold text-2xl max-sm:text-xl">{name}</span>
                <span className="text-[14px] max-sm:hidden">/ {shopName}</span>
                </div>

            <div className="flex justify-between gap-10">
                <div className="relative max-sm:hidden">
                    <input
                        type="text"
                        className="bg-tertiary border border-secondary border-opacity-15 pl-10 rounded-2xl "
                        placeholder="Search"
                    />
                    <span className="flex absolute items-center top-3 left-3">
                        <IoMdSearch className="text-[18px]" />
                    </span>
                </div>
                <div className="flex justify-center items-center gap-x-2">
                    <img
                        src="/assets/images/profile.jpg"
                        alt=""
                        className="w-[40px] max-sm:w-[30px] rounded-full"
                    />
                    <div className="max-lg:hidden">
                        <h1 className="text-xl font-bold">Joshua Jayrous</h1>
                        <p className="text-sm flex items-center gap-1">
                            <span className="">System Administrator</span>
                            {/* <span className="">
                                <IoIosArrowDown />
                            </span> */}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNav;
