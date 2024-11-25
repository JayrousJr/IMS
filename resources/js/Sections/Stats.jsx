import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import styles from "@/utils/styles";
const Stats = ({ usersCount }) => {
    const data = [
        { id: 1, title: "Subscribers", figure: usersCount },
        { id: 2, title: "Services Offered", figure: 10 },
        { id: 3, title: "Companies Served", figure: 40 },
        { id: 4, title: "Companies Served", figure: 100 },
    ];
    return (
        <section className="section flex flex-col items-center">
            <div className="text-center my-4">
                <p className="sec-heading">
                    Over <span className=" text-primary">10,000</span> Business
                    Uses IMS to manage <br />
                    and track their Inventory.
                </p>
            </div>
            <div className="grid grid-cols-4 max-md:grid-cols-2 max-ss:grid-cols-1 gap-4">
                {data.map((item) => (
                    <Tilt key={item.id}>
                        <div className="bg-grey-gradient px-8 py-4 flex flex-col justify-center items-center gap-2 rounded-xl w-[250px] min-h-[150px]">
                            <h1 className="text-[48px] font-poppins font-bold text-center">
                                {item.figure} +
                            </h1>
                            <p className="font-poppins text-[18px] text-center">
                                {item.title}
                            </p>
                        </div>
                    </Tilt>
                ))}
            </div>
        </section>
    );
};

export default Stats;
