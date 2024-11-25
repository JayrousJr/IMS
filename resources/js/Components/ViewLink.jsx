import { Link } from "@inertiajs/react";
import React from "react";
import { HiEye } from "react-icons/hi2";

const ViewLink = ({ routeName, id }) => {
    return (
        <Link href={route(routeName, id)} className="text-secondary">
            <HiEye className="text-[20px]" />
        </Link>
    );
};

export default ViewLink;
