import { logo, socialMedia } from "@/constants";
import { Tilt } from "react-tilt";

const Footer = () => {
    const data = [
        {
            id: 1,
            title: "Quick Links 1",
            links: [
                {
                    title: "Link 1",
                    url: "#",
                },
                {
                    title: "Link 2",
                    url: "#",
                },
                {
                    title: "Link 3",
                    url: "#",
                },
                {
                    title: "Link 4",
                    url: "#",
                },
            ],
        },
        {
            id: 2,
            title: "Quick Links 2",
            links: [
                {
                    title: "Link 1",
                    url: "#",
                },
                {
                    title: "Link 2",
                    url: "#",
                },
                {
                    title: "Link 3",
                    url: "#",
                },
                {
                    title: "Link 4",
                    url: "#",
                },
            ],
        },
        {
            id: 3,
            title: "Quick Links 3",
            links: [
                {
                    title: "Link 1",
                    url: "#",
                },
                {
                    title: "Link 2",
                    url: "#",
                },
                {
                    title: "Link 3",
                    url: "#",
                },
                {
                    title: "Link 4",
                    url: "#",
                },
            ],
        },
    ];
    const date = new Date().getFullYear();

    return (
        <footer className="text-gray-300 section my-10 ">
            <div className="flex justify-between max-md:flex-col py-6 gap-4">
                <div className="flex flex-col justify-start items-start">
                    <img
                        src={logo}
                        alt="Logo"
                        className=" h-[60px] object-contain"
                    />
                    <p className="max-w-[310px] max-md:max-w-full">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Natus, labore veritatis, nihil ut, sequi odit optio a
                        eum quis enim molestiae itaque eligendi? Non, ipsa? Sit
                        adipisci consequatur iusto dolorum.
                    </p>
                </div>
                {data.map((item) => (
                    <div className="" key={item.id}>
                        <h1 className="font-bold font-poppins">{item.title}</h1>
                        {item.links.map((subItem) => (
                            <div className="m-2" key={subItem.title}>
                                <a
                                    href={subItem.url}
                                    className="hover:text-primary text-gray-300"
                                >
                                    {subItem.title}
                                </a>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="border-t border-t-primary flex max-md:flex-col justify-between py-6">
                <p className="font-poppins flex items-center font-normal text-start text-[18px] leading-[27px] text-white">
                    &copy; 2022 - {date} Legolas Technologies,{" "}
                    <br className="md:block hidden" /> All Rights Reserved.
                </p>
                <div className="flex md:mt-0 mt-6 ">
                    {socialMedia.map((item, index) => (
                        <Tilt key={index}>
                            <a href={item.link} className="">
                                <img
                                    src={item.icon}
                                    alt={item.id}
                                    className={`
							${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"} 
						w-[25px] h-[25px] object-contain`}
                                />
                            </a>
                        </Tilt>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
