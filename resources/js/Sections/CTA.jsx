import GetStartedButton from "@/Components/GetStartedButton";
import React from "react";

const CTA = () => {
    return (
        <section className="">
            <div className="flex justify-between items-center max-md:flex-col max-md:text-center bg-grey-gradient px-4 py-6 rounded-2xl">
                <div className="">
                    <h1 className="font-bold font-poppins text-[30px] ">
                        Get into IMS now!
                    </h1>
                    <p className="text-[18px]">
                        Give it a shot, try IMS now and see how you make your
                        business grow in just a minute
                    </p>
                </div>
                <div className="my-6">
                    <GetStartedButton label="Get into IMS" />
                </div>
            </div>
        </section>
    );
};

export default CTA;
