import Waver from "@/Animations/Waver";
import GetStartedButton from "@/Components/GetStartedButton";
import { hero } from "@/constants";
import Landinglayout from "@/Layouts/Landinglayout";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";

const GetStarted = () => {
    return (
        <Landinglayout>
            <Head title="Get Started" />
            <main className="text-gray-300">
                <section className="section">
                    <div className="flex items-center flex-row-reverse max-md:flex-col gap-4">
                        <div className="max-w-[500px]">
                            <div className="flex flex-row-reverse items-center justify-between gap-4">
                                <h1 className="my-2 flex-1 font-bold font-poppins ss:leading-[85px] leading-[65px] ss:text-[70px] text-[52px]">
                                    Start{" "}
                                    <span className="text-primary">IMS</span>{" "}
                                    now.
                                </h1>
                                <div className="max-md:hidden block">
                                    <Waver />
                                </div>
                            </div>
                            <p className="mb-2">
                                And start making better financial progress of
                                your Business day by day.
                            </p>
                        </div>
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
                    </div>
                </section>
                <section className="section">
                    <div className="">
                        <h1 className="heading">
                            Get Started With{" "}
                            <span className="text-primary">IMS</span>, You'll
                            never regret your choice!
                        </h1>
                    </div>
                    <div className="flex max-md:flex-col gap-4">
                        <div className="">
                            IMS provides you with al the tools you need to
                            manage your inventory by helping you store the
                            records in our cloud service making it very
                            accessible anywhere you are.
                        </div>
                        <div className="">
                            All tools at hand when you have subscribe to IMS,
                            you just have to worry about your business starting
                            and we will take care of the business management.
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="flex max-md:flex-col justify-between gap-6">
                        <div className="flex flex-col gap-3 max-w-[50%] max-md:max-w-full ">
                            <h1 className="heading">
                                What do I need To start?
                            </h1>
                            <p className="">
                                To start using IMS you have to register your
                                inventory (shop) in just a second. <br />
                                Make sure you have all the necessary details
                                required to register a shop.
                            </p>

                            <p className="">
                                No complexity here, you just have to have all in
                                hand and we will handle all and give you a brand
                                new shop.
                            </p>
                            <p className="">
                                Remember once you have registered a shop, you do
                                not have to register another shop, if you have
                                multiple shops, our system enables you to
                                register all the other shops within and let you
                                manage all of them just in a click of switch
                            </p>
                        </div>
                        <div className="">
                            <h1 className="heading">
                                What details to have in hand?
                            </h1>
                            <p className="">
                                Before you register a shop you maust have the
                                following details.
                            </p>
                            <ul className="list-decimal">
                                <li className="">
                                    <span className="font-semibold text-primary">
                                        Shop Owner Details
                                    </span>{" "}
                                    Name, email and phone number of the shop
                                    owner or manager
                                </li>
                                <li>
                                    <span className="font-semibold text-primary">
                                        Shop details
                                    </span>
                                    <ul className="list-decimal pl-4">
                                        <li>
                                            <span className="font-semibold text-primary">
                                                Shop Name
                                            </span>{" "}
                                            Name of the specific shop.
                                        </li>
                                        <li>
                                            <span className="font-semibold text-primary">
                                                Shop Location
                                            </span>{" "}
                                            Location of the specific shop.
                                        </li>
                                        <li>
                                            <span className="font-semibold text-primary">
                                                Shop Domain
                                            </span>{" "}
                                            This is an important detail, the
                                            domain is the URL that you will be
                                            using to access your system, domain
                                            shall be the name like{" "}
                                            <span className=" font-thin text-primary">
                                                shopper
                                            </span>{" "}
                                            and you will access the IMS using{" "}
                                            <span className="text-primary font-thin">
                                                {" "}
                                                www.shopper.ims.com
                                            </span>
                                            <br />
                                            Choose a domain name that is
                                            familiar to you and of your liking,
                                            make it short, unique and easy to
                                            remember.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-semibold text-primary">
                                        Password
                                    </span>{" "}
                                    The password you will use to access your IMS
                                    system
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h1 className="heading">
                            Are you ready now? Click here to Register!
                        </h1>
                        <GetStartedButton
                            link={"register"}
                            label="Register a shop Now"
                        />
                    </div>
                </section>
            </main>
        </Landinglayout>
    );
};

export default GetStarted;
