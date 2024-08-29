import Button from "@/Components/Button";
import CancelButton from "@/Components/CancelButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PageDescription from "@/Components/PageDescription";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import Layouts from "@/Layouts/Layouts";
import { Head, useForm } from "@inertiajs/react";
import React from "react";

const CategoryView = ({ category }) => {
    const { data, put, processing, errors, setData } = useForm({
        name: category.data.name,
        description: category.data.description,
    });
    function submit(e) {
        e.preventDefault();
        put(route("category.update", category.data.id), data);
    }

    return (
        <Layouts name="Categories">
            <Head title="Categories" />
            <div className="gap-2 px-8 rounded-xl py-8">
                <PageDescription
                    title="Category View"
                    page="Edit"
                    routeTo="category.index"
                />
                <div className="form-container mt-6 bg-dark-200">
                    <form onSubmit={submit}>
                        <h2 className="text-center heading text-write">
                            Create New Category
                        </h2>
                        <div className="flex flex-col gap-6">
                            <div>
                                <InputLabel htmlFor="name" value="Name" />
                                <TextInput
                                    id="name"
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
                                <InputLabel
                                    htmlFor="description"
                                    value="Description"
                                />
                                <TextArea
                                    id="description"
                                    type="text"
                                    name="description"
                                    rows="7"
                                    defaultValue={data.description}
                                    autoComplete="description"
                                    isFocused={true}
                                    errors={errors.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.description}
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

export default CategoryView;
