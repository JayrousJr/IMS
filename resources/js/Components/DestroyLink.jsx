import { Link } from "@inertiajs/react";
import React from "react";
import { HiTrash } from "react-icons/hi2";

const DestroyLink = ({ routeName, id }) => {
    return (
        <Link
            className="text-red-500 cursor-pointer"
            href={route(routeName, id)}
        >
            <HiTrash className="text-[20px]" />
        </Link>
    );
};

export default DestroyLink;
