import Waver from "@/Animations/Waver";
import Landinglayout from "@/Layouts/Landinglayout";
import { Head, Link, usePage } from "@inertiajs/react";
import React from "react";

const Registered = () => {
    const page = usePage();
    const logs = page.props.flash.logs;

    if(logs == null){
        window.location.href = "/";
    }
    const  url = `http://${logs.domain}.localhost:8000`
    return (
        <Landinglayout>
            <Head title="Registered Account" />
            <main className="">
                <section className="section text-gray-300">
                    <div className="">
                        <h1 className="heading">
                            You have successiful created an account!
                            <br /> Ready to work with{" "}
                            <span className="text-primary">IMS</span>?
                        </h1>
                    </div>
                    <div className="flex max-md:flex-col justify-between gap-4">
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <h1 className="font-bold text-[25px]">
                                    Welcome Dear &#160;
                                    <span className="text-primary">
                                        {logs.user.name}
                                    </span>
                                </h1>
                                <Waver />
                            </div>
                            <div className="">
                                <p className="paragraph">
                                    Your shop Name:{" "}
                                    <span className="text-primary">
                                        {logs.shop.shop_name}
                                    </span>
                                </p>
                                <p className="paragraph">
                                    Your shop Address:{" "}
                                    <span className="text-primary">
                                        {logs.shop.shop_address}
                                    </span>
                                </p>
                                <p className="paragraph">
                                    Your shop Domain{" "}
                                    <a
                                        href={url}
                                        target="_blank"
                                    >
                                        <span className="text-primary">{url}</span>
                                    </a>
                                </p>
                                <p className="paragraph">The above link is the special link to enter into your account, please do not forget that link, and if happens forgotten, we have sent the same link to your email account that you have used to regiter. Do not forget the link.</p>
                            </div>
                        </div>
                        <div className="max-w-[500px]">
                            <p className="paragraph">
                                Welcome Our new Customer, while seing this page
                                it means you have successiful registered to your
                                IMS system. <br /> To start using the system you
                                have to learn some new things to get started.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </Landinglayout>
    );
};

export default Registered;
