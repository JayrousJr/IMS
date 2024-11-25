import { Link, usePage } from "@inertiajs/react";
import * as IoIoIcon from "react-icons/io";
import { useEffect, useState } from "react";
import { sideNav } from "@/constants";
import DynamicIcons from "./DynamicIcons";
const Navigation = () => {
    const page = usePage();
    const userdata = page.props.auth?.globaluserdata.data;

    const [navOpen, setNavOpen] = useState(() => {
        const storedNavState = localStorage.getItem("navOpenState");
        return storedNavState || true;
    });

    const [active, setActive] = useState(() => {
        const storeActiveLinkState = localStorage.getItem("activeLink");
        return storeActiveLinkState || "Dashboard";
    });

    useEffect(() => {
        localStorage.setItem("navOpenState", navOpen);
    }, [navOpen]);

    useEffect(() => {
        localStorage.setItem("activeLink", active);
    }, [active]);
    function setActiveFunction(name) {
        setActive(name);
    }
    function handleNAvOpen() {
        setNavOpen(!navOpen);
    }
    return (
        <aside
            className={`bg-dark-100  ${
                navOpen
                    ? "w-[280px] max-sm:w-[200px]"
                    : "w-[80px] max-sm:w-[60px]"
            } h-screen duration-[400ms]  flex flex-col gap-2 justify-start border-r border-dark-200 top-0 sticky`}
        >
            <div
                onClick={handleNAvOpen}
                className="absolute  bg-secondary text-write hover:opacity-50 -right-0 top-6 text-[20px] cursor-pointer flex justify-center items-center duration-300 z-[99]"
            >
                <IoIoIcon.IoIosArrowBack
                    className={`${!navOpen && "rotate-180 duration-[400ms] "}`}
                />
            </div>
            <div className="flex justify-center items-center  bg-dark-200 min-h-[68px]">
                <span
                    className={`text-[20px] duration-500 text-write font-black max-sm:hidden ${
                        !navOpen && "hidden"
                    }`}
                >
                    {userdata.shop.name}
                </span>
            </div>
            <div className="overflow-y-auto overflow-x-hidden">
                <nav className="max-w-[250px] my-2">
                    <ul className="flex flex-col gap-y-0">
                        {sideNav.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className={`border-opacity-90 duration-300 px-8 hover:bg-tertiary/30 py-[10px] mx-2 rounded-2xl 
                                 ${
                                     active === item.title
                                         ? "text-primary bg-tertiary/30"
                                         : "text-white"
                                 }`}
                                >
                                    <Link
                                        href={item.path}
                                        className={`flex justify-start items-center gap-x-4 ${
                                            !navOpen &&
                                            "flex justify-center py-1"
                                        }`}
                                        onClick={() =>
                                            setActiveFunction(item.title)
                                        }
                                    >
                                        <DynamicIcons
                                            IconName={item.icon}
                                            className="text-[18px]"
                                        />
                                        <span
                                            className={`origin-left hover:opacity-55 ${
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
        </aside>
    );
};

export default Navigation;
