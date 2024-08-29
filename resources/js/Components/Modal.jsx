import React from "react";
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    Transition,
} from "@headlessui/react";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import TextArea from "@/Components/TextArea";
export const InputModal = () => {
    return (
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
                        <form>
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
                                                setData("name", e.target.value)
                                            }
                                        />

                                        <InputError
                                            message={errors.name}
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
                                            value={data.description}
                                            className="mt-1 block w-full dark:bg-white !text-black"
                                            autoComplete="description"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "description",
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <InputError
                                            message={errors.description}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <Button
                                            disabled={processing}
                                            className=""
                                        >
                                            Create me
                                        </Button>
                                    </div>
                                    <Button className="danger">Delete</Button>
                                    <Button className="">Cancel</Button>
                                </form>
                            </div>
                        </form>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};

export const ViewModal = () => {
    return <div>Modal</div>;
};
