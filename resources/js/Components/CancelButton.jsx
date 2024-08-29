import { Link } from "@inertiajs/react";
import React from "react";

const CancelButton = ({ toRoute }) => {
    return (
        <Link
            href={route(`${toRoute}`)}
            className="inline-flex items-center px-4 py-2 bg-orange-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:opacity-80  dark:active:bg-gray-300 focus:outline-none transition ease-in-out duration-150"
        >
            Cancel
        </Link>
    );
};

export default CancelButton;
