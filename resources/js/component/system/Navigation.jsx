import { Link } from "@inertiajs/react";
import * as IoIoIcon from "react-icons/io";
import { useState } from "react";
import { sideNav } from "@/constants";
import DynamicIcons from "./DynamicIcons";
const Navigation = () => {
    const [navOpen, setNavOpen] = useState(true);
    const [active, setActive] = useState("Dashboard");
    function setActiveFunction(name) {
        setActive(name); // Update active state with the name of the clicked item
    }
    return (
        <div
            className={` ${
                navOpen
                    ? "w-[200px] max-sm:w-[200px]"
                    : "w-[80px] max-sm:w-[60px]"
            } h-screen duration-[400ms] bg-light pt-2 pl-4 relative border-r flex flex-col gap-2 justify-start`}
        >
            <div
                onClick={() => setNavOpen((prev) => !prev)}
                className="absolute rounded-full border border-slate-500 bg-secondary text-white -right-3 top-10 w-7 h-7 max-sm:w-5 max-sm:h-5 cursor-pointer flex justify-center items-center"
            >
                <IoIoIcon.IoIosArrowBack
                    className={`${!navOpen && "rotate-180 duration-[400ms] "}`}
                />
            </div>
            <div>
                <h2 className="text-secondary font-black text-[18px]">IMS</h2>
            </div>

            <div className="">
                <nav className="max-w-[250px]">
                    <ul className="flex flex-col gap-y-3 mr-[10px]">
                        {sideNav.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className={`text-black border-opacity-10 hover:text-secondary hover:border-b border-secondary duration-300 px-[14px] py-1 ${
                                        !navOpen && "max-sm:px-[0px]"
                                    }  ${
                                        active === item.title
                                            ? "text-secondary"
                                            : ""
                                    }`}
                                >
                                    <Link
                                        href={item.path}
                                        className="flex justify-start items-center gap-x-2"
                                        onClick={() =>
                                            setActiveFunction(item.title)
                                        }
                                    >
                                        <DynamicIcons
                                            IconName={item.icon}
                                            className="text-[15px]" // Corrected className prop
                                        />
                                        <span
                                            className={`text-[14px] origin-left ${
                                                !navOpen &&
                                                "hidden origin-left duration-[300ms] mx-auto"
                                            }`}
                                        >
                                            {item.title}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navigation;
