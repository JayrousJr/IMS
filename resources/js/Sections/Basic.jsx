import GetStartedButton from "@/Components/GetStartedButton";
import styles from "@/utils/styles";
import React from "react";

const Basic = () => {
    const data = [
        { id: 1, title: "Stock Receipt" },
        { id: 2, title: "Sales Order" },
        { id: 3, title: "Stock Transfer" },
        { id: 4, title: "Document Printing" },
    ];
    return (
        <section className="section flex flex-col items-center">
            <h1 className="sec-heading">
                A set of inventory management tools{" "}
            </h1>
            <p className="sec-paragraph">
                Stock receipts, sales orders, stock transfers, write-offs, and
                document printing - everything a small business needs to manage
                stock and support sales.
            </p>
            <div className="grid grid-cols-4 max-md:grid-cols-2 max-ss:grid-cols-1 gap-4">
                {data.map((item) => (
                    <div
                        className="border relative group overflow-hidden border-primary p-4 flex flex-col justify-center items-center gap-2 rounded-xl w-[200px] "
                        key={item.id}
                    >
                        <div class="absolute inset-0 bg-primary/50 rounded-xl -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                        <span className="relative z-10 font-poppins ">
                            {item.title}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Basic;
