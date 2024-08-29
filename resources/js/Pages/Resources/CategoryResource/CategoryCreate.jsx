import BreadCrumb from "@/Components/BreadCrumb";
import Button from "@/Components/Button";
import CancelButton from "@/Components/CancelButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PageDescription from "@/Components/PageDescription";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import Layouts from "@/Layouts/Layouts";
import { Head, useForm } from "@inertiajs/react";

const CategoryCreate = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        description: "",
    });
    const submit = (e) => {
        e.preventDefault();
        post(route("category.store", data), {
            onSuccess: () => {
                reset("name", "description");
            },
        });
    };
    return (
        <Layouts name="Category Create">
            <Head title="Categories" />
            <div className="gap-2 px-8 rounded-xl py-8">
                <PageDescription
                    title="Categories"
                    page="List"
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
                                    value={data.description}
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
                                Create Category
                            </Button>
                            <CancelButton toRoute="category.index" />
                        </div>
                    </form>
                </div>
            </div>
        </Layouts>
    );
};

export default CategoryCreate;
