import { hero } from "@/constants";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { MonetizationOn } from "@mui/icons-material";
import GetStartedButton from "@/Components/GetStartedButton";
export const Hero = () => {
    return (
        <section className="flex justify-between items-center flex-col md:flex-row gap-3 section">
            <motion.div className="max-w-[500px] ">
                <motion.div
                    variants={fadeIn("up", "spring", 2, 2)}
                    className="bg-intro-gradient py-[16px] px-4 rounded-lg mb-2"
                >
                    <p className="flex justify-start items-center gap">
                        <span className="text-xl"> Welcome to Legolas</span>{" "}
                        &#160;&#160;
                        <MonetizationOn />
                    </p>
                </motion.div>
                <h1 className="my-2 flex-1 font-bold font-poppins ss:leading-[85px] leading-[65px] ss:text-[70px] text-[52px]">
                    Inventory{" "}
                    <span className="text-gradient font-poppins sm:block hidden">
                        Management
                    </span>
                    System
                    <span className="text-gradient font-poppins sm:hidden block">
                        IMS
                    </span>
                </h1>
                <p className="font-poppins mb-2">
                    The comprehensive Inventory System that allows you to manage
                    your daily cash flow in your inventory, gives all what you
                    need to make your money in book.
                </p>
                <GetStartedButton id="" />
            </motion.div>
            <motion.div className="relative">
                <img
                    src={hero}
                    alt="Hero Image"
                    className="md:w-[100%] h-[70%] w-[100%] md:h-[100%] object-cover relative z-[5]"
                />
                <motion.div className="absolute z-[0] w-[40%] h-[20%] pink__gradient top-0"></motion.div>
                <motion.div className="absolute z-[1] w-[50%] h-[30%] white__gradient bottom-20 rounded-full"></motion.div>
                <motion.div className="absolute z-[0] w-[50%] h-[30%] purple__gradient right-20 bottom-20"></motion.div>
            </motion.div>
        </section>
    );
};
