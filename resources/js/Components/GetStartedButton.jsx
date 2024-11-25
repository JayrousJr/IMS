import React from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";
const GetStartedButton = ({ label, id, styles, link }) => {
    return (
        <motion.button
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
            className={`py-3 px-6 bg-purple-gradient font-poppins font-medium text-[18px] text-outline-none rounded-xl ${styles}`}
            id={id}
        >
            <Link href={link ? route(link) : route("start")}>
                {label ? label : "Get Started"}
            </Link>
        </motion.button>
    );
};

export default GetStartedButton;
