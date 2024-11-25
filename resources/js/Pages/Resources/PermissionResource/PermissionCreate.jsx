import Button from "@/Components/Button";
import CancelButton from "@/Components/CancelButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PageDescription from "@/Components/PageDescription";
import TextInput from "@/Components/TextInput";
import Layouts from "@/Layouts/Layouts";
import { Head, useForm } from "@inertiajs/react";
import React from "react";

const PermissionCreate = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
    });
    const submit = (e) => {
        e.preventDefault();
        post(route("permission.store", data));
    };
    return (
        <Layouts name="Permission Create">
            <Head title="Permission" />
            <div className="gap-2 px-8 rounded-xl py-8">
                <PageDescription
                    title="Permission"
                    page="List"
                    routeTo="permission.index"
                />
                <div className="form-container mt-6 bg-dark-200">
                    <form onSubmit={submit}>
                        <h2 className="text-center heading text-write">
                            Create New Permission
                        </h2>
                        <div className="flex flex-col gap-6">
                            <div>
                                <InputLabel htmlFor="name" value="Name" />
                                <TextInput
                                    type="text"
                                    name="name"
                                    value={data.name}
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
                        </div>
                        <div className="mt-4 flex justify-between">
                            <Button disabled={processing}>
                                Create permission
                            </Button>
                            <CancelButton toRoute="permission.index" />
                        </div>
                    </form>
                </div>
            </div>
        </Layouts>
    );
};

export default PermissionCreate;
