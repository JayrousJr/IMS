import Navigation from "@/component/system/Navigation";
import TopNav from "@/component/system/TopNav";
import Notification from "@/Components/Notification";
const Layouts = ({ children, name }) => {
    return (
        <>
            <div className="relative flex">
                <Navigation />
                <div className="w-full  relative">
                    <TopNav />
                    <Notification />
                    <main className="relative w-full flex  flex-col px-6 py-6 bg-dark-100">
                        <div className="">{children}</div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default Layouts;
