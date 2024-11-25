import { usePage } from "@inertiajs/react";
import { IoMdSearch } from "react-icons/io";

const TopNav = () => {
    const page = usePage();
    const userdata = page.props.auth?.globaluserdata.data;

    return (
        <header className="bg-dark-200 text-white px-10 py-3 w-full flex justify-between gap-10 top-0 sticky z-[99]">
            <div className="relative max-sm:hidden">
                <input
                    type="text"
                    className="bg-dark-300 border border-primary border-opacity-15 pl-10 rounded-2xl "
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
                    <h1 className="text-xl font-bold">{userdata?.name}</h1>
                    <p className="text-sm flex items-center gap-1">
                        <span className="">{userdata?.role.name}</span>
                        {/* <span className="">
                                <IoIosArrowDown />
                            </span> */}
                    </p>
                </div>
            </div>
        </header>
    );
};

export default TopNav;
