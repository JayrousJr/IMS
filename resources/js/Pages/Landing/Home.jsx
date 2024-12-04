import Landinglayout from "@/Layouts/Landinglayout";
import { Head } from "@inertiajs/react";
import { Hero } from "@/Sections/Hero";
import Stats from "@/Sections/Stats";
import Starting from "@/Sections/Starting";
import Basic from "@/Sections/Basic";
import BigHeading from "@/Sections/BigHeading";
import Launch from "@/Sections/Launch";
import { ManageProduct } from "@/Sections/ManageProduct";
import NoLoss from "@/Sections/NoLoss";
import ManageOrder from "@/Sections/ManageOrder";
import Insights from "@/Sections/Insights";
import CTA from "@/Sections/CTA";
const Home = ({ usersCount }) => {
    return (
        <Landinglayout>
            <Head title="Home" />
            <main className="text-gray-300">
                <Hero />
                <Stats usersCount={usersCount} />
                <Starting />
                <Basic />
                <BigHeading />
                <Launch />
                <ManageProduct />
                <ManageOrder />
                <NoLoss />
                <Insights />
                <CTA />
            </main>
        </Landinglayout>
    );
};

export default Home;
