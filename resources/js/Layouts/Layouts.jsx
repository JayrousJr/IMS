import Navigation from "@/component/system/Navigation";
import TopNav from "@/component/system/TopNav";
const Layouts = ({ children, name }) => {
    return (
        <>
            <div className="flex w-full overflow-x-hidden relative">
                <Navigation />
                <main className="relative flex flex-col h-screen px-6 py-6 ">
                    <div className="">{children}</div>
                </main>
            </div>
        </>
    );
};

export default Layouts;
