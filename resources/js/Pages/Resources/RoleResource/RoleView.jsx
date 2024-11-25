import Button from "@/Components/Button";
import CancelButton from "@/Components/CancelButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PageDescription from "@/Components/PageDescription";
import TextInput from "@/Components/TextInput";
import Layouts from "@/Layouts/Layouts";
import { Head, useForm } from "@inertiajs/react";
import React from "react";

const RoleView = ({ role }) => {
    const { data, put, processing, errors, setData } = useForm({
        name: role?.data.name,
        email: role?.data.email,
        phone: role?.data.phone,
        address: role?.data.address,
    });
    function submit(e) {
        e.preventDefault();
        put(route("role.update", role.data.id), data);
    }

    return (
        <Layouts name="Role">
            <Head title="Role" />
            <div className="gap-2 px-8 rounded-xl py-8">
                <PageDescription
                    title="Role View"
                    page="Edit"
                    routeTo="role.index"
                />
                <div className="form-container mt-6 bg-dark-200">
                    <form onSubmit={submit}>
                        <h2 className="text-center heading text-write">
                            View Role
                        </h2>
                        <div className="flex flex-col gap-6">
                            <div>
                                <InputLabel htmlFor="name" value="Name" />
                                <TextInput
                                    type="text"
                                    name="name"
                                    defaultValue={data.name}
                                    autoComplete="name"
                                    isFocused={true}
                                    errors={errors.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="address" value="Address" />
                                <TextInput
                                    type="text"
                                    name="address"
                                    defaultValue={data.address}
                                    autoComplete="address"
                                    isFocused={true}
                                    errors={errors.address}
                                    onChange={(e) =>
                                        setData("address", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.address}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="email" value="Email" />
                                <TextInput
                                    type="text"
                                    name="email"
                                    defaultValue={data.email}
                                    autoComplete="email"
                                    isFocused={true}
                                    errors={errors.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="phone"
                                    value="Phone Number"
                                />
                                <TextInput
                                    type="text"
                                    name="phone"
                                    defaultValue={data.phone}
                                    autoComplete="phone"
                                    isFocused={true}
                                    errors={errors.phone}
                                    onChange={(e) =>
                                        setData("phone", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.phone}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div className="mt-4 flex justify-between">
                            <Button disabled={processing}>
                                Update Category
                            </Button>
                            <CancelButton toRoute="category.index" />
                        </div>
                    </form>
                </div>
            </div>
        </Layouts>
    );
};

export default RoleView;
