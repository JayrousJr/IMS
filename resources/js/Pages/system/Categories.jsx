import TopNav from "@/component/system/TopNav";
import { categories } from "@/constants";
import Layouts from "@/Layouts/Layouts";
import { Head, useForm } from "@inertiajs/react";
import { HiEye, HiMiniPlus, HiPencil, HiTrash } from "react-icons/hi2";
// import { Dialog } from "@headlessui/react";
import { Fragment, useState } from "react";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import TextArea from "@/Components/TextArea";
import Pagination from "@/Components/Pagination";
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    Transition,
} from "@headlessui/react";
import Button from "@/Components/Button";
const Categories = ({ category }) => {
    let [isOpen, setIsOpen] = useState(false);
    let [deleteModal, setDeleteModal] = useState(false);

    const { data, setData, post, get, processing, errors, reset } = useForm({
        name: "",
        description: "",
        id: "",
    });

    function closeModal() {
        setIsOpen(false);
    }
    function openDeleteModal() {
        setDeleteModal(true);
    }
    function closeDeleteModal() {
        setDeleteModal(false);
    }
    function openModal() {
        setIsOpen(true);
    }
    function getFormData(event) {
        event.preventDefault();
        get(route("category.show", 1));
        console.log("I have been reached");
    }
    const submit = (e) => {
        e.preventDefault();
        post(route("category.store", data), {
            onError: () => setIsOpen(true),
            onSuccess: () => {
                reset("name", "description"), setIsOpen(false);
            },
        });
    };
    const deleteCategory = (event, data) => {
        event.preventDefault();
        Inertia.delete(route("category.destroy", data), console.log(data), {
            // onError: () => setIsOpen(true),
            // onSuccess: () => {
            //     reset("name", "description"), setIsOpen(false);
            // },
        });
    };
    return (
        <Layouts name={"Categories"}>
            <Head title="Categories" />
            <div className="mt-3 border-t border-secondary opacity-20" />
            <div className="flex flex-col gap-2 bg-tertiary px-8 py-2 mt-1 rounded-xl w-full">
                <div className="flex justify-end items-center cursor-pointer">
                    <div
                        className="bg-secondary flex justify-end items-center rounded-md text-white  gap-1 px-4 py-2 hover:bg-blue-500 duration-300"
                        onClick={openModal}
                    >
                        <span>New Category</span>
                        <HiMiniPlus />
                    </div>
                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog
                            as="div"
                            className="relative z-10"
                            onClose={closeModal}
                        >
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black/25" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-lg font-medium leading-6 text-gray-900 uppercase text-center"
                                            >
                                                Create new Category
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <form onSubmit={submit}>
                                                    <div>
                                                        <InputLabel
                                                            htmlFor="name"
                                                            value="Name"
                                                            className="!text-black"
                                                        />

                                                        <TextInput
                                                            id="name"
                                                            type="text"
                                                            name="name"
                                                            value={data.name}
                                                            className="mt-1 block w-full dark:bg-white !text-black"
                                                            autoComplete="username"
                                                            isFocused={true}
                                                            onChange={(e) =>
                                                                setData(
                                                                    "name",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />

                                                        <InputError
                                                            message={
                                                                errors.name
                                                            }
                                                            className="mt-2"
                                                        />
                                                    </div>
                                                    <div className="mt-4">
                                                        <InputLabel
                                                            htmlFor="name"
                                                            value="Description"
                                                            className="!text-black"
                                                        />

                                                        <TextArea
                                                            id="description"
                                                            type="text"
                                                            name="description"
                                                            value={
                                                                data.description
                                                            }
                                                            className="mt-1 block w-full dark:bg-white !text-black"
                                                            autoComplete="description"
                                                            isFocused={true}
                                                            onChange={(e) =>
                                                                setData(
                                                                    "description",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />

                                                        <InputError
                                                            message={
                                                                errors.description
                                                            }
                                                            className="mt-2"
                                                        />
                                                    </div>
                                                    <div className="mt-4">
                                                        <Button
                                                            disabled={
                                                                processing
                                                            }
                                                            className=""
                                                        >
                                                            Create me
                                                        </Button>
                                                    </div>
                                                </form>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                    <Dialog
                        open={deleteModal}
                        as="div"
                        className="relative z-10 focus:outline-none"
                        onClose={closeDeleteModal}
                        __demoMode
                    >
                        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4">
                                <DialogPanel
                                    transition
                                    className="w-full max-w-md rounded-xl bg-white shadow-md border border-black/20  p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                                >
                                    <DialogTitle
                                        as="h3"
                                        className="text-[20px]/7 font-medium text-black"
                                    >
                                        Do you want to delete this Category?
                                    </DialogTitle>
                                    <form
                                    // onSubmit={() =>
                                    //     deleteCategory(
                                    //         item.id
                                    //     )
                                    // }
                                    >
                                        <div className="mt-4 flex justify-between">
                                            <input
                                                type="text"
                                                // value={
                                                //     item.id
                                                // }
                                                name="id"
                                                hidden
                                                readOnly
                                            />
                                            <Button className="danger">
                                                Delete
                                            </Button>
                                            <Button
                                                className=""
                                                onClick={closeDeleteModal}
                                            >
                                                Cancel
                                            </Button>
                                        </div>
                                    </form>
                                </DialogPanel>
                            </div>
                        </div>
                    </Dialog>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-800 ">
                        <thead className="text-xs text-gray-900 uppercase bg-gray-300 ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Descriptions
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">View</span>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Delete</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {category.data.map((item, index) => (
                                <tr
                                    className="bg-white border-b hover:bg-gray-50 "
                                    key={index}
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                    >
                                        {index + 1}
                                    </th>
                                    <td className="px-6 py-4">{item.name}</td>
                                    <td className="px-6 py-4">
                                        {item.description}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <a
                                            href="#"
                                            className="font-medium text-secondary "
                                        >
                                            <HiEye className="text-[20px]" />
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <a
                                            href="#"
                                            className="font-medium text-secondary "
                                        >
                                            <HiPencil className="text-[20px]" />
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <form onSubmit={getFormData}>
                                            <input
                                                type="text"
                                                value={item.id}
                                                name="id"
                                                hidden
                                                onChange={(e) =>
                                                    setData(
                                                        "id",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <button className="font-medium text-red-500">
                                                <HiTrash className="text-[20px]" />
                                            </button>
                                        </form>
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
