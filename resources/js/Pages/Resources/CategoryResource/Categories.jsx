import Layouts from "@/Layouts/Layouts";
import { Head, Link } from "@inertiajs/react";
import { HiEye, HiMiniPlus, HiPencil, HiTrash } from "react-icons/hi2";
// import { Dialog } from "@headlessui/react";
import Pagination from "@/Components/Pagination";
import { useState } from "react";
import ActionLink from "@/Components/ActionLink";
import BreadCrumb from "@/Components/BreadCrumb";
import PageDescription from "@/Components/PageDescription";
const Categories = ({ category }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [categoryId, setCategoryId] = useState(null);

    function open(id) {
        setIsOpen(true);
        setCategoryId(id);
    }

    function close() {
        setIsOpen(false);
        setCategoryId(null);
    }
    return (
        <Layouts name={"Categories"}>
            <Head title="Categories" />
            <div className="text-write flex flex-col gap-8 px-8 py-2 mt-1 rounded-xl w-full">
                <PageDescription
                    title="Categories"
                    page="List"
                    routeTo="category.index"
                    actionLink="category.create"
                />
                <div className=" text-text-gray table-container">
                    <table className="table">
                        <thead>
                            <tr className="tr">
                                <th className="th">Name</th>
                                <th className="th">Description</th>
                                <th className="th">
                                    <span className="sr-only">Edit</span>
                                </th>
                                <th className="th">
                                    <span className="sr-only">Delete</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {category.data.map((item, index) => (
                                <tr className="tr" key={index}>
                                    <td className="td">{item.name}</td>
                                    <td className="td">
                                        {item.description.substring(0, 70) +
                                            "..."}
                                    </td>

                                    <td className="td text-right">
                                        <Link
                                            href={route(
                                                "category.show",
                                                item.id
                                            )}
                                            className="text-secondary"
                                        >
                                            <HiEye className="text-[20px]" />
                                        </Link>
                                    </td>
                                    <td className="td text-right">
                                        <Link
                                            className="text-red-500 cursor-pointer"
                                            href={route(
                                                "category.destroy",
                                                item.id
                                            )}
                                        >
                                            <HiTrash className="text-[20px]" />
                                        </Link>
                                        {/* <Dialog
                                            open={isOpen}
                                            as="div"
                                            className="relative z-10 focus:outline-none"
                                            onClose={close}
                                        >
                                            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                                <div className="flex min-h-full items-center justify-center p-4">
                                                    <DialogPanel
                                                        transition
                                                        className="w-full max-w-md rounded-xl bg-white shadow-xl p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 border"
                                                    >
                                                        <DialogTitle
                                                            as="h3"
                                                            className="text-base/7 font-medium text-black text-[22px]"
                                                        >
                                                            You're about to
                                                            delete category
                                                        </DialogTitle>
                                                        <p className="mt-2 text-sm/6 text-black">
                                                            {item.id}
                                                        </p>
                                                        <div className="mt-4 flex justify-between">
                                                            <Link
                                                                className="inline-flex items-center gap-2 rounded-md bg-red-500  py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:opacity-90 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                                                                href={route(
                                                                    "category.destroy",
                                                                    item.id
                                                                )}
                                                            >
                                                                Delete
                                                            </Link>
                                                            <Button
                                                                className="inline-flex items-center gap-2 rounded-md  py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner hover:opacity-95 focus:outline-none bg-secondary"
                                                                onClick={close}
                                                            >
                                                                Cancel
                                                            </Button>
                                                        </div>
                                                    </DialogPanel>
                                                </div>
                                            </div>
                                        </Dialog> */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination props={category.meta} />
                </div>
            </div>
        </Layouts>
    );
};
export default Categories;
