import { Link } from "@inertiajs/react";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const BreadCrumb = ({ children, routeTo, page }) => {
    const back = () => {
        window.history.back();
    };
    return (
        <div className="flex items-center gap-2 text-text-gray">
            <Link onClick={back} className="hover:text-write text-primary">
                {children}
            </Link>
            <IoIosArrowForward className="w-[12px]" />
            <span>{page}</span>
        </div>
    );
};

export default BreadCrumb;
