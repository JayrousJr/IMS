import { Link } from "@inertiajs/react";
import React from "react";
import { logo } from "@/constants";
import AccountMenu from "@/Sections/Menu";
const Navigation = () => {
    return (
        <nav className="text-white flex justify-between items-center my-4 sticky">
            <div className="">
                <Link className="navbar-brand" href={route("home")}>
                    <img src={logo} alt="Company Logo" className="w-[50px]" />
                </Link>
            </div>

            <div className="">
                <AccountMenu />
            </div>
        </nav>
    );
};

export default Navigation;
