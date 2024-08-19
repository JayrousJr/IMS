import TopNav from "@/component/system/TopNav";
import Layouts from "@/Layouts/Layouts";
import { Head } from "@inertiajs/react";
import React from "react";

const Dashboard = () => {
    return (
        <>
            <Layouts>
                <Head title="Dashboard" />
                <TopNav name={"Dashboard"} />
                <div className="mt-3 border-t border-secondary opacity-20"/>
                <div className="bg-tertiary h-full px-8 py-2 mt-2 rounded-xl">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti enim, possimus deserunt laudantium pariatur labore
                    iste eum dolore sed fuga veritatis omnis totam placeat
                    tenetur a voluptas sequi! Dicta, quam.
                </div>
            </Layouts>
        </>
    );
};

export default Dashboard;
